
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import bannerArry from './data/banner.json';

import 'swiper/css';

export default () => {
          
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1.5}
      centeredSlides={true}
      loop={true}
      style={{marginTop: '50px'}}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      breakpoints={{
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 2.5,
            spaceBetween: 30
        }
      }}
          
    >
        {
            bannerArry.map((v, i) => (<SwiperSlide key={i}
                className='!flex justify-center bg-cover items-center rounded-[30px] !h-[calc(100vh-100px)]'
                style={{
                    backgroundImage: `url(${v.imgurl})`,
                }}>
                <h2 className='text-[60px]'>{v.title}</h2>
            </SwiperSlide> ))
        }


    </Swiper>
  );
};