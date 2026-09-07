import { useState } from 'react';
import { Link } from 'react-router-dom';
import { implementsCatalog, compatibilityFlow } from '../data/implementsData';
import { ArrowRight, ChevronRight, CheckCircle2, Cog, Layers } from 'lucide-react';
import { getImage } from '../assets/images';

export default function ImplementsPage() {
  const [selectedFlow, setSelectedFlow] = useState(0);

  return (
    <div className="bg-[#0f1115] min-h-screen pb-16">
      
      {/* FULL WIDTH HERO SECTION */}
      <section className="relative w-full py-20 sm:py-24 border-b border-white/10 overflow-hidden bg-[#0a0c0e] mb-16">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage(4)}
            alt="Agricultural Tillage Implements"
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
              <span className="text-[#4caf50] font-bold">Implements</span>
            </div>

            <div className="badge-industrial mb-5 inline-flex items-center gap-2">AGRICULTURAL IMPLEMENTS</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Matched implements for <span className="text-gradient-agri">total field productivity.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
              Explore our line of heavy rotavators, cultivators, seed drills, reversible ploughs, trailers, disc harrows, ridgers, and land levelers.
            </p>
          </div>
        </div>

      </section>

      <div className="container-custom">

        {/* COMPATIBILITY WORKFLOW DEMO SECTION */}
        <div className="bg-[#1b1f24] border border-white/10 rounded-sm p-8 lg:p-12 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge-orange mb-3">COMPATIBILITY MATRIX</div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
              Tractor → Implement → Application
            </h2>
            <p className="text-xs text-[#8c9ba5] mt-2">Interactive matching example for optimal fuel & speed</p>
          </div>

          {/* Selector Tabs */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
            {compatibilityFlow.map((flow, i) => (
              <button
                key={i}
                onClick={() => setSelectedFlow(i)}
                className={`px-4 py-2.5 rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase transition-colors ${
                  selectedFlow === i
                    ? 'bg-[#2e7d32] text-white border border-[#4caf50]'
                    : 'bg-[#15181d] text-[#8c9ba5] hover:text-white border border-white/10'
                }`}
              >
                Match 0{i + 1}: {flow.implement}
              </button>
            ))}
          </div>

          {/* Active Flow Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-[#15181d] p-8 border border-white/10 rounded-sm">
            <div className="p-6 bg-[#1b1f24] border border-white/10 rounded-sm text-center">
              <span className="text-[10px] text-[#8c9ba5] font-bold uppercase block mb-1">Step 01: Power Source</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#4caf50]">
                {compatibilityFlow[selectedFlow].tractor}
              </h4>
            </div>

            <div className="p-6 bg-[#1b1f24] border border-[#2e7d32] rounded-sm text-center">
              <span className="text-[10px] text-[#e67e22] font-bold uppercase block mb-1">Step 02: Implement Attached</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                {compatibilityFlow[selectedFlow].implement}
              </h4>
            </div>

            <div className="p-6 bg-[#1b1f24] border border-white/10 rounded-sm text-center">
              <span className="text-[10px] text-[#8c9ba5] font-bold uppercase block mb-1">Step 03: Field Result</span>
              <h4 className="font-['Space_Grotesk'] text-base font-bold text-white mb-2">
                {compatibilityFlow[selectedFlow].application}
              </h4>
              <p className="text-xs text-[#8c9ba5]">
                {compatibilityFlow[selectedFlow].result}
              </p>
            </div>
          </div>
        </div>

        {/* IMPLEMENTS CATALOG GRID */}
        <div>
          <div className="mb-10">
            <div className="badge-industrial mb-2">IMPLEMENTS CATALOG</div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white">
              All Field Implements ({implementsCatalog.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementsCatalog.map((impl) => (
              <div key={impl.id} className="card-machinery bg-[#1b1f24] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="h-48 overflow-hidden img-zoom-container relative">
                    <img
                      src={impl.image}
                      alt={impl.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0f1115]/80 backdrop-blur-md px-2.5 py-1 rounded-sm text-[10px] font-bold text-[#4caf50] uppercase">
                      {impl.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">
                      {impl.name}
                    </h3>
                    <p className="text-xs text-[#9ba8b5] leading-relaxed mb-4">
                      {impl.description}
                    </p>

                    <div className="space-y-2 text-xs border-t border-white/10 pt-4">
                      <div className="flex justify-between">
                        <span className="text-[#8c9ba5]">Required Power:</span>
                        <strong className="text-white">{impl.hpRequired}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8c9ba5]">Working Width:</span>
                        <strong className="text-[#4caf50]">{impl.workingWidth}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link to={`/quote?implement=${impl.name}`} className="btn-secondary w-full justify-center text-xs py-2.5 text-decoration-none">
                    <span>Enquire About Implement</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
