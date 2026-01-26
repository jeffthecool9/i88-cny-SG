import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Mechanics from "./components/Mechanics";
import PreEventSection from "./components/PreEventSection";
import HowToJoin from "./components/HowToJoin";
import FooterCTA from "./components/FooterCTA";
import MiniGame from "./components/MiniGame";
import DivineFortuneBox from "./components/DivineFortuneBox";
import TutorialModal from "./components/TutorialModal";
import FooterCTA from "./components/FooterCTA";

const App: React.FC = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [tickets, setTickets] = useState(3);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    try {
      const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
      if (!hasSeenTutorial) setIsTutorialOpen(true);
    } catch {}

    const handleScroll = () => setShowFloatingButton(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlayNow = () => setIsGameOpen(true);
  const handleOpenTutorial = () => setIsTutorialOpen(true);

  const closeTutorial = () => {
    setIsTutorialOpen(false);
    try {
      localStorage.setItem("hasSeenTutorial", "true");
    } catch {}
  };

  const useTicket = () => setTickets((prev) => Math.max(0, prev - 1));

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen bg-[#000814] relative">
      {/* Floating CTA Button */}
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] w-full px-6 max-w-md pointer-events-none transition-all duration-500 ease-in-out ${
          showFloatingButton && !isGameOpen && !isTutorialOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-90"
        }`}
      >
        <div className="pointer-events-auto flex flex-col gap-3">
          <button
            onClick={handlePlayNow}
            className="
              w-full py-6
              bg-gradient-to-b from-[#38bdf8] via-[#0ea5e9] to-[#0369a1]
              text-white
              font-black rounded-3xl
              shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.35)]
              border-b-6 border-[#075985]
              active:translate-y-1 active:border-b-0
              transition-all text-2xl relative overflow-hidden group
            "
          >
            {tickets > 0 ? "Play Demo 🧧" : "GET MORE TICKETS 🧧"}
            <span className="block text-[11px] uppercase font-black tracking-[0.2em] opacity-80 mt-1">
              Tickets Left: {tickets}
            </span>
          </button>
