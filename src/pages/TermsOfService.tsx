import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, UserCheck, ShieldCheck, CreditCard, Layers, CheckCircle2, User, Activity, AlertTriangle, Scale, XCircle, Database, Globe, RefreshCcw, HelpCircle } from "lucide-react";

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
              <ul className="space-y-2 text-sm text-slate-500 font-semibold h-[70vh] overflow-y-auto pr-2 pb-10">
                <li><a href="#agreement-to-terms" className="hover:text-indigo-600 transition-colors">1. Agreement to Terms</a></li>
                <li><a href="#description-of-service" className="hover:text-indigo-600 transition-colors">2. Description of Service</a></li>
                <li><a href="#accounts" className="hover:text-indigo-600 transition-colors">3. Accounts</a></li>
                <li><a href="#subscription-billing" className="hover:text-indigo-600 transition-colors">4. Subscription & Billing</a></li>
                <li><a href="#payments-third-parties" className="hover:text-indigo-600 transition-colors">5. Payments & Third Parties</a></li>
                <li><a href="#merchant-responsibilities" className="hover:text-indigo-600 transition-colors">6. Merchant Responsibilities</a></li>
                <li><a href="#acceptable-use" className="hover:text-indigo-600 transition-colors">7. Acceptable Use</a></li>
                <li><a href="#data-ownership" className="hover:text-indigo-600 transition-colors">8. Data Ownership</a></li>
                <li><a href="#service-availability" className="hover:text-indigo-600 transition-colors">9. Service Availability</a></li>
                <li><a href="#limitation-of-liability" className="hover:text-indigo-600 transition-colors">10. Limitation of Liability</a></li>
                <li><a href="#indemnification" className="hover:text-indigo-600 transition-colors">11. Indemnification</a></li>
                <li><a href="#termination" className="hover:text-indigo-600 transition-colors">12. Termination</a></li>
                <li><a href="#data-after-termination" className="hover:text-indigo-600 transition-colors">13. Data After Termination</a></li>
                <li><a href="#governing-law" className="hover:text-indigo-600 transition-colors">14. Governing Law</a></li>
                <li><a href="#changes-to-terms" className="hover:text-indigo-600 transition-colors">15. Changes to Terms</a></li>
                <li><a href="#contact" className="hover:text-indigo-600 transition-colors">16. Contact</a></li>
              </ul>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-3 prose prose-slate max-w-none space-y-12">
              
              {/* 1. Agreement to Terms */}
              <motion.div {...fade} id="agreement-to-terms" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">1. Agreement to Terms</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  By using Brioo, you agree to these Terms of Service. If you do not agree, you may not use the platform.
                </p>
              </motion.div>

              {/* 2. Description of Service */}
              <motion.div {...fade} id="description-of-service" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Layers size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">2. Description of Service</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">Brioo is a multi-tenant SaaS platform that provides:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>point-of-sale (POS) functionality</li>
                  <li>inventory management</li>
                  <li>sales tracking</li>
                  <li>analytics and reporting</li>
                  <li>customer management tools</li>
                </ul>
              </motion.div>

              {/* 3. Accounts */}
              <motion.div {...fade} id="accounts" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <User size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">3. Accounts</h2>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">3.1 Registration</h3>
                <p className="text-slate-600 leading-relaxed">
                  You must provide accurate information when creating an account.
                </p>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">3.2 Responsibility</h3>
                <p className="text-slate-600 leading-relaxed">You are responsible for maintaining:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>account security</li>
                  <li>password confidentiality</li>
                  <li>all activity under your account</li>
                </ul>
              </motion.div>

              {/* 4. Subscription & Billing */}
              <motion.div {...fade} id="subscription-billing" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <CreditCard size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">4. Subscription & Billing</h2>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">4.1 Plans</h3>
                <p className="text-slate-600 leading-relaxed">
                  Brioo may offer subscription plans (free or paid).
                </p>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">4.2 Billing</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>subscriptions are billed in advance (monthly or yearly)</li>
                  <li>payments are non-refundable unless required by law</li>
                  <li>failure to pay may result in suspension</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">4.3 Price Changes</h3>
                <p className="text-slate-600 leading-relaxed">
                  We may update pricing with prior notice.
                </p>
              </motion.div>

              {/* 5. Payments & Third Parties */}
              <motion.div {...fade} id="payments-third-parties" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <ShieldCheck size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">5. Payments & Third Parties</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Brioo does not process payments directly.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Payments are handled by third-party providers (e.g., Stripe, Yoco). We are not responsible for:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>payment failures</li>
                  <li>chargebacks</li>
                  <li>bank disputes</li>
                  <li>processor downtime</li>
                </ul>
              </motion.div>

              {/* 6. Merchant Responsibilities */}
              <motion.div {...fade} id="merchant-responsibilities" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <UserCheck size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">6. Merchant Responsibilities</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">You agree that you are responsible for:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>accuracy of pricing and inventory</li>
                  <li>legality of goods/services sold</li>
                  <li>compliance with applicable laws</li>
                  <li>handling customer disputes</li>
                </ul>
              </motion.div>

              {/* 7. Acceptable Use */}
              <motion.div {...fade} id="acceptable-use" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">7. Acceptable Use</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">You may not:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>use Brioo for illegal activity</li>
                  <li>attempt to reverse engineer the platform</li>
                  <li>disrupt or overload systems</li>
                  <li>access unauthorized data</li>
                  <li>misuse APIs or integrations</li>
                </ul>
              </motion.div>

              {/* 8. Data Ownership */}
              <motion.div {...fade} id="data-ownership" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Database size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">8. Data Ownership</h2>
                </div>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>You own your business data.</li>
                  <li>Brioo owns the platform, software, and infrastructure.</li>
                  <li>You grant Brioo permission to process your data to operate the service.</li>
                </ul>
              </motion.div>

              {/* 9. Service Availability */}
              <motion.div {...fade} id="service-availability" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Activity size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">9. Service Availability</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We aim for reliable uptime but do not guarantee uninterrupted service. Maintenance or outages may occur.
                </p>
              </motion.div>

              {/* 10. Limitation of Liability */}
              <motion.div {...fade} id="limitation-of-liability" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <AlertTriangle size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">10. Limitation of Liability</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>Brioo is not liable for indirect damages, loss of revenue, or business interruption.</li>
                  <li>Liability is limited to the amount paid by you in the last 12 months.</li>
                </ul>
              </motion.div>

              {/* 11. Indemnification */}
              <motion.div {...fade} id="indemnification" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Scale size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">11. Indemnification</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">You agree to indemnify Brioo against claims arising from:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>your use of the platform</li>
                  <li>your business operations</li>
                  <li>violation of laws or third-party rights</li>
                </ul>
              </motion.div>

              {/* 12. Termination */}
              <motion.div {...fade} id="termination" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <XCircle size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">12. Termination</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">We may suspend or terminate accounts for:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>violation of these terms</li>
                  <li>fraud or abuse</li>
                  <li>non-payment</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  You may stop using Brioo at any time.
                </p>
              </motion.div>

              {/* 13. Data After Termination */}
              <motion.div {...fade} id="data-after-termination" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Database size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">13. Data After Termination</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">After account termination:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>data may be retained for a limited period (up to 90 days)</li>
                  <li>backups may persist for recovery purposes</li>
                </ul>
              </motion.div>

              {/* 14. Governing Law */}
              <motion.div {...fade} id="governing-law" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Globe size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">14. Governing Law</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  These terms are governed by the laws of South Africa unless otherwise required by local regulation.
                </p>
              </motion.div>

              {/* 15. Changes to Terms */}
              <motion.div {...fade} id="changes-to-terms" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <RefreshCcw size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">15. Changes to Terms</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We may update these Terms. Continued use of Brioo means acceptance of updates.
                </p>
              </motion.div>

              {/* 16. Contact */}
              <motion.div {...fade} id="contact" className="scroll-mt-24 rounded-2xl bg-indigo-50 p-6 border border-indigo-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <HelpCircle size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">16. Contact</h2>
                </div>
                <ul className="list-none p-0 text-slate-700 font-medium space-y-2">
                  <li>Support: <a href="mailto:hello@briooapp.com" className="text-indigo-600 hover:underline">hello@briooapp.com</a></li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
