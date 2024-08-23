import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

import Sikkim from '../../assets/Sikkim.jpg';
import Kerala from '../../assets/Kerala.jpg';
import UttarPradesh from '../../assets/UttarPradesh.jpg';
import Rajasthan from '../../assets/Rajasthan.jpeg';
import Odisha from '../../assets/Odisha.jpg';
import Sunderbans from '../../assets/Sunderbans.jpg';
import Kashmir from '../../assets/Kashmir.jpg';

const Slider = () => {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative flex items-center justify-center w-[400px] h-[500px]">
          <img src={Sikkim} alt="Sikkim" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-1/3 " />
          <div className="absolute bottom-18 text-white text-6xl p-4 w-full text-center font-custom ">
            Sikkim
          </div>

        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center w-[400px] h-[500px]">
          <img src={Rajasthan} alt="Rajasthan" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-1/3 " />
          <div className="absolute bottom-18 text-white text-6xl p-4 w-full text-center font-custom">
            Rajasthan
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center w-[400px] h-[500px]">
          <img src={Sunderbans} alt="Sunderbans" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-1/3 " />
          <div className="absolute bottom-18 text-white text-6xl p-4 w-full text-center font-custom">
            Sunderbans
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center w-[400px] h-[500px]">
          <img src={UttarPradesh} alt="Uttar Pradesh" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-1/3 " />
          <div className="absolute bottom-18 text-white text-6xl p-4 w-full text-center font-custom">
            Uttar Pradesh
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center w-[400px] h-[500px]">
          <img src={Kashmir} alt="Kashmir" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-1/3 " />
          <div className="absolute bottom-18 text-white text-6xl p-4 w-full text-center font-custom">
            Kashmir
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center w-[400px] h-[500px]">
          <img src={Odisha} alt="Odisha" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-1/3 " />
          <div className="absolute bottom-18 text-white text-6xl p-4 w-full text-center font-custom">
            Odisha
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center w-[400px] h-[500px]">
          <img src={Kerala} alt="Kerala" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-1/3 " />
          <div className="absolute bottom-18 text-white text-6xl p-4 w-full text-center font-custom">
            Kerala
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
