import "./App.css";
import { About } from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Shows from "./components/Shows";
import Videos from "./components/Videos";
import { LanguageProvider } from "./langContext";
import "./scrollbar.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className='text-lg flex flex-col items-center justify-between'>
        <Hero />
        <About />
        <Videos />
        <Reviews />
        <Shows />
        <Contact />
        <Footer />
      </main>
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
