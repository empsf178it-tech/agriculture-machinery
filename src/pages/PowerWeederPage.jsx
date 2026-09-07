import { Link } from 'react-router-dom';
import SpecificationTable from '../components/SpecificationTable';
import ProductCard from '../components/ProductCard';
import { machineryCatalog } from '../data/machineryData';
import { CheckCircle2, ArrowRight, Shield, Zap, Wrench, ChevronRight } from 'lucide-react';
import { getImage } from '../assets/images';

export default function PowerWeederPage() {
  const featuredWeeder = machineryCatalog.find(m => m.id === 'pw900') || machineryCatalog[0];
  const powerWeederVariants = machineryCatalog.filter(m => m.categoryId === 'power-weeders' || m.categoryId === 'tillers');

  const whyPowerWeeders = [
    {
      title: "Inter-Cultivation Efficiency",
      desc: "Narrow chassis design allows safe navigation between standing crop rows (cotton, sugarcane, vegetables) without damaging root structures."
    },
    {
      title: "Substantial Labor Savings",
      desc: "Replaces 10-15 manual laborers per day, cutting weeding turnaround times from days to hours."
    },
    {
      title: "Vegetable & Orchard Versatility",
      desc: "Compact footprint ideal for raised vegetable beds, high-density orchards, and greenhouse plots."
    },
    {
      title: "Paddy Land Puddling Capability",
      desc: "Equipped with puddle wheel attachments to prepare muddy paddy fields with high traction."
    },
    {
      title: "Small & Medium Farm Economics",
      desc: "Affordable capital cost with high fuel efficiency (approx 0.8L/hr) ideal for smallholders."
    }
  ];

  return (
    <div className="bg-[#0f1115] min-h-screen py-16">
      <div className="container-custom">
        
      {/* FULL WIDTH HERO BANNER */}
      <section className="relative w-full py-20 sm:py-24 border-b border-white/10 overflow-hidden bg-[#0a0c0e] mb-16">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage('h2')}
            alt="FIELDCORE Power Weeder Series"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/85"></div>
        </div>

        <div className="container-custom relative z-10 text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* BREADCRUMB */}
            <div className="flex items-center gap-2 text-xs text-[#8c9ba5] mb-6 font-['Space_Grotesk'] justify-center">
              <Link to="/" className="hover:text-white text-decoration-none">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/machinery" className="hover:text-white text-decoration-none">Machinery</Link>
              <ChevronRight className="w-3 h-3 text-[#4caf50]" />
              <span className="text-[#4caf50] font-bold">Power Weeders</span>
            </div>

            <div className="badge-industrial mb-5 inline-flex items-center gap-2">POWER WEEDER & TILLER SERIES</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Powerful cultivation. <span className="text-gradient-orange">Compact control.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto mb-8">
              FIELDCORE power weeders combine high-torque 4-stroke engines with heavy-duty gearboxes to deliver effortless soil tilling and rapid weed suppression across row crops and orchards.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <Link to="/machinery/pw900" className="btn-primary py-3.5 px-7 text-sm text-decoration-none justify-center w-full sm:w-auto">
                <span>Explore PW900 Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/quote?machine=pw900" className="btn-orange py-3.5 px-7 text-sm text-decoration-none justify-center w-full sm:w-auto">
                <span>Request Quote</span>
              </Link>
            </div>

          </div>
        </div>

      </section>

        {/* WHY POWER WEEDERS SECTION */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-industrial mb-3">FARMING APPLICATIONS</div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
              Why Power Weeders for Modern Farming?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyPowerWeeders.map((item, idx) => (
              <div key={idx} className="bg-[#1b1f24] border border-white/10 p-6 rounded-sm hover:border-[#4caf50] transition-colors">
                <span className="text-xl font-['Space_Grotesk'] font-bold text-[#4caf50] block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8c9ba5] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED POWER WEEDER SPEC MATRIX */}
        <div className="bg-[#1b1f24] border border-white/10 rounded-sm p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="badge-orange mb-3">FLAGSHIP WEEDER</div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-4">
                FIELDCORE PW900
              </h2>
              <p className="text-sm text-[#9ba8b5] mb-6 leading-relaxed">
                Featured 7 HP gear-driven power weeder built for deep row-crop cultivation with 24 forged Boron tines.
              </p>

              {/* Highlight Specs Pill */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[#15181d] border border-white/10 rounded-sm">
                  <span className="text-xs text-[#8c9ba5] block uppercase font-bold">Engine Power</span>
                  <span className="text-xl font-['Space_Grotesk'] font-bold text-[#4caf50]">7.0 HP</span>
                </div>
                <div className="p-4 bg-[#15181d] border border-white/10 rounded-sm">
                  <span className="text-xs text-[#8c9ba5] block uppercase font-bold">Working Width</span>
                  <span className="text-xl font-['Space_Grotesk'] font-bold text-[#e67e22]">800 mm</span>
                </div>
                <div className="p-4 bg-[#15181d] border border-white/10 rounded-sm">
                  <span className="text-xs text-[#8c9ba5] block uppercase font-bold">Transmission</span>
                  <span className="text-sm font-['Space_Grotesk'] font-bold text-white">Gear Drive</span>
                </div>
                <div className="p-4 bg-[#15181d] border border-white/10 rounded-sm">
                  <span className="text-xs text-[#8c9ba5] block uppercase font-bold">Fuel Type</span>
                  <span className="text-sm font-['Space_Grotesk'] font-bold text-white">Petrol / Diesel</span>
                </div>
              </div>

              <Link to="/machinery/pw900" className="btn-primary w-full justify-center text-sm py-3 text-decoration-none">
                <span>View Full PW900 Spec Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <SpecificationTable specifications={featuredWeeder.specifications} />
            </div>

          </div>
        </div>

        {/* PRODUCT VARIANTS */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <div className="badge-industrial mb-2">PRODUCT LINEUP</div>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                Power Weeder & Tiller Range
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {powerWeederVariants.map((machine) => (
              <ProductCard key={machine.id} machine={machine} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
