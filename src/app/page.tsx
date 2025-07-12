import Image from "next/image";
import Navbar from "../../components/Navbar";
import LandingPage from "../../components/Landing";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}
