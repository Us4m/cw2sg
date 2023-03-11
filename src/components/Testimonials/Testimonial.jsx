import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpeg";
import profilePic2 from "../../img/profile2.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      name:"Usama Hammad",
      review:
        "An experienced Graphic Designer and Web Developer bringing more than 4 year’s of experience applying technical and creative abilities to diverse customer projects. Having great Communication skills Highly effective at collaborating with artistic project, production and administrative leadership to complete tasks according to schedule goals.",
    },
    {
      img: profilePic2,
      name:"Dawer Iqbal",
      review:
        "An experienced Content Writer and SEO master bringing more than 4 year’s of experience in Content Writing, as well as SEO. Currently an Admin (CTO) at ThePantherTech.com and Co-CEO at WhatGamingGear.com. His specialty is writing SEO Optimized Web Content for Tech and Gaming Niche.",
    },
   
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span></span>
        <span> CW2SG </span>
        <span>Team Members:</span>
        

      </div>
      
      <Swiper
        // install Swiper modules
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <div className="name"><b>{client.name}</b></div>
                <div className="detail"> {client.review}</div>
              </div>
            </SwiperSlide>
          );
        })}
        
      </Swiper>
     
    </div>
    
  );
};

export default Testimonial;
