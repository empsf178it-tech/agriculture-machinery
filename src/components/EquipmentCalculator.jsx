import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, ArrowRight, CheckCircle2, Zap, Droplet, Sprout, Layers, IndianRupee, ShieldCheck, Percent } from 'lucide-react';
import { machineryCatalog } from '../data/machineryData';

export default function EquipmentCalculator() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('subsidy'); // 'subsidy' or 'land'

  // Tab 1 (Land Recommendation) states
  const [farmSize, setFarmSize] = useState('5 - 15 Acres');
  const [cropType, setCropType] = useState('Vegetables');
  const [soilType, setSoilType] = useState('Loamy Soil');

  // Tab 2 (Subsidy & EMI) states
  const [selectedMachineId, setSelectedMachineId] = useState('pw900');
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [farmerCategory, setFarmerCategory] = useState('smallMarginal'); // 'general', 'smallMarginal', 'women'
  const [tenureMonths, setTenureMonths] = useState(36);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [showDocChecklist, setShowDocChecklist] = useState(false);

  const statesList = [
    'Tamil Nadu', 'Maharashtra', 'Punjab', 'Karnataka', 'Andhra Pradesh', 
    'Telangana', 'Gujarat', 'Madhya Pradesh', 'Uttar Pradesh', 'Rajasthan', 'Kerala', 'Haryana'
  ];

  const selectedMachine = machineryCatalog.find((m) => m.id === selectedMachineId) || machineryCatalog[0];
  const baseCost = selectedMachine.priceNumber || 85000;

  // Subsidy calculations (40% for general, 50% for small/marginal & women)
  const subsidyPercent = farmerCategory === 'general' ? 0.40 : 0.50;
  const subsidyAmount = Math.round(baseCost * subsidyPercent);
  const netCost = baseCost - subsidyAmount;

  // EMI Calculations
  const downPayment = Math.round((netCost * downPaymentPercent) / 100);
  const loanPrincipal = netCost - downPayment;
  const annualInterestRate = 0.085; // 8.5%
  const monthlyRate = annualInterestRate / 12;
  const emi = loanPrincipal > 0
    ? Math.round(
        (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
          (Math.pow(1 + monthlyRate, tenureMonths) - 1)
      )
    : 0;

  // Recommendation engine logic
  const getRecommendation = () => {
    if (farmSize === 'Under 5 Acres' || cropType === 'Vegetables') {
      return {
        primaryMachine: machineryCatalog.find(m => m.id === 'pw900') || machineryCatalog[0],
        implement: '24 Forged Tines + Ridger Attachment',
        hpNeeded: '7.0 - 9.0 HP',
        fuelEst: '0.7 - 0.9 L / Hr',
        timeEst: '1.5 Hours / Acre',
        benefit: 'Ideal for narrow row-crop weeding and raised vegetable bed preparation.'
      };
    } else if (cropType === 'Paddy / Rice' || soilType === 'Wet / Muddy Field') {
      return {
        primaryMachine: machineryCatalog.find(m => m.id === 'rt180') || machineryCatalog[2],
        implement: 'Puddle Wheel Set + RT180 PTO Rotavator',
        hpNeeded: '45 - 60 HP Compatible',
        fuelEst: '3.5 - 4.2 L / Hr',
        timeEst: '45 Mins / Acre',
        benefit: 'Pulverizes clods and incorporates stubble in wet paddy mud in a single pass.'
      };
    } else if (farmSize === '50+ Acres' || soilType === 'Hard Clay Soil') {
      return {
        primaryMachine: machineryCatalog.find(m => m.id === 'x120') || machineryCatalog[3],
        implement: 'Hydraulic 3-Bottom Reversible Mouldboard Plough',
        hpNeeded: '120 HP Turbo Diesel',
        fuelEst: '6.0 - 7.5 L / Hr',
        timeEst: '25 Mins / Acre',
        benefit: 'Maximum heavy drawbar traction for deep hardpan shattering and subsoiling.'
      };
    } else {
      return {
        primaryMachine: machineryCatalog.find(m => m.id === 'x90') || machineryCatalog[4],
        implement: 'RT180 Rotavator + C200 Cultivator',
        hpNeeded: '90 HP Utility',
        fuelEst: '4.0 - 5.0 L / Hr',
        timeEst: '35 Mins / Acre',
        benefit: 'Versatile power output for planting, tillage, spraying, and trailer transport.'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="bg-[#15181e] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Background Glow Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2e7d32]/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
        <div className="badge-industrial mb-3 inline-flex items-center gap-2">
          <Calculator className="w-4 h-4 text-[#4caf50]" />
          <span>AGRICULTURAL CALCULATOR SUITE</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          {t('calculator.title')}
        </h2>
        <p className="text-xs sm:text-sm text-[#8c9ba5] leading-relaxed">
          {t('calculator.subtitle')}
        </p>
      </div>

      {/* Tab Controls */}
      <div className="flex justify-center mb-8 relative z-10">
        <div className="bg-[#0a0c0e] p-1.5 rounded-sm border border-white/10 flex gap-2">
          <button
            onClick={() => setActiveTab('subsidy')}
            className={`px-5 py-2.5 rounded-sm text-xs font-['Space_Grotesk'] font-bold transition-all cursor-pointer ${
              activeTab === 'subsidy'
                ? 'bg-[#2e7d32] text-white shadow-md border border-[#4caf50]'
                : 'text-[#8c9ba5] hover:text-white'
            }`}
          >
            {t('calculator.subsidyTab')}
          </button>
          <button
            onClick={() => setActiveTab('land')}
            className={`px-5 py-2.5 rounded-sm text-xs font-['Space_Grotesk'] font-bold transition-all cursor-pointer ${
              activeTab === 'land'
                ? 'bg-[#2e7d32] text-white shadow-md border border-[#4caf50]'
                : 'text-[#8c9ba5] hover:text-white'
            }`}
          >
            Crop & Equipment Matcher
          </button>
        </div>
      </div>

      {/* TAB 1: SUBSIDY & EMI CALCULATOR */}
      {activeTab === 'subsidy' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Controls */}
          <div className="lg:col-span-6 bg-[#0a0c0e] p-6 sm:p-8 rounded-sm border border-white/10 space-y-5">
            <div>
              <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#4caf50] uppercase mb-2">
                01. {t('calculator.selectMachine') || 'Select Machinery Model'}
              </label>
              <select
                value={selectedMachineId}
                onChange={(e) => setSelectedMachineId(e.target.value)}
                className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
              >
                {machineryCatalog.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.powerHp}) - Est. ₹{m.priceNumber?.toLocaleString('en-IN') || '85,000'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#388e3c] uppercase mb-2">
                02. Select Domicile State / Region
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
              >
                {statesList.map((st) => (
                  <option key={st} value={st}>{st} (SMAM Scheme Active)</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#e67e22] uppercase mb-2">
                03. {t('calculator.category')}
              </label>
              <select
                value={farmerCategory}
                onChange={(e) => setFarmerCategory(e.target.value)}
                className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
              >
                <option value="general">{t('calculator.general')} (40% Subsidy)</option>
                <option value="smallMarginal">{t('calculator.smallMarginal')} (50% Subsidy)</option>
                <option value="womenFarmer">{t('calculator.womenFarmer')} (50% Subsidy)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2">
                04. {t('calculator.tenure')}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[12, 24, 36, 48].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setTenureMonths(months)}
                    className={`py-2 text-xs font-bold rounded-sm border transition-all cursor-pointer ${
                      tenureMonths === months
                        ? 'bg-[#e67e22] border-[#e67e22] text-white'
                        : 'bg-[#15181d] border-white/10 text-[#8c9ba5] hover:text-white'
                    }`}
                  >
                    {months} M
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-[#8c9ba5]">{t('calculator.downPayment')}</span>
                <span className="text-[#4caf50]">{downPaymentPercent}% (₹{downPayment.toLocaleString('en-IN')})</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#4caf50] cursor-pointer"
              />
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-6 bg-[#161a20] border border-[#4caf50]/40 p-6 sm:p-8 rounded-sm shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
                <span className="badge-industrial text-[10px]">SMAM SCHEME - {selectedState.toUpperCase()}</span>
                <span className="text-xs text-[#4caf50] font-bold">Subsidy Rate: {subsidyPercent * 100}%</span>
              </div>

              {/* Machinery Pricing Summary */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between items-center text-[#8c9ba5]">
                  <span>{t('calculator.machinePrice')}:</span>
                  <strong className="text-white">₹{baseCost.toLocaleString('en-IN')}</strong>
                </div>

                <div className="flex justify-between items-center text-[#e67e22] p-2.5 bg-[#e67e22]/10 border border-[#e67e22]/30 rounded-sm">
                  <span className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    {t('calculator.estSubsidy')}:
                  </span>
                  <strong className="text-[#e67e22] text-base">- ₹{subsidyAmount.toLocaleString('en-IN')}</strong>
                </div>

                <div className="flex justify-between items-center text-[#4caf50] p-2.5 bg-[#2e7d32]/10 border border-[#4caf50]/30 rounded-sm">
                  <span className="font-bold">{t('calculator.netCost')}:</span>
                  <strong className="text-lg font-extrabold">₹{netCost.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              {/* EMI Box */}
              <div className="p-4 bg-[#0a0c0e] border border-white/10 rounded-sm mb-6">
                <span className="text-[10px] text-[#8c9ba5] block uppercase font-bold mb-1">
                  {t('calculator.monthlyEmi')}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#4caf50]">
                    ₹{emi.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#8c9ba5]">/ month @ 8.5% interest</span>
                </div>
                <p className="text-[11px] text-[#e67e22] mt-2 italic">
                  * Estimated savings under {selectedState} Agriculture Department SMAM allocation.
                </p>
              </div>

              {/* Document Checklist Trigger */}
              <button
                type="button"
                onClick={() => setShowDocChecklist(!showDocChecklist)}
                className="w-full py-2 px-3 mb-4 bg-[#15181d] border border-white/10 hover:border-[#4caf50] rounded-sm text-xs font-bold text-[#b0bec5] hover:text-white flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
                  <span>View Required SMAM Subsidy Documents</span>
                </span>
                <span className="text-[#4caf50]">{showDocChecklist ? '▲ Hide' : '▼ View Checklist'}</span>
              </button>

              {showDocChecklist && (
                <div className="p-3.5 bg-[#0a0c0e] border border-[#4caf50]/40 rounded-sm mb-6 text-xs text-[#b0bec5] space-y-1.5 animate-fade-in">
                  <p className="font-bold text-white mb-1">📋 Sub-Mission Application Document Checklist:</p>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-[#4caf50]">✓</span> Aadhaar Card linked with Mobile No.
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-[#4caf50]">✓</span> Land Ownership Record (Patta / Chitta / 7-12 Ext).
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-[#4caf50]">✓</span> Bank Passbook copy with IFSC Code.
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-[#4caf50]">✓</span> FIELDCORE Authorized Proforma Quotation.
                  </div>
                </div>
              )}
            </div>

            <Link
              to={`/quote?machine=${selectedMachine.id}&state=${encodeURIComponent(selectedState)}`}
              className="btn-primary w-full justify-center text-xs py-3.5 text-decoration-none"
            >
              <span>Apply for Subsidy Quote ({selectedMachine.shortName})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      )}

      {/* TAB 2: CROP & LAND MATCHER */}
      {activeTab === 'land' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-6 bg-[#0a0c0e] p-6 sm:p-8 rounded-sm border border-white/10">
            <div>
              <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#4caf50] uppercase mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>01. Farm Acreage</span>
              </label>
              <select
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
                className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
              >
                <option value="Under 5 Acres">Under 5 Acres (Smallholding / Garden)</option>
                <option value="5 - 15 Acres">5 - 15 Acres (Medium Crop Plot)</option>
                <option value="15 - 50 Acres">15 - 50 Acres (Commercial Enterprise)</option>
                <option value="50+ Acres">50+ Acres (Broadacre / Custom Hiring)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#e67e22] uppercase mb-2 flex items-center gap-2">
                <Sprout className="w-4 h-4" />
                <span>02. Primary Crop</span>
              </label>
              <select
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
              >
                <option value="Vegetables">Vegetables & Row Horticulture</option>
                <option value="Sugarcane / Maize">Sugarcane, Maize & Cotton</option>
                <option value="Paddy / Rice">Paddy Rice (Wetland)</option>
                <option value="Wheat / Grains">Wheat, Soy & Broadacre Grains</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-['Space_Grotesk'] font-bold text-[#8c9ba5] uppercase mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>03. Soil Condition</span>
              </label>
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full bg-[#15181d] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4caf50]"
              >
                <option value="Loamy Soil">Loamy Soil (Normal Tillage)</option>
                <option value="Hard Clay Soil">Hard Clay Soil (High Resistance)</option>
                <option value="Wet / Muddy Field">Wet / Muddy Field (Puddling)</option>
                <option value="Sandy Loam">Sandy Loam (Light Tillage)</option>
              </select>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#161a20] border border-[#4caf50]/40 p-6 sm:p-8 rounded-sm flex flex-col justify-between h-full shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
                <span className="badge-industrial text-[10px]">RECOMMENDED PACKAGE</span>
                <span className="text-xs text-[#e67e22] font-bold">HP Required: {rec.hpNeeded}</span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                {rec.primaryMachine.name}
              </h3>

              <p className="text-xs text-[#8c9ba5] leading-relaxed mb-6">
                {rec.benefit}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-[#0a0c0e] border border-white/10 rounded-sm text-xs">
                  <span className="text-[10px] text-[#8c9ba5] block uppercase font-bold">Implement Attachment</span>
                  <strong className="text-white block mt-0.5">{rec.implement}</strong>
                </div>

                <div className="p-3 bg-[#0a0c0e] border border-white/10 rounded-sm text-xs">
                  <span className="text-[10px] text-[#8c9ba5] block uppercase font-bold flex items-center gap-1">
                    <Droplet className="w-3 h-3 text-[#4caf50]" />
                    Fuel Estimate
                  </span>
                  <strong className="text-[#4caf50] block mt-0.5">{rec.fuelEst}</strong>
                </div>

                <div className="p-3 bg-[#0a0c0e] border border-white/10 rounded-sm text-xs">
                  <span className="text-[10px] text-[#8c9ba5] block uppercase font-bold">Work Efficiency</span>
                  <strong className="text-white block mt-0.5">{rec.timeEst}</strong>
                </div>

                <div className="p-3 bg-[#0a0c0e] border border-white/10 rounded-sm text-xs">
                  <span className="text-[10px] text-[#8c9ba5] block uppercase font-bold">Target Farm Size</span>
                  <strong className="text-[#e67e22] block mt-0.5">{farmSize}</strong>
                </div>
              </div>
            </div>

            <Link
              to={`/quote?machine=${rec.primaryMachine.id}`}
              className="btn-primary w-full justify-center text-xs py-3 text-decoration-none"
            >
              <span>Request Quote for {rec.primaryMachine.shortName}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}
