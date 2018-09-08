import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("../images/react6.jpg")} alt="First slide" />
            
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../images/mi-fallout.png")} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../images/black-panther.jpeg")} alt="blackpanther" />
            <div className="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../images/infinity-war.jpg")} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        
      </div> 
    );
  }
}

export default Carousel;