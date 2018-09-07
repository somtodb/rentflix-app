import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import RentflixIcon from '../images/favicon1.png';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
				  <Link className="navbar-brand" to="/"><img src={RentflixIcon} alt="R-Icon" />Rentflix</Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					  <ul className="navbar-nav mr-auto">
					    <li className="nav-item active">
					      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
					    </li>
					    <li className="nav-item">
					      <Link className="nav-link" to="/movies">Movies</Link>
					    </li>
					    <li className="nav-item">
					      <Link className="nav-link" to="/about">About</Link>
						</li>
					    <li className="nav-item">
					      <Link className="nav-link" to="/contact">Contact Us</Link>
						</li>
					  </ul>
					  	<form className="form-inline">
						   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						   <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;