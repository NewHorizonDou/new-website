import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import YouTube from "react-youtube";

import { VideoItem } from "./VideoItem";

import videos from "../assets/videos.json";
import { useState } from "react";
import { useLanguage } from "../langContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Video } from "./VideoItem";
interface VideosProps {}

const Videos: React.FC<VideosProps> = () => {
  const { language } = useLanguage();
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [currentVideo, SetCurrentVideo] = useState<Video>(videos.videos[0]);

  const ChangeCurrentVideo = (video: Video) => {
    SetCurrentVideo(video);
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
    <section id='videos' className='bg-white text-[#0c0c0c] w-full mx-auto'>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col py-20'>
        <h1 className='text-2xl font-medium my-10'>{language === "en" ? videos.title : videos.he_title}</h1>
        <div id='player-wrapper' className='w-3/4 mx-auto'>
          <YouTube
            videoId={currentVideo.id}
            opts={{
              width: "100%",
              playerVars: {
                autoplay: 0,
                controls: 1,
              },
            }}
          />
          <p className='py-5'>{currentVideo.name}</p>
        </div>

        <div className='flex flex-row items-center z-1' id='swiper-wrapper'>
          <button className={language === "he" ? "order-1" : ""} onClick={handlePrevSlide}>
            <ChevronLeft aria-label='previuos-video' className='prevButton' size={60} strokeWidth={1} />
          </button>
          <Swiper
            dir={language === "en" ? "ltr" : "rtl"}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".prevButton",
              nextEl: ".nextButton",
            }}
            loop={true}
            className='mx-auto w-full rtl'
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            onSwiper={() => setSwiperInstance}>
            {videos.videos.map((video) => (
              <SwiperSlide key={video.id}>
                <VideoItem changeCurrentVideo={ChangeCurrentVideo} video={video} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={language === "he" ? "order-[-1]" : ""} onClick={handleNextSlide}>
            <ChevronRight aria-label='next-video' className='nextButton' size={60} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
