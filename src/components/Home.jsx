import React, { Component } from 'react'
import { Container, Row, Col, Media } from 'reactstrap';
import Carousel from '../components/Carousel.jsx';
import './Home.css';
import Avengers from '../images/avengers.jpg';
import BlackPanther from '../images/black-panther.png';
import StarWars from '../images/star-wars.jpeg';
import Rampage from '../images/rampage.jpg';

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel />
				
				<Container>
			        <p className="top-rentals">Featured Rentals</p>

			        <Row>
			          <Col sm="2">
			          	<Media object src={Avengers} width="100%"/>
			          </Col>
			          <Col sm="2">
			          	<Media object src={BlackPanther} width="100%" />
			          </Col>
			          <Col sm="2">
			          	<Media object src={StarWars} width="100%" />
			          </Col>
			          <Col sm="2">
			          	<Media object src={Rampage} width="100%" />
			          </Col>
			          <Col sm="2">
			          	<Media object src={Rampage} width="100%" />
			          </Col>
			          <Col sm="2">
			          	<Media object src={Rampage} width="100%" />
			          </Col>
			        </Row>
	      		</Container>	
			</div>
		);
	}
}

export default Home;