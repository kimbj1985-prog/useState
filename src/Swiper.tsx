
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default () => {
      const bannerArry = [
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/ea2d4280cdaf8fa7cd5a64d42e0dfd5a.jpg",
      title : "블랙데이 단돈 만원으로",
      button : "시즌이벤트"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/547b35760374d0039a66a824b61d81d5.jpg",
      title : "회원혜택기간",
      button : "혜택보기"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/9cd39a46d7df0122c84a771c339cc079.jpg",
      title : "신상품 세트 출시",
      button : "신상품보기"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/4082e74f25a267403e16c3dbff099490.jpg",
      title : "선물하기 할인상품",
      button : "카카오톡선물하기"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/ea2d4280cdaf8fa7cd5a64d42e0dfd5a.jpg",
      title : "블랙데이 단돈 만원으로",
      button : "시즌이벤트"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/547b35760374d0039a66a824b61d81d5.jpg",
      title : "회원혜택기간",
      button : "혜택보기"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/9cd39a46d7df0122c84a771c339cc079.jpg",
      title : "신상품 세트 출시",
      button : "신상품보기"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/4082e74f25a267403e16c3dbff099490.jpg",
      title : "선물하기 할인상품",
      button : "카카오톡선물하기"
    }
  ]
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
            bannerArry.map((v, i) => (<SwiperSlide key={i} style={{
                height: 'calc(100vh - 100px)',
                backgroundImage: `url(${v.imgurl})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '30px' }}>
                <h2 style={{fontSize : '60px'}}>{v.title}</h2>
            </SwiperSlide> ))
        }


    </Swiper>
  );
};