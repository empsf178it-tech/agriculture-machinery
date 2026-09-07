import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowRight, Cog, Globe, PhoneCall, ShieldCheck, MapPin, Search, Sparkles, Truck, ChevronRight } from 'lucide-react';
import { machineryCatalog } from '../data/machineryData';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and search modal on route change
  useEffect(() => {
    setIsOpen(false);
    setSearchModalOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.machinery'), path: '/machinery' },
    { name: t('nav.implements'), path: '/implements' },
    { name: t('nav.solutions'), path: '/solutions' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.insights'), path: '/insights' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const filteredSearchMachines = machineryCatalog.filter(m => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q) || m.powerHp.toLowerCase().includes(q);
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        
        {/* TOP ANNOUNCEMENT & TICKER BAR */}
        <div className="bg-[#05070a] border-b border-white/10 py-1.5 sm:py-2 font-['Space_Grotesk'] text-[#8c9ba5]">
          <div className="container-custom flex flex-nowrap items-center justify-between gap-1 sm:gap-3">
            
            {/* Left Ticker Animation & Hotline */}
            <div className="flex items-center gap-1.5 sm:gap-4 text-[10px] sm:text-xs min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 text-[#e67e22] font-semibold bg-[#e67e22]/15 px-1.5 py-0.5 min-[360px]:px-2 sm:px-2.5 rounded-full border border-[#e67e22]/30 text-[9px] min-[360px]:text-[10px] sm:text-xs shrink-0">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e67e22] shrink-0" />
                <span className="whitespace-nowrap">{lang === 'ta' ? 'அரசு SMAM மானியம் 50% வரை' : 'SMAM Govt Subsidy 40%-50% Available'}</span>
              </div>

              <div className="hidden md:flex items-center gap-1.5 text-white/80 hover:text-white shrink-0">
                <PhoneCall className="w-3.5 h-3.5 text-[#4caf50]" />
                <span>Toll Free: 1800-425-9000</span>
              </div>
            </div>

            {/* Right Utility Actions */}
            <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs shrink-0">
              <Link to="/services" className="hidden sm:flex items-center gap-1.5 text-[#b0bec5] hover:text-[#4caf50] text-decoration-none transition-colors">
                <MapPin className="w-3.5 h-3.5 text-[#4caf50]" />
                <span>{lang === 'ta' ? '150+ முகவர்கள்' : '150+ Dealers'}</span>
              </Link>

              <span className="hidden sm:inline text-white/20">|</span>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 bg-[#15181d] border border-white/20 rounded-full text-[9px] min-[360px]:text-[10px] sm:text-xs font-bold text-white hover:border-[#4caf50] transition-all cursor-pointer shadow-sm shrink-0 whitespace-nowrap"
                title="Switch Language (English / தமிழ்)"
              >
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4caf50] shrink-0" />
                <span className={lang === 'en' ? 'text-[#4caf50] font-extrabold' : 'text-[#8c9ba5]'}>EN</span>
                <span className="text-white/30">|</span>
                <span className={lang === 'ta' ? 'text-[#4caf50] font-extrabold' : 'text-[#8c9ba5]'}>தமிழ்</span>
              </button>
            </div>

          </div>
        </div>

        {/* MAIN FULL-WIDTH NAVIGATION BAR */}
        <div className={`transition-all duration-300 border-b border-white/10 ${
          scrolled ? 'bg-[#0b0e12]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3' : 'bg-[#0f1115] py-3 sm:py-4'
        }`}>
          <div className="container-custom flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group text-decoration-none shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2e7d32] rounded-sm flex items-center justify-center border border-[#4caf50] group-hover:bg-[#388e3c] transition-colors shadow-md">
                <Cog className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-['Space_Grotesk'] text-lg min-[360px]:text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#4caf50] transition-colors">
                    FIELDCORE
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#e67e22] animate-pulse"></span>
                </div>
                <span className="block font-['Space_Grotesk'] text-[7px] min-[360px]:text-[8px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#8c9ba5] uppercase">
                  Agricultural Machinery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Spacious for Tamil & English) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-['Space_Grotesk'] font-bold rounded-sm transition-all duration-200 text-decoration-none whitespace-nowrap ${
                      active
                        ? 'text-[#4caf50] bg-[#2e7d32]/20 border-b-2 border-[#4caf50]'
                        : 'text-[#b0bec5] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Bar (Quick Search + Request Quote) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2.5 bg-[#15181d] hover:bg-[#232932] border border-white/15 hover:border-[#4caf50] text-[#b0bec5] hover:text-white rounded-sm transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
                title="Quick Search Machinery"
              >
                <Search className="w-4 h-4 text-[#4caf50]" />
                <span className="hidden xl:inline text-xs text-[#8c9ba5]">Search</span>
              </button>

              <Link to="/quote" className="btn-primary text-decoration-none text-xs py-2.5 px-4 whitespace-nowrap">
                <span>{t('nav.requestQuote')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-1.5 sm:p-2 text-[#4caf50] bg-[#15181d] border border-white/10 rounded-sm"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 sm:p-2 rounded-sm text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7 text-[#4caf50]" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#121518]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl p-4 sm:p-6 transition-all duration-300 z-50 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between p-2.5 sm:p-3 rounded-sm text-sm sm:text-base font-semibold text-decoration-none ${
                      active
                        ? 'bg-[#2e7d32]/20 text-[#4caf50] border-l-4 border-[#4caf50]'
                        : 'text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#8c9ba5]" />
                  </Link>
                );
              })}
              
              <div className="pt-3 sm:pt-4 border-t border-white/10 mt-1 sm:mt-2">
                <Link to="/quote" className="btn-primary w-full text-center py-2.5 sm:py-3 text-decoration-none justify-center">
                  <span>{t('nav.requestQuote')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* INTERACTIVE MACHINERY QUICK SEARCH MODAL */}
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-4">
            <div className="bg-[#14181f] border border-[#4caf50]/50 rounded-sm max-w-2xl w-full p-4 sm:p-6 relative shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-fade-in">
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2 text-[#4caf50] font-bold text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>QUICK MACHINERY SEARCH</span>
                </div>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="text-[#8c9ba5] hover:text-white text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="relative mb-4 sm:mb-6">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#4caf50] absolute left-3.5 sm:left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search models e.g. PW900, X120, Rotavator, Sprayer..."
                  className="w-full bg-[#0a0d11] border border-white/15 focus:border-[#4caf50] rounded-sm pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none"
                />
              </div>

              <div className="max-h-72 sm:max-h-80 overflow-y-auto space-y-2 pr-1">
                {filteredSearchMachines.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      navigate(`/machinery/${m.id}`);
                      setSearchModalOpen(false);
                    }}
                    className="p-2.5 sm:p-3 bg-[#1c222b] hover:bg-[#252e3b] border border-white/5 hover:border-[#4caf50] rounded-sm flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <img src={m.image} alt={m.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm object-cover border border-white/10" />
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-white">{m.name}</h4>
                        <span className="text-[10px] sm:text-xs text-[#e67e22]">{m.category} • {m.powerHp}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#4caf50]" />
                  </div>
                ))}

                {filteredSearchMachines.length === 0 && (
                  <div className="text-center py-6 sm:py-8 text-xs text-[#8c9ba5]">
                    No machinery found matching "<strong>{searchQuery}</strong>".
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </header>

      {/* Responsive Fixed Header Spacer */}
      <div className="h-[82px] min-[360px]:h-[86px] sm:h-[98px] pointer-events-none" aria-hidden="true" />
    </>
  );
}



