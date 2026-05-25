import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const plans = [
  {
    name: "Solo",
    price: "R74.99",
    period: "/month",
    desc: "Your first real business system.",
    items: ["Mobile only", "1 staff member", "Up to 25 products", "Basic stock tracking", "30 days sales history"],
    highlight: false,
  },
  {
    name: "Trader",
    price: "R149.99",
    period: "/mo",
    desc: "For active everyday sellers.",
    items: ["Multi-device support", "3 staff accounts", "Unlimited products", "Recipe management", "90 days sales history"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Business",
    price: "R449.99",
    period: "/mo",
    desc: "For small shops and teams.",
    items: ["Automated inventory tracking", "15 staff accounts", "5 POS terminals", "PDF & CSV exporting", "3 years sales history"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "R999.99",
    period: "/mo",
    desc: "For businesses ready to expand.",
    items: ["Unlimited terminals", "Unlimited staff", "Unlimited sales history", "Priority support", "Multi-location ready"],
    highlight: false,
  },
];

const Pricing = () => (
  <div>
    {/* Hero */}
    <section className="py-24 lg:py-32 bg-white text-center">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div {...fade}>
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Pricing</p>
          <h1 className="text-5xl font-black text-slate-900 md:text-7xl mb-6">
            Simple pricing for real businesses.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ZYLO is being designed to stay affordable for small and growing traders.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Plans */}
    <section className="pb-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-[2rem] p-8 flex flex-col ${
                p.highlight
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200/60 ring-4 ring-indigo-100"
                  : "bg-slate-50 text-slate-900 ring-1 ring-slate-100"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-5 py-1.5 rounded-full font-black text-xs uppercase tracking-wider">
                  {p.badge}
                </div>
              )}
              <h3 className="text-2xl font-black mb-1">{p.name}</h3>
              <p className={`text-sm mb-6 ${p.highlight ? "text-indigo-100" : "text-slate-500"}`}>
                {p.desc}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{p.price}</span>
                {p.period && (
                  <span className={`text-lg ${p.highlight ? "text-indigo-200" : "text-slate-400"}`}>{p.period}</span>
                )}
              </div>
              <ul className="space-y-3.5 flex-1 mb-8">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2
                      size={16}
                      className={p.highlight ? "text-indigo-200 shrink-0" : "text-indigo-500 shrink-0"}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/pilot"
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all active:scale-95 ${
                  p.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Join Waitlist
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p {...fade} className="mt-12 text-center text-slate-500">
          Final pricing will be announced soon. Join the pilot to lock in early access.
        </motion.p>
      </div>
    </section>
  </div>
);

export default Pricing;
