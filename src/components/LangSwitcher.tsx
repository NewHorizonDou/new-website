import { useLanguage } from "../langContext";

const LangSwitcher = ({ className }: { className?: string }) => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className={`cursor-pointer ${className} ${language === "en" ? "right-0" : "left-0"}`}>
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
