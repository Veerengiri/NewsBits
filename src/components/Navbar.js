import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    setin = () => {
        this.props.setcountry("india");
    }
    setall = () => {
        this.props.setcountry("");
    }
    searchclicked=()=>{
        // console.log(document.getElementById("serchbtn").value); 
        this.props.setquiry(document.getElementById("serchbtn").value);
        
    }
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-black" style={{ overflow: "hidden", position: "sticky", top: "0px", borderBottom: "1px solid white", zIndex: "5" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NewsBits</a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link" >Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="technology" className="nav-link" >Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="business" className="nav-link" >Business</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="sports" className="nav-link">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="science" className="nav-link">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="entertainment" className="nav-link">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="health" className="nav-link">Health</Link>
                            </li>
                            <li className='mx-1 my-2 text-light'>
                                India<input className='btn mx-1' onClick={this.setin} type="radio" name='country' title='india' />
                                All<input className='btn mx-1' onClick={this.setall} type="radio" name='country' title='all' />
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="input-group" style={{ position: "fixed", right: "60px",top:"10px", width: "200px" }}>
                    <input type="search" id='serchbtn' className="form-control rounded bg-dark text-light" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" onClick={this.searchclicked} className="btn btn-outline-primary mx-1"><Link className='nav-link' to="search">search</Link></button>
                </div>
            </nav>
        )
    }
}
