import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";

export default function Home() {
    return (
      <>
        <Navbar/>
        <HeroSection />
        <MySkills />
        <AboutMe />
      </>
    );
  }