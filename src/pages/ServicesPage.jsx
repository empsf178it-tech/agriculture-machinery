import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Cog, Headset, ArrowRight, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { getImage } from '../assets/images';

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    machine: 'PW900 Power Weeder',
    model: '2026 Model',
    issue: 'Routine Service / Oil Change',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0f1115] min-h-screen pb-16">
      
      {/* FULL WIDTH HERO SECTION */}
      <section className="relative w-full py-20 sm:py-24 border-b border-white/10 overflow-hidden bg-[#0a0c0e] mb-16">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage(6)}
            alt="FIELDCORE Technical Support"
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
              <span className="text-[#4caf50] font-bold">Services</span>
            </div>

            <div className="badge-orange mb-5 inline-flex items-center gap-2">AFTER-SALES & TECHNICAL SUPPORT</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Support that <span className="text-gradient-agri">keeps you moving.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
              FIELDCORE provides comprehensive technician service, original spare parts, operator training, and field repair assistance to ensure your machines stay working during crucial farm seasons.
            </p>
          </div>
        </div>

      </section>

      <div className="container-custom">

        {/* 4 SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          
          <div className="bg-[#1b1f24] border border-white/10 p-8 rounded-sm hover:border-[#4caf50] transition-colors">
            <div className="w-12 h-12 bg-[#2e7d32]/20 border border-[#4caf50] rounded-sm flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-[#4caf50]" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">Maintenance</h3>
            <p className="text-xs text-[#9ba8b5] leading-relaxed">
              Scheduled routine maintenance, engine oil changes, air filter cleaning, and pre-harvest equipment inspections.
            </p>
          </div>

          <div className="bg-[#1b1f24] border border-white/10 p-8 rounded-sm hover:border-[#4caf50] transition-colors">
            <div className="w-12 h-12 bg-[#e67e22]/20 border border-[#e67e22] rounded-sm flex items-center justify-center mb-6">
              <Cog className="w-6 h-6 text-[#e67e22]" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">Spare Parts</h3>
            <p className="text-xs text-[#9ba8b5] leading-relaxed">
              Access to genuine replacement tines, rotavator L-blades, drive belts, clutches, seals, and carburetor kits.
            </p>
          </div>

          <div className="bg-[#1b1f24] border border-white/10 p-8 rounded-sm hover:border-[#4caf50] transition-colors">
            <div className="w-12 h-12 bg-[#2e7d32]/20 border border-[#4caf50] rounded-sm flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6 text-[#4caf50]" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">Repairs</h3>
            <p className="text-xs text-[#9ba8b5] leading-relaxed">
              On-site field mechanics and authorized service center repair for transmission gearboxes and hydraulic systems.
            </p>
          </div>

          <div className="bg-[#1b1f24] border border-white/10 p-8 rounded-sm hover:border-[#4caf50] transition-colors">
            <div className="w-12 h-12 bg-[#e67e22]/20 border border-[#e67e22] rounded-sm flex items-center justify-center mb-6">
              <Headset className="w-6 h-6 text-[#e67e22]" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">Operator Support</h3>
            <p className="text-xs text-[#9ba8b5] leading-relaxed">
              Hands-on guidance for farmers regarding machine setup, safety cut-offs, depth adjustments, and winter storage.
            </p>
          </div>

        </div>

        {/* SERVICE REQUEST FORM SECTION */}
        <div className="bg-[#1b1f24] border border-white/10 rounded-sm p-8 lg:p-12 max-w-3xl mx-auto">
          
          <div className="text-center mb-10">
            <div className="badge-industrial mb-2">SERVICE & PARTS REQUEST</div>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-2">
              Submit a Service Enquiry
            </h2>
            <p className="text-xs text-[#8c9ba5]">
              Request maintenance scheduling, technical help, or genuine spare parts dispatch.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#2e7d32]/15 border border-[#4caf50] p-8 rounded-sm text-center">
              <CheckCircle2 className="w-12 h-12 text-[#4caf50] mx-auto mb-4" />
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                Service Request Received!
              </h3>
              <p className="text-sm text-[#b0bec5] max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.name}</strong>. Our technical support team has registered your service request for <strong>{formData.machine}</strong>. A service representative will call <strong>{formData.phone}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary text-xs py-2 px-4"
              >
                Submit Another Service Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Robert Miller"
                    className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                    Machine Model
                  </label>
                  <select
                    value={formData.machine}
                    onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                    className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                  >
                    <option value="FIELDCORE PW900 Power Weeder">FIELDCORE PW900 Power Weeder</option>
                    <option value="FIELDCORE MT600 Mini Tiller">FIELDCORE MT600 Mini Tiller</option>
                    <option value="FIELDCORE X120 Heavy Tractor">FIELDCORE X120 Heavy Tractor</option>
                    <option value="FIELDCORE X90 Utility Tractor">FIELDCORE X90 Utility Tractor</option>
                    <option value="FIELDCORE RT180 Rotavator">FIELDCORE RT180 Rotavator</option>
                    <option value="FIELDCORE AS500 Agricultural Sprayer">FIELDCORE AS500 Agricultural Sprayer</option>
                    <option value="FIELDCORE R400 Crop Reaper">FIELDCORE R400 Crop Reaper</option>
                    <option value="FIELDCORE T300 Thresher">FIELDCORE T300 Thresher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                    Service Type Required
                  </label>
                  <select
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                  >
                    <option value="Routine Service / Oil Change">Routine Scheduled Maintenance</option>
                    <option value="Spare Parts Replacement">Spare Parts Order (Tines/Belts/Gears)</option>
                    <option value="Engine / Transmission Repair">Technical Repair Assistance</option>
                    <option value="Operator Guidance">Operator Setup & Training</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                  Issue Description or Parts List
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your service need or specific spare parts required..."
                  className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-base justify-center">
                <span>Submit Service Request →</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
