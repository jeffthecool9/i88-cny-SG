import React from "react";
import { motion, Variants } from "framer-motion";
import CountdownTimer, { trackEvent } from "./CountdownTimer";

const Hero: React.FC<{ onOpenTutorial: () => void }> = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
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
      {/* ===== Background image (public/cny-bg.png) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/cny-bg.png"
          alt="CNY Background"
          className="w-full h-full object-cover brightness-105 contrast-105"
          draggable={false}
        />

        {/* ✅ Keep original brightness.
            Only a LIGHT vignette for readability (no heavy black fade). */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      {/* ✅ Proper layout: flex column
          Top content uses space, bottom dock stays LOW and clean */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-xl px-6
                   min-h-screen flex flex-col"
      >
        {/* ===== TOP CONTENT (uses the empty space better) ===== */}
        <div className="pt-10 sm:pt-12 text-center">
          {/* Logo */}
          <motion.div variants={item} className="flex justify-center mb-4">
            <img
              src="/android-chrome-192x192.png"
              alt="i88"
              className="h-20 sm:h-24 w-auto object-contain"
              draggable={false}
            />
          </motion.div>

          {/* Title */}
      <motion.div
  variants={item}
  className="absolute left-1/2 -translate-x-1/2 text-center"
  style={{ top: "clamp(64px, 10vh, 96px)" }}
>


            {/* ✅ Gold-ish headline copy (more character than plain white) */}
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed max-w-[520px] mx-auto heroGoldCopy">
              Play with i88 and get rewarded instantly. Try the demo spin below and
              unlock your welcome reward after registration.
            </p>
          </motion.div>
        </div>

        {/* ===== SPACER (this is what “uses space smartly”) ===== */}
        <div className="flex-1" />

        {/* ===== BOTTOM DOCK (LOWER so it doesn't block the immortals) ===== */}
        <div className="pb-8 sm:pb-10">
          {/* a subtle dock panel to separate from busy artwork (NOT black fade) */}
          <div className="mx-auto w-full flex flex-col items-center">
            {/* Timer */}
            <motion.div variants={item} className="w-full flex justify-center mb-5">
              <CountdownTimer pageVariant="cny_visual_v2" />
            </motion.div>

            {/* CTA (moved DOWN naturally, with breathing space) */}
            <motion.div variants={item} className="w-full flex justify-center">
              <div className="relative w-[94%] sm:w-[86%]">
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

      {/* ===== Styles ===== */}
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
          -webkit-text-stroke: 0;
          text-shadow:
            0 0 14px rgba(250,217,118,0.35),
            0 0 36px rgba(224,170,62,0.25);
          letter-spacing: 0.02em;
        }

        /* ✅ Make the hero paragraph more “premium” + readable without looking plain */
        .heroGoldCopy{
          color: rgba(255, 244, 214, 0.92);
          text-shadow:
            0 2px 16px rgba(0,0,0,0.55),
            0 0 22px rgba(224,170,62,0.10);
        }
      `}</style>
    </section>
  );
};

export default Hero;
