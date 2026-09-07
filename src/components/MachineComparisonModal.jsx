import { useLanguage } from '../context/LanguageContext';
import { machineryCatalog } from '../data/machineryData';
import { X, CheckCircle2, ArrowRight, Zap, Gauge, Layers, Info, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MachineComparisonModal({ isOpen, onClose }) {
  const { comparedIds, setComparedIds, t } = useLanguage();

  if (!isOpen) return null;

  const selectedIds = comparedIds.length > 0 ? comparedIds : ['pw900', 'mt600'];

  const selectedMachines = selectedIds
    .map(id => machineryCatalog.find(m => m.id === id))
    .filter(Boolean);

  const handleSelectSlot = (index, newId) => {
    const updated = [...selectedIds];
    updated[index] = newId;
    setComparedIds(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#15181e] border border-white/10 rounded-sm max-w-5xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-sm text-[#8c9ba5] hover:text-white hover:bg-white/10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="badge-industrial mb-2">COMPARISON MATRIX</div>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
          {t('comparison.matrixTitle')}
        </h2>
        <p className="text-xs text-[#8c9ba5] mb-8">
          Compare horsepower ratings, working widths, transmission systems, and government subsidy estimates across up to 3 FIELDCORE machines.
        </p>

        {/* Machine Selectors Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[0, 1, 2].map((slotIndex) => (
            <div key={slotIndex} className="p-3 bg-[#0a0c0e] border border-white/10 rounded-sm">
              <label className="block text-[10px] text-[#4caf50] uppercase font-bold mb-1">
                Machine Slot 0{slotIndex + 1}
              </label>
              <select
                value={selectedIds[slotIndex] || ''}
                onChange={(e) => handleSelectSlot(slotIndex, e.target.value)}
                className="w-full bg-[#15181d] border border-white/10 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4caf50]"
              >
                <option value="">-- Select Machine --</option>
                {machineryCatalog.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.powerHp})
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Side-by-Side Spec Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-[#0a0c0e]">
                <th className="p-4 text-left font-['Space_Grotesk'] text-[#8c9ba5] uppercase border-b border-white/10">Feature / Parameter</th>
                {selectedMachines.map((m) => (
                  <th key={m.id} className="p-4 text-left border-b border-white/10 min-w-[200px]">
                    <div className="font-['Space_Grotesk'] font-bold text-sm text-white">{m.shortName}</div>
                    <span className="text-[10px] text-[#4caf50]">{m.category}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              
              {/* Image Row */}
              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">Machine Visual</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4">
                    <div className="h-28 rounded-sm overflow-hidden border border-white/10">
                      <img src={m.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  </td>
                ))}
              </tr>

              {/* Power Rating */}
              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">{t('common.power')}</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4 font-bold text-[#e67e22] text-sm">{m.powerHp}</td>
                ))}
              </tr>

              {/* Working Width */}
              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">{t('common.workingWidth')}</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4 font-bold text-[#4caf50]">{m.workingWidth}</td>
                ))}
              </tr>

              {/* Fuel & Transmission */}
              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">Fuel Type</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4 text-white">{m.fuelType}</td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">{t('common.transmission')}</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4 text-white">{m.transmission}</td>
                ))}
              </tr>

              {/* Weight */}
              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">{t('common.weight')}</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4 text-white">{m.weight}</td>
                ))}
              </tr>

              {/* Estimated Price Range */}
              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">{t('common.priceEst')}</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4 font-bold text-[#f39c12]">{m.priceEstimate || 'On Request'}</td>
                ))}
              </tr>

              {/* Action Buttons */}
              <tr>
                <td className="p-4 font-semibold text-[#8c9ba5]">Action</td>
                {selectedMachines.map((m) => (
                  <td key={m.id} className="p-4">
                    <Link
                      to={`/quote?machine=${m.id}`}
                      onClick={onClose}
                      className="btn-primary w-full text-[11px] py-2 px-3 justify-center text-decoration-none mb-2"
                    >
                      <span>Quote {m.shortName}</span>
                    </Link>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
