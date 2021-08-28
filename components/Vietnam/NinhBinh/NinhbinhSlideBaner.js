import React, { Component } from "react";
import Slider from "react-slick";
import nb1 from "public/img/anytrails/ninh-binh-bike-tour-01.jpg";
import nb2 from "public/img/anytrails/ninh-binh-bike-tour-02.jpg";
import nb3 from "public/img/anytrails/ninh-binh-bike-tour-03.jpg";
import nb4 from "public/img/anytrails/ninh-binh-bike-tour-04.jpg";
import nb5 from "public/img/anytrails/ninh-binh-bike-tour-05.jpg";
import nb6 from "public/img/anytrails/ninh-binh-bike-tour-06.jpg";

export default class Responsive extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            
            // dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
       
        <Slider {...settings}>
        <div>
          <img src={nb1} />
          </div>
          <div>
          <img src={nb2} />
          </div>
          <div>
          <img src={nb3} />
          </div>
          <div>
          <img src={nb4} />
          </div>
          <div>
          <img src={nb5} />
          </div>
          <div>
          <img src={nb6} />
          </div>
          
        </Slider>
      </div>
    );
  }
}
        