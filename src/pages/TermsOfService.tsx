import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, AlertTriangle, UserCheck, ShieldCheck } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const TermsOfService = () => {
  const lastUpdated = "June 1, 2026";

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div {...fade}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-6 text-sm font-bold"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-4xl font-black md:text-6xl mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Please read these terms carefully before accessing or using the Brioo POS platform and web services.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4 items-start">
            {/* Quick Navigation Sidebar */}
            <aside className="lg:col-span-1 lg:sticky lg:top-24 space-y-4 hidden lg:block">
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">Sections</h4>
              <ul className="space-y-2 text-sm text-slate-500 font-semibold">
                <li><a href="#acceptance" className="hover:text-indigo-600 transition-colors">1. Acceptance of Terms</a></li>
                <li><a href="#accounts" className="hover:text-indigo-600 transition-colors">2. Account Registration</a></li>
                <li><a href="#subscriptions" className="hover:text-indigo-600 transition-colors">3. Subscriptions & Fees</a></li>
                <li><a href="#acceptable-use" className="hover:text-indigo-600 transition-colors">4. Acceptable Use</a></li>
                <li><a href="#liability" className="hover:text-indigo-600 transition-colors">5. Limitation of Liability</a></li>
                <li><a href="#governing-law" className="hover:text-indigo-600 transition-colors">6. Governing Law</a></li>
              </ul>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-3 prose prose-slate max-w-none space-y-12">
              {/* Acceptance of Terms */}
              <motion.div {...fade} id="acceptance" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">1. Acceptance of Terms</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  These Terms of Service constitute a binding legal agreement between you ("Merchant", "User", "you") and Brioo ("we", "us", "our"). By registering for, downloading, installing, or using the Brioo mobile application, website, or backend platform, you agree to comply with and be bound by these terms.
                </p>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  If you do not agree to these terms, do not register for or use any Brioo services.
                </p>
              </motion.div>

              {/* Account Registration */}
              <motion.div {...fade} id="accounts" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <UserCheck size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">2. Account Registration</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To use the Brioo POS, you must create a Merchant account. You agree to:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Provide accurate, complete, and current registration information.</li>
                  <li>Keep your credentials (PIN codes, password keys, email verification links) secure.</li>
                  <li>Notify us immediately of any unauthorized access to your account.</li>
                  <li>Accept full responsibility for all activities occurring under your business account.</li>
                </ul>
              </motion.div>

              {/* Subscriptions and Fees */}
              <motion.div {...fade} id="subscriptions" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <ShieldCheck size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">3. Subscriptions & Fees</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  A. Free Pilot Phase:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  During our initial pilot program, access to the platform may be offered free of charge. We reserve the right to modify or terminate this free period at any time with prior notice.
                </p>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  B. Subscription Plans:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Paid tiers (e.g., Solo, Trader, Business, Growth) are billed monthly. All subscription fees are paid in advance and are non-refundable, except as required by local consumer legislation.
                </p>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  C. Fee Adjustments:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to change our subscription rates. Any price updates will be communicated to you at least 30 days before they take effect.
                </p>
              </motion.div>

              {/* Acceptable Use */}
              <motion.div {...fade} id="acceptable-use" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">4. Acceptable Use</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  You agree to use the Brioo POS only for lawful business transactions. You may not:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Use the service to sell, log, or track illegal goods, weapons, or unregulated services.</li>
                  <li>Engage in duplicate billing, card fraud, or other money laundering behaviors.</li>
                  <li>Reverse engineer, copy, or attempt to hack any part of the Brioo mobile POS codebase.</li>
                  <li>Input spam, incorrect addresses, or abusive customer information.</li>
                </ul>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div {...fade} id="liability" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <AlertTriangle size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">5. Limitation of Liability</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Brioo is provided "as is" and "as available". We make no warranties that the service will be entirely error-free, uninterrupted, or that transaction history will never be lost.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  To the maximum extent permitted by law, Brioo will not be liable for any indirect, special, incidental, punitive, or consequential damages (including lost profits, lost sales data, business interruptions, or merchant-customer disputes).
                </p>
              </motion.div>

              {/* Governing Law */}
              <motion.div {...fade} id="governing-law" className="scroll-mt-24 rounded-2xl bg-indigo-50 p-6 border border-indigo-100">
                <h3 className="text-xl font-bold text-slate-900 mt-0 mb-3">6. Governing Law</h3>
                <p className="text-slate-600 leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  If you have questions about these Terms of Service, please write to us at <a href="mailto:hello@briooapp.com" className="text-indigo-600 hover:underline">hello@briooapp.com</a>.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
