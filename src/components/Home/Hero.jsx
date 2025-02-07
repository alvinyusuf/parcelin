import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';
import hero4 from '../../assets/images/hero4.png';
import hero5 from '../../assets/images/hero5.png';
import hero6 from '../../assets/images/hero6.png';
import hero7 from '../../assets/images/hero7.png';
import hero8 from '../../assets/images/hero8.png';
import hero9 from '../../assets/images/hero9.png';
import hero10 from '../../assets/images/hero10.png';

function Hero() {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-screen object-cover md:object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
