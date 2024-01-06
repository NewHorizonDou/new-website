"use client";

import shows from "../assets/shows.json";
import { useLanguage } from "../langContext";
import { ShowCard } from "./ShowCard";
const Shows = () => {
  const { language } = useLanguage();

  return (
    <section id='shows' className='bg-white text-[#0c0c0c] w-full'>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col py-20'>
        <h1 className='text-2xl font-medium py-10'>{shows[language].title}</h1>
        <div className='gap-5 lg:gap-0 w-full flex flex-col lg:flex-row justify-between items-center'>
          {shows[language].shows.map((show) => (
            <ShowCard key={show.date} show={show} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Shows;
