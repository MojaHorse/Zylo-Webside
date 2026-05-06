import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => (
  <div>
    {/* Hero */}
    <section className="py-24 lg:py-36 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div {...fade}>
          <h1 className="text-5xl font-black md:text-7xl lg:text-8xl mb-8 leading-[1.05]">
            Built for the traders who keep the economy moving.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
            Across South Africa, thousands of traders sell every day from stalls,
            caravans, small shops, markets, streets, homes, and mobile setups. Many of
            these businesses are real, active, and hardworking — but they often operate
            without proper sales records, stock tracking, receipts, or business reports.
          </p>
          <p className="mt-6 text-xl text-slate-300 font-semibold">ZYLO was created to change that.</p>
        </motion.div>
      </div>
    </section>

    {/* About Body */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div {...fade}>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Our platform gives traders a simple way to manage daily selling from a phone.
            It helps them know what they sold, how much they made, what stock is left, and
            how their business is growing over time.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            ZYLO is not here to make trading complicated. It is here to make business
            management easier, clearer, and more accessible.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
        <motion.div {...fade} className="rounded-[2rem] bg-white p-10 ring-1 ring-slate-100 shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Our Mission</p>
          <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
            Put simple, affordable business tools in the hands of everyday traders.
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We help small and informal businesses record their sales, track their money,
            manage stock, and build business records that can support growth, funding
            readiness, and future formalisation.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We believe every trader deserves access to modern tools — not only big shops,
            franchises, and formal businesses.
          </p>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.15 }} className="rounded-[2rem] bg-slate-900 p-10 text-white">
          <p className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-4">Our Vision</p>
          <h2 className="text-3xl font-black leading-tight mb-6">
            Africa's most accessible business platform for everyday traders.
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Helping millions of small businesses move from untracked selling to smarter,
            more visible, and more sustainable trade.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Formalisation */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-16 lg:grid-cols-2 items-center">
        <motion.div {...fade}>
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Formalisation</p>
          <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">
            From informal to growth-ready.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            ZYLO does not force traders to become formal overnight. Instead, we help traders
            build better records step by step.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A trader can start by simply recording daily sales. Over time, those records can
            help them understand their income, manage stock, prepare reports, and become more
            ready for business registration, banking, funding, or growth opportunities.
          </p>
        </motion.div>
        <motion.div {...fade} transition={{ delay: 0.15 }} className="rounded-[2rem] bg-indigo-50 p-10 text-center">
          <TrendingUp size={48} className="mx-auto text-indigo-600 mb-6" />
          <p className="text-lg text-slate-500 line-through mb-3">Selling without records</p>
          <p className="text-sm font-bold text-indigo-600 mb-3">↓</p>
          <p className="text-2xl font-black text-slate-900">Running with confidence.</p>
        </motion.div>
      </div>
    </section>

    {/* Founder Story */}
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div {...fade}>
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Why We Built ZYLO</p>
          <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
            Small traders are real business owners.
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              ZYLO was created from a simple belief: small traders are real business owners,
              even when they do not have formal systems.
            </p>
            <p>
              Many people sell every day, serve customers, manage stock, and support their
              families through trade. But without records, their businesses can remain invisible.
            </p>
            <p>
              We are building a platform that gives traders the tools to record what they sell,
              understand their money, manage their stock, and build a stronger business foundation.
            </p>
            <p className="text-xl font-bold text-slate-900">
              Because every business, no matter how small, deserves tools that help it grow.
            </p>
          </div>
          <Link
            to="/pilot"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-indigo-700 active:scale-95"
          >
            Join the Pilot <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
