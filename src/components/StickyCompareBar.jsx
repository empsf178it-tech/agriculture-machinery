import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { machineryCatalog } from '../data/machineryData';
import MachineComparisonModal from './MachineComparisonModal';
import { Scale, X, Trash2, ArrowRight, Layers } from 'lucide-react';

export default function StickyCompareBar() {
  const { comparedIds, removeFromCompare, clearCompare, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!comparedIds || comparedIds.length === 0) return null;

  const comparedMachines = comparedIds
    .map((id) => machineryCatalog.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <>
      {/* Floating Tray */}
      <div className="fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-40 max-w-[calc(100vw-1.5rem)] sm:max-w-lg w-full bg-[#121519]/95 backdrop-blur-md border border-[#4caf50]/40 rounded-sm shadow-2xl p-3 sm:p-4 animate-slide-up">
        <div className="flex items-center justify-between gap-3 mb-2 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e7d32]/30 border border-[#4caf50] flex items-center justify-center">
              <Scale className="w-3.5 h-3.5 text-[#4caf50]" />
            </div>
            <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase tracking-wider">
              {t('comparison.stickyTitle')} ({comparedMachines.length}/3)
            </span>
          </div>

          <button
            onClick={clearCompare}
            className="text-[10px] text-[#8c9ba5] hover:text-white flex items-center gap-1 cursor-pointer"
            title={t('comparison.clearAll')}
          >
            <Trash2 className="w-3 h-3 text-[#e67e22]" />
            <span>{t('comparison.clearAll')}</span>
          </button>
        </div>

        {/* Selected Items List */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {comparedMachines.map((machine) => (
              <div
                key={machine.id}
                className="flex items-center gap-2 bg-[#0a0c0e] border border-white/10 px-2.5 py-1.5 rounded-sm shrink-0"
              >
                <img
                  src={machine.image}
                  alt={machine.shortName}
                  className="w-8 h-8 object-cover rounded-xs border border-white/10"
                />
                <div className="text-[10px] leading-tight">
                  <span className="font-bold text-white block">{machine.shortName}</span>
                  <span className="text-[#4caf50]">{machine.powerHp}</span>
                </div>
                <button
                  onClick={() => removeFromCompare(machine.id)}
                  className="text-[#8c9ba5] hover:text-white ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary text-xs py-2 px-3 shrink-0 text-decoration-none cursor-pointer"
          >
            <span>{t('comparison.compareNow')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Comparison Modal */}
      <MachineComparisonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
