import React from 'react'
import './certificates.css'
import CER1 from '../../assets/AI-certificate-1.png'
import CER2 from '../../assets/cad-certificate.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id : 1,
    image: CER1,
    title: 'AI Certificate',
    desc: 'React Portfolio Website Tutorial From Scratch - Build & Deploy React JS Portfolio Website'
  },
  {
    id : 2,
    image: CER2,
    title: 'AutoCad Certificate',
    desc: 'React Portfolio Website Tutorial From Scratch - Build & Deploy React JS Portfolio Website'
  }
]

function Certificates() {
  return (
    <section id='certificates'>
      <h5>Review from clients</h5>
        <h2>Certificates</h2>
        <Swiper 
        className="container certificates__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
          {
            data.map(({id ,image, title, desc}) =>(
              <SwiperSlide className="certificate" key={id}>
                <div className="certificate__image">
                  <img src={image} alt={title} />
                </div>
                <h5 className='certificate__name'>{title}</h5>
                <small className='certificate__description'>{desc}</small>
              </SwiperSlide>
            ))
          }
          
        </Swiper>
    </section>
  )
}

export default Certificates