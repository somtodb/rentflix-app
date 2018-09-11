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
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/embed/UUkn-enk2RU">
                    </iframe>
                  </div>
                  
                  <div className="col">
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/embed/xLCn88bfW1o">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/embed/WDkg3h8PCVU">
                    </iframe>
                  </div>
                  
                </div> 
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col">
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/embed/14ZHRBfpeNg">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/embed/coOKvrsmQiI">
                    </iframe>
                  </div>
                  <div className="col">
                    <iframe width="459" height="155px"
                    src="https://www.youtube.com/embed/XiHiW4N7-bo">
                    </iframe>
                  </div>
                </div> 
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    );
  }
}

export default Carousel;