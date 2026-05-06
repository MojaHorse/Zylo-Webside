import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => (
  <div>
    {/* Hero */}
    <section className="py-24 lg:py-32 bg-white text-center">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div {...fade}>
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">Contact</p>
          <h1 className="text-5xl font-black text-slate-900 md:text-7xl mb-6">
            Let's build smarter trade together.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Are you a trader, small business owner, advisor, partner, or early supporter?
            We would love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Form + Info */}
    <section className="pb-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-16 lg:grid-cols-5 items-start">
        {/* Form */}
        <motion.div {...fade} className="lg:col-span-3">
          <div className="rounded-[2rem] bg-slate-50 p-8 lg:p-10 ring-1 ring-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Send us a message</h2>
            <p className="text-slate-500 mb-8">We'll get back to you within 24 hours.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-bold text-white text-lg transition-all hover:bg-indigo-700 active:scale-[0.98] shadow-lg shadow-indigo-200/50"
              >
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div {...fade} transition={{ delay: 0.15 }} className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-slate-900">Email Us</h3>
            </div>
            <p className="text-slate-600">hello@zylo.co.za</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-bold text-slate-900">WhatsApp</h3>
            </div>
            <p className="text-slate-600">+27 XX XXX XXXX</p>
          </div>

          <div className="rounded-2xl bg-indigo-600 p-7 text-white">
            <h3 className="font-black text-lg mb-3">Want to test ZYLO?</h3>
            <p className="text-indigo-100 mb-5 text-sm leading-relaxed">
              Join the trader pilot to get early access and help shape the platform.
            </p>
            <Link
              to="/pilot"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-600 transition-all hover:bg-indigo-50 active:scale-95"
            >
              Apply for the Pilot <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;
