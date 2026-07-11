import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ShoppingCart, Package, BarChart3, CheckCircle2,
  Calculator, Zap, Wifi, ChevronRight, ChevronDown, Store, Plus,
  Sparkles, TrendingUp, WifiOff, MessageSquare,
  BatteryCharging, Shield, Star, Send, AlertCircle,
  Loader2, X, Lock, Grid
} from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db, analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

/* ─── ANIMATION PRESETS ─── */
const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease },
};

/* ═══════════════════════════════════════════════════════════════
   1. HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] bg-grid-pattern min-h-screen flex flex-col justify-center pt-24 pb-20 border-b border-slate-100">
      {/* Ambient light overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full bg-amber-50/40 blur-[130px] pointer-events-none" />

      {/* Faint brand watermark */}
      <img
        src="/BRIOO ASSETS/logo_mark_light.svg"
        className="absolute top-[10%] right-[-8%] w-[550px] sm:w-[750px] h-auto opacity-[0.03] select-none pointer-events-none rotate-[15deg] z-0"
        alt=""
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">

          {/* Copy — Left Column */}
          <div className="lg:col-span-6 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-xs font-bold text-slate-600 shadow-xs mb-6"
            >
              <span className="text-base leading-none">🌍</span>
              <span>Built for Africa</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Run your hustle
              <br />
              <span className="text-gradient">like a business.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium"
            >
              Whether you run a spaza shop, food stall, or salon — BRIOO turns your phone into a full point-of-sale. Record every sale, track your stock, and cash up at the end of the day. No internet needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/pilot"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200/60 hover:bg-indigo-700 transition-all duration-300 active:scale-[0.98]"
              >
                Join the Trader Pilot
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-xs hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-[11px] font-semibold text-slate-400 uppercase tracking-wider"
            >
              <span className="flex items-center gap-1.5"><Wifi size={12} className="text-emerald-500" /> Works Offline</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-indigo-500" /> Free to Start</span>
              <span className="flex items-center gap-1.5"><Lock size={12} className="text-slate-400" /> Your Data, Your Phone</span>
            </motion.div>
          </div>

          {/* Phone Mockup — Right Column */}
          <div className="lg:col-span-6 relative flex justify-center mt-8 lg:mt-0 z-10">
            {/* Ambient glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-50/80 blur-[90px] pointer-events-none" />

            <div className="relative z-10 w-[350px] sm:w-[450px] lg:w-[500px] xl:w-[600px] lg:-mr-12 xl:-mr-24 lg:mt-12">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease }}
                src="/hero-mockup.png"
                alt="BRIOO Mobile App"
                className="w-full h-auto drop-shadow-[0_25px_50px_rgba(15,23,42,0.12)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 pointer-events-none"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
};

/* ─── MARQUEE BELT SETUP ─── */
const marqueeItems = [
  { text: "Spaza Shop POS", icon: Store, color: "text-indigo-600 bg-indigo-50/70 border-indigo-100/80" },
  { text: "Food Stall Tracker", icon: Zap, color: "text-amber-600 bg-amber-50/70 border-amber-100/80" },
  { text: "Hair & Beauty Catalog", icon: Sparkles, color: "text-purple-600 bg-purple-50/70 border-purple-100/80" },
  { text: "100% Offline Mode", icon: WifiOff, color: "text-emerald-600 bg-emerald-50/70 border-emerald-100/80" },
  { text: "WhatsApp Receipts", icon: MessageSquare, color: "text-blue-600 bg-blue-50/70 border-blue-100/80" },
  { text: "End-of-day Cashups", icon: Calculator, color: "text-rose-600 bg-rose-50/70 border-rose-100/80" },
  { text: "Load-shedding Proof", icon: BatteryCharging, color: "text-orange-600 bg-orange-50/70 border-orange-100/80" },
  { text: "Built for Africa 🌍", icon: Shield, color: "text-slate-700 bg-slate-50/80 border-slate-200/80" },
  { text: "Automatic Stock Alerts", icon: Package, color: "text-red-600 bg-red-50/70 border-red-100/80" },
  { text: "Daily Revenue Reports", icon: TrendingUp, color: "text-teal-600 bg-teal-50/70 border-teal-100/80" },
];

const MarqueeBelt = () => {
  return (
    <div className="relative py-6 bg-slate-50/30 border-b border-slate-100 overflow-hidden w-full select-none">
      {/* Soft gradient fade overlays for left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Row 1: Left scrolling */}
        <div className="flex overflow-hidden pause-on-hover w-full">
          <div className="animate-marquee flex gap-4 shrink-0 pr-4">
            {marqueeItems.map((item, idx) => (
              <div
                key={`row1-first-${idx}`}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold border ${item.color} shadow-xs whitespace-nowrap`}
              >
                <item.icon size={13} className="shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="animate-marquee flex gap-4 shrink-0 pr-4" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <div
                key={`row1-second-${idx}`}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold border ${item.color} shadow-xs whitespace-nowrap`}
              >
                <item.icon size={13} className="shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right scrolling */}
        <div className="flex overflow-hidden pause-on-hover w-full">
          <div className="animate-marquee-reverse flex gap-4 shrink-0 pr-4">
            {marqueeItems.map((item, idx) => (
              <div
                key={`row2-first-${idx}`}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold border ${item.color} shadow-xs whitespace-nowrap`}
              >
                <item.icon size={13} className="shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="animate-marquee-reverse flex gap-4 shrink-0 pr-4" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <div
                key={`row2-second-${idx}`}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold border ${item.color} shadow-xs whitespace-nowrap`}
              >
                <item.icon size={13} className="shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   2. INTERACTIVE BUSINESS SWITCHER
   ═══════════════════════════════════════════════════════════════ */
type BusinessType = "spaza" | "food" | "salon";

interface Product {
  name: string;
  price: number;
  stock: number;
  category: string;
}

const businessPresets: Record<BusinessType, {
  label: string;
  desc: string;
  icon: typeof Store;
  color: string;
  products: Product[];
}> = {
  spaza: {
    label: "Spaza Shop",
    desc: "Fast, inventory-heavy retail checkout with automated stock alerts.",
    icon: Store,
    color: "indigo",
    products: [
      { name: "Brown Bread (1 loaf)", price: 17.50, stock: 12, category: "Bakery" },
      { name: "Fresh Milk 2L", price: 34.00, stock: 5, category: "Dairy" },
      { name: "Maize Meal 10kg", price: 120.00, stock: 18, category: "Grocery" },
      { name: "Soft Drink 440ml", price: 16.50, stock: 40, category: "Beverages" }
    ]
  },
  food: {
    label: "Food Stall",
    desc: "Fast-food POS with modifiers, ingredients deduction, and digital receipts.",
    icon: Zap,
    color: "amber",
    products: [
      { name: "Quarter Kota (Special)", price: 38.00, stock: 45, category: "Mains" },
      { name: "Russian & Chips", price: 32.00, stock: 30, category: "Mains" },
      { name: "Double Cheeseburger", price: 55.00, stock: 22, category: "Burgers" },
      { name: "Extra Cheese / Sauce", price: 8.00, stock: 150, category: "Extras" }
    ]
  },
  salon: {
    label: "Hair & Beauty",
    desc: "Service catalog setup, helper commission split, and custom price booking.",
    icon: Sparkles,
    color: "purple",
    products: [
      { name: "Chiskop Haircut", price: 40.00, stock: 999, category: "Haircut" },
      { name: "Box Braids (Medium)", price: 250.00, stock: 999, category: "Braids" },
      { name: "Wash & Blow Dry", price: 90.00, stock: 999, category: "Wash" },
      { name: "Acrylic Nails (Full Set)", price: 180.00, stock: 999, category: "Nails" }
    ]
  }
};

const initialStock = Object.values(businessPresets).flatMap(b => b.products).reduce((acc, p) => {
  acc[p.name] = p.stock;
  return acc;
}, {} as Record<string, number>);

const BusinessSwitcher = () => {
  const [active, setActive] = useState<BusinessType>("spaza");
  const [cart, setCart] = useState<{ name: string; price: number; qty: number }[]>([]);
  const [salesSum, setSalesSum] = useState<number>(1420.00);
  const [stockLevels, setStockLevels] = useState<Record<string, number>>(initialStock);
  const [isSuccess, setIsSuccess] = useState(false);

  const config = businessPresets[active];

  const handleToggle = (type: BusinessType) => {
    setActive(type);
    setCart([]);
    setIsSuccess(false);
  };

  const addToCart = (product: Product) => {
    if (stockLevels[product.name] <= 0) return;
    
    setCart((prev) => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        if (existing.qty >= stockLevels[product.name]) return prev; // Cannot add more than stock
        return prev.map(item => item.name === product.name ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { name: product.name, price: product.price, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter(item => item.name !== name));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const completeSale = () => {
    if (cart.length === 0) return;
    
    // Deduct stock
    setStockLevels(prev => {
      const next = { ...prev };
      cart.forEach(item => {
        next[item.name] = Math.max(0, next[item.name] - item.qty);
      });
      return next;
    });

    setIsSuccess(true);
    setSalesSum(prev => prev + cartTotal);
    setCart([]);
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 1500);
  };

  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">Live Interactive Demo</p>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
            How does BRIOO fit your trade?
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Select your business type below to test our clean POS layout interface. Add products to the cart and run a simulated checkout.
          </p>

          {/* Segmented Switcher Control */}
          <div className="mt-8 inline-flex rounded-xl bg-slate-100 p-1.5">
            {(Object.keys(businessPresets) as BusinessType[]).map((type) => {
              const info = businessPresets[type];
              const isSelected = active === type;
              return (
                <button
                  key={type}
                  onClick={() => handleToggle(type)}
                  className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <info.icon size={13} />
                  {info.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Workspace Mockup */}
        <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-6 lg:p-8">
          
          {/* POS Products Catalog (Left side) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Products & Services</h3>
                <p className="text-xs text-slate-400">{config.desc}</p>
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-white border border-slate-100 px-2.5 py-1 rounded-md">
                {config.label} List
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {config.products.map((p) => {
                const currentStock = stockLevels[p.name];
                const isOutOfStock = currentStock <= 0;
                
                return (
                  <div
                    key={p.name}
                    className={`bg-white border rounded-xl p-4 flex flex-col justify-between transition-all duration-200 group ${isOutOfStock ? 'border-slate-100 opacity-60 grayscale' : 'border-slate-100 hover:border-indigo-200'}`}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-bold text-indigo-500 uppercase tracking-wide bg-indigo-50/50 px-2 py-0.5 rounded-md">
                          {p.category}
                        </span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${isOutOfStock ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-500'}`}>
                          {isOutOfStock ? 'Out of Stock' : `${currentStock} in stock`}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 mt-2 line-clamp-1">{p.name}</h4>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <div className="text-xs text-slate-400 font-medium">Selling Price</div>
                        <div className="text-sm font-black text-slate-900">R{p.price.toFixed(2)}</div>
                      </div>
                      
                      <button
                        onClick={() => addToCart(p)}
                        disabled={isOutOfStock}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all active:scale-90 ${isOutOfStock ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-slate-50 text-slate-700 hover:bg-indigo-600 hover:text-white'}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* POS Cart & Ticker Mock (Right side) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-100 rounded-2xl p-5 shadow-xs relative overflow-hidden">
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="text-lg font-black text-slate-900">Sale Successful!</h3>
                  <p className="text-xs text-slate-500 mt-1">Receipt generated and stock updated.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              {/* Daily Sales Live Counter */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Simulated Daily Total</div>
                  <div className="text-lg font-black text-indigo-600">
                    <motion.span
                      key={salesSum}
                      initial={{ scale: 1.2, color: "#10b981" }}
                      animate={{ scale: 1, color: "#4f46e5" }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      R{salesSum.toFixed(2)}
                    </motion.span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                  <Wifi size={10} className="text-emerald-500" />
                  <span>Offline Ready</span>
                </div>
              </div>

              {/* Cart List */}
              <div className="mb-4">
                <h4 className="text-[11px] font-extrabold text-slate-700 mb-2.5">Current Checkout Queue</h4>
                {cart.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400 font-medium flex flex-col items-center justify-center">
                    <ShoppingCart size={20} className="text-slate-300 mb-2" />
                    <span>Cart is empty. Tap products to add.</span>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 overflow-x-hidden">
                    <AnimatePresence initial={false}>
                      {cart.map((item) => (
                        <motion.div 
                          key={item.name}
                          initial={{ opacity: 0, x: -20, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: 'auto' }}
                          exit={{ opacity: 0, x: 20, height: 0 }}
                          className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 overflow-hidden"
                        >
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="font-bold text-slate-800 truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-400">R{item.price.toFixed(2)} x {item.qty}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-extrabold text-slate-900">R{(item.price * item.qty).toFixed(2)}</span>
                            <button
                              onClick={() => removeFromCart(item.name)}
                              className="text-[10px] font-bold text-red-400 hover:text-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>

            {/* Total & Complete checkout button */}
            <div className="border-t border-slate-100 pt-4 mt-4">
              <div className="flex justify-between items-baseline mb-4 text-xs">
                <span className="font-bold text-slate-500">Checkout Total</span>
                <span className="text-lg font-black text-slate-950">R{cartTotal.toFixed(2)}</span>
              </div>

              <button
                onClick={completeSale}
                disabled={cart.length === 0}
                className={`w-full py-3.5 rounded-xl font-bold text-xs text-center transition-all ${
                  cart.length === 0
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] cursor-pointer"
                }`}
              >
                Log Cash / Record Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   3. FEATURES SECTION — High density grid with 1px borders
   ═══════════════════════════════════════════════════════════════ */
const featuresList = [
  { icon: Grid, title: "Adaptive POS Interface", text: "Switch instantly between a visual Product Grid for menu items and a Numeric Keypad for fast, open-amount ringing.", details: "Zylo adapts to your business type. Use the split-pane tablet view with a visual menu grid for restaurants, or switch to the lightning-fast POS Keypad mode designed for high-volume quick-service setups." },
  { icon: Shield, title: "Two-Tier Security", text: "Hardware-level security. Devices are locked to your business, and every staff action requires a secure 4-digit PIN.", details: "Just like enterprise POS hardware, Zylo operates in a secure 'kiosk' mode. Cashiers, managers, and owners are assigned distinct PINs that govern what actions they can perform, preventing unauthorized voids or discounts." },
  { icon: Calculator, title: "Strict Shift Management", text: "No sales happen without an open shift. Force staff to declare a starting float and execute a blind cash-up at shift end.", details: "Zylo enforces strict financial accountability. Staff must open a shift with a declared cash float. At the end of the day, the system expects a blind count before revealing the calculated system total, immediately flagging any discrepancies." },
  { icon: Package, title: "Inventory & Recipes", text: "Track raw ingredients and finished goods. Sales automatically deplete stock and trigger low-inventory warnings.", details: "From single items to complex recipes, Zylo manages it all. Selling a burger automatically deducts a bun, patty, and slice of cheese. Get real-time alerts when crucial components hit their customizable low-stock thresholds." },
  { icon: ShoppingCart, title: "Advanced Cart Processing", text: "Handle complex orders with line-item modifiers, smart stacking, and offline-first transaction processing.", details: "The cart is built for speed. It intelligently stacks identical items while separating customized ones (like 'Extra Cheese'). Even if your internet drops, the system continues to ring up sales and queues them for synchronization." },
  { icon: BarChart3, title: "Analytics & Dashboard", text: "Live dashboards that track daily revenue, payment method splits, and identify your most profitable items.", details: "Access real-time business intelligence from anywhere. Our 'Crisp & Tactile' reporting dashboard visualizes your daily turnover, categorizes cash vs. card sales, and highlights what products are driving your true margin." }
];

const FeatureDemo = ({ title }: { title: string }) => {
  switch (title) {
    case "Adaptive POS Interface":
      return (
        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl h-56 overflow-hidden relative flex flex-col items-center justify-center p-4">
          <div className="w-[200px] h-[140px] bg-slate-800 rounded-xl p-2 relative overflow-hidden shadow-2xl border border-slate-700 flex gap-2">
            {/* Left Pane: Visual Menu Grid */}
            <motion.div 
              animate={{ width: ["100%", "50%", "50%", "100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="h-full bg-slate-700 rounded-lg p-2 grid grid-cols-2 gap-2 overflow-hidden flex-shrink-0"
            >
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="bg-slate-600 rounded-md w-full h-full relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                 </div>
               ))}
            </motion.div>
            
            {/* Right Pane: Fast POS Keypad */}
            <motion.div 
              animate={{ 
                x: ["100%", "0%", "0%", "100%", "100%"],
                opacity: [0, 1, 1, 0, 0],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="h-full bg-slate-700 rounded-lg p-2 grid grid-cols-3 gap-1 absolute right-2 top-2 bottom-2"
              style={{ width: 'calc(50% - 12px)' }}
            >
               {[...Array(9)].map((_, i) => (
                 <div key={i} className="bg-slate-600 rounded-sm w-full h-full flex items-center justify-center">
                   <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                 </div>
               ))}
               {/* Bottom row of keypad */}
               <div className="col-span-2 bg-indigo-500 rounded-sm w-full h-full flex items-center justify-center"></div>
               <div className="bg-emerald-500 rounded-sm w-full h-full"></div>
            </motion.div>
          </div>
        </div>
      );
    case "Two-Tier Security":
      return (
        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl h-56 overflow-hidden relative flex items-center justify-center p-4">
           <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-48 bg-white rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col items-center"
           >
             <motion.div
               animate={{ color: ["#94a3b8", "#94a3b8", "#10b981", "#94a3b8"] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
             >
               <Lock size={32} className="mb-6" />
             </motion.div>
             
             <div className="flex gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      backgroundColor: ["#f1f5f9", "#4f46e5", "#4f46e5", "#10b981", "#f1f5f9"],
                      scale: [1, 1.2, 1, 1.1, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 5, delay: i * 0.4, ease: "easeInOut" }}
                    className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200"
                  ></motion.div>
                ))}
             </div>
           </motion.div>
        </div>
      );
    case "Strict Shift Management":
      return (
        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl h-56 overflow-hidden relative flex flex-col items-center justify-center p-4">
           <div className="flex flex-col gap-4 items-center w-full max-w-[200px]">
              <motion.div
                animate={{ y: [0, 20, 20, 0], opacity: [1, 0, 0, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full bg-slate-800 text-white rounded-xl p-3 flex justify-between shadow-lg z-10"
              >
                 <span className="text-xs font-bold text-slate-400">System</span>
                 <span className="text-xs font-bold">R 4,250.00</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -20, -20, 0], opacity: [1, 0, 0, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full bg-white border border-slate-200 rounded-xl p-3 flex justify-between shadow-sm z-10"
              >
                 <span className="text-xs font-bold text-slate-500">Drawer</span>
                 <span className="text-xs font-bold text-slate-900">R 4,250.00</span>
              </motion.div>

              {/* Merged Success State */}
              <motion.div
                animate={{ scale: [0.8, 1.1, 1, 0.8], opacity: [0, 1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                className="absolute w-[200px] bg-emerald-500 text-white rounded-xl p-4 flex items-center justify-center gap-2 shadow-xl z-20"
              >
                 <CheckCircle2 size={18} />
                 <span className="font-bold text-sm tracking-wide">BALANCED</span>
              </motion.div>
           </div>
        </div>
      );
    case "Inventory & Recipes":
      return (
        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl h-56 overflow-hidden relative flex flex-col items-center justify-center p-4">
           <div className="w-full max-w-[200px] h-3 bg-slate-200 rounded-full overflow-hidden mb-6 shadow-inner">
              <motion.div
                 animate={{ width: ["100%", "20%", "20%", "100%"], backgroundColor: ["#10b981", "#10b981", "#ef4444", "#10b981"] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="h-full bg-emerald-500 rounded-full"
              ></motion.div>
           </div>
           
           <motion.div
            animate={{ y: [20, 0, 0, 20], opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1.5, ease: "easeOut" }}
            className="w-full max-w-[200px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-red-100 p-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex items-center gap-3 text-red-500">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                 <AlertCircle size={20} />
              </motion.div>
              <div className="font-bold text-sm">Low Stock</div>
            </div>
          </motion.div>
        </div>
      );
    case "Advanced Cart Processing":
      return (
        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl h-56 overflow-hidden relative flex flex-col items-center justify-center p-4">
           <div className="w-[180px] h-[160px] bg-white border border-slate-200 rounded-xl shadow-lg relative flex flex-col overflow-hidden">
             <div className="bg-slate-100 p-2 flex justify-between items-center border-b border-slate-200">
               <span className="text-[10px] font-bold text-slate-500">Cart</span>
               <motion.div 
                 animate={{ color: ["#10b981", "#ef4444", "#10b981"] }} 
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 title="Offline-first sync"
               >
                 <Wifi size={12} />
               </motion.div>
             </div>
             <div className="p-2 flex flex-col gap-1.5 relative flex-1">
               {/* Base Item */}
               <motion.div 
                 animate={{ opacity: [0, 1, 1, 1, 0] }}
                 transition={{ repeat: Infinity, duration: 6 }}
                 className="bg-slate-50 border border-slate-100 p-2 rounded-md flex justify-between items-center z-10"
               >
                 <div className="w-12 h-1.5 bg-slate-300 rounded-full"></div>
                 <div className="text-[8px] font-bold text-slate-400">R25</div>
               </motion.div>
               
               {/* Modifier Item (Extra Cheese) */}
               <motion.div 
                 animate={{ x: [20, 0, 0, 0, 20], opacity: [0, 1, 1, 1, 0] }}
                 transition={{ repeat: Infinity, duration: 6, delay: 0.5 }}
                 className="bg-amber-50 border border-amber-100 p-1.5 rounded-md flex justify-between items-center ml-4 z-10"
               >
                 <div className="w-10 h-1 bg-amber-300 rounded-full"></div>
                 <div className="text-[7px] font-bold text-amber-600">+R5</div>
               </motion.div>

               {/* Smart Stacking Item */}
               <motion.div 
                 initial={{ y: -20, opacity: 0 }}
                 animate={{ y: [-20, 0, -37, -37, -37], opacity: [0, 1, 0, 0, 0] }}
                 transition={{ repeat: Infinity, duration: 6, delay: 1.5 }}
                 className="bg-slate-50 border border-slate-100 p-2 rounded-md flex justify-between items-center absolute left-2 right-2 top-[47px] z-20"
               >
                 <div className="w-12 h-1.5 bg-slate-300 rounded-full"></div>
                 <div className="text-[8px] font-bold text-slate-400">R25</div>
               </motion.div>

               {/* Stack Badge */}
               <motion.div
                 animate={{ scale: [0, 0, 1.2, 1, 0], opacity: [0, 0, 1, 1, 0] }}
                 transition={{ repeat: Infinity, duration: 6, delay: 2.2 }}
                 className="absolute right-1 top-[6px] bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm z-30"
               >
                 2x
               </motion.div>
             </div>
           </div>
        </div>
      );
    case "Analytics & Dashboard":
      return (
        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl h-56 overflow-hidden relative flex flex-col items-center justify-center p-4">
           <div className="w-full max-w-[220px] h-[150px] bg-slate-900 rounded-xl shadow-2xl p-4 flex flex-col justify-end relative overflow-hidden border border-slate-800">
             {/* Header */}
             <div className="absolute top-4 left-4 z-20">
               <div className="text-[8px] text-slate-400 uppercase font-bold tracking-wider mb-1">Today's Sales</div>
               <div className="text-sm font-bold text-white">R 12,450.00</div>
             </div>
             
             <div className="w-full h-16 flex items-end justify-between gap-1 relative z-10">
               {[30, 50, 40, 70, 55, 90, 80].map((h, i) => (
                 <motion.div
                   key={i}
                   animate={{ height: ["0%", `${h}%`, `${h}%`, "0%"] }}
                   transition={{ repeat: Infinity, duration: 6, ease: "easeOut", delay: i * 0.1 }}
                   className="w-full bg-gradient-to-t from-indigo-600/40 to-indigo-400/80 rounded-t-sm"
                 ></motion.div>
               ))}
               
               {/* Glowing Line Graph */}
               <motion.svg 
                 viewBox="0 0 100 100" 
                 className="absolute inset-0 w-full h-full preserve-3d drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                 style={{ overflow: 'visible' }}
               >
                 <motion.path
                   d="M 0,80 Q 15,60 30,70 T 60,40 T 100,20"
                   fill="none"
                   stroke="#10b981"
                   strokeWidth="2.5"
                   strokeLinecap="round"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: [0, 1, 1, 0] }}
                   transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 />
               </motion.svg>

               {/* Floating Tooltip */}
               <motion.div
                 animate={{ 
                   y: [20, -10, -10, 20], 
                   opacity: [0, 1, 1, 0] 
                 }}
                 transition={{ repeat: Infinity, duration: 6, delay: 1, ease: "easeInOut" }}
                 className="absolute -top-6 right-0 bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xl border border-emerald-500/30 backdrop-blur-sm"
               >
                 +24%
               </motion.div>
             </div>
             
             {/* Background Glow */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-900/50 to-transparent pointer-events-none"></div>
           </div>
        </div>
      );
    default:
      return null;
  }
};

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof featuresList[0] | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-[#fdfdfd] border-b border-slate-100 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeIn} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 font-medium">Core Platform Capabilities</p>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
            Everything built for small scale enterprise.
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Tailored to work without bulky hardware. Just download to any Android or Apple device and manage stock like a seasoned corporation.
          </p>
        </motion.div>

        {/* Grid with 1px border lines (Stripe/Linear style) */}
        <div className="grid gap-px bg-slate-100 rounded-3xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3 ring-1 ring-slate-100 relative z-10">
          {featuresList.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onClick={() => setSelectedFeature(f)}
              className="bg-white p-8 lg:p-10 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-200 group cursor-pointer"
            >
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 ring-1 ring-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:ring-indigo-100 transition-all duration-200">
                  <f.icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{f.text}</p>
              </div>
              
              <div className="mt-8 flex items-center gap-1.5 text-[10px] font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Learn more</span> <ChevronRight size={10} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden ring-1 ring-slate-100 z-10"
            >
              <div className="p-8">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/50">
                  <selectedFeature.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">{selectedFeature.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-medium">
                  {selectedFeature.details}
                </p>
                <FeatureDemo title={selectedFeature.title} />
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-colors"
                  >
                    Got it
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   4. HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */
const steps = [
  { step: "01", title: "Set Up Catalog", text: "Import your menu or retail products, define selling prices, and input current stock counts." },
  { step: "02", title: "Record Daily Sales", text: "Type totals or add individual cart items as cash, card, or instant EFT transactions." },
  { step: "03", title: "Auto-Deduct Stock", status: "Works Offline", text: "Transactions deduct from inventory levels instantly. Even when load shedding hits, the app functions offline." },
  { step: "04", title: "Review Cash-Ups & Reports", text: "Match your drawer at shift end. Export digital records to easily apply for financing or credit." }
];

const HowItWorks = () => (
  <section className="py-24 lg:py-32 bg-[#fafafa] border-b border-slate-100 bg-dot-pattern">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Copy (Left side) */}
        <motion.div {...fadeIn} className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 font-medium">Simple Flow</p>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl leading-tight mb-4">
            How simple is everyday trading?
          </h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
            BRIOO is structured with a quick-action UX designed to let you close a transaction in under 5 seconds, keeping lines moving at street stalls or counters.
          </p>

          <Link
            to="/features"
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-6 py-3 text-xs font-bold text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-all"
          >
            View Full Features Guide <ArrowRight size={12} />
          </Link>
        </motion.div>

        {/* Step Flow List (Right side) */}
        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease }}
              className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-5 hover:border-indigo-100 transition-all"
            >
              <div className="text-sm font-black text-indigo-500 bg-indigo-50/50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                {s.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xs font-extrabold text-slate-900">{s.title}</h3>
                  {s.status && (
                    <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
                      {s.status}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   5. PRICING PREVIEW SECTION
   ═══════════════════════════════════════════════════════════════ */
const plans = [
  {
    name: "Solo",
    price: "R79.99",
    period: "/mo",
    desc: "Best for sole-traders starting records.",
    features: [
      "Mobile access only",
      "1 staff account",
      "Up to 25 items catalog",
      "Auto stock tracking",
      "30-day records history"
    ]
  },
  {
    name: "Trader",
    price: "R149.99",
    period: "/mo",
    desc: "For active everyday stall sellers.",
    features: [
      "Multi-device logged-in support",
      "3 staff accounts",
      "Unlimited item catalog",
      "Recipe & ingredient deduction",
      "90-day records history"
    ],
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Business",
    price: "R299.99",
    period: "/mo",
    desc: "For small shops & permanent counters.",
    features: [
      "Full automated inventory",
      "15 staff accounts",
      "5 POS terminal logins",
      "Export PDF & CSV records",
      "3-year records history"
    ]
  },
  {
    name: "Growth",
    price: "R599.99",
    period: "/mo",
    desc: "For scaling multi-location setups.",
    features: [
      "Unlimited terminals",
      "Unlimited staff limits",
      "Unlimited database history",
      "Priority WhatsApp support",
      "Multi-store logs ready"
    ],
    comingSoon: true
  }
];

const Pricing = () => (
  <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">Affordable Tiers</p>
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
          Simple, transparent pricing.
        </h2>
        <p className="mt-4 text-sm text-slate-500 font-medium">
          Choose a plan that fits your business scale. No hidden fees or hardware contract lock-ins.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className={`relative rounded-2xl p-6 flex flex-col justify-between border ${
              p.highlight
                ? "bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-200/50"
                : p.comingSoon
                ? "bg-white text-slate-800 border-slate-100 opacity-60"
                : "bg-white text-slate-800 border-slate-200/80 hover:border-indigo-100 hover:shadow-xs"
            }`}
          >
            <div>
              {/* Badges */}
              {p.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-slate-900 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                  {p.badge}
                </span>
              )}
              {p.comingSoon && (
                <span className="absolute -top-3 left-6 rounded-full bg-slate-400 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                  Coming Soon
                </span>
              )}

              <h3 className="text-sm font-extrabold tracking-wide uppercase mt-2">{p.name}</h3>
              <p className={`text-[11px] font-medium mt-1 leading-relaxed ${p.highlight ? "text-indigo-200" : "text-slate-400"}`}>
                {p.desc}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-2xl font-black">{p.price}</span>
                <span className={`text-[10px] font-semibold ${p.highlight ? "text-indigo-200" : "text-slate-400"}`}>
                  {p.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 pt-2 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[11px] font-medium leading-tight">
                    <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${p.highlight ? "text-indigo-300" : "text-indigo-500"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA action */}
            {!p.comingSoon ? (
              <Link
                to="/pilot"
                className={`block w-full py-3.5 rounded-xl font-bold text-xs text-center transition-all active:scale-[0.98] ${
                  p.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow-md shadow-indigo-800/10"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                Join Trader Pilot
              </Link>
            ) : (
              <div className="block w-full py-3.5 rounded-xl font-bold text-xs text-center bg-slate-50 text-slate-400 border border-slate-100 cursor-not-allowed">
                Coming Soon
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/pricing"
          className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700"
        >
          Compare all tiers & detailed features <ChevronRight size={12} />
        </Link>
      </div>

    </div>
  </section>
);

/* ─── REVIEWS MARQUEE SETUP ─── */
const reviewsList = [
  {
    quote: "Record sales instantly, even during load shedding. Offline mode is a complete lifesaver! Syncing back online is sometimes slow, but it gets the job done.",
    author: "Sipho M.",
    role: "Soweto Spaza Owner",
    rating: 4,
  },
  {
    quote: "No more notebook tracking. My staff commission and daily margins are calculated automatically. Wish the UI had a dark mode, but the simplicity is great.",
    author: "Naledi K.",
    role: "Salon Stylist, Khayelitsha",
    rating: 4,
  },
  {
    quote: "Customers love getting digital receipts on WhatsApp. No paper waste or expensive thermal rolls.",
    author: "Thabo D.",
    role: "Street Food Vendor, Durban",
    rating: 5,
  },
  {
    quote: "The low stock alerts are helpful, but I wish we could customize the alert threshold per product. Still, a solid and easy app for my grocery store.",
    author: "Fatima B.",
    role: "Fresh Grocer, Mitchells Plain",
    rating: 3,
  },
  {
    quote: "We match cash-ups perfectly every single evening now. No more unexplained profit leaks!",
    author: "Lwazi N.",
    role: "Coffee Cart Owner, Rosebank",
    rating: 5,
  },
  {
    quote: "It's lightweight, clean, and runs perfectly offline. Best investment this year, although adding inventory in bulk could be made a bit faster.",
    author: "Zanele S.",
    role: "Boutique Owner, Pretoria",
    rating: 4,
  },
];

const ReviewsMarquee = () => (
  <section className="py-20 bg-slate-50/30 border-b border-slate-100 overflow-hidden relative">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">Trader Feedback</p>
      <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl lg:text-4xl leading-tight">
        Trusted by local businesses.
      </h2>
    </div>

    {/* Infinite scrolling belt of reviews */}
    <div className="relative overflow-hidden w-full select-none">
      {/* Soft gradient fade overlays for left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden pause-on-hover w-full py-4">
        <div className="animate-marquee flex gap-6 shrink-0 pr-6">
          {reviewsList.map((rev, idx) => (
            <div
              key={`rev-first-${idx}`}
              className="w-[320px] sm:w-[380px] bg-white border border-slate-100/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between relative"
            >
              <span className="absolute top-5 right-5 bg-indigo-50/80 text-indigo-600 border border-indigo-100/50 rounded-full px-2 py-0.5 text-[8px] font-black uppercase tracking-wider">
                Pilot Tester
              </span>
              <div>
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs font-extrabold text-slate-800">{rev.author}</h4>
                <p className="text-[10px] text-slate-400 font-bold mt-0.5">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-6 shrink-0 pr-6" aria-hidden="true">
          {reviewsList.map((rev, idx) => (
            <div
              key={`rev-second-${idx}`}
              className="w-[320px] sm:w-[380px] bg-white border border-slate-100/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between relative"
            >
              <span className="absolute top-5 right-5 bg-indigo-50/80 text-indigo-600 border border-indigo-100/50 rounded-full px-2 py-0.5 text-[8px] font-black uppercase tracking-wider">
                Pilot Tester
              </span>
              <div>
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs font-extrabold text-slate-800">{rev.author}</h4>
                <p className="text-[10px] text-slate-400 font-bold mt-0.5">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── FEEDBACK FORM ─── */
const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [businessNameOrId, setBusinessNameOrId] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !businessNameOrId || !message) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await addDoc(collection(db, "feedback"), {
        name,
        businessNameOrId,
        rating,
        message,
        submittedAt: new Date(),
        status: "pending_verification"
      });
      logEvent(analytics, 'home_feedback_submission');
      setStatus("success");
      setName("");
      setBusinessNameOrId("");
      setMessage("");
      setRating(5);
    } catch (err) {
      console.error("Error writing feedback to Firestore: ", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Light design overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-50/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-50/30 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 font-medium">Verify & Publish</p>
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl lg:text-4xl leading-tight">
            Share your trader experience.
          </h2>
          <p className="mt-3 text-sm text-slate-500 font-medium">
            Are you a pilot trader? Submit your feedback below. We will verify your Business Name or ID to list your testimonial!
          </p>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="bg-slate-50/50 border border-slate-100/80 rounded-3xl p-6 sm:p-10 shadow-xs backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Row: Name & Business Name / ID */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="feedback-name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Full Name / Nickname
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  placeholder="e.g. Sipho M."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="feedback-business" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Business Name / Trader ID
                </label>
                <input
                  id="feedback-business"
                  type="text"
                  placeholder="e.g. Soweto Spaza or Merchant ID"
                  value={businessNameOrId}
                  onChange={(e) => setBusinessNameOrId(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition-all"
                  required
                />
              </div>
            </div>

            {/* Star Rating Picker */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Rating
              </span>
              <div className="flex items-center gap-2 mt-1">
                {[1, 2, 3, 4, 5].map((starVal) => {
                  const isActive = hoverRating !== null ? starVal <= hoverRating : starVal <= rating;
                  return (
                    <button
                      key={starVal}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setRating(starVal)}
                      onMouseEnter={() => setHoverRating(starVal)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="text-slate-300 hover:scale-110 active:scale-95 transition-transform cursor-pointer focus:outline-hidden"
                      aria-label={`Rate ${starVal} out of 5 stars`}
                    >
                      <Star
                        size={24}
                        className={`transition-colors duration-150 ${
                          isActive ? "text-amber-400 fill-amber-400" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="text-xs font-bold text-slate-400 ml-2">
                  {rating} {rating === 1 ? "Star" : "Stars"}
                </span>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <label htmlFor="feedback-message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Your Feedback
              </label>
              <textarea
                id="feedback-message"
                rows={4}
                placeholder="What did you like about Zylo? What could we improve?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition-all resize-y min-h-[100px]"
                required
              />
            </div>

            {/* Messages & Submit Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              {/* Submission status messages */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-emerald-600 text-xs font-bold"
                    >
                      <CheckCircle2 size={16} className="shrink-0" />
                      <span>Thank you! Feedback submitted. We'll verify your business details soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-red-500 text-xs font-bold"
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      <span>Submission failed. Please fill all fields or try again later.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-xs font-bold text-white shadow-md transition-all active:scale-[0.98] cursor-pointer ${
                  isSubmitting 
                    ? "bg-slate-400 cursor-not-allowed shadow-none" 
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200/50 hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Feedback</span>
                    <Send size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   6. CTA SECTION
   ═══════════════════════════════════════════════════════════════ */
const CTA = () => (
  <section className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-50/50 blur-[100px] pointer-events-none" />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <motion.div {...fadeIn}>
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl mb-5 leading-tight">
          Ready to run your trade smarter?
        </h2>
        <p className="text-sm text-slate-500 font-medium max-w-md mx-auto mb-10 leading-relaxed">
          Sign up to our South African Trader Pilot today. Test the app for free on your phone, suggest new features, and boost your daily margins.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/pilot"
            className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-xs font-bold text-white shadow-lg shadow-indigo-200/60 hover:bg-indigo-700 transition-all duration-300 active:scale-[0.98]"
          >
            Apply for the Pilot
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-xs font-bold text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-all duration-200"
          >
            Speak to Our Team
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════ */
const Home = () => {
  return (
    <div className="relative bg-white">
      <Hero />
      <MarqueeBelt />
      <BusinessSwitcher />
      <Features />
      <HowItWorks />
      <Pricing />
      <ReviewsMarquee />
      <FeedbackForm />
      <CTA />
    </div>
  );
};

export default Home;
