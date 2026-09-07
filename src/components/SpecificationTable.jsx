import { Info } from 'lucide-react';

export default function SpecificationTable({ specifications }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="bg-[#1d2128] border border-white/10 rounded-sm overflow-hidden">
      
      {/* Demo Spec Banner */}
      <div className="bg-[#15181d] px-6 py-3 border-b border-white/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#f39c12]">
          <Info className="w-4 h-4 shrink-0" />
          <span className="font-semibold">Demo Specifications Matrix — Subject to Customization</span>
        </div>
        <span className="badge-demo text-[10px]">Demoware Data</span>
      </div>

      {/* Spec Table */}
      <table className="table-industrial">
        <thead>
          <tr>
            <th>Specification Parameter</th>
            <th>Value & Standard</th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, idx) => (
            <tr key={idx}>
              <td className="font-medium text-[#b0bec5]">{spec.label}</td>
              <td className="font-semibold text-white">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
