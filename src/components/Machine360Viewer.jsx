import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RotateCw, Info, CheckCircle2, ShieldAlert, Cpu, Layers, Wrench, Zap } from 'lucide-react';

export default function Machine360Viewer({ machine }) {
  const { t, lang } = useLanguage();
  const [angleIndex, setAngleIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Gallery angles or default fallback angles
  const angles = machine?.gallery && machine.gallery.length > 0
    ? [machine.image, ...machine.gallery]
    : [
        machine?.image || '/assets/machinery/power-weeder-1.png',
        machine?.image || '/assets/machinery/power-weeder-1.png',
        machine?.image || '/assets/machinery/power-weeder-1.png',
        machine?.image || '/assets/machinery/power-weeder-1.png',
      ];

  // Hotspots definitions dynamically customized for the machine
  const hotspots = [
    {
      id: 'engine',
      title: t('view360.engine') || 'High-Torque Power Core Unit',
      desc: machine?.description ? `${machine.powerHp} Commercial-grade OHV Engine with forced-air cooling and dual oil-bath filtration system.` : t('view360.engineDesc'),
      top: '32%',
      left: '38%',
      stat: machine?.powerHp || '9.0 HP Engine',
      maintInterval: 'Change oil every 50 operating hours'
    },
    {
      id: 'transmission',
      title: t('view360.transmission') || 'Heavy-Duty Oil Bath Transmission',
      desc: `Full gear-driven transmission (${machine?.transmission || '2 Forward + 1 Reverse'}) built with heat-treated alloy steel gear teeth for zero slip under heavy load.`,
      top: '52%',
      left: '48%',
      stat: machine?.transmission || 'Heavy Gear Drive',
      maintInterval: 'Check gearbox oil level monthly'
    },
    {
      id: 'pto',
      title: t('view360.pto') || 'Auxiliary PTO & Implement Mount',
      desc: 'Quick-coupling PTO stub shaft (540 RPM dual speed) engineered for seamless attachment of rotavators, spray pumps, and ridgers.',
      top: '65%',
      left: '60%',
      stat: '540 RPM Spline PTO',
      maintInterval: 'Grease universal splines weekly'
    },
    {
      id: 'blades',
      title: t('view360.blades') || 'Boron Steel Forged Tilling Blades',
      desc: `Heavy curved blades (${machine?.workingWidth || '900 mm'} working width) designed to pulverize hard clay soil into fine seedbed loam without clogging.`,
      top: '78%',
      left: '30%',
      stat: machine?.workingWidth || '800-900 mm Width',
      maintInterval: 'Inspect blade bolts before each operation'
    },
  ];

  const handleNextAngle = () => {
    setAngleIndex((prev) => (prev + 1) % angles.length);
  };

  return (
    <div className="bg-[#121519] border border-white/10 rounded-sm p-6 relative overflow-hidden shadow-2xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#2e7d32]/20 border border-[#4caf50]/40 rounded-full text-[11px] font-bold text-[#4caf50] mb-1">
            <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>360° INTERACTIVE ENGINEERING INSPECTOR</span>
          </div>
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
            {t('view360.title') || 'Interactive Component & Hotspot Inspection'}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleNextAngle}
            className="btn-secondary text-xs py-2 px-3 flex items-center gap-2 cursor-pointer hover:border-[#e67e22]"
          >
            <RotateCw className="w-4 h-4 text-[#e67e22]" />
            <span>Rotate Angle ({angleIndex + 1}/{angles.length})</span>
          </button>
        </div>
      </div>

      {/* Main Image Display Area with Pins */}
      <div className="relative h-[380px] sm:h-[420px] w-full rounded-sm overflow-hidden bg-[#0a0c0e] border border-white/10 flex items-center justify-center group">
        <img
          src={angles[angleIndex]}
          alt={machine?.name || 'Machinery'}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Hotspot Pins */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            style={{ top: spot.top, left: spot.left }}
            className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          >
            <button
              onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all cursor-pointer shadow-lg ${
                activeHotspot?.id === spot.id
                  ? 'bg-[#e67e22] border-white scale-125 ring-4 ring-[#e67e22]/50 z-30'
                  : 'bg-[#2e7d32] border-[#4caf50] text-white hover:bg-[#388e3c] hover:scale-110'
              }`}
              title={spot.title}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute"></span>
              <Info className="w-4 h-4 text-white relative z-10" />
            </button>
          </div>
        ))}

        {/* Floating Rotation Prompt */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-[11px] text-[#8c9ba5] flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5 text-[#4caf50]" />
          <span>Click hotspot pins or use angle button to inspect component engineering</span>
        </div>
      </div>

      {/* Angle Selector Thumbnails */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {angles.map((src, i) => (
          <button
            key={i}
            onClick={() => setAngleIndex(i)}
            className={`h-16 rounded-sm overflow-hidden border transition-all cursor-pointer relative ${
              angleIndex === i
                ? 'border-[#4caf50] ring-2 ring-[#4caf50]/40 opacity-100'
                : 'border-white/10 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
            <span className="absolute bottom-1 right-1 bg-black/80 text-[9px] font-mono text-white px-1 rounded-xs">
              0{i + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Hotspot Detail Card Modal / Panel */}
      {activeHotspot && (
        <div className="mt-6 p-5 bg-[#181c22] border-l-4 border-[#e67e22] rounded-sm text-xs text-white relative animate-fade-in shadow-xl">
          <button
            onClick={() => setActiveHotspot(null)}
            className="absolute top-3 right-3 text-[#8c9ba5] hover:text-white font-bold text-sm"
          >
            ✕
          </button>
          
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="badge-orange text-[10px] uppercase font-bold">{activeHotspot.stat}</span>
            <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#4caf50]">
              {activeHotspot.title}
            </h4>
          </div>

          <p className="text-[#b0bec5] text-xs leading-relaxed mb-3">
            {activeHotspot.desc}
          </p>

          <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#e67e22]">
            <Wrench className="w-3.5 h-3.5 shrink-0" />
            <span><strong>Maintenance Interval:</strong> {activeHotspot.maintInterval}</span>
          </div>
        </div>
      )}

    </div>
  );
}

