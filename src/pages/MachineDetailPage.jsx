import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SpecificationTable from '../components/SpecificationTable';
import ProductCard from '../components/ProductCard';
import MachineComparisonModal from '../components/MachineComparisonModal';
import Machine360Viewer from '../components/Machine360Viewer';
import { machineryCatalog } from '../data/machineryData';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, ArrowRight, Download, CheckCircle2, Sliders, Shield, Zap, Scale, FileText } from 'lucide-react';

export default function MachineDetailPage() {
  const { id } = useParams();
  const { addToCompare } = useLanguage();
  const machineId = id || 'pw900';
  const machine = machineryCatalog.find(m => m.id === machineId) || machineryCatalog[0];

  const [activeTab, setActiveTab] = useState('performance');
  const [downloadNotice, setDownloadNotice] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Related machines
  const relatedMachines = machineryCatalog.filter(m => m.id !== machine.id).slice(0, 3);

  const handleBrochureDownload = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 4000);
  };

  const handleAddToCompare = () => {
    addToCompare(machine.id);
    setIsCompareOpen(true);
  };

  return (
    <div className="bg-[#0a0c0e] min-h-screen py-16">
      <div className="container-custom">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs text-[#8c9ba5] mb-8 font-['Space_Grotesk']">
          <Link to="/" className="hover:text-white text-decoration-none">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/machinery" className="hover:text-white text-decoration-none">Machinery</Link>
          <ChevronRight className="w-3 h-3 text-[#4caf50]" />
          <span className="text-[#4caf50] font-bold">{machine.name}</span>
        </div>

        {/* TOP HERO PRODUCT SHOWCASE */}
        <div className="bg-[#111418] border border-white/10 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 lg:p-12 items-start">
            
            {/* Left Interactive 360 & Component Hotspot Inspection */}
            <div className="lg:col-span-7">
              <Machine360Viewer machine={machine} />
            </div>

            {/* Right Product Overview & CTAs */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-['Space_Grotesk'] font-bold text-[#e67e22] tracking-widest uppercase block mb-2">
                  {machine.category.toUpperCase()} SERIES
                </span>

                <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  {machine.shortName || machine.name}
                </h1>

                <p className="text-sm font-semibold text-[#4caf50] mb-6">
                  {machine.tagline}
                </p>

                <p className="text-sm text-[#9ba8b5] leading-relaxed mb-8">
                  {machine.description}
                </p>

                {/* Key Spec Summary Pill */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-[#161a20] border border-white/10 rounded-sm mb-8 text-xs">
                  <div>
                    <span className="text-[#8c9ba5] block text-[10px] uppercase font-bold">Engine Power</span>
                    <strong className="text-[#e67e22] font-bold text-sm">{machine.powerHp}</strong>
                  </div>
                  <div>
                    <span className="text-[#8c9ba5] block text-[10px] uppercase font-bold">Working Width</span>
                    <strong className="text-[#4caf50] font-bold text-sm">{machine.workingWidth}</strong>
                  </div>
                  <div>
                    <span className="text-[#8c9ba5] block text-[10px] uppercase font-bold">Transmission</span>
                    <strong className="text-white">{machine.transmission}</strong>
                  </div>
                  <div>
                    <span className="text-[#8c9ba5] block text-[10px] uppercase font-bold">Operating Weight</span>
                    <strong className="text-white">{machine.weight}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link to={`/quote?machine=${machine.id}`} className="btn-primary w-full justify-center text-sm py-3.5 text-decoration-none">
                  <span>Request a Quote for {machine.shortName}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to={`/quote?machine=${machine.id}&bankQuote=true`}
                  className="w-full py-2.5 px-3 bg-[#e67e22]/15 hover:bg-[#e67e22] text-[#e67e22] hover:text-white border border-[#e67e22]/50 rounded-sm text-xs font-bold transition-all flex items-center justify-center gap-2 text-decoration-none"
                >
                  <FileText className="w-4 h-4" />
                  <span>Generate Official Bank Proforma Invoice (for SBI / Loan)</span>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCompare}
                    className="btn-secondary text-xs py-3 justify-center cursor-pointer"
                  >
                    <Scale className="w-4 h-4 text-[#4caf50]" />
                    <span>Compare Machine</span>
                  </button>

                  <button
                    onClick={handleBrochureDownload}
                    className="btn-secondary text-xs py-3 justify-center cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#e67e22]" />
                    <span>Brochure PDF</span>
                  </button>
                </div>

                {downloadNotice && (
                  <div className="p-3 bg-[#e67e22]/15 border border-[#e67e22] rounded-sm text-xs text-[#f39c12] flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Technical Spec Sheet PDF download started!</span>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* DETAIL SECTIONS TABS */}
        <div className="mb-16">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4 overflow-x-auto mb-8">
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-4 py-2 text-sm font-['Space_Grotesk'] font-bold rounded-sm transition-colors cursor-pointer ${
                activeTab === 'performance' ? 'bg-[#2e7d32] text-white border border-[#4caf50]' : 'text-[#8c9ba5] hover:text-white'
              }`}
            >
              Performance & Applications
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 text-sm font-['Space_Grotesk'] font-bold rounded-sm transition-colors cursor-pointer ${
                activeTab === 'specs' ? 'bg-[#2e7d32] text-white border border-[#4caf50]' : 'text-[#8c9ba5] hover:text-white'
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('controls')}
              className={`px-4 py-2 text-sm font-['Space_Grotesk'] font-bold rounded-sm transition-colors cursor-pointer ${
                activeTab === 'controls' ? 'bg-[#2e7d32] text-white border border-[#4caf50]' : 'text-[#8c9ba5] hover:text-white'
              }`}
            >
              Operator Controls
            </button>
          </div>

          {/* TAB 1: PERFORMANCE & APPLICATIONS */}
          {activeTab === 'performance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#161a20] border border-white/10 p-8 rounded-sm">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-4">
                  Engineering Capabilities
                </h3>
                <div className="space-y-3">
                  {machine.performance ? (
                    machine.performance.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-[#b0bec5]">
                        <CheckCircle2 className="w-4 h-4 text-[#4caf50] shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#8c9ba5]">Standard heavy field capability.</p>
                  )}
                </div>
              </div>

              <div className="bg-[#161a20] border border-white/10 p-8 rounded-sm">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-4">
                  Recommended Farm Applications
                </h3>
                <div className="space-y-3">
                  {machine.applications ? (
                    machine.applications.map((app, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-[#b0bec5]">
                        <Zap className="w-4 h-4 text-[#e67e22] shrink-0 mt-1" />
                        <span>{app}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#8c9ba5]">Field tillage and preparation.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL SPECIFICATIONS */}
          {activeTab === 'specs' && (
            <div>
              <SpecificationTable specifications={machine.specifications} />
            </div>
          )}

          {/* TAB 3: OPERATOR CONTROLS */}
          {activeTab === 'controls' && (
            <div className="bg-[#161a20] border border-white/10 p-8 rounded-sm max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Sliders className="w-6 h-6 text-[#4caf50]" />
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                  Operator Controls & Safety Architecture
                </h3>
              </div>
              <p className="text-sm text-[#b0bec5] leading-relaxed mb-6">
                {machine.controls}
              </p>

              <div className="p-4 bg-[#0a0c0e] border border-white/10 rounded-sm text-xs text-[#8c9ba5] flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#e67e22]" />
                <span>FIELDCORE machines include emergency cutoff safety switches and protective blade shrouds as standard equipment.</span>
              </div>
            </div>
          )}
        </div>

        {/* RELATED MACHINES */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
              Related Machinery & Equipment
            </h2>
            <Link to="/machinery" className="text-xs text-[#4caf50] hover:underline font-semibold text-decoration-none">
              Browse All ({machineryCatalog.length})
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedMachines.map((m) => (
              <ProductCard key={m.id} machine={m} />
            ))}
          </div>
        </div>

        {/* COMPARISON MODAL */}
        <MachineComparisonModal
          isOpen={isCompareOpen}
          onClose={() => setIsCompareOpen(false)}
        />

      </div>
    </div>
  );
}
