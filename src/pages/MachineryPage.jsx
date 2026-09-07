import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import MachineComparisonModal from '../components/MachineComparisonModal';
import { machineryCatalog } from '../data/machineryData';
import { Search, Filter, SlidersHorizontal, Scale, Zap, ChevronRight } from 'lucide-react';
import { getImage } from '../assets/images';

export default function MachineryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catQuery = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(catQuery);
  const [hpFilter, setHpFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(catQuery);
  }, [catQuery]);

  const categories = [
    { id: 'all', label: 'All Machinery' },
    { id: 'tractors', label: 'Tractors' },
    { id: 'power-weeders', label: 'Power Weeders' },
    { id: 'tillers', label: 'Tillers' },
    { id: 'cultivators', label: 'Cultivators' },
    { id: 'sprayers', label: 'Sprayers' },
    { id: 'harvesters', label: 'Harvesters & Reapers' },
    { id: 'threshers', label: 'Threshers' },
    { id: 'rotavators', label: 'Rotavators' }
  ];

  const hpRanges = [
    { id: 'all', label: 'All HP Ranges' },
    { id: 'under-10', label: '< 10 HP (Weeders & Tillers)' },
    { id: '10-50', label: '10 - 50 HP (Implements & Compact)' },
    { id: '50-100', label: '50 - 100 HP (Utility Tractors)' },
    { id: '100-plus', label: '100+ HP (Heavy-Duty & Combines)' }
  ];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: catId });
    }
  };

  const filteredMachines = machineryCatalog.filter((machine) => {
    const matchesCategory =
      activeCategory === 'all' || machine.categoryId === activeCategory;
    
    const matchesSearch =
      machine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.description.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesHp = true;
    const hpVal = parseFloat(machine.powerHp) || 0;
    if (hpFilter === 'under-10') matchesHp = hpVal < 10;
    else if (hpFilter === '10-50') matchesHp = hpVal >= 10 && hpVal <= 50;
    else if (hpFilter === '50-100') matchesHp = hpVal > 50 && hpVal <= 100;
    else if (hpFilter === '100-plus') matchesHp = hpVal > 100;

    return matchesCategory && matchesSearch && matchesHp;
  });

  return (
    <div className="bg-[#0a0c0e] min-h-screen pb-16">
      
      {/* FULL WIDTH HERO SECTION */}
      <section className="relative w-full py-20 sm:py-24 border-b border-white/10 overflow-hidden bg-[#0a0c0e] mb-12">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage(1)}
            alt="FIELDCORE Machinery Lineup"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/85"></div>
        </div>

        <div className="container-custom relative z-10 text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* BREADCRUMB */}
            <div className="flex items-center gap-2 text-xs text-[#8c9ba5] mb-6 font-['Space_Grotesk'] justify-center">
              <Link to="/" className="hover:text-white text-decoration-none">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#4caf50]" />
              <span className="text-[#4caf50] font-bold">Machinery Catalog</span>
            </div>

            <div className="badge-industrial mb-5 inline-flex items-center gap-2">MACHINERY CATALOG</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Machines built for <span className="text-gradient-agri">every stage of farming.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto mb-8">
              Explore our complete range of tractors, power weeders, tillers, rotavators, sprayers, and harvesting machinery engineered for durability and high field productivity.
            </p>

            <button
              onClick={() => setIsCompareOpen(true)}
              className="btn-orange py-4 px-8 text-base flex items-center gap-2 cursor-pointer shadow-xl text-decoration-none"
            >
              <Scale className="w-5 h-5 text-white" />
              <span>Compare Machines Side-by-Side</span>
            </button>
          </div>
        </div>

      </section>

      <div className="container-custom">

        {/* SEARCH & FILTER BAR */}
        <div className="bg-[#161a20] border border-white/10 rounded-sm p-4 md:p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Search Bar Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8c9ba5] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search machinery name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0c0e] border border-white/10 rounded-sm pl-10 pr-4 py-2.5 text-sm text-white placeholder-[#8c9ba5] focus:outline-none focus:border-[#4caf50] transition-colors"
            />
          </div>

          {/* Results Counter */}
          <div className="flex items-center gap-3 text-xs text-[#8c9ba5] font-['Space_Grotesk']">
            <SlidersHorizontal className="w-4 h-4 text-[#4caf50]" />
            <span>Showing <strong className="text-white font-bold">{filteredMachines.length}</strong> machines</span>
          </div>

        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2.5 rounded-sm text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2e7d32] text-white border border-[#4caf50] shadow-md'
                    : 'bg-[#161a20] text-[#8c9ba5] hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* HORSEPOWER RANGE FILTER PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10">
          <span className="text-xs text-[#e67e22] font-['Space_Grotesk'] font-bold uppercase shrink-0 mr-2 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-[#e67e22]" /> HP Range:
          </span>
          {hpRanges.map((hp) => (
            <button
              key={hp.id}
              onClick={() => setHpFilter(hp.id)}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                hpFilter === hp.id
                  ? 'bg-[#e67e22] text-white border border-[#f39c12]'
                  : 'bg-[#0a0c0e] text-[#8c9ba5] hover:text-white border border-white/10'
              }`}
            >
              {hp.label}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        {filteredMachines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => (
              <ProductCard key={machine.id} machine={machine} />
            ))}
          </div>
        ) : (
          <div className="bg-[#161a20] border border-white/10 rounded-sm p-16 text-center max-w-lg mx-auto">
            <Filter className="w-12 h-12 text-[#8c9ba5] mx-auto mb-4" />
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">No Machinery Found</h3>
            <p className="text-sm text-[#8c9ba5] mb-6">
              No products matched your category or horsepower filter. Try clearing filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setHpFilter('all');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="btn-primary text-xs py-2 px-4"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* COMPARISON MODAL */}
        <MachineComparisonModal
          isOpen={isCompareOpen}
          onClose={() => setIsCompareOpen(false)}
        />

      </div>
    </div>
  );
}
