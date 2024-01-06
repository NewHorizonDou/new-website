"use client";

import about from "../assets/about.json";
import { useLanguage } from "../langContext";

export const About = () => {
  const { language } = useLanguage();

  return (
    <section id='about' className='bg-[#0c0c0c] text-white w-full'>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col py-20'>
        <h1 className='text-2xl font-medium'>{about[language].title}</h1>
        <p className='py-10 font-medium'>{about[language].duo}</p>
        <p className='px-3 mx-auto'>{about[language].bio}</p>

        {/* jacky */}
        <div className='py-10 grid grid-cols-1 md:grid-cols-2'>
          <img className={` w-3/4 mx-auto`} alt='jacky sevilya' src={"/jack.png"} width={1861} height={2982} />
          <div className='h-full flex flex-col justify-center px-3'>
            <h2 className='font-medium py-5'>{about[language].jacky.name}</h2>
            <p className='w-3/4 mx-auto'>{about[language].jacky.bio}</p>
          </div>
        </div>

        {/* ilan */}
        <div className=' py-10 grid grid-cols-1 md:grid-cols-2 px-3'>
          <div className='h-full flex flex-col justify-center order-2 md:order-1'>
            <h2 className='font-medium py-5'>{about[language].ilan.name}</h2>
            <p className='w-3/4 mx-auto'>{about[language].ilan.bio}</p>
          </div>
          <img
            className={`order-1 md:order-2 w-3/4 mx-auto`}
            alt='ilan ziv'
            src={"/ilan.png"}
            width={1861}
            height={2982}
          />
        </div>
      </div>
    </section>
  );
};
