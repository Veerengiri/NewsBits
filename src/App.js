import logo from './logo.svg';
import './App.css';
import News from './components/News'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state={
    progress: 0,
    country: "",
    quiry: "",
    
  }
  apiKey="c79f3a54a0614dc38166adb69c09f99a"
  
  setprogress=(progres)=>{
    this.setState({progress:progres})
  }
  setcountry=(contry)=>{
    this.setState({country: contry});
  }
  setquiry=(q)=>{
    this.setState({quiry:q});
    // console.log("set quiry is called")
  }
  componentDidMount(){
    this.setquiry("");
  }
  render() {
    // console.log(this.state.quiry+" main")
    console.clear();
    return (
      <BrowserRouter >
        <div className='bg-dark' >
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Navbar setcountry={this.setcountry} setquiry={this.setquiry} />
          <Routes>
            {/* // business entertainment general health science sports technology */}
            <Route path='/' element={<News apiKey={this.apiKey}  country={this.state.country} setProgress={this.setprogress}  key="general" />} />
            <Route path='technology' element={<News apiKey={this.apiKey}  country={this.state.country} setProgress={this.setprogress} key="tech" catagory="technology" />} > </Route>
            <Route path='business' element={<News apiKey={this.apiKey}  country={this.state.country} setProgress={this.setprogress} key="bus" catagory="business" />} ></Route>
            <Route path='sports' element={<News apiKey={this.apiKey}  country={this.state.country} setProgress={this.setprogress} key="sp" catagory="sports" />} ></Route>
            <Route path='science' element={<News apiKey={this.apiKey}  country={this.state.country} setProgress={this.setprogress} key="sc" catagory="science" />} ></Route>
            <Route path='entertainment' element={<News apiKey={this.apiKey}  country={this.state.country} setProgress={this.setprogress} key="en" catagory="entertainment" />} ></Route>
            <Route path='health' element={<News apiKey={this.apiKey}  country={this.state.country} setProgress={this.setprogress} key="hl" catagory="health" />} ></Route>
            <Route path='search' element={<News apiKey={this.apiKey}  quiry={this.state.quiry} country={this.state.country} setProgress={this.setprogress} key={this.state.key} catagory="general" />} ></Route>
            
          </Routes>
          {/* when you render same component than use key to identify it */}
          <footer style={{position: 'fixed',padding: "5px",borderRadius: "5px",bottom: "0px"}} className='text-center bg-black text-light'>Created by Veerengiri Goswami</footer>
        </div>
      </BrowserRouter>
    )
  }
}
News.defaultProps = {
  country: "in",
  pagesize: 6,
  catagory: "general",
  quiry: ""
}
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  catagory: PropTypes.string
}


