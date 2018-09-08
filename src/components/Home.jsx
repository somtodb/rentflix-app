import React, { Component } from 'react'
import { Container, Row, Col, Media, Form, FormGroup, Input, Button } from 'reactstrap';
import './Home.css';
import Cassette from '../images/react6.jpg';
import Rampage from '../images/rampage.png';
import Crasians from '../images/cra.png';
import Misix from '../images/mi-6.png';

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<Media src={Cassette}/>
					<div className="rentflix-brand">
						<h1>Rentflix</h1>
						<h2>Quality Viewing Experience</h2>
					</div>
					<Button color="danger" className="rent-movie">Rent a Movie</Button>
				</div>
				
				<Container>
			        <Row className="essentials">
			          <Col sm="4">
			          	<Media src={Crasians} />

			          	<p>Crazy Rich Asians</p>
			          </Col>
			          <Col sm="4">
			          	<Media src={Rampage}  />
			          	<p>Summer of Dwayne Johnson</p>
			          </Col>
			          <Col sm="4">
			          	<Media src={Misix}  />
			          	<p>Mission Impossible Franchise</p>
			          </Col> 
			        </Row>
			    </Container>
    
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
							        
							        <Button color="primary">Subscribe Now</Button>
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