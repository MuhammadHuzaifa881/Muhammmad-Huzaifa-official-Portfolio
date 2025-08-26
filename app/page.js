"use client"
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
// import { personalData } from "@/utils/data/personal-data";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      {/* <Experience /> */}
      <Skills />
      {/* <Projects /> */}
      {/* <Education /> */}
      {/* <ContactSection /> */}
    </div>
  )
};