import { useLanguage } from "../langContext";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { language } = useLanguage();
  const secondTitle = language === "en" ? "Accordion Duo" : "דואט אקורדיונים";
  useEffect(() => {
    // Check if we are in the browser environment
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      // Access the window object safely here
      setWindowWidth(window.innerWidth);

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures that the effect runs only once after component mount

  return (
    <section style={windowWidth < 767 ? { height: "calc(100vh - 56px)" } : { height: "100vh" }} className='w-full'>
      <div className='h-1/3'></div>
      <div className='bg-[#0c0c0c] h-1/3 relative'>
        {windowWidth > 1000 ? (
          <img
            className={`mx-auto absolute bottom-0 lg:w-1/2 ${
              language === "en" ? "lg:translate-x-1/2" : "lg:translate-x-[-50%]"
            }`}
            alt='duo image'
            src={"/mainD.webp"}
          />
        ) : (
          <img className='mx-auto absolute bottom-0  w-full' alt='duo image' src={"/main.webp"} />
        )}
      </div>
      <div className='h-1/3 flex flex-col justify-around items-center p-5  text-[#0c0c0c]'>
        <p className='text-2xl'>{secondTitle}</p>
        <h1 className='text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest'>New Horizon</h1>
        <a href={"#about"}>
          <ChevronDown size={48} />
        </a>
      </div>
    </section>
  );
};
export default Hero;
