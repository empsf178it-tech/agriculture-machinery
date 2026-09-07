import { Link } from 'react-router-dom';
import { machineryCatalog } from '../data/machineryData';
import ProductCard from '../components/ProductCard';
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Zap, Gauge, Wrench } from 'lucide-react';
import { getImage } from '../assets/images';

export default function TractorsPage() {
  const tractorProducts = machineryCatalog.filter(m => m.categoryId === 'tractors');

  const tractorCategories = [
    {
      class: "Compact Tractors",
      range: "35 HP - 45 HP",
      drive: "2WD / 4WD",
      bestFor: "Small farms, orchards, vineyard rows, light transport",
      specs: { hp: "35-45 HP", lift: "1,500 kg", trans: "8F + 2R Mechanical" }
    },
    {
      class: "Utility Tractors",
      range: "50 HP - 90 HP",
      drive: "4WD Standard",
      bestFor: "Medium crop farms, rotavator tilling, seed drilling, sprayers",
      specs: { hp: "90 HP", lift: "3,200 kg", trans: "12F + 12R Synchro Shuttle" }
    },
    {
      class: "Heavy-Duty Tractors",
      range: "100 HP - 120 HP",
      drive: "4WD Heavy Duty",
      bestFor: "Commercial broadacre farms, deep subsoiling, combine towing",
      specs: { hp: "120 HP Turbo", lift: "4,200 kg", trans: "16F + 16R Power Shuttle" }
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
            src={getImage('h1')}
            alt="FIELDCORE Heavy Tractor Series"
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
              <span className="text-[#4caf50] font-bold">Tractors</span>
            </div>

            <div className="badge-industrial mb-5 inline-flex items-center gap-2">HEAVY TRACTOR SERIES</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Power for <span className="text-gradient-agri">every field.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto mb-8">
              From nimble compact utility tractors to 120 HP turbocharged heavy drawbar machines, FIELDCORE tractors combine fuel-efficient engines with robust multi-speed transmissions.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <Link to="/quote?category=Tractors" className="btn-primary py-3.5 px-7 text-sm text-decoration-none justify-center w-full sm:w-auto">
                <span>Get Tractor Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/machinery/x120" className="btn-secondary py-3.5 px-7 text-sm text-decoration-none justify-center w-full sm:w-auto">
                <span>View X120 Flagship</span>
              </Link>
            </div>

          </div>
        </div>

      </section>

        {/* CATEGORY COMPARISON CARDS */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-orange mb-3">SELECTION MATRIX</div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
              Tractor Class Comparison
            </h2>
            <p className="text-xs text-[#8c9ba5] mt-2">Fictional Demo Specifications for Guidance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tractorCategories.map((item, idx) => (
              <div key={idx} className="bg-[#1b1f24] border border-white/10 p-8 rounded-sm hover:border-[#4caf50] transition-colors flex flex-col justify-between">
                <div>
                  <span className="badge-industrial text-[10px] mb-4">{item.range}</span>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">{item.class}</h3>
                  <p className="text-xs text-[#4caf50] font-semibold mb-4">Drive: {item.drive}</p>
                  
                  <p className="text-xs text-[#9ba8b5] leading-relaxed mb-6">
                    <strong className="text-white block mb-1">Recommended Application:</strong>
                    {item.bestFor}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 text-xs">
                    <div className="flex items-center justify-between text-[#b0bec5]">
                      <span>Horsepower Range:</span>
                      <strong className="text-white">{item.specs.hp}</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#b0bec5]">
                      <span>Hydraulic Lift:</span>
                      <strong className="text-white">{item.specs.lift}</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#b0bec5]">
                      <span>Transmission:</span>
                      <strong className="text-white">{item.specs.trans}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link to="/quote?category=Tractors" className="btn-secondary w-full justify-center text-xs py-2.5 text-decoration-none">
                    <span>Enquire About {item.class}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRACTOR PRODUCT GRID */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <div className="badge-industrial mb-2">PRODUCT LINEUP</div>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                Featured FIELDCORE Tractors
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tractorProducts.map((machine) => (
              <ProductCard key={machine.id} machine={machine} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
