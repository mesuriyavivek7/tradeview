import React from 'react'

import './sliderthumbs.css'

import { useState,useEffect } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Images } from '../data';

export default function SliderThumbs() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
      });
    
    const settings = {
        infinite: true,
        centerPadding: "200px",
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 5,
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
      };
    
    const thumbnailSettings = {
        slidesToShow: 6,
        slidesToScroll: 2,
        asNavFor: ".slider-for",
        swipeToSlide: true,
        focusOnSelect: true,
      };

  return (
    <div>
    <div className="content">
      <h1 className="header">Car Gallery</h1>
      <div className="container">
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {Images.map((item) => (
            <div key={item.id} className='myDiv'>
              <img src={item} alt='' className="img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <div className="thumbnail-wrapper">
      <Slider
        {...thumbnailSettings}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
      >
        {Images.map((item) => (
          <div key={item.id}>
            <hr />
            <img src={item} alt='' className="img" />
            <hr />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}
