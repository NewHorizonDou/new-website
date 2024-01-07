import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useLanguage } from "../langContext";
import reviews from "../assets/reviews.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [swiperInstance] = useState<SwiperClass | null>(null);

  const { language } = useLanguage();

  useEffect(() => {}, [language]);

  const generateKey = () => {
    const key = (Math.random() * 10000).toFixed().toString();
    return key;
  };

  const handlePrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };
  return (
    <section id={"reviews"} className='bg-[#0c0c0c] text-white w-full mx-auto'>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col py-20'>
        <h1 className='text-2xl font-medium py-10'>{reviews[language].title}</h1>
        <div className='flex flex-row items-center z-1' id='swiper-wrapper'>
          <button className={language === "he" ? "order-1" : ""} onClick={handlePrevSlide}>
            <ChevronLeft aria-label='previuos-review' className='reviewsPrevButton' size={60} strokeWidth={1} />
          </button>
          <Swiper
            dir={language === "en" ? "ltr" : "rtl"}
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: ".reviewsPrevButton",
              nextEl: ".reviewsNextButton",
            }}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            className='mx-auto w-full my-10 rtl'
            slidesPerView={1}>
            {reviews[language].reviews.map((review) => (
              <SwiperSlide key={generateKey()}>
                <p className='italic'>&quot;{review}&quot;</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={language === "he" ? "order-[-1]" : ""} onClick={handleNextSlide}>
            <ChevronRight aria-label='next-review' className='reviewsNextButton' size={60} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
