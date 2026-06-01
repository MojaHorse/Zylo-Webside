import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";

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
                <li><a href="#data-we-collect" className="hover:text-indigo-600 transition-colors">2. Data We Collect</a></li>
                <li><a href="#how-we-use-data" className="hover:text-indigo-600 transition-colors">3. How We Use Data</a></li>
                <li><a href="#data-sharing" className="hover:text-indigo-600 transition-colors">4. Data Sharing & Security</a></li>
                <li><a href="#your-rights" className="hover:text-indigo-600 transition-colors">5. Your Rights (POPIA)</a></li>
                <li><a href="#contact-us" className="hover:text-indigo-600 transition-colors">6. Contact Us</a></li>
              </ul>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-3 prose prose-slate max-w-none space-y-12">
              {/* Introduction */}
              <motion.div {...fade} id="introduction" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Shield size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">1. Introduction</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Brioo ("we", "us", "our") operates the Brioo mobile point-of-sale (POS) application and the website located at <a href="https://briooapp.com" className="text-indigo-600 hover:underline">briooapp.com</a>. This Privacy Policy describes how we collect, use, process, and protect your information when you use our services.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  By accessing or using our services, you consent to the processing of your information in accordance with this Privacy Policy.
                </p>
              </motion.div>

              {/* Data We Collect */}
              <motion.div {...fade} id="data-we-collect" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">2. Data We Collect</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  A. Merchant Information:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  When you register a Brioo account, we collect business data such as your name, email address, WhatsApp or mobile number, business name, location, sales records, and product inventory details.
                </p>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  B. Customer Information (On behalf of Merchants):
                </p>
                <p className="text-slate-600 leading-relaxed">
                  As part of providing the POS platform, we process transaction data, items purchased, prices, payment types, and any contact information (such as phone numbers or emails) you input to send digital receipts.
                </p>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  C. Technical Information:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We automatically collect device identifiers, operating system info, usage logs, IP addresses, and diagnostic records to keep the platform reliable.
                </p>
              </motion.div>

              {/* How We Use Data */}
              <motion.div {...fade} id="how-we-use-data" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Eye size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">3. How We Use Data</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-semibold">
                  We process data to:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Operate, maintain, and provide the features of the Brioo POS platform.</li>
                  <li>Enable transactions, manage stock, and generate daily/weekly business reports.</li>
                  <li>Send digital receipts via WhatsApp, SMS, or email at the merchant's request.</li>
                  <li>Send service notifications, respond to support inquiries, and prevent fraud.</li>
                  <li>Improve our application functionality, load times, and usability.</li>
                </ul>
              </motion.div>

              {/* Sharing & Security */}
              <motion.div {...fade} id="data-sharing" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Lock size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">4. Data Sharing & Security</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We secure your data using modern industry-standard encryption practices. Our backend infrastructure is hosted on secure cloud servers (including Firebase) using restricted access policies.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We **do not sell** your personal or business data to third parties. We share data only with trusted infrastructure providers (e.g., database hosting, notification gateways) to operate our platform, or when required by law.
                </p>
              </motion.div>

              {/* POPIA / Rights */}
              <motion.div {...fade} id="your-rights" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Shield size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 m-0">5. Your Rights (POPIA Compliance)</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  As a South African business, we comply with the Protection of Personal Information Act (POPIA). You have the right to:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Request access to the personal data we hold about you.</li>
                  <li>Request corrections to any inaccurate, outdated, or incomplete data.</li>
                  <li>Request deletion or destruction of your personal data when it is no longer required for the service.</li>
                  <li>Object to the processing of your personal information for marketing purposes.</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:hello@briooapp.com" className="text-indigo-600 hover:underline">hello@briooapp.com</a>.
                </p>
              </motion.div>

              {/* Contact Us */}
              <motion.div {...fade} id="contact-us" className="scroll-mt-24 rounded-2xl bg-indigo-50 p-6 border border-indigo-100">
                <h3 className="text-xl font-bold text-slate-900 mt-0 mb-3">6. Contact Us</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, our data practices, or need help updating your preferences, please reach out to us:
                </p>
                <ul className="list-none p-0 text-slate-700 font-medium space-y-2">
                  <li>Email: <a href="mailto:hello@briooapp.com" className="text-indigo-600 hover:underline">hello@briooapp.com</a></li>
                  <li>Address: Johannesburg, South Africa</li>
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
