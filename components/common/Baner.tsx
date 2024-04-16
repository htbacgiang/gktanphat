'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '../app/globals.css';

import banner from '../../public/social-banner.jpg' 
import banner1 from '../../public/baner-ke-sieu-thi.jpg' 
import banner2 from '../../public/baner-gia-ke-sieu-thi.jpg' 

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='mt-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image src={banner} alt='baner giá kệ siêu thị'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner1} alt='baner giá kệ siêu thị'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={banner} alt='baner giá kệ siêu thị'/>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
