import { useLanguage } from "../langContext";

const LangSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className='cursor-pointer'>
      <span onClick={() => switchLanguage("en")} className={language === "en" ? "font-bold" : ""}>
        English
      </span>
      <span> | </span>
      <span onClick={() => switchLanguage("he")} className={language === "he" ? "font-bold" : ""}>
        עברית
      </span>
    </div>
  );
};
export default LangSwitcher;
