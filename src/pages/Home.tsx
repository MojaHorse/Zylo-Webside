import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingCart, Package, BarChart3, Receipt,
  Calculator, Users, Building2, FileText, Smartphone,
  Zap, DollarSign, Wifi, Heart, TrendingUp, CheckCircle2,
  AlertTriangle, Star
} from "lucide-react";
import iPhoneMockup from "../assets/iPhone.svg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 to-white pt-12 pb-24 lg:pt-20 lg:pb-36">
    <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-violet-100/30 blur-3xl pointer-events-none" />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 items-center text-left">
        <motion.div {...fade}>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-5 py-2 text-sm font-bold text-indigo-600 shadow-sm">
            <Smartphone size={15} /> Phone-first POS platform
          </p>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
            From street trade{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              to smart trade.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl">
            BRIOO is a simple POS platform for everyday traders and small businesses.
            Sell faster, track your stock, record daily income, manage your business,
            and build a reliable trading history — all from your phone.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/pilot"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200/60 transition-all hover:bg-indigo-700 hover:scale-[1.02] active:scale-95"
            >
              Join the Trader Pilot <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:border-indigo-300 hover:text-indigo-600"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative justify-center lg:justify-end hidden lg:flex"
        >
          <div className="relative w-full max-w-[480px] drop-shadow-[0_25px_50px_rgba(79,70,229,0.18)]">
            <img 
              src={iPhoneMockup} 
              alt="BRIOO POS App Mockup" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── SHORT EXPLANATION ─── */
const Explainer = () => (
  <section className="py-20 lg:py-28 bg-white">
    <motion.div {...fade} className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
        BRIOO helps everyday traders sell, track, and grow.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
        Whether you run a food stall, caravan kitchen, spaza shop, clothing stand,
        salon, car wash, or small store — BRIOO gives you simple tools to record sales,
        manage products, track stock, and understand how your business is doing.
      </p>
      <p className="mt-4 text-lg font-semibold text-slate-800">
        No complicated systems. No expensive hardware. Just a simple POS made for real traders.
      </p>
    </motion.div>
  </section>
);

/* ─── PROBLEM ─── */
const problems = [
  "Know daily sales accurately",
  "Track stock properly",
  "Send receipts to customers",
  "Separate business money from personal money",
  "Understand best-selling products",
  "Prove income or business activity",
  "Prepare for growth, funding, or registration",
];

const Problem = () => (
  <section className="py-20 lg:py-28 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        <motion.div {...fade}>
          <p className="text-sm font-black uppercase tracking-widest text-amber-600 mb-4">The Problem</p>
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl leading-tight">
            Small traders deserve better tools.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Many small and informal traders still manage their businesses using memory,
            paper notebooks, WhatsApp messages, or rough daily estimates. That makes it
            difficult to:
          </p>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.15 }}>
          <div className="space-y-4">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <AlertTriangle size={14} />
                </div>
                <p className="text-slate-700 font-medium">{p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg font-semibold text-indigo-600">
            BRIOO helps traders start building a proper business record — one sale at a time.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── SOLUTION ─── */
const Solution = () => (
  <section className="py-20 lg:py-28 bg-white">
    <motion.div {...fade} className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
      <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">The Solution</p>
      <h2 className="text-4xl font-black text-slate-900 md:text-5xl leading-tight">
        A POS made for real-world trading.
      </h2>
      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        BRIOO is a simple mobile POS that helps traders record sales, manage products,
        track stock, and view daily business performance. It is designed for people
        who need speed, simplicity, and affordability — not complicated software that
        requires training, expensive equipment, or a full office setup.
      </p>
      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        With BRIOO, a trader can open the app, make a sale, record payment, update stock,
        and view daily totals <span className="font-bold text-slate-900">in seconds</span>.
      </p>
    </motion.div>
  </section>
);

/* ─── WHO IT'S FOR ─── */
const traders = [
  "Street vendors", "Food stalls", "Kota sellers", "Caravan food businesses",
  "Market traders", "Spaza shops", "Small retailers", "Clothing sellers",
  "Salons & barbers", "Car washes", "Mobile traders", "Home-based sellers", "Growing SMEs",
];

const WhoItsFor = () => (
  <section className="py-20 lg:py-28 bg-indigo-600 text-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div {...fade} className="text-center mb-14">
        <p className="text-sm font-black uppercase tracking-widest text-indigo-200 mb-4">Made for all types of traders</p>
        <h2 className="text-4xl font-black md:text-5xl">Who BRIOO is for.</h2>
        <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          Whether you sell one product or manage a full product list, BRIOO helps you stay organised.
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-3">
        {traders.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-bold backdrop-blur-sm"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FEATURES OVERVIEW ─── */
const features = [
  { icon: ShoppingCart, title: "Simple POS", text: "Record sales quickly from your phone. Add products to a cart, choose a payment method, and complete the sale with ease." },
  { icon: Package, title: "Product Management", text: "Add, edit, and organise the items or services you sell. Keep your product list simple and easy to use." },
  { icon: BarChart3, title: "Stock Tracking", text: "Know what stock is available, what is running low, and what needs to be restocked." },
  { icon: DollarSign, title: "Daily Sales Records", text: "See how much your business made today, this week, or this month." },
  { icon: Receipt, title: "Receipts", text: "Send simple digital receipts to customers without needing a printer." },
  { icon: Calculator, title: "Cash-Up Support", text: "Compare expected cash with actual cash at the end of the day." },
  { icon: FileText, title: "Business Reports", text: "Understand your best-selling products, daily totals, and overall business performance." },
  { icon: Users, title: "Staff Access", text: "Allow staff members to use the POS with controlled permissions." },
  { icon: Building2, title: "Multi-Business Ready", text: "Different businesses can use the system securely while keeping their data separate." },
];

const FeaturesOverview = () => (
  <section className="py-20 lg:py-28 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div {...fade} className="text-center mb-16">
        <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Core Features</p>
        <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
          Everything you need to start selling smarter.
        </h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <f.icon size={24} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed text-[0.95rem]">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── WHY DIFFERENT ─── */
const differentiators = [
  { icon: Smartphone, label: "Phone-first selling" },
  { icon: Zap, label: "Simple setup" },
  { icon: DollarSign, label: "Affordable pricing" },
  { icon: Star, label: "Cash-friendly workflows" },
  { icon: Wifi, label: "Low-data usage" },
  { icon: Receipt, label: "Digital receipts" },
  { icon: BarChart3, label: "Trader-focused reports" },
  { icon: Heart, label: "Easy onboarding" },
  { icon: Building2, label: "Informal & semi-formal support" },
];

const WhyDifferent = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div {...fade} className="max-w-3xl mb-14">
        <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Why BRIOO Is Different</p>
        <h2 className="text-4xl font-black text-slate-900 md:text-5xl leading-tight">
          Built for everyday traders first.
        </h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Many POS systems are built for formal shops, restaurants, or large businesses.
          BRIOO is different. We are building for the trader who uses a phone, sells daily,
          works with cash, has limited time, and needs a system that is simple enough to use immediately.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {differentiators.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <d.icon size={20} />
            </div>
            <span className="font-bold text-slate-800 text-[0.95rem]">{d.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PILOT CTA ─── */
const PilotCTA = () => (
  <section className="py-20 lg:py-28 px-6">
    <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-indigo-600 p-10 md:p-20 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10">
        <h2 className="text-3xl font-black md:text-5xl mb-6 leading-tight">
          Join the BRIOO Trader Pilot.
        </h2>
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-10">
          We are currently looking for early traders to test BRIOO and help shape the
          future of the platform. Test it for free, record real sales, and share your feedback.
        </p>
        <Link
          to="/pilot"
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-black text-indigo-600 shadow-xl transition-all hover:scale-[1.02] active:scale-95"
        >
          Apply for the Pilot <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── PRICING PREVIEW ─── */
const PricingPreview = () => (
  <section className="py-20 lg:py-28 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div {...fade} className="text-center mb-14">
        <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Pricing</p>
        <h2 className="text-4xl font-black text-slate-900 md:text-5xl">Simple pricing for real businesses.</h2>
        <p className="mt-4 text-lg text-slate-600">BRIOO is being designed to stay affordable for small and growing traders.</p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: "Solo", price: "R74.99", period: "/mo", desc: "Your first real business system.", items: ["Mobile only", "1 staff member", "Up to 25 products", "Basic stock tracking", "30 days sales history"] },
          { name: "Trader", price: "R149.99", period: "/mo", desc: "For active everyday sellers.", items: ["Multi-device support", "3 staff accounts", "Unlimited products", "Recipe management", "90 days sales history"], highlight: true },
          { name: "Business", price: "R449.99", period: "/mo", desc: "For small shops and teams.", items: ["Automated inventory tracking", "15 staff accounts", "5 POS terminals", "PDF & CSV exporting", "3 years sales history"] },
          { name: "Growth", price: "R999.99", period: "/mo", desc: "For businesses ready to expand.", items: ["Unlimited terminals", "Unlimited staff", "Unlimited sales history", "Priority support", "Multi-location ready"] },
        ].map((p) => (
          <div key={p.name} className={`rounded-[1.5rem] p-7 flex flex-col ${p.highlight ? "bg-indigo-600 text-white ring-4 ring-indigo-200 shadow-xl" : "bg-white text-slate-900 ring-1 ring-slate-100 shadow-sm"}`}>
            <h3 className="text-xl font-black mb-1">{p.name}</h3>
            <p className={`text-sm mb-4 ${p.highlight ? "text-indigo-100" : "text-slate-500"}`}>{p.desc}</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-black">{p.price}</span>
              <span className={`text-sm ${p.highlight ? "text-indigo-200" : "text-slate-450 text-slate-400"}`}>{p.period}</span>
            </div>
            <ul className="space-y-3 flex-1 mb-6">
              {p.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                  <CheckCircle2 size={15} className={p.highlight ? "text-indigo-200 shrink-0" : "text-indigo-500 shrink-0"} /> {item}
                </li>
              ))}
            </ul>
            <Link
              to="/pilot"
              className={`block w-full py-3.5 rounded-xl font-bold text-center transition-all active:scale-95 text-sm ${
                p.highlight
                  ? "bg-white text-indigo-600 hover:bg-indigo-50"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Join Waitlist
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/pricing" className="text-indigo-600 font-bold hover:underline">View full pricing →</Link>
      </div>
    </div>
  </section>
);

/* ─── MISSION ─── */
const MissionSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-16 lg:grid-cols-2 items-center">
      <motion.div {...fade}>
        <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Our Mission</p>
        <h2 className="text-4xl font-black text-slate-900 leading-tight">
          Put simple, affordable business tools in the hands of everyday traders.
        </h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          We help small and informal businesses record their sales, track their money,
          manage stock, and build business records that can support growth, funding readiness,
          and future formalisation.
        </p>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          We believe every trader deserves access to modern tools — not only big shops,
          franchises, and formal businesses.
        </p>
        <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-indigo-600 hover:underline">
          Learn more about us <ArrowRight size={16} />
        </Link>
      </motion.div>
      <motion.div {...fade} transition={{ delay: 0.15 }} className="rounded-[2rem] bg-slate-900 p-10 text-white">
        <p className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-4">Our Vision</p>
        <p className="text-2xl font-black leading-snug">
          To become Africa's most accessible business platform for everyday traders,
          helping millions of small businesses move from untracked selling to smarter,
          more visible, and more sustainable trade.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── BENEFITS / TAGLINE ─── */
const benefits = [
  { icon: TrendingUp, title: "Know your numbers", text: "Stop guessing. See your sales, stock, and daily income clearly." },
  { icon: Zap, title: "Sell faster", text: "Use a simple POS designed for quick everyday trading." },
  { icon: Package, title: "Track stock", text: "Know what is available and what needs to be restocked." },
  { icon: FileText, title: "Build business records", text: "Create a history of sales that can help you understand and grow your business." },
  { icon: Star, title: "Look more professional", text: "Send receipts and manage your business with a modern tool." },
  { icon: Heart, title: "Grow with confidence", text: "Use your records to make better decisions and prepare for future opportunities." },
];

const Benefits = () => (
  <section className="py-20 lg:py-28 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div {...fade} className="text-center mb-16">
        <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Benefits</p>
        <h2 className="text-4xl font-black text-slate-900 md:text-5xl">Why traders use BRIOO.</h2>
      </motion.div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div key={b.title} {...fade} transition={{ delay: i * 0.07 }} className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <b.icon size={26} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">{b.title}</h3>
            <p className="text-slate-500 leading-relaxed">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CONTACT CTA ─── */
const ContactCTA = () => (
  <section className="py-20 lg:py-28 bg-white">
    <motion.div {...fade} className="mx-auto max-w-3xl px-6 text-center">
      <h2 className="text-4xl font-black text-slate-900 md:text-5xl mb-6">
        Let's build smarter trade together.
      </h2>
      <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
        Are you a trader, small business owner, advisor, partner, or early supporter?
        We would love to hear from you.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link to="/contact" className="rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-indigo-700 active:scale-95">
          Contact Us
        </Link>
        <Link to="/pilot" className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-all hover:border-indigo-300">
          Join the Pilot
        </Link>
      </div>
    </motion.div>
  </section>
);

/* ─── PAGE ─── */
const Home = () => (
  <div>
    <Hero />
    <Explainer />
    <Problem />
    <Solution />
    <WhoItsFor />
    <FeaturesOverview />
    <WhyDifferent />
    <Benefits />
    <PilotCTA />
    <PricingPreview />
    <MissionSection />
    <ContactCTA />
  </div>
);

export default Home;
