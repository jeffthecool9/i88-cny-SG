import React from "react";
import { motion, Variants } from "framer-motion";
import CountdownTimer, { trackEvent } from "./CountdownTimer";

const Hero: React.FC<{ onOpenTutorial: () => void }> = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const handleCtaClick = () => {
    trackEvent("cta_click", { cta_id: "hero_register_main" });
    window.open("https://www.palacehub8.com/LlZEMHit", "_blank");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ===== BACKGROUND (canvas) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/cny-bg.png"
          alt="CNY Background"
          className="w-full h-full object-cover brightness-105 contrast-105"
          draggable={false}
        />
        {/* light readability only */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.10)_60%,rgba(0,0,0,0.16)_100%)]" />
      </div>

      {/* ===== ART-DIRECTED OVERLAY ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-xl px-6 min-h-screen"
      >
        {/* ================= LOGO (TOP SAFE ZONE) ================= */}
        <motion.div
          variants={item}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: "clamp(12px, 2.5vh, 22px)" }}
        >
          <img
            src="/android-chrome-192x192.png"
            alt="i88"
            className="h-12 sm:h-14 w-auto object-contain"
            draggable={false}
          />
        </motion.div>

        {/* ================= TITLE ZONE ================= */}
        <motion.div
          variants={item}
          className="absolute left-1/2 -translate-x-1/2 text-center w-full"
          style={{ top: "clamp(52px, 8.5vh, 82px)" }}
        >
          <h1 className="font-black leading-[0.84] uppercase tracking-tighter flex flex-col items-center">
            <span className="block text-[64px] sm:text-[76px] text-white/95">
              八仙
            </span>
            <span className="laicai-gold-flat text-[64px] sm:text-[76px]">
              来财
            </span>
          </h1>

          <div className="mt-3 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#F9D976]/50" />
            <p className="text-[#fff3d6] font-black text-xs uppercase tracking-[0.45em]">
              8 Immortals Treasure
            </p>
            <div className="h-px w-10 bg-[#F9D976]/50" />
          </div>
        </motion.div>

        {/* ================= COPY (MOVED UP – PRESET A) ================= */}
        <motion.div
          variants={item}
          className="absolute left-1/2 -translate-x-1/2 text-center w-full px-2"
          style={{ top: "clamp(250px, 36vh, 300px)" }}
        >
          <p className="heroGoldCopy text-[14px] sm:text-[16px] leading-relaxed max-w-[520px] mx-auto">
            Play with i88 and get rewarded instantly. Try the demo spin below and
            unlock your welcome reward after registration.
          </p>
        </motion.div>

        {/* ================= BOTTOM BAND (LOCKED) ================= */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-full px-6"
          style={{ bottom: "clamp(12px, 2vh, 24px)" }}
        >
          <div className="mx-auto w-full max-w-xl rounded-[28px] p-4 sm:p-5 dockStrip">
            {/* TIMER */}
            <motion.div variants={item} className="flex justify-center mb-4">
              <CountdownTimer pageVariant="cny_visual_v2" />
            </motion.div>

            {/* CTA – pushed LOW, never touches immortals */}
            <motion.div variants={item} className="flex justify-center">
              <div className="relative w-[96%] sm:w-[86%]">
                <div
                  className="absolute -inset-1 rounded-[2.6rem] blur-xl opacity-30 hover:opacity-45 transition duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg,#F9D976,#E0AA3E,#FAF398,#B88A44)",
                  }}
                />
                <button
                  onClick={handleCtaClick}
                  className="relative w-full py-6 rounded-[2.6rem]
                             font-black text-xl sm:text-2xl uppercase tracking-widest
                             shadow-[0_25px_60px_rgba(0,0,0,0.55)]
                             transition-transform hover:-translate-y-1 active:translate-y-1
                             border-b-8"
                  style={{
                    background:
                      "linear-gradient(180deg,#fff7cc,#FAF398,#F9D976,#E0AA3E,#B88A44)",
                    color: "#7a0606",
                    borderBottomColor: "#7a5a20",
                  }}
                >
                  Pre-Register Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ===== STYLES ===== */}
      <style>{`
        .laicai-gold-flat {
          background: linear-gradient(
            180deg,
            #fff7cc 0%,
            #FAF398 20%,
            #F9D976 45%,
            #E0AA3E 75%,
            #B88A44 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 0 14px rgba(250,217,118,0.35),
            0 0 36px rgba(224,170,62,0.25);
        }

        .heroGoldCopy{
          color: rgba(255,244,214,0.96);
          text-shadow:
            0 2px 18px rgba(0,0,0,0.6),
            0 0 22px rgba(224,170,62,0.14);
        }

        .dockStrip{
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.18) 0%,
            rgba(0,0,0,0.32) 100%
          );
          border: 1px solid rgba(249,242,149,0.14);
          box-shadow:
            0 16px 60px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
