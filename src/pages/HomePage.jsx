import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Clock, Award, ChevronRight, Zap, Gauge, Flame } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import MachineryShowcase from '../components/MachineryShowcase';
import EquipmentCalculator from '../components/EquipmentCalculator';
import DealerLocator from '../components/DealerLocator';
import { categoriesData, machineryCatalog } from '../data/machineryData';
import { getImage } from '../assets/images';

export default function HomePage() {
  const featuredMachines = machineryCatalog.filter(m => m.isFeatured).slice(0, 6);

  const stats = [
    { label: "ENGINE TORQUE", value: "7 - 120 HP", desc: "Commercial Grade Engines" },
    { label: "ROTARY TILLING", value: "24 BORON TINES", desc: "Hardened Forged Blades" },
    { label: "LIFT CAPACITY", value: "up to 4,200 KG", desc: "Category II 3-Point Hitch" },
    { label: "WARRANTY", value: "2-YEAR CHASSIS", desc: "Structural Field Warranty" }
  ];

  const whyFieldcore = [
    {
      title: "Reliable Performance",
      description: "Machines designed for demanding, continuous agricultural work in tough soil conditions.",
      icon: ShieldCheck
    },
    {
      title: "Easy Operation",
      description: "Practical controls, intuitive handles, and farmer-friendly operational ergonomics.",
      icon: Clock
    },
    {
      title: "Built to Last",
      description: "Durable high-tensile steel construction engineered for years of regular field use.",
      icon: Award
    },
    {
      title: "Service Support",
      description: "Comprehensive maintenance assistance, genuine spare parts, and technician support.",
      icon: Wrench
    }
  ];

  const applications = [
    { name: "Soil Preparation", image: getImage(57) },
    { name: "Weeding & Inter-Cultivation", image: getImage(2) },
    { name: "Cultivation", image: getImage(5) },
    { name: "Planting & Sowing", image: getImage(59) },
    { name: "Crop Protection Spraying", image: getImage(6) },
    { name: "Harvesting & Reaping", image: getImage(7) },
    { name: "Transportation", image: getImage(53) },
    { name: "Post-Harvest & Threshing", image: getImage(43) }
  ];

  return (
    <div className="bg-[#0a0c0e]">
      
      {/* FIXED HERO SECTION */}
      <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center items-center py-16 sm:py-24 bg-grid-pattern border-b border-white/10 overflow-hidden">
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2e7d32]/30 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e67e22]/20 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Fixed Background Image h3 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage('h3')}
            alt="FIELDCORE Heavy Agricultural Machinery"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-black/50 to-black/35"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        </div>

        <div className="container-custom relative z-10 w-full flex flex-col items-center text-center my-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            <div className="badge-industrial mb-6 inline-flex items-center gap-2 shadow-lg backdrop-blur-md">
              HEAVY AGRICULTURAL MACHINERY & EQUIPMENT
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-2xl">
              Built for the Work <span className="text-gradient-agri">That Matters.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#d0dbe5] mb-10 leading-relaxed max-w-2xl font-medium mx-auto drop-shadow-md">
              Reliable tractors, power weeders, mini tillers, rotavators, sprayers and practical farm implements engineered to make everyday agricultural work faster, easier and more productive.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <Link to="/machinery" className="btn-primary py-4 px-8 text-base text-decoration-none shadow-xl justify-center w-full sm:w-auto">
                <span>Explore Machinery</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link to="/quote" className="btn-orange py-4 px-8 text-base text-decoration-none shadow-xl justify-center w-full sm:w-auto">
                <span>Request a Quote</span>
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* HERO METRICS BANNER (SEPARATE SECTION BELOW HERO) */}
      <section className="bg-[#111418] border-b border-white/10 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#161a20] border border-white/10 rounded-sm text-center shadow-2xl">
            {stats.map((s, idx) => (
              <div key={idx} className="p-3 border-b sm:border-b-0 sm:border-r last:border-b-0 last:border-r-0 border-white/10">
                <span className="block text-[10px] font-['Space_Grotesk'] font-bold text-[#e67e22] uppercase tracking-wider mb-1">
                  {s.label}
                </span>
                <strong className="block font-['Space_Grotesk'] text-xl sm:text-2xl font-extrabold text-white">
                  {s.value}
                </strong>
                <span className="text-xs text-[#8c9ba5]">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINE CATEGORIES SECTION */}
      <section className="py-20 lg:py-28 bg-[#111418]">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="badge-industrial mb-3">PRODUCT CATEGORIES</div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                The Right Machine for Every Job.
              </h2>
            </div>
            <p className="text-[#8c9ba5] max-w-md text-sm leading-relaxed">
              Explore our full range of field machinery engineered to support farmers through ground preparation, planting, weed management, and harvesting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesData.map((cat) => (
              <Link
                key={cat.id}
                to={`/machinery?cat=${cat.id}`}
                className="group card-machinery bg-[#161a20] border border-white/10 rounded-sm overflow-hidden text-decoration-none flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden img-zoom-container">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0c0e]/90 backdrop-blur-md px-3 py-1 rounded-sm border border-[#4caf50]/40 text-xs font-['Space_Grotesk'] font-bold text-[#4caf50]">
                    {cat.number}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white group-hover:text-[#4caf50] transition-colors mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#8c9ba5] leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#4caf50]">
                    <span>Explore Category</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED MACHINES */}
      <section className="py-20 lg:py-28 bg-[#0a0c0e] border-t border-white/10">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="badge-orange mb-3">READY FOR THE FIELD</div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Machines Ready for the Field.
              </h2>
            </div>
            <Link to="/machinery" className="btn-secondary text-sm py-3 px-6 text-decoration-none">
              <span>View Full Catalog ({machineryCatalog.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMachines.map((machine) => (
              <ProductCard key={machine.id} machine={machine} />
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE FARM EQUIPMENT CALCULATOR */}
      <section className="py-16 bg-[#111418] border-t border-white/10">
        <div className="container-custom">
          <EquipmentCalculator />
        </div>
      </section>

      {/* WHY FIELDCORE - FEATURE BLOCKS */}
      <section className="py-20 lg:py-28 bg-[#0a0c0e] border-t border-white/10">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="badge-industrial mb-3">ENGINEERING QUALITY</div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
              Made for Real Farm Work.
            </h2>
            <p className="text-[#8c9ba5] text-sm mt-3 leading-relaxed">
              We design every machine with practical field realities in mind — high torque, long service life, and straightforward maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFieldcore.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#161a20] border border-white/10 p-8 rounded-sm hover:border-[#4caf50] transition-colors">
                  <div className="w-12 h-12 bg-[#2e7d32]/20 border border-[#4caf50] rounded-sm flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#4caf50]" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8c9ba5] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FARM APPLICATIONS SHOWCASE */}
      <section className="py-20 lg:py-28 bg-[#0a0c0e] border-t border-white/10">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="badge-industrial mb-3">VERSATILE APPLICATIONS</div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
                One Machine. Many Applications.
              </h2>
            </div>
            <Link to="/solutions" className="btn-secondary text-sm py-3 px-6 text-decoration-none">
              <span>View Solutions Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="relative aspect-[4/3] w-full rounded-sm overflow-hidden group border border-white/10 img-zoom-container bg-[#15181d] shadow-lg hover:border-[#4caf50] transition-colors">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white block drop-shadow-md">
                    {app.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MACHINERY SHOWCASE (INTERACTIVE CALLOUTS) */}
      <MachineryShowcase />

      {/* DEALER LOCATOR WIDGET */}
      <section className="py-12 bg-[#0a0c0e] border-t border-white/10">
        <div className="container-custom">
          <DealerLocator />
        </div>
      </section>

      {/* SERVICE SUMMARY */}
      <section className="py-20 lg:py-28 bg-[#111418]">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="badge-orange mb-3">AFTER-SALES & SUPPORT</div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
                Keep Your Machines Working.
              </h2>
            </div>
            <Link to="/services" className="btn-primary text-sm py-3 px-6 text-decoration-none">
              <span>Explore Services →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#161a20] border border-white/10 p-6 rounded-sm">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">Maintenance</h3>
              <p className="text-xs text-[#8c9ba5] leading-relaxed">Scheduled routine service and preventive inspection support for peak field readiness.</p>
            </div>
            <div className="bg-[#161a20] border border-white/10 p-6 rounded-sm">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">Spare Parts</h3>
              <p className="text-xs text-[#8c9ba5] leading-relaxed">Direct access to compatible genuine replacement tines, belts, gears, and filters.</p>
            </div>
            <div className="bg-[#161a20] border border-white/10 p-6 rounded-sm">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">Repairs</h3>
              <p className="text-xs text-[#8c9ba5] leading-relaxed">Rapid technical diagnosis and repair assistance for complex engine or transmission issues.</p>
            </div>
            <div className="bg-[#161a20] border border-white/10 p-6 rounded-sm">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">Operator Support</h3>
              <p className="text-xs text-[#8c9ba5] leading-relaxed">Farmer guidance on machine operation, safety protocols, and implement attachment setup.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-32 bg-[#0a0c0e] border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src={getImage(7)}
            alt="FIELDCORE Machinery in Action"
            className="w-full h-full object-cover opacity-85 filter brightness-105 contrast-105"
            loading="lazy"       />
        </div>

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div className="badge-industrial mb-6">FIELDCORE MACHINERY</div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Find the Machine for Your Farm.
          </h2>
          <p className="text-[#b0bec5] text-base sm:text-lg mb-10 leading-relaxed">
            Explore our range of tractors, power weeders, tillers, implements and agricultural equipment built for demanding real-world farming operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/machinery" className="btn-primary py-4 px-8 text-base text-decoration-none">
              <span>Browse Machinery</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/quote" className="btn-orange py-4 px-8 text-base text-decoration-none">
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
