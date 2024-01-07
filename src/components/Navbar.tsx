import links from "../assets/menu-links.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../langContext";
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavClass = isOpen ? "translate-x-0" : "translate-x-full";
  const { language } = useLanguage();

  return (
    <div className='sticky top-0 bg-white z-50'>
      <div>
        <Menu onClick={() => setIsOpen(!isOpen)} className='xl:hidden absolute top-3 mx-5' size={32} />
        <LangSwitcher className='absolute top-4 mx-5 xl:hidden' />
      </div>
      <div
        id='desktop-nav'
        className='hidden xl:flex max-w-screen-lg mx-auto  flex-row justify-between items-center w-full text-lg h-[60px] '>
        {links.map((link) => (
          <a className='hover:underline' href={link.url} key={link.url}>
            {language === "en" ? link.name : link.hename}
          </a>
        ))}
        <LangSwitcher />
      </div>
      <div id='mobile-nav' className='xl:hidden w-full h-[60px] '>
        <div
          className={`z-9999 overflow-hidden bg-white transition-transform duration-300 xl:hidden h-screen gap-5 py-24 absolute flex flex-col w-full items-center ${mobileNavClass}`}
          id='side-menu'>
          <X className='absolute top-0 left-0' onClick={() => setIsOpen(false)} size={48} strokeWidth={1} />
          {links.map((link) => (
            <a onClick={() => setIsOpen(!isOpen)} className='hover:underline' href={link.url} key={link.url}>
              {language === "en" ? link.name : link.hename}
            </a>
          ))}
          <LangSwitcher />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
