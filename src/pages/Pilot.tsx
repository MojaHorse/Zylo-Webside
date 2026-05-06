import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React from "react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const pilotPerks = [
  "Test ZYLO for free",
  "Record real sales",
  "Add products",
  "Track daily totals",
  "Share feedback",
  "Help us improve the app",
];

const Pilot = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    sell: "",
    location: ""
  });
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "pilot_applications"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting pilot application:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-36 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fade}>
            <p className="text-sm font-black uppercase tracking-widest text-indigo-200 mb-4">Early Access</p>
            <h1 className="text-5xl font-black md:text-7xl mb-6">Join the ZYLO Trader Pilot.</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              We are currently looking for early traders to test ZYLO and help shape the
              future of the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-16 lg:grid-cols-2 items-start">
          <motion.div {...fade}>
            <h2 className="text-3xl font-black text-slate-900 mb-6">What you get during the pilot</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The pilot is for small traders, food sellers, market stalls, spaza shops,
              mobile sellers, and informal businesses who want a simpler way to record
              sales and track business activity.
            </p>
            <ul className="space-y-4 mb-10">
              {pilotPerks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span className="text-slate-700 font-medium text-lg">{perk}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Who can join?</h3>
              <p className="text-slate-600 leading-relaxed">
                You can join if you sell products or services and want to manage your
                business more clearly from your phone. Join the pilot and help build a
                POS made for traders like you.
              </p>
            </div>
          </motion.div>

          <motion.div {...fade} transition={{ delay: 0.15 }}>
            <div className="rounded-[2rem] bg-slate-50 p-8 ring-1 ring-slate-100 min-h-[500px] flex flex-col justify-center">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Apply for the Pilot</h2>
                  <p className="text-slate-500 mb-8">Fill in your details and we'll be in touch.</p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Thabo Mokoena"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email or WhatsApp number</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 072 123 4567"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">What do you sell?</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Food, clothing, electronics…"
                        value={formData.sell}
                        onChange={(e) => setFormData({ ...formData, sell: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Where do you trade? (optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Johannesburg, Pretoria, Soweto…"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition"
                      />
                    </div>
                    {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-bold text-white text-lg transition-all hover:bg-indigo-700 active:scale-[0.98] shadow-lg shadow-indigo-200/50 disabled:opacity-70"
                    >
                      {loading ? (
                        <Loader2 size={24} className="animate-spin" />
                      ) : (
                        <>Apply for the Pilot <ArrowRight size={18} /></>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Application Received!</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Thank you for applying for the ZYLO Trader Pilot. We'll review your
                    details and reach out to you soon via {formData.contact.includes("@") ? "email" : "WhatsApp"}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pilot;
