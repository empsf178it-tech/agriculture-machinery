import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="bg-[#0f1115] min-h-[75vh] flex items-center justify-center py-20 bg-grid-pattern relative overflow-hidden">
      <div className="container-custom text-center relative z-10 max-w-xl mx-auto">
        
        {/* Warning Icon */}
        <div className="w-16 h-16 bg-[#e67e22]/20 border border-[#e67e22] rounded-sm flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-[#e67e22]" />
        </div>

        <span className="badge-orange mb-4">ERROR 404 — FIELD ROUTE NOT FOUND</span>

        <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Looks like this machine took a wrong turn.
        </h1>

        <p className="text-[#9ba8b5] text-base mb-8 leading-relaxed">
          The page or product specification you are looking for could not be found or may have been relocated in the catalog.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary py-3 px-6 text-sm text-decoration-none">
            <Home className="w-4 h-4" />
            <span>Back to Home →</span>
          </Link>
          
          <Link to="/machinery" className="btn-secondary py-3 px-6 text-sm text-decoration-none">
            <span>Browse Machinery Catalog</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
