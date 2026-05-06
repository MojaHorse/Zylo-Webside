import { motion } from "framer-motion";
import {
  ShoppingCart, Package, BarChart3, Receipt, Calculator,
  Users, Building2, FileText, DollarSign, Smartphone,
  Zap, Wifi, Heart, Star, Shield, Headphones,
} from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const coreFeatures = [
  { icon: ShoppingCart, title: "Simple POS", text: "Record sales quickly from your phone. Add products to a cart, choose a payment method, and complete the sale with ease." },
  { icon: Package, title: "Product Management", text: "Add, edit, and organise the items or services you sell. Keep your product list simple and easy to use." },
  { icon: BarChart3, title: "Stock Tracking", text: "Know what stock is available, what is running low, and what needs to be restocked." },
  { icon: DollarSign, title: "Daily Sales Records", text: "See how much your business made today, this week, or this month." },
  { icon: Receipt, title: "Receipts", text: "Send simple digital receipts to customers without needing a printer." },
  { icon: Calculator, title: "Cash-Up Support", text: "Help business owners and staff compare expected cash with actual cash at the end of the day." },
  { icon: FileText, title: "Business Reports", text: "Understand your best-selling products, daily totals, and overall business performance." },
  { icon: Users, title: "Staff Access", text: "Allow staff members to use the POS with controlled permissions." },
  { icon: Building2, title: "Multi-Business Ready", text: "ZYLO is built as a SaaS platform, meaning different businesses can use the system securely while keeping their data separate." },
];

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

const Features = () => (
  <div>
    {/* Hero */}
    <section className="bg-indigo-600 py-24 lg:py-32 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div {...fade}>
          <p className="text-sm font-black uppercase tracking-widest text-indigo-200 mb-4">Core Features</p>
          <h1 className="text-5xl font-black md:text-7xl mb-6">
            Everything you need to start selling smarter.
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            ZYLO is a simple mobile POS that helps traders record sales, manage products,
            track stock, and view daily business performance.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[1.5rem] bg-slate-50 p-8 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <f.icon size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Different */}
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fade} className="max-w-3xl mb-14">
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Why ZYLO Is Different</p>
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl leading-tight">
            Built for everyday traders first.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Many POS systems are built for formal shops, restaurants, or large businesses.
            We are building for the trader who uses a phone, sells daily, works with cash,
            has limited time, and needs a system that is simple enough to use immediately.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-100"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <d.icon size={20} />
              </div>
              <span className="font-bold text-slate-800">{d.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 text-center">
          {[
            { icon: Shield, title: "Secure & Private", text: "Your data is encrypted and kept safe at all times." },
            { icon: Smartphone, title: "Android & iOS", text: "Run ZYLO on any modern smartphone or tablet." },
            { icon: Headphones, title: "Trader Support", text: "We're here to help via WhatsApp, email, or call." },
          ].map((item) => (
            <div key={item.title}>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 shadow-sm text-indigo-600 ring-1 ring-slate-100">
                <item.icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Features;
