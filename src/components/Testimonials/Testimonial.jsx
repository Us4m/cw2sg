import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpeg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/download.png";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      name:"What People Say About Me",
      review:
        "An exceptional professional with a rare combination of technical expertise and a solutions-focused approach. They excel in designing scalable cloud architectures, developing robust APIs, and implementing innovative AI-powered solutions. Their ability to streamline workflows through DevOps practices and deliver intelligent, cutting-edge systems demonstrates both technical skill and strategic thinking. Committed to quality, creativity, and precision, they consistently go above and beyond to ensure projects are not just completed but exceed expectations.",
    },
   
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span></span>
        <span> Testimonials</span>

        

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
