import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron.jsx';
import Carousel from '../components/Carousel.jsx';
import { Row, Col, Card, Button, CardTitle, Media } from 'reactstrap';

import './Movies.css';

class Movies extends Component {
	render() {
		return (
			<div>
				
				<Jumbotron title="Movies" subtitle="Get started now" />
				<div className="container">
					<h2>Film Genres</h2>
					<p>
						Access to a whole package of adventure, blockbuster, sci-fi and action movies in HD and lots more.
					</p>
					<Row>
						<Col>
							<Card body>
								<Media object src={require("../images/avengers.jpg")} width="100%"></Media>
					          <CardTitle>sci-fi</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
						<Col>
							<Card body>
								<Media object src={require("../images/mi6-fallout.jpg")} width="100%"></Media>
					          <CardTitle>blockbuster</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
						<Col>
							<Card body>
								<Media object src={require("../images/12-strong.jpg")} width="100%"></Media>
					          <CardTitle>action</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
						<Col>
							<Card body>
								<Media object src={require("../images/lotp.jpg")} width="100%"></Media>
					          <CardTitle>comedy</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card body>
								<Media object src={require("../images/first-man.jpeg")} width="100%"></Media>
					          <CardTitle>drama</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
						<Col>
							<Card body>
								<Media object src={require("../images/jumanji.jpg")} width="100%"></Media>
					          <CardTitle>adventure</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
						<Col>
							<Card body>
								<Media object src={require("../images/a-star-is-born.png")} width="100%"></Media>
					          <CardTitle>romance</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
						<Col>
							<Card body>
								<Media object src={require("../images/ti-2.jpeg")} width="100%"></Media>
					          <CardTitle>animation</CardTitle>
					          <Button>Rent Movie</Button>
					        </Card>
						</Col>
					</Row>
				</div>
				
			</div>
		);
	}
}

export default Movies;