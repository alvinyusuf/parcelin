import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 bg-opacity-50 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 bg-opacity-50 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 5l-7 7 7 7"
        />
      </svg>
    </div>
  );
}

function Hero() {
  const images = [
    hero1, hero2, hero3, hero4, hero5, 
    hero6, hero7, hero8, hero9, hero10
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    nextArrow: <NextArrow />, // Use custom NextArrow
    prevArrow: <PrevArrow />, // Use custom PrevArrow
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Slider {...settings} className="w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-screen object-cover md:object-fill" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
