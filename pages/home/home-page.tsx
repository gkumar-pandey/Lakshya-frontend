"use client";

import HeroSection from "@/components/hero-section/hero-section";
import Navbar from "@/components/navbar/navbar";
import useTheme from "@/hooks/useTheme";

function HomePage() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
    </>
  );
}

export default HomePage;
