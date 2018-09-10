import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  render() {
    return (
          <div id="myCarousel" className="carousel slide">
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col">
                    <iframe width="460" height="155px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/watch?v=xLCn88bfW1o">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/watch?v=XiHiW4N7-bo">
                    </iframe>
                  </div>
                  
                </div> 
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col">
                    <iframe width="450" height="155px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="450" height="155px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="450" height="155px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                </div> 
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col">
                    <iframe width="450" height="155px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="450" height="155px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="450" height="155px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                </div> 
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    );
  }
}

export default Carousel;