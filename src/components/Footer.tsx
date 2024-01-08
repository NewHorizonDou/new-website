import { Facebook, Instagram, Youtube } from "lucide-react";
import footer from "../assets/footer.json";
import { useLanguage } from "../langContext";

export const Footer = () => {
  const { language } = useLanguage();
  return (
    <section className='bg-[#0c0c0c] text-white w-full mx-auto'>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col py-20 gap-3'>
        <p>NewHorizonDou@gmail.com</p>
        <p>{footer[language].ilan}</p>
        <p>{footer[language].jacky}</p>
        <div className='flex flex-row items-center justify-center gap-3 mt-5'>
          <a aria-label='facebook' href={"https://www.facebook.com/NewHorizonDuo"}>
            <Facebook size={32} strokeWidth={1} absoluteStrokeWidth />
          </a>
          <a aria-label='youtube' href={"https://www.youtube.com/@newhorizonduo"}>
            <Youtube size={32} strokeWidth={1} absoluteStrokeWidth />
          </a>
          <a aria-label='instagram' href={"https://www.instagram.com/accordion.duo/"}>
            <Instagram size={32} strokeWidth={1} absoluteStrokeWidth />
          </a>
        </div>
        <p className='text-sm mt-10'>אתר זה נגיש לבעלי מוגבליות בעזרת ״נגיש לי״</p>
      </div>
    </section>
  );
};
