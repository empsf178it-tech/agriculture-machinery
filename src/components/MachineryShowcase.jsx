import { useState } from 'react';
import { Cpu, Sliders, Disc, ShieldAlert, Cog, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { getImage } from '../assets/images';

export default function MachineryShowcase() {
  const [activeCallout, setActiveCallout] = useState(0);

  const callouts = [
    {
      id: "engine",
      title: "Commercial High-Torque Engine",
      subtitle: "7 HP Overhead Valve Petrol/Diesel",
      icon: Cpu,
      posX: "32%",
      posY: "42%",
      description: "Cast-iron cylinder liner engine engineered for continuous high-load tilling under extreme ambient temperatures with easy pull-start functionality.",
      specs: ["212cc Displacement", "Dual-element Air Filter", "3.6L Tank Capacity"]
    },
    {
      id: "controls",
      title: "Operator Handle & Controls",
      subtitle: "360° Ergonomic Adjustable Handlebar",
      icon: Sliders,
      posX: "75%",
      posY: "25%",
      description: "Height-adjustable handlebars with integrated throttle trigger, emergency kill switch, and dual anti-vibration rubber mounts.",
      specs: ["180° Swivel Mechanism", "Emergency Safety Cut-off", "Vibration Isolation Dampers"]
    },
    {
      id: "wheels",
      title: "Heavy Lug Traction Tires",
      subtitle: "4.00-8 Agriculture Rubber Tread",
      icon: Disc,
      posX: "30%",
      posY: "78%",
      description: "Deep directional lug tires that maximize drawbar traction in wet soil, muddy fields, and steep terrace slopes.",
      specs: ["Pneumatic Heavy Rubber", "Directional Cleat Pattern", "Quick Locking Wheel Hubs"]
    },
    {
      id: "transmission",
      title: "All-Gear Heavy Transmission",
      subtitle: "2 Forward + 1 Reverse Gearbox",
      icon: Cog,
      posX: "52%",
      posY: "62%",
      description: "Hardened steel gear drive sealed in an oil bath to prevent dirt and slurry intrusion during deep inter-cultivation.",
      specs: ["Sealed Oil-Bath Housing", "Heat-Treated Steel Gears", "Multi-Speed Range"]
    },
    {
      id: "safety",
      title: "Safety Guards & Mud Shields",
      subtitle: "Heavy Gauge Steel Protection",
      icon: ShieldAlert,
      posX: "68%",
      posY: "70%",
      description: "Reinforced steel shroud guarding the operator from flying debris, mud spray, and rotating blade contact.",
      specs: ["Heavy Sheet Steel", "Integrated Mud Flaps", "CE Safety Compliant"]
    }
  ];

  return (
    <section className="py-20 bg-[#121518] relative overflow-hidden border-y border-white/10">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e7d32]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-industrial mb-4">
            TECHNICAL ANATOMY
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-white mb-4">
            Engineered Component by Component.
          </h2>
          <p className="text-[#9ba8b5] text-base md:text-lg">
            Explore the internal engineering and safety systems built into FIELDCORE power weeders and agricultural tillers.
          </p>
        </div>

        {/* Interactive Diagram Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Center Machine Visual with Interactive Hotspots */}
          <div className="lg:col-span-7 relative bg-[#1b1f24] rounded-sm border border-white/10 p-6 md:p-10 min-h-[420px] flex items-center justify-center overflow-hidden">
            
            {/* Machine Base Image */}
            <div className="relative w-full max-w-lg aspect-4/3 overflow-hidden rounded-sm">
              <img
                src={getImage(9)}
                alt="FIELDCORE Power Weeder Anatomy"
                className="w-full h-full object-cover brightness-95 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1f24]/90 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Hotspot Markers overlay */}
            {callouts.map((point, index) => {
              const Icon = point.icon;
              const isSelected = activeCallout === index;
              return (
                <button
                  key={point.id}
                  onClick={() => setActiveCallout(index)}
                  style={{ top: point.posY, left: point.posX }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                  aria-label={`View component details: ${point.title}`}
                >
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center shadow-2xl border transition-all ${
                    isSelected 
                      ? 'bg-[#2e7d32] border-[#4caf50] text-white ring-4 ring-[#4caf50]/30' 
                      : 'bg-[#15181d]/90 border-white/30 text-[#4caf50] hover:bg-[#2e7d32] hover:text-white'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  
                  {/* Pulse Effect */}
                  {!isSelected && (
                    <span className="absolute inset-0 rounded-full bg-[#4caf50] animate-ping opacity-30"></span>
                  )}
                </button>
              );
            })}

            <div className="absolute bottom-4 left-4 bg-[#0f1115]/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-xs text-[#8c9ba5] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse"></span>
              Click callout points to inspect components
            </div>

          </div>

          {/* Right Callout Detail Inspector Panel */}
          <div className="lg:col-span-5 bg-[#1d2128] border border-white/10 rounded-sm p-6 md:p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="badge-orange">
                  Component 0{activeCallout + 1} / 0{callouts.length}
                </span>
                <span className="text-xs text-[#8c9ba5] uppercase font-bold tracking-widest">
                  FIELDCORE Spec
                </span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2 flex items-center gap-2">
                {callouts[activeCallout].title}
              </h3>

              <p className="text-sm font-semibold text-[#4caf50] mb-4">
                {callouts[activeCallout].subtitle}
              </p>

              <p className="text-sm text-[#9ba8b5] leading-relaxed mb-6">
                {callouts[activeCallout].description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <span className="text-xs text-[#8c9ba5] uppercase font-bold tracking-wider block mb-2">
                  Technical Characteristics
                </span>
                {callouts[activeCallout].specs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#4caf50] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Callout Switchers */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 overflow-x-auto">
              {callouts.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCallout(i)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCallout === i
                      ? 'bg-[#2e7d32] text-white border border-[#4caf50]'
                      : 'bg-[#15181d] text-[#8c9ba5] hover:text-white border border-white/5'
                  }`}
                >
                  0{i + 1} {c.id}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
