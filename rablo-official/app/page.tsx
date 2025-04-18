import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";
import JoinOption from "./components/JoinOption/JoinOption";
import Accordian from "./components/FAQ/Faq";
import Platform from "./components/Platform/Platform";
import "./globals.css";
export default function Home() {
  return (
    
    <main className="w-[100vw]">
      <MainSection/>
      <Platform/>
      <Accordian/>
      <JoinOption/>
      <Footer/>
      
    </main>
    
   
    
  );
}
