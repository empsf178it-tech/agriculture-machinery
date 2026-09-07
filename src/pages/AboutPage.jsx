import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Wrench, ChevronRight, CheckCircle2, Factory } from 'lucide-react';
import { getImage } from '../assets/images';

export default function AboutPage() {
  const values = [
    {
      title: "Reliability",
      desc: "Every engine, gearbox, and frame is built to perform consistently under heavy dust, mud, and intense heat."
    },
    {
      title: "Durability",
      desc: "Using high-tensile steel, Boron blade alloys, and sealed oil-bath housings to prevent early wear."
    },
    {
      title: "Practical Engineering",
      desc: "Designing straightforward mechanical controls that farmers can understand, operate, and service easily."
    },
    {
      title: "Farmer Support",
      desc: "Providing accessible technical help, rapid spare parts fulfillment, and dedicated operator guidance."
    }
  ];

  return (
    <div className="bg-[#0f1115] min-h-screen pb-16">
      
      {/* FULL WIDTH HERO SECTION */}
      <section className="relative w-full py-20 sm:py-24 border-b border-white/10 overflow-hidden bg-[#0a0c0e] mb-16">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage(18)}
            alt="FIELDCORE Engineering Facility"
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
              <ChevronRight className="w-3 h-3 text-[#4caf50]" />
              <span className="text-[#4caf50] font-bold">About Us</span>
            </div>

            <div className="badge-industrial mb-5 inline-flex items-center gap-2">ABOUT FIELDCORE</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Built around the <span className="text-gradient-agri">realities of farming.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
              FIELDCORE is an engineering-driven agricultural machinery manufacturer dedicated to building robust tractors, power weeders, mini tillers, rotavators, sprayers, and harvesting equipment for real farm work.
            </p>
          </div>
        </div>

      </section>

      <div className="container-custom">

        {/* OUR STORY & MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="badge-orange">OUR STORY</div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
              Practical Machinery for Hard-Working Fields.
            </h2>
            <p className="text-sm text-[#9ba8b5] leading-relaxed">
              Founded on the belief that farmers need honest, heavy-duty machinery built for longevity rather than overly delicate electronics, FIELDCORE developed a range of compact power weeders and utility tractors engineered specifically for tough soil conditions.
            </p>
            <p className="text-sm text-[#9ba8b5] leading-relaxed">
              From small vegetable holdings requiring nimble 7 HP tillers to commercial grain farms pulling 120 HP tractors with 3-bottom reversible ploughs, our focus remains unchanged: maximum drawbar pull, minimal downtime, and accessible spare parts.
            </p>

            <div className="p-6 bg-[#1b1f24] border-l-4 border-[#4caf50] rounded-sm">
              <span className="text-xs text-[#8c9ba5] font-['Space_Grotesk'] font-bold uppercase block mb-1">Our Mission</span>
              <p className="font-['Space_Grotesk'] text-lg font-bold text-white">
                "To make farm work more efficient through dependable machinery and practical engineering."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 h-[400px] rounded-sm overflow-hidden border border-white/10 img-zoom-container">
            <img
              src={getImage(38)}
              alt="FIELDCORE Machinery Engineering Facility"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

        {/* OUR VALUES */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-industrial mb-3">CORE PRINCIPLES</div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
              Built on Industrial Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-[#1b1f24] border border-white/10 p-8 rounded-sm hover:border-[#4caf50] transition-colors">
                <span className="text-xl font-['Space_Grotesk'] font-bold text-[#4caf50] block mb-3">0{i + 1}</span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-[#8c9ba5] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QUALITY & TESTING */}
        <div className="bg-[#1b1f24] border border-white/10 rounded-sm p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 h-80 rounded-sm overflow-hidden border border-white/10 img-zoom-container">
              <img
                src={getImage(15)}
                alt="FIELDCORE Tractor Assembly"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="badge-orange">QUALITY ASSURANCE</div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
                Rigorously Field Tested
              </h2>
              <p className="text-sm text-[#9ba8b5] leading-relaxed">
                Before leaving our production line, every FIELDCORE tractor, power weeder, and implement undergoes continuous load testing, gear torque checks, and hydraulic pressure inspection.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
                  <span>100% Load & Torque Bench Testing</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
                  <span>Dust & Water Slurry Seal Inspections</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
                  <span>Standard 2-Year Chassis Structural Warranty</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
