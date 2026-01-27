import React from "react";
import { motion } from "framer-motion";

/* ---------------- SLOT WHEEL ---------------- */

const SlotWheel: React.FC = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      {/* glow */}
      <div className="absolute -inset-10 bg-yellow-400/10 blur-[80px] rounded-full pointer-events-none" />

      {/* machine frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-yellow-400/50 bg-gradient-to-b from-[#7a0000] to-[#3a0000] shadow-[0_35px_120px_rgba(0,0,0,0.55)] overflow-hidden">
        {/* header */}
        <div className="px-6 pt-6 pb-4">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-black/40 border border-white/10 px-4 py-2">
            <span className="text-yellow-300 text-[10px] font-black uppercase tracking-[0.35em]">
              Selected Games Only
            </span>
          </div>
        </div>

        {/* reels */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-3">
            {["🧧", "🍊", "💰"].map((emoji, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-black/35 border border-white/10 overflow-hidden h-[120px] md:h-[140px]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-5xl md:text-6xl"
                  animate={{ y: [0, -120, 0] }}
                  transition={{
                    duration: 2.6 + idx * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div>{emoji}</div>
                  <div>⭐</div>
                  <div>7️⃣</div>
                  <div>🍒</div>
                </motion.div>

                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[42px] bg-yellow-400/10 border-y border-yellow-400/30" />
              </div>
            ))}
          </div>

          {/* status */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.8)]" />
              <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.35em]">
                Bonus Ready
              </span>
            </div>

            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 shadow-[0_12px_28px_rgba(0,0,0,0.35)] border-b-4 border-yellow-900/60" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- FREE SPIN SECTION ---------------- */

const FreeSpinSection: React.FC = () => {
  return (
    <section
      id="free-spin"
      className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-[#6b0000] via-[#b30000] to-[#6b0000]"
    >
      {/* background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-yellow-300/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[560px] h-[560px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-yellow-400 text-[#4a0101] px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.35em] shadow-lg">
            BONUS OFFER 🎰
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Deposit <span className="text-yellow-300">RM50</span>, Get
            <br />
            <span
              className="
                bg-[linear-gradient(90deg,#F9F295_0%,#E0AA3E_25%,#FAF398_50%,#B88A44_75%,#F9F295_100%)]
                bg-clip-text text-transparent
                drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              "
            >
              100 Free Spins
            </span>
          </h2>

          <p className="mt-4 text-white/80 font-bold text-sm md:text-base max-w-2xl mx-auto">
            Spins apply to <span className="text-yellow-200">selected slot games</span> only.
            Bonus credited after successful deposit.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* info box */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.35em]">
                  Claim Requirement
                </div>
                <div className="mt-2 text-white text-3xl md:text-4xl font-black">
                  RM50 Deposit
                </div>
              </div>

              <div className="text-right">
                <div className="text-yellow-300 text-[10px] font-black uppercase tracking-[0.35em]">
                  Reward
                </div>
                <div className="mt-2 text-white text-3xl md:text-4xl font-black">
                  100 Spins
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                "Applies to selected slot games only",
                "Bonus credited after deposit is successful",
                "One user = one claim (anti-abuse rule)",
                "Any suspicious activity = bonus voided",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <p className="text-white/85 font-bold text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={() =>
                  document
                    .getElementById("register-section")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
                className="
                  w-full px-10 py-5 rounded-2xl
                  bg-gradient-to-b from-[#fde047] via-[#eab308] to-[#854d0e]
                  text-[#2a0101] font-black uppercase tracking-widest
                  shadow-[0_25px_70px_rgba(0,0,0,0.55)]
                  border-b-8 border-[#4a2a00]
                  active:translate-y-1 active:border-b-0
                "
              >
                Register Now 🧧
              </button>
            </div>
          </motion.div>

          {/* slot wheel */}
          <SlotWheel />
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/35 text-[10px] font-black uppercase tracking-[0.35em]">
            Terms apply • Selected games may change without notice
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeSpinSection;
