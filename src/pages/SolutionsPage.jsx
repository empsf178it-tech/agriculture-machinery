import { Link } from 'react-router-dom';
import { solutionsData } from '../data/solutionsData';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { getImage } from '../assets/images';

export default function SolutionsPage() {
  return (
    <div className="bg-[#0f1115] min-h-screen pb-16">
      
      {/* FULL WIDTH HERO SECTION */}
      <section className="relative w-full py-20 sm:py-24 border-b border-white/10 overflow-hidden bg-[#0a0c0e] mb-16">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage(57)}
            alt="Farming Solutions"
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
              <span className="text-[#4caf50] font-bold">Solutions</span>
            </div>

            <div className="badge-industrial mb-5 inline-flex items-center gap-2">APPLICATION MATCHING</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Equipment matched to <span className="text-gradient-agri">the work.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
              Every farming stage requires specific implement torque, working width, and power delivery. Explore how FIELDCORE machinery is paired with real farm operations.
            </p>
          </div>
        </div>

      </section>

      <div className="container-custom">

        {/* SOLUTIONS STACK */}
        <div className="space-y-16">
          {solutionsData.map((sol, index) => (
            <div
              key={sol.id}
              id={sol.id}
              className="bg-[#1b1f24] border border-white/10 rounded-sm overflow-hidden p-8 lg:p-12 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Text Content */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="badge-orange mb-3">STAGE 0{index + 1}</span>
                  <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-2">
                    {sol.title}
                  </h2>
                  <p className="text-sm font-semibold text-[#4caf50] mb-4">
                    {sol.subtitle}
                  </p>

                  <p className="text-sm text-[#9ba8b5] leading-relaxed mb-6">
                    {sol.overview}
                  </p>

                  <div className="p-4 bg-[#15181d] border border-white/10 rounded-sm mb-6 text-xs text-[#b0bec5]">
                    <strong className="text-white block mb-1">FIELDCORE Solution Strategy:</strong>
                    {sol.solutionDetails}
                  </div>

                  {/* Recommended Machines Pill List */}
                  <div className="space-y-2 mb-8">
                    <span className="text-xs text-[#8c9ba5] uppercase font-bold tracking-wider block mb-2">
                      Recommended FIELDCORE Equipment
                    </span>
                    {sol.recommendedMachines.map((m, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-[#15181d] rounded-sm border border-white/5 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
                          <span className="font-semibold text-white">{m.name}</span>
                        </div>
                        <span className="text-[#8c9ba5] italic">{m.role}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/quote?solution=${sol.id}`} className="btn-primary text-xs py-2.5 px-5 text-decoration-none">
                    <span>Enquire Solution Equipment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual Image */}
                <div className={`lg:col-span-5 h-80 rounded-sm overflow-hidden border border-white/10 img-zoom-container ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
