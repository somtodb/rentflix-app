import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron.jsx';

import './About.css';

class About extends Component {
	render() {
		return (
			<div>
				
				<Jumbotron title="About Us" subtitle="Services" />
				<div className="container">
					<p>
						Rentflix is a film rental and movie production company established in 1999. We rent films based on demand and also studio and production equipments. After witnessing a large consumption of movies by viewers at cinemas, we decided to add a modern twist in the way viewers consume content. 
					</p>
					<p>
						By Introducing the pay as you go rental plan on the internet in 2005, viewers now have a new means of watching the latest releases of Hollywood Movies online.
					</p>
				</div>
				
			</div>
		);
	}
}

export default About;