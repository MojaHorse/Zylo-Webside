import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Eye, UserCheck, Share2, Database, Lock, Globe, Layers, AlertCircle, HelpCircle } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              At Brioo, we are committed to protecting the privacy of our merchants, their staff, and their customers. Learn how we handle your data.
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
                <li><a href="#introduction" className="hover:text-indigo-600 transition-colors">1. Introduction</a></li>
                <li><a href="#information-we-collect" className="hover:text-indigo-600 transition-colors">2. Information We Collect</a></li>
                <li><a href="#how-we-use" className="hover:text-indigo-600 transition-colors">3. How We Use Information</a></li>
                <li><a href="#data-ownership" className="hover:text-indigo-600 transition-colors">4. Data Ownership & Roles</a></li>
                <li><a href="#data-sharing" className="hover:text-indigo-600 transition-colors">5. Data Sharing</a></li>
                <li><a href="#data-retention" className="hover:text-indigo-600 transition-colors">6. Data Retention</a></li>
                <li><a href="#data-security" className="hover:text-indigo-600 transition-colors">7. Data Security</a></li>
                <li><a href="#your-rights" className="hover:text-indigo-600 transition-colors">8. Your Rights</a></li>
                <li><a href="#international-transfers" className="hover:text-indigo-600 transition-colors">9. International Transfers</a></li>
                <li><a href="#third-party" className="hover:text-indigo-600 transition-colors">10. Third-Party Services</a></li>
                <li><a href="#changes" className="hover:text-indigo-600 transition-colors">11. Changes to This Policy</a></li>
                <li><a href="#contact" className="hover:text-indigo-600 transition-colors">12. Contact</a></li>
              </ul>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-3 prose prose-slate max-w-none space-y-12">
              
              {/* 1. Introduction */}
              <motion.div {...fade} id="introduction" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Shield size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">1. Introduction</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Brioo (“we”, “our”, or “us”) provides a multi-tenant point-of-sale and business management platform that enables merchants to manage sales, inventory, customers, and business operations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This Privacy Policy explains how we collect, use, store, and protect personal information when you use Brioo.
                </p>
              </motion.div>

              {/* 2. Information We Collect */}
              <motion.div {...fade} id="information-we-collect" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">2. Information We Collect</h2>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2.1 Account Information</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Business name</li>
                  <li>Login credentials</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2.2 Business Data (Merchant Data)</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>Products and inventory</li>
                  <li>Sales transactions</li>
                  <li>Pricing and tax settings</li>
                  <li>Customer records created by merchants</li>
                  <li>Employee/shift data (if enabled)</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2.3 Payment Information</h3>
                <p className="text-slate-600 leading-relaxed">
                  We do not store full payment card details.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Payments are processed by third-party providers such as Stripe or Yoco. We may store:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>Transaction ID</li>
                  <li>Payment status</li>
                  <li>Amount</li>
                  <li>Timestamp</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2.4 Device & Usage Data</h3>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>IP address</li>
                  <li>Browser/device type</li>
                  <li>App usage logs</li>
                  <li>Crash/error logs</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2.5 Cookies & Tracking</h3>
                <p className="text-slate-600 leading-relaxed">We use cookies to:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>Maintain sessions</li>
                  <li>Improve performance</li>
                  <li>Analyze usage patterns</li>
                </ul>
              </motion.div>

              {/* 3. How We Use Information */}
              <motion.div {...fade} id="how-we-use" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Eye size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">3. How We Use Information</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-semibold">We use collected data to:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>operate and maintain the platform</li>
                  <li>process transactions</li>
                  <li>provide analytics and reporting</li>
                  <li>improve system performance</li>
                  <li>detect fraud and abuse</li>
                  <li>provide customer support</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4 font-bold">
                  We do NOT sell personal data.
                </p>
              </motion.div>

              {/* 4. Data Ownership & Roles */}
              <motion.div {...fade} id="data-ownership" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <UserCheck size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">4. Data Ownership & Roles</h2>
                </div>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Merchants own their business data (customers, sales, inventory).</li>
                  <li>Brioo acts as a data processor for merchant data.</li>
                  <li>Brioo acts as a data controller for account and platform usage data.</li>
                </ul>
              </motion.div>

              {/* 5. Data Sharing */}
              <motion.div {...fade} id="data-sharing" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Share2 size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">5. Data Sharing</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">We may share data with:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>payment processors (Stripe, Yoco, etc.)</li>
                  <li>cloud hosting providers</li>
                  <li>analytics tools</li>
                  <li>support and communication services</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  All third parties are required to protect data appropriately.
                </p>
              </motion.div>

              {/* 6. Data Retention */}
              <motion.div {...fade} id="data-retention" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Database size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">6. Data Retention</h2>
                </div>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li><strong>Active accounts:</strong> data retained while account is active</li>
                  <li><strong>Deleted accounts:</strong> data retained for up to 90 days for backup recovery</li>
                  <li><strong>Logs:</strong> retained up to 12 months for security and debugging</li>
                </ul>
              </motion.div>

              {/* 7. Data Security */}
              <motion.div {...fade} id="data-security" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Lock size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">7. Data Security</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We implement reasonable security measures including encryption, access controls, and secure infrastructure practices. However, no system is 100% secure.
                </p>
              </motion.div>

              {/* 8. Your Rights */}
              <motion.div {...fade} id="your-rights" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Shield size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">8. Your Rights</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">Depending on your location, you may:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>access your data</li>
                  <li>request correction</li>
                  <li>request deletion</li>
                  <li>export your data</li>
                </ul>
              </motion.div>

              {/* 9. International Transfers */}
              <motion.div {...fade} id="international-transfers" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Globe size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">9. International Transfers</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Your data may be processed in servers outside your country. We ensure appropriate safeguards are in place.
                </p>
              </motion.div>

              {/* 10. Third-Party Services */}
              <motion.div {...fade} id="third-party" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Layers size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">10. Third-Party Services</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">Brioo integrates with external services such as:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li>payment providers</li>
                  <li>hosting providers</li>
                  <li>analytics tools</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  We are not responsible for their independent privacy practices.
                </p>
              </motion.div>

              {/* 11. Changes to This Policy */}
              <motion.div {...fade} id="changes" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <AlertCircle size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">11. Changes to This Policy</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We may update this policy periodically. Continued use of Brioo means you accept the updated version.
                </p>
              </motion.div>

              {/* 12. Contact */}
              <motion.div {...fade} id="contact" className="scroll-mt-24 rounded-2xl bg-indigo-50 p-6 border border-indigo-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <HelpCircle size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">12. Contact</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  For privacy-related inquiries:
                </p>
                <ul className="list-none p-0 text-slate-700 font-medium space-y-2">
                  <li>Email: <a href="mailto:hello@briooapp.com" className="text-indigo-600 hover:underline">hello@briooapp.com</a></li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
