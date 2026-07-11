import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Pilot", path: "/pilot" },
  { name: "Download", path: "/download" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="group">
          <img
            src="/Logo_Horizontal.svg"
            alt="BRIOO"
            className="h-[46px] w-auto transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[0.9rem] font-semibold transition-colors duration-200 hover:text-indigo-600 ${
                location.pathname === link.path
                  ? "text-indigo-600"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/pilot"
            className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200/60 transition-all duration-200 hover:bg-indigo-700 hover:shadow-indigo-300/60 active:scale-95"
          >
            Join the Pilot
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-slate-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                    location.pathname === link.path
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/pilot"
                className="mt-3 block w-full rounded-2xl bg-indigo-600 py-4 text-center font-bold text-white shadow-lg shadow-indigo-200/50"
              >
                Join the Pilot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/Logo_Horizontal.svg"
                alt="BRIOO"
                className="h-[36px] w-auto"
              />
            </div>
            <p className="text-[0.95rem] font-semibold text-slate-800 mb-2">
              The simple POS for everyday traders.
            </p>
            <p className="text-slate-500 leading-relaxed text-sm">
              Helping small businesses sell, track, and grow — from street trade
              to smart trade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-3 text-[0.9rem]">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/pilot"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Pilot
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-[0.9rem]">
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Get Started
            </h4>
            <p className="text-slate-500 text-sm mb-5 leading-relaxed">
              Join the trader pilot and help us build the future of simple
              business tools.
            </p>
            <Link
              to="/pilot"
              className="inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-indigo-700 active:scale-95"
            >
              Apply for the Pilot
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 BRIOO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built in South Africa 🇿🇦</span>
            <span className="flex items-center gap-1.5 font-medium text-indigo-500">
              <Shield size={13} /> Secure & Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className={isHome ? "" : "pt-[72px]"}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
