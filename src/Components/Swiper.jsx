import sliderImg from '../assets/images/SliderImg.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Virtual } from "swiper/modules";
import "swiper/css/virtual";
import { SwiperBtn } from "./SwiperBtn";
export default function App() {
  return (
    <div>
      <Swiper className='h-full' modules={[Virtual]} loop={true} autoplay={{ delay: 500, disableOnInteraction: false }} spaceBetween={20} slidesPerView={1} virtual>
        <SwiperBtn />
        <SwiperSlide><img className='rounded-xl w-full' src={sliderImg} alt="img" /></SwiperSlide>
        <SwiperSlide><img className='rounded-xl w-full' src={sliderImg} alt="img" /></SwiperSlide>
        <SwiperSlide><img className='rounded-xl w-full' src={sliderImg} alt="img" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

