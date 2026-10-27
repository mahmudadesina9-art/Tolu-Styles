import { useState, useMemo } from "react";
import {
  Search,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Scissors,
  Star,
  Send,
  Eye,
  Heart,
} from "lucide-react";

const DRESSES = [
  {
    id: 1,
    name: "Ankara Maxi Gown",
    category: "Ankara",
    style: "Ankara · Made to order",
    price: "₦85,000",
    numericPrice: 85000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2x33kRyHzX-h-QCaTcNdsYRHHoFAlpqZj7OvvoZdIA&s=10",
    alt: "Model wearing a vibrant flowing statement gown",
    label: "Bestseller",
    rating: 4.9,
    reviewsCount: 28,
    description:
      "A breathtaking floor-length Ankara statement gown crafted with tiered volume and hand-finished seams. Designed for maximum elegance and effortless flow.",
    details: [
      "100% Premium African Wax Print",
      "Concealed back zipper",
      "Side pockets built-in",
      "Custom measurements available",
    ],
  },
  {
    id: 2,
    name: "Lace Aso-Ebi Set",
    category: "Lace",
    style: "Lace · Occasion wear",
    price: "₦120,000",
    numericPrice: 120000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRL2M0DSbLE4PGz2KvRKzI9gdZ4UZMKTEm9ycvdyWjw&s=10",
    alt: "Elegant occasion dress with a refined silhouette",
    label: "Occasion wear",
    rating: 5.0,
    reviewsCount: 19,
    description:
      "Refined French lace merged with traditional Nigerian couture tailored to accentuate your figure. Includes hand-beaded accents around the neckline.",
    details: [
      "Imported French Corded Lace",
      "Satin inner lining",
      "Scalloped hemline detail",
      "Includes matching gele styling guide",
    ],
  },
  {
    id: 3,
    name: "Adire Two-Piece",
    category: "Adire",
    style: "Adire · Ready to wear",
    price: "₦68,000",
    numericPrice: 68000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULRgXZg2Ek1_csyqIHRijDAmeNnWp1uioh0j7JYLWhA&s=10",
    alt: "Fashion model in a relaxed contemporary outfit",
    label: "Ready to wear",
    rating: 4.8,
    reviewsCount: 34,
    description:
      "Hand-dyed authentic Abeokuta Adire patterned into a crisp, modern wide-leg trousers and tailored wrap kimono jacket set.",
    details: [
      "Hand-dyed Indigo Silk-Cotton",
      "Breathable relax fit",
      "Elasticized rear waist for comfort",
      "Limited run fabric design",
    ],
  },
  {
    id: 4,
    name: "Aso-Oke Occasion Dress",
    category: "Aso-Oke",
    style: "Aso-oke · Custom fit",
    price: "₦150,000",
    numericPrice: 150000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGN70jk2RB8GF24LaHo6Lw77Fq2YMKQZx43Zk9izvng&s=10",
    alt: "Model showcasing a polished occasion look",
    label: "Made for you",
    rating: 4.9,
    reviewsCount: 15,
    description:
      "Structured luxury woven Aso-Oke corset dress featuring metallic threading and hand-embellished crystal applique for high-society events.",
    details: [
      "Handwoven Heritage Aso-Oke",
      "Built-in boned corset",
      "High-slit options available",
      "Dry clean only",
    ],
  },
  {
    id: 5,
    name: "Ankara Wrap Dress",
    category: "Ankara",
    style: "Ankara · Ready to wear",
    price: "₦72,000",
    numericPrice: 72000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlIr5zky0WaAOV91mCfZaD-JXVT56gb3evR8s2fyYaQ&s=10",
    alt: "Model in a graceful modern dress",
    label: "Everyday favourite",
    rating: 4.7,
    reviewsCount: 42,
    description:
      "Versatile wrap silhouette in rich Ankara print, designed to comfortably fit dynamic body shapes while maintaining modern sophistication.",
    details: [
      "100% Soft Cotton Ankara",
      "Adjustable waist tie",
      "Flattering V-neckline",
      "Machine washable (Gentle cycle)",
    ],
  },
  {
    id: 6,
    name: "Ivory Bridal Gown",
    category: "Bridal",
    style: "Bridal · Bespoke",
    price: "From ₦280,000",
    numericPrice: 280000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8uR39urv_D8_MWDZIuq1lKyBBAhUJIYWQZwaharsGpQ&s=10",
    alt: "Bride in an elegant ivory wedding gown",
    label: "Bridal",
    rating: 5.0,
    reviewsCount: 12,
    description:
      "Architectural bridal masterpiece blending contemporary regal silhouettes with understated Nigerian artisan handwork for your unforgettable day.",
    details: [
      "Silk Duchesse Satin & Organza",
      "Custom fitting consultation included",
      "Hand-stitched pearl beadwork",
      "Includes 3 month timeline & fittings",
    ],
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Amina Lawal",
    role: "Bride (Lagos)",
    text: "Tolu Styles delivered my wedding reception dress with absolute perfection! The custom fit made me feel like royalty and arrived two days ahead of schedule.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Dr. Chioma Okonkwo",
    role: "Regular Client (Abuja)",
    text: "The quality of fabric and precision in stitching is unmatched. Every time I wear their Adire collection in London or Abuja, people stop to ask where it's from.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Funke Adebayo",
    role: "Fashion Enthusiast (London, UK)",
    text: "Ordering from abroad was effortless via WhatsApp. They sent measurement templates and video previews before dispatching. 10/10 service!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
];

const FAQS = [
  {
    q: "How long does custom fitting and production take?",
    a: "Ready-to-wear pieces ship within 24-48 hours. Custom made-to-order dresses typically take 7-12 business days, while intricate Bridal gowns require 3-6 weeks depending on detailing.",
  },
  {
    q: "Do you ship internationally outside Nigeria?",
    a: "Yes! We ship globally via DHL Express (3-5 days delivery worldwide). Local orders in Lagos are delivered via express courier within 24 hours of completion.",
  },
  {
    q: "How do I provide my measurements for a bespoke dress?",
    a: "After placing an order or inquiry, our head stylist sends you a simple step-by-step measurement guide via WhatsApp or video call to ensure a flawless custom fit.",
  },
  {
    q: "Can I bring or provide my own fabric?",
    a: "Absolutely. We offer fabric-sourcing services as well as tailoring-only packages where you provide your own Aso-Ebi or custom material.",
  },
];

export default function App() {
  const WHATSAPP_NUMBER = "2348148413283";
  const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

  // State Management
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewDress, setQuickViewDress] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [likedItems, setLikedItems] = useState([]);

  // Form Consultation State
  const [consultationData, setConsultationData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    outfitType: "Custom Aso-Ebi",
    notes: "",
  });

  // Filter dresses based on category search
  const filteredDresses = useMemo(() => {
    return DRESSES.filter((dress) => {
      const matchesCategory =
        selectedCategory === "All" || dress.category === selectedCategory;
      const matchesSearch =
        dress.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dress.style.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // WhatsApp link generator
  const getWhatsAppLink = (customText) => {
    const text =
      customText ||
      "Hello Tolu Styles, I would like to make an inquiry about your luxury couture collections.";
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  const getDressOrderLink = (dressName) => {
    const message = `Hello Tolu Styles, I would love to enquire about ordering the "${dressName}". Please provide availability and fitting details.`;
    return getWhatsAppLink(message);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast("Thank you for joining Tolu Styles Insider list! 💖");
    setNewsletterEmail("");
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Tolu Styles! I'd like to book a consultation.\n\n*Name:* ${consultationData.name}\n*Phone:* ${consultationData.phone}\n*Outfit Needed:* ${consultationData.outfitType}\n*Event Date:* ${consultationData.eventDate || "N/A"}\n*Notes:* ${consultationData.notes || "None"}`;
    window.open(getWhatsAppLink(msg), "_blank");
    setIsConsultationOpen(false);
    showToast(
      "Redirecting to WhatsApp to complete your consultation booking...",
    );
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-[#fbf8f5] text-[#231b1b] font-sans antialiased selection:bg-[#5b2333] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-3 left-3 right-3 z-50 flex items-center gap-3 rounded-xl bg-[#5b2333] px-4 py-3.5 text-xs font-medium text-white shadow-2xl animate-fade-in sm:bottom-5 sm:left-auto sm:right-5 sm:px-5 sm:text-sm">
          <Sparkles className="h-4 w-4 text-[#e8c8d0] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#321722] px-3 py-2 text-center text-[10px] font-medium uppercase leading-relaxed tracking-[0.12em] text-[#e8c8d0] sm:px-4 sm:text-[11px] sm:tracking-wider">
        <span className="inline-flex items-center justify-center gap-2">
          <Sparkles className="h-3 w-3 shrink-0" />
          <span>
            Bespoke Fittings &amp; Worldwide Courier Shipping Available
          </span>
          <Sparkles className="h-3 w-3 shrink-0" />
        </span>
      </div>

      {/* Sticky Glassmorphism Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#fbf8f5]/90 border-b border-[#eee6df] transition-all">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4"
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Tolu Styles Home"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5b2333] text-sm font-bold tracking-widest text-[#e8c8d0] shadow-md transition duration-300 group-hover:bg-[#79364b] sm:h-11 sm:w-11">
              TS
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-extrabold tracking-[0.14em] text-[#231b1b] sm:text-base sm:tracking-[0.2em]">
                TOLU STYLES
              </span>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-[#806d69]">
                HIGH COUTURE · LAGOS
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#625452] lg:flex">
            <a href="#collection" className="transition hover:text-[#9b5368]">
              Collection
            </a>
            <a href="#about" className="transition hover:text-[#9b5368]">
              Our Story
            </a>
            <a href="#testimonials" className="transition hover:text-[#9b5368]">
              Reviews
            </a>
            <a href="#faq" className="transition hover:text-[#9b5368]">
              FAQs
            </a>
          </div>

          {/* Actions CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="rounded-full border border-[#d8c9c4] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#5b2333] transition hover:border-[#5b2333] hover:bg-white"
            >
              Book Fitting
            </button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#5b2333] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#79364b]"
            >
              <MessageCircle className="h-4 w-4 text-[#e8c8d0]" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-[#231b1b] hover:bg-[#eee6df] lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Drawer Overlay */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#eee6df] bg-[#fbf8f5] px-5 py-5 shadow-xl sm:px-6 sm:py-6 lg:hidden animate-fade-in"
          >
            <div className="flex flex-col gap-4 text-sm font-semibold tracking-wide text-[#5b2333]">
              <a
                href="#collection"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-[#eee6df]"
              >
                Browse Collection
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-[#eee6df]"
              >
                About Our Brand
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-[#eee6df]"
              >
                Client Reviews
              </a>
              <a
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-[#eee6df]"
              >
                Frequently Asked Questions
              </a>
              <div className="flex flex-col gap-3 pt-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsConsultationOpen(true);
                  }}
                  className="w-full rounded-full border border-[#5b2333] py-3 text-center text-xs font-bold uppercase tracking-wider text-[#5b2333]"
                >
                  Book Bespoke Fitting
                </button>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5b2333] py-3 text-center text-xs font-bold uppercase tracking-wider text-white"
                >
                  <MessageCircle className="h-4 w-4" /> Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden px-4 py-10 sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#e8c8d0] bg-[#f5e6e8] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#9b5368] sm:px-3.5 sm:text-[11px] sm:tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5" />
              Contemporary Nigerian Luxury
            </div>

            <h1 className="mt-5 font-serif text-[clamp(2.1rem,8.5vw,3.5rem)] leading-[1.08] tracking-tight text-[#231b1b] sm:mt-6 sm:text-6xl lg:text-7xl">
              Made for your <br />
              <span className="italic text-[#8c4057]">kind of beautiful.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#756765] sm:text-lg">
              Thoughtful occasion wear, modern hand-dyed Adire, rich Ankara
              gowns, and handcrafted bespoke bridal wear — tailor-made for your
              most memorable moments.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href="#collection"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#5b2333] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#5b2333]/20 transition hover:bg-[#79364b] hover:shadow-xl sm:px-8 sm:py-4"
              >
                Explore Collection
              </a>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8c9c4] bg-white px-6 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-[#5b2333] shadow-sm transition hover:border-[#5b2333] hover:bg-[#fbf8f5] sm:px-8 sm:py-4"
              >
                Book Consultation
              </button>
            </div>

            {/* Badges */}
            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-4 border-t border-[#e8ded8] pt-5 text-[11px] text-[#756765] sm:mt-12 sm:grid-cols-3 sm:gap-4 sm:pt-6 sm:text-xs">
              <div className="flex items-center gap-2">
                <Scissors className="h-4 w-4 text-[#8c4057] shrink-0" />
                <span>
                  <strong>Custom Fit</strong> Available
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#8c4057] shrink-0" />
                <span>
                  Crafted in <strong>Lagos</strong>
                </span>
              </div>
              <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
                <ShieldCheck className="h-4 w-4 text-[#8c4057] shrink-0" />
                <span>Worldwide Shipping</span>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="relative mx-auto w-[calc(100%-0.75rem)] max-w-lg lg:w-full lg:max-w-none">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border-2 border-[#d8c2bd] sm:-left-6 sm:-top-6 sm:rounded-[2.5rem]" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl sm:rounded-[2.5rem]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJA_OVi7y5t_RIVMQ78dQee09O9ERcexwbzZ676x85IY1fRa8RoLlzHw&s"
                alt="A fashion model in a striking modern Nigerian gown"
                className="h-[min(112vw,440px)] w-full object-cover sm:h-[560px] lg:h-[min(48vw,620px)] transform transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Float Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/40 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b5368]">
                      Featured Creation
                    </span>
                    <p className="mt-0.5 font-serif text-base leading-snug text-[#231b1b] sm:text-lg">
                      The Royal Ankara Statement Gown
                    </p>
                  </div>
                  <a
                    href={getDressOrderLink("The Royal Ankara Statement Gown")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5b2333] text-white shadow hover:bg-[#79364b]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLECTION SECTION */}
        <section
          id="collection"
          className="scroll-mt-16 bg-white py-12 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9b5368]">
                  Handcrafted Elegance
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl">
                  Pieces to Remember
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#756765]">
                From bespoke Ankara and delicate lace to ready-to-wear Adire,
                explore our signature collections crafted for elegance.
              </p>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="mb-10 flex flex-col gap-5 border-b border-[#eee6df] pb-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {["All", "Ankara", "Lace", "Adire", "Aso-Oke", "Bridal"].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`min-h-10 rounded-full px-3.5 py-2 text-xs font-semibold tracking-wide transition-all sm:px-4 ${
                        selectedCategory === cat
                          ? "bg-[#5b2333] text-white shadow-md"
                          : "bg-[#fbf8f5] text-[#625452] hover:bg-[#eee6df]"
                      }`}
                    >
                      {cat}
                    </button>
                  ),
                )}
              </div>

              {/* Live Search Input */}
              <div className="relative w-full max-w-xs lg:shrink-0">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9b5368]" />
                <input
                  type="text"
                  placeholder="Search dresses or styles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#eee6df] bg-[#fbf8f5] py-3 pl-10 pr-4 text-base font-medium text-[#231b1b] placeholder-[#a0908d] focus:border-[#5b2333] focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {/* Dress Cards Grid */}
            {filteredDresses.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-base text-[#756765]">
                  No designs found matching your search query.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#5b2333] underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                {filteredDresses.map((dress) => {
                  const isLiked = likedItems.includes(dress.id);
                  return (
                    <article
                      key={dress.id}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#eee6df] bg-[#fbf8f5] shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#5b2333]/10"
                    >
                      {/* Image Frame */}
                      <div className="relative overflow-hidden">
                        <img
                          src={dress.image}
                          alt={dress.alt}
                          loading="lazy"
                          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* Top Label Tag */}
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#5b2333] backdrop-blur-sm shadow-sm">
                          {dress.label}
                        </span>

                        {/* Favorite Heart Button */}
                        <button
                          onClick={(e) => toggleLike(dress.id, e)}
                          aria-label="Add to favorites"
                          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#5b2333] shadow-md backdrop-blur-sm transition hover:scale-110 sm:right-4 sm:top-4"
                        >
                          <Heart
                            className={`h-4 w-4 ${isLiked ? "fill-[#5b2333]" : ""}`}
                          />
                        </button>

                        {/* Quick View Hover Button */}
                        <div className="absolute inset-0 hidden items-center justify-center bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100 sm:flex">
                          <button
                            onClick={() => setQuickViewDress(dress)}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#5b2333] shadow-lg transition hover:bg-[#5b2333] hover:text-white"
                          >
                            <Eye className="h-4 w-4" /> Quick View
                          </button>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#8b7772]">
                            <span className="min-w-0 flex-1">
                              {dress.style}
                            </span>
                            <div className="flex shrink-0 items-center gap-1 font-semibold text-amber-600">
                              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                              <span>{dress.rating}</span>
                            </div>
                          </div>

                          <h3 className="mt-2 font-serif text-xl text-[#231b1b] transition group-hover:text-[#8c4057] sm:text-2xl">
                            {dress.name}
                          </h3>
                        </div>

                        <div className="mt-5 border-t border-[#eee6df] pt-4">
                          <div className="flex items-baseline justify-between mb-4">
                            <span className="text-xs uppercase tracking-wider text-[#8b7772]">
                              Price
                            </span>
                            <span className="text-lg font-bold text-[#5b2333]">
                              {dress.price}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => setQuickViewDress(dress)}
                              className="min-h-11 rounded-full border border-[#d8c9c4] py-2.5 text-center text-xs font-semibold text-[#5b2333] transition hover:bg-[#eee6df]"
                            >
                              Details
                            </button>
                            <a
                              href={getDressOrderLink(dress.name)}
                              target="_blank"
                              rel="noreferrer"
                              className="flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-[#5b2333] py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#79364b]"
                            >
                              <MessageCircle className="h-3.5 w-3.5 text-[#e8c8d0]" />
                              Order
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ABOUT / BRAND STORY SECTION */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24"
        >
          <div className="grid gap-8 rounded-[2rem] bg-[#f1e8e3] p-5 shadow-sm sm:gap-12 sm:rounded-[2.5rem] sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9b5368]">
                Lagos Craftsmanship
              </p>
              <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
                Surulere roots. <br />
                <span className="italic text-[#8c4057]">
                  Uncompromising detail.
                </span>
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-[#685957]">
                Tolu Styles blends traditional Nigerian textiles with sleek
                modern aesthetics. Every piece is handcrafted in Surulere,
                Lagos, using rich Ankara wax prints, hand-dyed Abeokuta Adire,
                corded laces, and handwoven Aso-Oke. We elevate your wardrobe
                for celebrations, weddings, and high-style days.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl bg-white/80 p-5 shadow-sm border border-white">
                  <p className="font-serif text-lg font-bold text-[#5b2333]">
                    Custom Fit
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#756765]">
                    Tailored specifically to your unique measurements.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-5 shadow-sm border border-white">
                  <p className="font-serif text-lg font-bold text-[#5b2333]">
                    Bridal Couture
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#756765]">
                    Unrivalled bespoke designs for your wedding day.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-5 shadow-sm border border-white">
                  <p className="font-serif text-lg font-bold text-[#5b2333]">
                    Aso-Ebi Groups
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#756765]">
                    Coordinated bulk styling for family & celebrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS REVIEWS */}
        <section id="testimonials" className="bg-white py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="mx-auto mb-9 max-w-2xl px-1 text-center sm:mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b5368]">
                Client Love
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                Words from Our Clients
              </h2>
              <p className="mt-3 text-sm text-[#756765]">
                Discover why stylish women worldwide trust Tolu Styles for their
                special moments.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#eee6df] bg-[#fbf8f5] p-6 shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm italic leading-relaxed text-[#554745]">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-[#eee6df] pt-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#231b1b]">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#8b7772]">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section
          id="faq"
          className="mx-auto max-w-4xl px-4 py-12 sm:px-8 sm:py-24"
        >
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b5368]">
              Clear Answers
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-[#eee6df] bg-white"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold text-[#231b1b] hover:bg-[#fbf8f5] sm:p-5"
                  >
                    <span className="min-w-0">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#8c4057] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#eee6df] bg-[#fbf8f5] p-5 text-xs sm:text-sm leading-relaxed text-[#756765]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative overflow-hidden bg-[#5b2333] px-4 py-12 text-center text-white sm:px-8 sm:py-20">
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e8c8d0]">
              Start Your Custom Outfit Journey
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">
              Let’s create something truly breathtaking.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80">
              Have a custom event, wedding, or fabric you'd like us to bring to
              life? Talk directly to our lead stylist today.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#5b2333] shadow-lg transition hover:bg-[#f1e8e3] sm:px-8 sm:py-4"
              >
                <MessageCircle className="h-4 w-4" /> Start WhatsApp Chat
              </a>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/20 sm:px-8 sm:py-4"
              >
                Book Fitting Form
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER & NEWSLETTER */}
      <footer className="bg-[#2a131c] px-4 py-12 text-white/70 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b2333] text-sm font-bold text-[#e8c8d0]">
                TS
              </span>
              <span className="text-base font-extrabold tracking-widest text-white">
                TOLU STYLES
              </span>
            </div>
            <p className="text-xs leading-relaxed text-white/60">
              High-end contemporary Nigerian fashion and bespoke couture,
              handcrafted in Surulere, Lagos.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-widest text-white">
              Contact Studio
            </h4>
            <p className="flex items-start gap-2 text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e8c8d0]" />
              <span>Surulere, Lagos, Nigeria</span>
            </p>
            <p className="flex items-center gap-2 text-white/70">
              <Phone className="h-4 w-4 shrink-0 text-[#e8c8d0]" />
              <span>+234 814 841 3283</span>
            </p>
            <p className="flex items-start gap-2 text-white/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#e8c8d0]" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold uppercase tracking-widest text-white">
              Explore
            </h4>
            <p>
              <a href="#collection" className="hover:text-white transition">
                Ankara Collection
              </a>
            </p>
            <p>
              <a href="#collection" className="hover:text-white transition">
                Lace & Aso-Ebi
              </a>
            </p>
            <p>
              <a href="#collection" className="hover:text-white transition">
                Bespoke Bridal
              </a>
            </p>
            <p>
              <a href="#about" className="hover:text-white transition">
                Our Lagos Atelier
              </a>
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-3 lg:col-span-1">
            <h4 className="font-bold uppercase tracking-widest text-white">
              Tolu Insider
            </h4>
            <p className="text-xs text-white/60">
              Subscribe to receive private collection drops and VIP bespoke
              slots.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex min-w-0 gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="min-w-0 w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-base text-white placeholder-white/40 focus:border-[#e8c8d0] focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5b2333] text-white hover:bg-[#79364b]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:mt-12 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Tolu Styles. All rights reserved.</p>
          <p>Handcrafted in Lagos, Nigeria</p>
        </div>
      </footer>

      {/* QUICK VIEW MODAL */}
      {quickViewDress && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm animate-fade-in sm:p-4">
          <div className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)]">
            <button
              onClick={() => setQuickViewDress(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <img
                src={quickViewDress.image}
                alt={quickViewDress.name}
                className="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-[480px]"
              />

              <div className="flex flex-col justify-between p-5 sm:p-8">
                <div>
                  <span className="inline-block rounded-full bg-[#f5e6e8] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#9b5368]">
                    {quickViewDress.category}
                  </span>

                  <h3 className="mt-3 font-serif text-3xl text-[#231b1b]">
                    {quickViewDress.name}
                  </h3>
                  <p className="mt-1 text-xl font-bold text-[#5b2333]">
                    {quickViewDress.price}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[#685957] leading-relaxed">
                    {quickViewDress.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#231b1b]">
                      Highlights:
                    </p>
                    <ul className="space-y-2 text-xs text-[#756765]">
                      {quickViewDress.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8c4057]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#eee6df]">
                  <a
                    href={getDressOrderLink(quickViewDress.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5b2333] py-3 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#79364b]"
                  >
                    <MessageCircle className="h-4 w-4" /> Enquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONSULTATION BOOKING MODAL */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm animate-fade-in sm:p-4">
          <div className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:p-8">
            <button
              onClick={() => setIsConsultationOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbf8f5] text-[#231b1b] hover:bg-[#eee6df]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b5368]">
                Custom Tailoring
              </span>
              <h3 className="mt-1 font-serif text-2xl text-[#231b1b]">
                Book Styling Consultation
              </h3>
              <p className="mt-1 text-xs text-[#756765]">
                Submit details to start your custom fitting session.
              </p>
            </div>

            <form
              onSubmit={handleConsultationSubmit}
              className="space-y-4 text-sm"
            >
              <div>
                <label className="block font-semibold text-[#231b1b] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Funke Adebayo"
                  value={consultationData.name}
                  onChange={(e) =>
                    setConsultationData({
                      ...consultationData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eee6df] bg-[#fbf8f5] p-3 text-base focus:border-[#5b2333] focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#231b1b] mb-1">
                  Phone Number (WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +234 801 234 5678"
                  value={consultationData.phone}
                  onChange={(e) =>
                    setConsultationData({
                      ...consultationData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eee6df] bg-[#fbf8f5] p-3 text-base focus:border-[#5b2333] focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#231b1b] mb-1">
                  Outfit Type Needed
                </label>
                <select
                  value={consultationData.outfitType}
                  onChange={(e) =>
                    setConsultationData({
                      ...consultationData,
                      outfitType: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eee6df] bg-[#fbf8f5] p-3 text-base focus:border-[#5b2333] focus:outline-none sm:text-sm"
                >
                  <option value="Custom Aso-Ebi">
                    Custom Aso-Ebi / Event Wear
                  </option>
                  <option value="Bespoke Bridal Gown">
                    Bespoke Bridal Gown
                  </option>
                  <option value="Ankara Couture Gown">
                    Ankara Couture Gown
                  </option>
                  <option value="Adire Two-Piece Set">
                    Adire Two-Piece Set
                  </option>
                  <option value="Other Styling Request">
                    Other Custom Outfit
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#231b1b] mb-1">
                  Event Date (Optional)
                </label>
                <input
                  type="date"
                  value={consultationData.eventDate}
                  onChange={(e) =>
                    setConsultationData({
                      ...consultationData,
                      eventDate: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eee6df] bg-[#fbf8f5] p-3 text-base focus:border-[#5b2333] focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#231b1b] mb-1">
                  Specific Notes or Preferences
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe fabric preferences, necklines, or colors..."
                  value={consultationData.notes}
                  onChange={(e) =>
                    setConsultationData({
                      ...consultationData,
                      notes: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eee6df] bg-[#fbf8f5] p-3 text-base focus:border-[#5b2333] focus:outline-none sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#5b2333] py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-[#79364b]"
              >
                Send Request via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
