import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import Error from "./Error";
import { Link } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroll-component';
import Notfoun from './Notfoun';
// "publishedAt": "2022-09-07T11:48:00Z",
export class News extends Component {
  
  // https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=0a8da4a898314aa6b59b7f224ec1649f&page=2&pagesize=6&q=gujrat
  constructor() {
    super()
    // console.log("hi i am constructor of class news");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
      stats: "",
      
    }
  }
  
  async componentDidMount() {
    this.props.setProgress(30);
    let url;
    if(this.props.country=="india"){
      url = `https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&country=in&language=en&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}&q=${this.props.quiry}`;
    }
    else{
      url = `https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&language=en&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}&q=${this.props.quiry}`;
    }
    document.title = `NewsBits-${this.props.catagory}`
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(40);
    let parshData = await data.json();
    this.props.setProgress(60);
    this.setState({
      articles: parshData.articles,
      totalResults: parshData.totalResults,
      loading: false,
      stats: parshData.status
    });
    this.props.setProgress(100);
    
  }
  fetchMoreData =async () => {
    this.setState({page:this.state.page+1});
    let url;
    if(this.props.country=="india"){
      url = `https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&country=in&language=en&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}&q=${this.props.quiry}`;
    }
    else{
      url = `https://newsapi.org/v2/top-headlines?category=${this.props.catagory}&language=en&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}&q=${this.props.quiry}`;
    }
    document.title = `NewsBits-${this.props.catagory}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parshData = await data.json();
    this.setState({
      articles:this.state.articles.concat( parshData.articles),
      totalResults: parshData.totalResults,
      loading: false,
      
    });
    
  };
  
  render() {
    return ( (this.state.stats==="error") ? <Error/>:
      <div className='container my-3 bg-dark' style={{ overflow: "hidden" }}>
        <h1 style={{ color: "white" }}>NewsBits-Top {this.props.catagory} Headlines</h1>
        {this.state.loading && <Spinner />}
        {this.state.articles.length!=0?<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
            {this.state.articles.map((e) => { // it is give use all element of this articles
              return <div className="col-md-4" key={e.url}>
                <NewsItems title={e.title} discription={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} />
              </div>
            })}
          </div>
        </InfiniteScroll>:<Notfoun/>}
      </div>
    )
  }
}

export default News
