import { Link } from 'react-router-dom';
import { Cog, ShieldCheck, Wrench, PhoneCall, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0d10] text-[#9ba8b5] border-t border-white/10 pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 text-decoration-none inline-block">
              <div className="w-10 h-10 bg-[#2e7d32] rounded-sm flex items-center justify-center border border-[#4caf50]">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-white block">
                  FIELDCORE
                </span>
                <span className="block font-['Space_Grotesk'] text-[10px] font-bold tracking-[0.2em] text-[#8c9ba5] uppercase">
                  Agricultural Machinery
                </span>
              </div>
            </Link>

            <p className="font-['Space_Grotesk'] text-lg font-bold text-[#4caf50]">
              Powering Every Acre.
            </p>

            <p className="text-sm text-[#8c9ba5] leading-relaxed max-w-sm">
              Engineered for demanding field work. FIELDCORE produces heavy-duty tractors, power weeders, mini tillers, rotavators, sprayers, and farm implements designed for real farmers.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#b0bec5]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4caf50]" />
                <span>2-Year Structural Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-[#e67e22]" />
                <span>Original Spare Parts</span>
              </div>
            </div>
          </div>

          {/* Column 1: Machinery */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-white text-sm font-bold tracking-wider uppercase mb-4 pb-2 border-b border-white/10">
              Machinery
            </h4>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li>
                <Link to="/machinery/tractors" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Tractors
                </Link>
              </li>
              <li>
                <Link to="/machinery/power-weeder" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Power Weeders
                </Link>
              </li>
              <li>
                <Link to="/machinery?cat=tillers" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Mini Tillers
                </Link>
              </li>
              <li>
                <Link to="/machinery?cat=harvesters" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Harvesters & Reapers
                </Link>
              </li>
              <li>
                <Link to="/implements" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Agricultural Implements
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-white text-sm font-bold tracking-wider uppercase mb-4 pb-2 border-b border-white/10">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li>
                <Link to="/solutions" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Soil Preparation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Weed Management
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Crop Care & Spraying
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Harvesting & Threshing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Company */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-white text-sm font-bold tracking-wider uppercase mb-4 pb-2 border-b border-white/10">
              Company & Support
            </h4>
            <ul className="space-y-2.5 text-sm list-none p-0 mb-4">
              <li>
                <Link to="/services" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Maintenance & Service
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Spare Parts Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  About FIELDCORE
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#4caf50] transition-colors text-decoration-none">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-[#e67e22] font-semibold hover:underline text-decoration-none flex items-center gap-1">
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8c9ba5]">
          <div>
            © 2026 FIELDCORE Agricultural Machinery. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="badge-demo">Demo Specifications & Representation</span>
            <Link to="/quote" className="hover:text-white transition-colors text-decoration-none">Privacy Policy</Link>
            <Link to="/quote" className="hover:text-white transition-colors text-decoration-none">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
