import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Review() {

  const reviews = [
    { src: "/images/review/review1.png", alt: "Review 1" },
    { src: "/images/review/review2.png", alt: "Review 2" },
    { src: "/images/review/review3.png", alt: "Review 3" },
    { src: "/images/review/review4.png", alt: "Review 4" },
    { src: "/images/review/review5.png", alt: "Review 5" },
  ];

  return (
    <div className="grid place-items-center h-full bg-[#FEF7EE] rounded-xl overflow-hidden">
      <div className="text-center space-y-3 md:space-y-6 my-10 md:my-36 lg:my-10">
        <h1 className="text-3xl">Apa Kata Mereka</h1>
        <p>
          Yuk, lihat apa kata mereka yang telah memilih Parcelinpack sebagai
          solusi packaging brand mereka!
        </p>
        <div className="flex justify-center">
          <video
            className="rounded-lg w-64 md:w-96 aspect-video"
            controls
            autoPlay
          >
            <source src="/videos/testimoni.mp4" type="video/mp4" />
            Browser Anda tidak mendukung tag video.
          </video>
        </div>

        <div className="w-screen relative">
          <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView={3.5}
          spaceBetween={20}
          className="w-full h-full"
        >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className='flex justify-center'>
                <img
                  src={review.src}
                  alt={review.alt}
                  className='rounded-xl'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
