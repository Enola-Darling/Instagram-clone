import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./ModalStories.css"

function ModalStories ({isOpen, togle, Post}) {
    console.log(Post)
    return (
    <div  className={`${isOpen ? "open" : ""} ModalStories`}>
       <div className="ModalStories__Close" onClick={()=> togle()}> x </div>
       <div>
      <Swiper >
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
       </div>
    </div>
    );
}

export default ModalStories;