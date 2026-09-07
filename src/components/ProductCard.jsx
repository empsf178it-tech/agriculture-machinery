import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Zap, Gauge, Scale, Check } from 'lucide-react';

export default function ProductCard({ machine }) {
  const { comparedIds, addToCompare, removeFromCompare, t } = useLanguage();
  const isCompared = comparedIds.includes(machine.id);

  const toggleCompare = (e) => {
    e.preventDefault();
    if (isCompared) {
      removeFromCompare(machine.id);
    } else {
      addToCompare(machine.id);
    }
  };

  return (
    <div className="card-machinery group flex flex-col justify-between h-full bg-[#161a20] border border-white/10 rounded-sm overflow-hidden hover:border-[#4caf50] transition-all duration-300 shadow-lg hover:shadow-2xl">
      
      {/* Image Container with Zoom & Badge */}
      <div className="relative h-60 w-full overflow-hidden bg-[#0a0c0e] img-zoom-container">
        <img
          src={machine.image}
          alt={machine.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category & Feature Tags */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
          <span className="badge-industrial text-[10px] py-1 px-2.5 bg-[#0a0c0e]/90 backdrop-blur-md border border-[#4caf50]">
            {machine.category}
          </span>
          {machine.tag && (
            <span className="badge-orange text-[10px] py-1 px-2.5 bg-[#0a0c0e]/90 backdrop-blur-md border border-[#e67e22]">
              {machine.tag}
            </span>
          )}
        </div>

        {/* Demo Spec Tag */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="badge-demo">Demo Specs</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white group-hover:text-[#4caf50] transition-colors mb-2 leading-snug">
            {machine.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#9ba8b5] line-clamp-2 mb-4 leading-relaxed">
            {machine.description}
          </p>

          {/* Quick Technical Specs Grid */}
          <div className="grid grid-cols-2 gap-3 p-3 bg-[#111418] rounded-sm border border-white/10 mb-6 text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#e67e22] shrink-0" />
              <div>
                <span className="block text-[10px] text-[#8c9ba5] uppercase font-bold">{t('common.power')}</span>
                <span className="font-semibold text-white">{machine.powerHp}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-[#4caf50] shrink-0" />
              <div>
                <span className="block text-[10px] text-[#8c9ba5] uppercase font-bold">{t('common.workingWidth')}</span>
                <span className="font-semibold text-white">{machine.workingWidth}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button Links */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <Link
            to={`/machinery/${machine.id}`}
            className="btn-secondary flex-1 text-xs py-2.5 px-3 justify-between text-decoration-none"
          >
            <span>{t('common.viewSpecs')}</span>
            <ArrowRight className="w-4 h-4 text-[#4caf50] group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={toggleCompare}
            className={`p-2.5 rounded-sm border transition-all cursor-pointer ${
              isCompared
                ? 'bg-[#2e7d32] border-[#4caf50] text-white'
                : 'bg-[#111418] border-white/10 text-[#8c9ba5] hover:text-white hover:border-white/30'
            }`}
            title={isCompared ? 'Added to compare' : 'Add to compare'}
          >
            {isCompared ? <Check className="w-4 h-4" /> : <Scale className="w-4 h-4" />}
          </button>
        </div>

      </div>

    </div>
  );
}
