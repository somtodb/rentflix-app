import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
		      <div className="container">
		        <span className="text-muted">&#169; Rentflix {new Date().getFullYear()}</span>
		        <span>FAQ</span>
		        <span className="social">
			        <i className="fab fa-youtube"></i>
			        <i className="fab fa-twitter"></i>
			        <i className="fab fa-instagram"></i>
			        <i className="fab fa-snapchat-ghost"></i>
		        </span>
		      </div>
		    </footer>
		);
	}
}

export default Footer;