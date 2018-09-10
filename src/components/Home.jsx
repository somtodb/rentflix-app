import React, { Component } from 'react'
import { Container, Row, Col, Media, Form, FormGroup, Input, Button } from 'reactstrap';
import Carousel from '../components/Carousel.jsx';
import './Home.css';
import Cassette from '../images/walt.png';
import Rampage from '../images/rampage.png';
import Crasians from '../images/cra.png';
import Misix from '../images/mi-6.png';

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<Media className="welcome" src={Cassette}/>
					<div className="rentflix-brand">
						<h1>Rentflix</h1>
						<h2>Quality Movie Time</h2>
					</div>
					<Button color="danger" className="rent-movie">Rent a Movie</Button>
				</div>
				
				<Carousel />
				<div className="bg">
					<Container>
				        <Row className="essentials">
						  <h3>Trendy</h3>

				          <Col sm>
				          	<Media src={Crasians} />
				          	<p>Crazy Rich Asians</p>
				          	<Button color="danger">Watch Movie</Button>
				          </Col>
				          <Col sm>
				          	<Media src={Rampage}  />
				          	<p>Rampage</p>
				          	<Button color="danger">Watch Movie</Button>
				          </Col>
				          <Col sm>
				          	<Media src={Misix}  />
				          	<p>MI: Fallout</p>
				          	<Button color="danger">Watch Movie</Button>
				          </Col> 
				        </Row>
				    </Container>
			    </div>
    
			        <div className="subscribe">
			        	<Container>
			        		<Row>
					          <Col sm="6">
					          	<h5>About Us</h5>
								<p>
									Rentflix is an online movie rental company with archives of over a thousand Movies from Hollywood and the rest of the world. Founded in 2005.
								</p>
					          </Col>
			        			
			        			<Col sm="6">
					          	<Form>
						          	<h5>New Releases</h5>
						          	<p>
						          		From time to time, we like to keep our users up to date with upcoming movies, so they don't miss out on their entertainment fun. To get upcoming movies into your mailbox:
						          	</p>
							        <FormGroup>
							          <Input type="email" name="email" id="userEmail" placeholder="Email address" />
							        </FormGroup>
							        
							        <Button color="outline-dark">Subscribe Now</Button>
						    	</Form>
						    	</Col>
						    </Row>
					    </Container>
			        </div>	
			</div>
		);
	}
}

export default Home;