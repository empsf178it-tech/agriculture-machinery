import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/insightsData';
import { ChevronRight, Clock, Calendar, ArrowRight, BookOpen, X } from 'lucide-react';
import { getImage } from '../assets/images';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Machinery', 'Farming', 'Maintenance', 'Equipment'];

  const filteredArticles = articlesData.filter((art) => {
    if (activeCategory === 'All') return true;
    return art.category === activeCategory;
  });

  return (
    <div className="bg-[#0f1115] min-h-screen pb-16">
      
      {/* FULL WIDTH HERO SECTION */}
      <section className="relative w-full py-20 sm:py-24 border-b border-white/10 overflow-hidden bg-[#0a0c0e] mb-16">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={getImage(63)}
            alt="Agricultural Insights & Farming"
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
              <span className="text-[#4caf50] font-bold">Insights</span>
            </div>

            <div className="badge-industrial mb-5 inline-flex items-center gap-2">ENGINEERING & FARMING INSIGHTS</div>
            
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Machinery guides & <span className="text-gradient-agri">farm engineering.</span>
            </h1>
            
            <p className="text-[#d0dbe5] text-base sm:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
              Explore practical guides on tractor horsepower selection, power weeder maintenance, rotavator setup, and equipment ROI for modern farms.
            </p>
          </div>
        </div>

      </section>

      <div className="container-custom">

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2e7d32] text-white border border-[#4caf50]'
                  : 'bg-[#1b1f24] text-[#8c9ba5] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="card-machinery bg-[#1b1f24] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden img-zoom-container relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0f1115]/80 backdrop-blur-md px-2.5 py-1 rounded-sm text-[10px] font-bold text-[#4caf50] uppercase">
                    {art.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#8c9ba5] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#e67e22]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3 hover:text-[#4caf50] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#9ba8b5] leading-relaxed mb-6">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="btn-secondary w-full justify-between text-xs py-2.5 cursor-pointer"
                >
                  <span>Read Article</span>
                  <BookOpen className="w-4 h-4 text-[#4caf50]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ARTICLE READER MODAL */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#1b1f24] border border-white/10 rounded-sm max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 relative">
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-sm text-[#8c9ba5] hover:text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="badge-industrial mb-3">{selectedArticle.category}</div>
              
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-4 pr-8">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-[#8c9ba5] mb-6 pb-4 border-b border-white/10">
                <span>Published: {selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="h-64 rounded-sm overflow-hidden mb-6 border border-white/10">
                <img src={selectedArticle.image} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="text-sm text-[#b0bec5] leading-relaxed space-y-4 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-primary text-xs py-2 px-6"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
