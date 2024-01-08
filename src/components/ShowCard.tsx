"use client";
import { useLanguage } from "../langContext";
type show = {
  title: string;
  location: string;
  date: string;
  time: string;
  link?: string;
};

export const ShowCard = ({ show }: { show: show }) => {
  const { language } = useLanguage();
  let buttonText;
  let noLinkButtonText;
  if (language === "en") {
    buttonText = "Buy Tickets";
    noLinkButtonText = "Private Event";
  } else {
    buttonText = "לרכישת כרטיסים";
    noLinkButtonText = "אירוע פרטי";
  }
  return (
    <div>
      <h2 className='font-medium mb-5'>{show.title}</h2>
      <p>
        {show.time} , {show.date}
      </p>
      <button
        disabled={show.link ? false : true}
        className={`text-sm text-white w-full max-w-[125px] py-2 my-5 ${
          !show.link ? "bg-[#0c0c0c65]" : "bg-[#0c0c0c]"
        }`}>
        {show.link ? <a href={show.link}>{buttonText} </a> : noLinkButtonText}
      </button>
    </div>
  );
};
