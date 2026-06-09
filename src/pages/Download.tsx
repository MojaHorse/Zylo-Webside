import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Tablet, 
  ArrowRight, 
  Download as DownloadIcon, 
  Clock, 
  CheckCircle2,
  ShieldCheck,
  Zap,
  Loader2
} from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const DeviceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  delay?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
    
    <div className="mt-8 flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-xl w-fit">
      <Clock size={16} /> Coming Soon
    </div>
  </motion.div>
);

const Download = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: serverTimestamp(),
        source: "download_page",
        platform: navigator.userAgent
      });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 to-white pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-violet-100/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div {...fade}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-5 py-2 text-sm font-bold text-indigo-600 shadow-sm">
              <DownloadIcon size={15} /> Get the BRIOO App
            </p>

            <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-7xl">
              Brioo is coming to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                all your devices.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              From phone to tablet, we're building the most accessible POS for everyday traders. 
              Be the first to know when we launch on your favorite platform.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#waitlist" className="transition-transform hover:scale-105 active:scale-95">
                <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-14 w-auto animate-fade-in" />
              </a>
              <a href="#waitlist" className="transition-transform hover:scale-105 active:scale-95">
                <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-14 w-auto animate-fade-in" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <DeviceCard 
              icon={Smartphone} 
              title="iOS (iPhone)" 
              description="A powerful POS that fits in your pocket. Optimized for every iPhone model."
              delay={0.1}
            />
            <DeviceCard 
              icon={Tablet} 
              title="iPadOS (iPad)" 
              description="Expand your view. The perfect counter-top solution for busy shops and stalls."
              delay={0.2}
            />
            <DeviceCard 
              icon={Smartphone} 
              title="Android Mobile" 
              description="Lightweight, fast, and reliable. Built for the most popular Android devices."
              delay={0.3}
            />
            <DeviceCard 
              icon={Tablet} 
              title="Android Tablet" 
              description="Maximum performance for larger screens. Professional tools for growing traders."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-3xl rounded-[3rem] bg-indigo-600 p-10 md:p-20 text-center text-white shadow-2xl shadow-indigo-200">
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            
            <motion.div {...fade}>
              <h2 className="text-3xl font-black md:text-5xl mb-6 leading-tight">
                Join the Waitlist
              </h2>
              <p className="text-lg text-indigo-100 mb-10 max-w-xl mx-auto">
                We're putting the finishing touches on the BRIOO apps. Enter your email to get early access and exclusive launch updates.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative mx-auto max-w-md">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border-0 bg-white/10 px-6 py-4 text-white placeholder:text-indigo-200 outline-none ring-2 ring-white/20 focus:bg-white focus:text-slate-900 focus:placeholder:text-slate-400 transition-all text-lg"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-black text-indigo-600 shadow-xl transition-all hover:scale-[1.02] active:scale-95 shrink-0 disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {loading ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        <>Join <ArrowRight size={20} /></>
                      )}
                    </button>
                  </div>
                  {error && <p className="mt-4 text-sm text-red-200 font-medium">{error}</p>}
                  <p className="mt-4 text-xs text-indigo-200 flex items-center justify-center gap-1.5">
                    <ShieldCheck size={14} /> Your data is safe. No spam, ever.
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl bg-white/10 p-8 backdrop-blur-md border border-white/20"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-indigo-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                  <p className="text-indigo-100">We'll notify you as soon as BRIOO is ready for your device.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Use the App? */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Native Performance</h3>
              <p className="text-slate-500 leading-relaxed">Built from the ground up for speed. Handle busy rush hours with zero lag.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Works Offline</h3>
              <p className="text-slate-500 leading-relaxed">Record sales even without an internet connection. Data syncs when you're back online.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Biometric Security</h3>
              <p className="text-slate-500 leading-relaxed">Protect your business data with FaceID, Fingerprint, or Secure PIN entry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
