"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const CarouselSlider = () => {
   
    return(
        <div className='relative mt-1'>
         <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
            <div>
                <img  loading="lazy" src="https://m.media-amazon.com/images/I/71LVUg6kH8L._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/71vwS1m0GCL._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/610MEKlP11L._SX3000_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61QizPeY1lL._SX3000_.jpg" alt="" />
            </div>
         </Carousel>
        </div>
    )
}

export default CarouselSlider;