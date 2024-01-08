import { FormEvent, useRef } from "react";
import contact from "../assets/contact.json";
import { useLanguage } from "../langContext";
import toast from "react-hot-toast";

const inputStyle = "border-2 border-[#0c0c0c] py-1 px-3 outline-[#0c0c0c]";
const Contact = () => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) {
      toast(contact[language].error, { position: "bottom-center" });
      return;
    }
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        if (form) {
          form.reset();
        }
        toast(contact[language].success, { position: "bottom-center" });
      })
      .catch((error) => {
        console.log(error);
        toast(contact[language].error, { position: "bottom-center" });
      });
  };
  return (
    <section id='videos' className='bg-white text-[#0c0c0c] w-full mx-auto'>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col py-20'>
        <h1 className='text-2xl font-medium mb-5'>{contact[language].title}</h1>
        <p className='mb-5'>{contact[language].p}</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          name='contact'
          className='flex flex-col w-3/4 lg:w-2/5 mx-auto gap-5'>
          {/*this is for netlify bot to detect the form */}
          <input type='hidden' name='form-name' value='contact' />
          <input required name='name' placeholder={contact[language].name} className={inputStyle} type='text' />
          <input name='email' placeholder={contact[language].email} className={inputStyle} type='email' />
          <input name='phone' placeholder={contact[language].phone} className={inputStyle} type='text' />
          <textarea name='message' required placeholder={contact[language].message} className={inputStyle} />
          <button
            className='w-full
            bg-[#0c0c0c] text-white py-1'
            type='submit'>
            {contact[language].send}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
