import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, ShieldCheck, Zap, Sparkles } from "lucide-react";

/* ─── ANIMATION PRESETS ─── */
const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { staggerChildren: 0.15 },
};

const About = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-slate-100">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/modern-market.png" 
            alt="African trader" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
          {/* Subtle gradient at the bottom to blend with next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent opacity-90" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm">
              <Sparkles size={14} className="text-indigo-300" />
              Our Story
            </span>
            <h1 className="text-5xl font-extrabold md:text-7xl lg:text-7xl mb-6 leading-[1.08] text-white tracking-tight max-w-5xl mx-auto">
              Built for the traders <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-200">
                who keep the economy moving.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4 font-medium">
              Across South Africa, thousands of traders sell every day from stalls, caravans, small shops, markets, streets, homes, and mobile setups. Many of these businesses are real, active, and hardworking.
            </p>
            <p className="text-lg md:text-xl text-white font-bold max-w-3xl mx-auto">
              BRIOO was created to give them the tools to grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── THE REALITY SECTION ─── */}
      <section className="py-24 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl leading-tight mb-8">
              The Reality of Everyday Trade
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our platform gives traders a simple way to manage daily selling from a phone. It helps them know what they sold, how much they made, what stock is left, and how their business is growing over time.
            </p>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <p className="text-lg text-slate-800 font-semibold italic">
                "BRIOO is not here to make trading complicated. It is here to make business management easier, clearer, and more accessible."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-24 bg-[#fafafa] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 lg:grid-cols-2"
          >
            {/* Mission Card */}
            <motion.div 
              variants={fadeIn}
              className="rounded-3xl bg-white p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 blur-[50px] rounded-full group-hover:bg-indigo-100 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-indigo-600 font-bold mb-4">
                  Put simple, affordable business tools in the hands of everyday traders.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  We help small and informal businesses record their sales, track their money, manage stock, and build business records that can support growth, funding readiness, and future formalisation. We believe every trader deserves access to modern tools.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={fadeIn}
              className="rounded-3xl bg-white p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-200 transition-colors"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-50 blur-[50px] rounded-full group-hover:bg-amber-100 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 text-amber-600">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-lg text-amber-600 font-bold mb-4">
                  Africa's most accessible business platform for everyday traders.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Helping millions of small businesses move from untracked selling to smarter, more visible, and more sustainable trade. Small traders are real business owners, even when they do not have formal systems.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FORMALISATION PATH ─── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-4 py-1.5 text-xs font-bold text-slate-600 shadow-xs mb-6">
                <span>Formalisation</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl leading-tight mb-6">
                From informal to growth-ready.
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  BRIOO does not force traders to become formal overnight. Instead, we help traders build better records step by step.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  A trader can start by simply recording daily sales. Over time, those records can help them understand their income, manage stock, prepare reports, and become more ready for business registration, banking, funding, or growth opportunities.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-indigo-100/40 blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                  <BarChart3 size={24} className="text-slate-400" />
                </div>
                <p className="text-lg text-slate-500 line-through mb-4 font-medium">Selling without records</p>
                
                <div className="my-2">
                  <ArrowRight size={20} className="text-indigo-400 rotate-90" />
                </div>
                
                <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-200 mt-4">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <p className="text-2xl font-extrabold text-slate-900">Running with confidence.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 bg-[#fafafa] border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo-50/50 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Small traders are real business owners.
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
              Every business, no matter how small, deserves tools that help it grow. Start building a stronger business foundation today.
            </p>
            <Link
              to="/pilot"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-200/60 transition-all hover:bg-indigo-700 active:scale-95"
            >
              Join the Pilot <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
