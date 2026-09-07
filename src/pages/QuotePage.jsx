import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck, ShieldCheck } from 'lucide-react';

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const preSelectedMachine = searchParams.get('machine') || '';
  const preSelectedCategory = searchParams.get('category') || 'Power Weeders';

  const [formData, setFormData] = useState({
    fullName: '',
    farmName: '',
    phone: '',
    email: '',
    location: '',
    category: preSelectedCategory,
    machineModel: preSelectedMachine || 'FIELDCORE PW900 Power Weeder',
    farmSize: '5 - 15 Acres',
    application: 'Weed Management & Row Cultivation',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedMachine) {
      setFormData(prev => ({ ...prev, machineModel: preSelectedMachine }));
    }
  }, [preSelectedMachine]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#0f1115] min-h-screen py-16">
      <div className="container-custom">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs text-[#8c9ba5] mb-8 font-['Space_Grotesk']">
          <Link to="/" className="hover:text-white text-decoration-none">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#4caf50]" />
          <span className="text-[#4caf50] font-bold">Request a Quote</span>
        </div>

        {/* HERO BANNER */}
        <div className="bg-[#15181d] border border-white/10 rounded-sm p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="badge-orange mb-4">MACHINERY QUOTATION</div>
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Let's find the right machine for your farm.
            </h1>
            <p className="text-[#9ba8b5] text-base leading-relaxed">
              Fill out the enquiry form below to receive pricing options, technical specification datasheets, implement compatibility advice, and dealer availability.
            </p>
          </div>
        </div>

        {/* ENQUIRY FORM CONTAINER */}
        <div className="bg-[#1b1f24] border border-white/10 rounded-sm p-8 lg:p-12 max-w-4xl mx-auto">
          
          {isSubmitted ? (
            <div className="bg-[#15181d] border border-[#4caf50] p-8 lg:p-10 rounded-sm text-left shadow-2xl relative animate-fade-in print:bg-white print:text-black print:p-0 print:border-none">
              
              {/* Header Badge & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 print:border-black/20">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2e7d32]/20 border border-[#4caf50] rounded-full text-xs font-bold text-[#4caf50] print:text-green-800">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>OFFICIAL BANK LOAN PROFORMA INVOICE</span>
                  </div>
                  <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white mt-2 print:text-black">
                    FIELDCORE Agricultural Machinery Ltd.
                  </h2>
                  <p className="text-xs text-[#8c9ba5] print:text-gray-600">
                    Authorized Factory Invoice for SBI / NABARD / Bank Loan Subsidy Approval
                  </p>
                </div>

                <div className="flex items-center gap-3 print:hidden">
                  <button
                    onClick={() => window.print()}
                    className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2 cursor-pointer"
                  >
                    <span>🖨️ Print / Save PDF Invoice</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary text-xs py-2.5 px-4 cursor-pointer"
                  >
                    Edit Form
                  </button>
                </div>
              </div>

              {/* Invoice Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#0a0c0e] border border-white/10 rounded-sm mb-6 text-xs print:bg-gray-100 print:border-gray-300 print:text-black">
                <div>
                  <span className="text-[10px] text-[#8c9ba5] block font-bold uppercase print:text-gray-600">Invoice No:</span>
                  <strong className="text-white font-mono text-sm print:text-black">FC-PRF-2026-8941</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#8c9ba5] block font-bold uppercase print:text-gray-600">Issue Date:</span>
                  <strong className="text-[#4caf50] print:text-green-800">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#8c9ba5] block font-bold uppercase print:text-gray-600">Customer Name:</span>
                  <strong className="text-white print:text-black">{formData.fullName}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#8c9ba5] block font-bold uppercase print:text-gray-600">Farm / Location:</span>
                  <strong className="text-[#e67e22] print:text-amber-800">{formData.location || 'Coimbatore Region'}</strong>
                </div>
              </div>

              {/* Itemized Pricing Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-xs border border-white/10 print:border-gray-300">
                  <thead className="bg-[#0a0c0e] text-[#4caf50] uppercase font-bold print:bg-gray-200 print:text-black">
                    <tr>
                      <th className="p-3">Item Description</th>
                      <th className="p-3">HP / Category</th>
                      <th className="p-3">Farm Size</th>
                      <th className="p-3 text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 print:divide-gray-300 text-[#b0bec5] print:text-black">
                    <tr>
                      <td className="p-3 font-bold text-white print:text-black">
                        {formData.machineModel}
                        <span className="block text-[10px] text-[#8c9ba5] print:text-gray-600 font-normal">
                          Includes 2-Year Engine & Gearbox Warranty + Heavy Tillage Tool Kit
                        </span>
                      </td>
                      <td className="p-3">{formData.category}</td>
                      <td className="p-3">{formData.farmSize}</td>
                      <td className="p-3 text-right font-mono font-bold text-white print:text-black">₹98,000</td>
                    </tr>
                    <tr className="bg-[#e67e22]/10 print:bg-amber-50 text-[#e67e22] print:text-amber-900 font-bold">
                      <td colSpan="3" className="p-3">Estimated SMAM Govt Subsidy Benefit (50% Grant Allocation)</td>
                      <td className="p-3 text-right font-mono text-base">- ₹49,000</td>
                    </tr>
                    <tr className="bg-[#2e7d32]/10 print:bg-green-50 text-[#4caf50] print:text-green-900 font-bold text-sm">
                      <td colSpan="3" className="p-3">Net Payable Amount for Bank Loan Disbursal</td>
                      <td className="p-3 text-right font-mono text-lg">₹49,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Digital Stamp & Bank Authorization Notice */}
              <div className="flex flex-col sm:flex-row justify-between items-end gap-6 pt-4 border-t border-white/10 print:border-gray-300">
                <div className="text-[11px] text-[#8c9ba5] print:text-gray-600 max-w-md space-y-1">
                  <p className="font-bold text-white print:text-black">📌 Bank Officer Instructions:</p>
                  <p>This proforma invoice is valid for 90 days from issuance for processing agricultural machinery credit loans under SMAM / NABARD subsidy schemes.</p>
                </div>

                <div className="text-center p-3 border border-[#4caf50]/40 rounded-sm bg-[#0a0c0e] print:bg-white print:border-gray-400">
                  <div className="w-20 h-20 mx-auto rounded-full border-2 border-dashed border-[#4caf50] flex flex-col items-center justify-center text-[9px] text-[#4caf50] font-bold uppercase print:text-green-800">
                    <ShieldCheck className="w-5 h-5 mb-0.5" />
                    <span>FIELDCORE</span>
                    <span>VERIFIED</span>
                  </div>
                  <span className="text-[9px] text-[#8c9ba5] print:text-gray-500 block mt-1">Authorized Seal & Signature</span>
                </div>
              </div>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* SECTION 1: PERSONAL / FARM CONTACT */}
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                  <span className="text-[#4caf50]">01.</span> Contact & Location Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Johnathan Miller"
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Farm or Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.farmName}
                      onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                      placeholder="e.g. Green Valley Farm Enterprise"
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
                      placeholder="+1 (555) 234-5678"
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@farmdomain.com"
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Location / Region / Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Central Valley, California / District region"
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: MACHINE & FARM PARAMETERS */}
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                  <span className="text-[#e67e22]">02.</span> Machine & Farm Requirements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Machine Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    >
                      <option value="Power Weeders">Power Weeders</option>
                      <option value="Tractors">Tractors</option>
                      <option value="Mini Tillers">Mini Tillers</option>
                      <option value="Rotavators">Rotavators</option>
                      <option value="Cultivators">Cultivators</option>
                      <option value="Sprayers">Sprayers</option>
                      <option value="Harvesters & Reapers">Harvesters & Reapers</option>
                      <option value="Implements">Implements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Target Machine Model
                    </label>
                    <input
                      type="text"
                      value={formData.machineModel}
                      onChange={(e) => setFormData({ ...formData, machineModel: e.target.value })}
                      placeholder="e.g. FIELDCORE PW900 Power Weeder"
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Approximate Farm Size
                    </label>
                    <select
                      value={formData.farmSize}
                      onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })}
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    >
                      <option value="Under 5 Acres">Under 5 Acres (Horticulture / Smallholding)</option>
                      <option value="5 - 15 Acres">5 - 15 Acres (Medium Farm)</option>
                      <option value="15 - 50 Acres">15 - 50 Acres (Commercial Crop Enterprise)</option>
                      <option value="50+ Acres">50+ Acres (Broadacre / Custom Hiring)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                      Primary Application
                    </label>
                    <select
                      value={formData.application}
                      onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                      className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                    >
                      <option value="Weed Management & Row Cultivation">Weed Management & Row Cultivation</option>
                      <option value="Primary Soil Tillage & Plowing">Primary Soil Tillage & Plowing</option>
                      <option value="Secondary Seedbed Preparation">Secondary Seedbed Preparation</option>
                      <option value="Crop Care Spraying">Crop Care & Chemical Spraying</option>
                      <option value="Reaping & Grain Harvesting">Reaping & Grain Harvesting</option>
                      <option value="Post-Harvest Threshing">Post-Harvest Threshing</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                  Additional Notes or Specific Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify soil conditions, crop types, preferred attachments, or dealer inquiries..."
                  className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-base justify-center">
                <span>Request a Quote →</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
