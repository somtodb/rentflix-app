import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron.jsx';
import Form from '../components/Form.jsx';

import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div>
				
				<Jumbotron title="Contact Us" subtitle="Customer care" />
				<div className="container">
					<Form /> 
					
				</div>
				
			</div>
		);
	}
}

export default Contact;