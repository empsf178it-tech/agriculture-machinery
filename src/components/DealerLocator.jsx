import { useState } from 'react';
import { MapPin, Phone, CheckCircle2, Wrench, ShieldCheck, Search, Truck, Navigation, Clock } from 'lucide-react';

export default function DealerLocator() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingVanModal, setBookingVanModal] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [farmerPhone, setFarmerPhone] = useState('');
  const [farmerLocation, setFarmerLocation] = useState('');

  const dealers = [
    {
      id: 'd1',
      region: "India - South",
      name: "FIELDCORE Coimbatore Regional Hub & Service Center",
      city: "Coimbatore, Tamil Nadu",
      pincode: "641006",
      phone: "+91 98422 10492",
      address: "142 Agricultural Machinery Zone, Avinashi Road, Peelamedu, Coimbatore",
      partsAvailable: ["PW900 Rotavator Blades", "7.0 HP Air Filters", "PTO Spline Shafts", "12V Heavy Batteries"],
      serviceStatus: "Master Repair & 24/7 Service Van Active",
      is24x7Van: true
    },
    {
      id: 'd2',
      region: "India - West",
      name: "FIELDCORE Pune Agritech Hub",
      city: "Pune, Maharashtra",
      pincode: "411019",
      phone: "+91 98230 44810",
      address: "Plot 88, Chakan MIDC Industrial Corridor, Pune",
      partsAvailable: ["X120 Turbo Spare Parts", "Hydraulic Cylinder Seals", "3-Point Hitch Pins"],
      serviceStatus: "Authorized Showroom & Van Unit",
      is24x7Van: true
    },
    {
      id: 'd3',
      region: "India - North",
      name: "FIELDCORE Ludhiana Tractor Depot",
      city: "Ludhiana, Punjab",
      pincode: "141003",
      phone: "+91 98140 22091",
      address: "GT Road Machinery Complex, Near Focal Point, Ludhiana",
      partsAvailable: ["Heavy Rotavator Tines", "Harvester Cutter Blades", "High-Pressure Sprayer Booms"],
      serviceStatus: "Master Repair Facility",
      is24x7Van: true
    },
    {
      id: 'd4',
      region: "North America - West",
      name: "FIELDCORE Central Valley Dealership",
      city: "Fresno, California",
      pincode: "93725",
      phone: "+1 (555) 349-2041",
      address: "4820 Machinery Way, Fresno, CA 93725",
      partsAvailable: ["PW900 Tines", "RT180 Rotavator Blades", "PTO Shafts", "Air/Oil Filters"],
      serviceStatus: "Authorized Service Center",
      is24x7Van: false
    },
    {
      id: 'd5',
      region: "North America - Midwest",
      name: "Midwest Machinery & Tractor Hub",
      city: "Des Moines, Iowa",
      pincode: "50313",
      phone: "+1 (555) 812-9055",
      address: "102 Industrial Parkway, Des Moines, IA 50313",
      partsAvailable: ["X120 Heavy Parts", "3-Point Hitches", "Sprayer Booms", "Hydraulic Valves"],
      serviceStatus: "Master Repair Facility",
      is24x7Van: false
    },
    {
      id: 'd6',
      region: "South America",
      name: "AgroCore Equipment Ltd.",
      city: "São Paulo, Brazil",
      pincode: "01000",
      phone: "+55 (11) 4002-8922",
      address: "Av. das Indústrias Agrícolas 1400, SP",
      partsAvailable: ["Power Weeder Gears", "Reaper Blades", "Paddy Puddle Wheels"],
      serviceStatus: "Official Import Distributor",
      is24x7Van: false
    },
    {
      id: 'd7',
      region: "Europe & Asia",
      name: "FIELDCORE Global Export Hub",
      city: "Hamburg, Germany / International",
      pincode: "20457",
      phone: "+49 (40) 2841-9920",
      address: "Hafenstrasse Machinery Dock 12, Hamburg",
      partsAvailable: ["All Series Genuine Spare Parts Direct Dispatch"],
      serviceStatus: "Global Spare Parts Hub",
      is24x7Van: false
    },
    {
      id: 'd8',
      region: "Europe & Asia",
      name: "FIELDCORE Asia Pacific Regional Hub",
      city: "Tokyo, Japan / Asia Pacific",
      pincode: "100-0005",
      phone: "+81 (3) 5555-0192",
      address: "Chiyoda Agritech Dock 4, Tokyo",
      partsAvailable: ["PW900 Engine Parts", "Compact Tiller Tines", "Paddy Reaper Belts", "Hydraulic Pumps"],
      serviceStatus: "Official Regional Distribution Center",
      is24x7Van: false
    }
  ];

  const filteredDealers = dealers.filter(d => {
    const matchesRegion = selectedRegion === 'All' || d.region.includes(selectedRegion);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      d.city.toLowerCase().includes(q) || 
      d.name.toLowerCase().includes(q) || 
      d.pincode.includes(q) ||
      d.address.toLowerCase().includes(q);

    return matchesRegion && matchesSearch;
  });

  const handleBookVanSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="bg-[#111418] border border-white/10 rounded-sm p-8 lg:p-12 my-16 shadow-2xl relative">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="badge-orange mb-3 inline-flex items-center gap-2">
            <Truck className="w-3.5 h-3.5" />
            <span>DEALER & 24/7 SERVICE NETWORK</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
            Find an Authorized Dealer & Emergency Service Van
          </h2>
          <p className="text-xs text-[#8c9ba5] mt-1">
            Over 500+ service points & mobile mechanics on standby across agricultural hubs.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {['All', 'India', 'North America', 'South America', 'Europe & Asia'].map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-2 rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase transition-colors cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-[#2e7d32] text-white border border-[#4caf50]'
                  : 'bg-[#161a20] text-[#8c9ba5] hover:text-white border border-white/10'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Pincode & City Search Input Bar */}
      <div className="mb-8 max-w-2xl">
        <div className="relative">
          <Search className="w-4 h-4 text-[#4caf50] absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by District, City, or Pincode (e.g. Coimbatore, 641006, Fresno)..."
            className="w-full bg-[#161a20] border border-white/10 focus:border-[#4caf50] rounded-sm pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-[#8c9ba5] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Dealer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDealers.map((d) => (
          <div key={d.id} className="bg-[#161a20] border border-white/10 p-6 rounded-sm hover:border-[#4caf50] transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="badge-industrial text-[10px]">{d.serviceStatus}</span>
                <span className="text-xs text-[#e67e22] font-semibold">{d.city}</span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">
                {d.name}
              </h3>

              <p className="text-xs text-[#8c9ba5] mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4caf50] shrink-0" />
                <span>{d.address}</span>
              </p>

              <div className="p-3 bg-[#0a0c0e] rounded-sm border border-white/10 mb-4 text-xs">
                <span className="text-[10px] text-[#8c9ba5] uppercase font-bold block mb-1.5 flex items-center gap-1">
                  <Wrench className="w-3 h-3 text-[#e67e22]" />
                  In-Stock Genuine Spare Parts:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {d.partsAvailable.map((p, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#15181d] rounded-sm text-[10px] text-white border border-white/5">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-3.5 h-3.5 text-[#4caf50]" />
                {d.phone}
              </span>
              
              <div className="flex items-center gap-2">
                {d.is24x7Van && (
                  <button
                    onClick={() => {
                      setBookingVanModal(d);
                      setBookingSubmitted(false);
                    }}
                    className="px-3 py-1.5 bg-[#e67e22]/20 hover:bg-[#e67e22] text-[#e67e22] hover:text-white border border-[#e67e22]/50 rounded-sm font-bold text-[11px] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Truck className="w-3 h-3" />
                    <span>Book Service Van</span>
                  </button>
                )}
                <a href={`tel:${d.phone}`} className="text-[#4caf50] font-bold hover:underline">
                  Call Hub →
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredDealers.length === 0 && (
        <div className="text-center py-12 bg-[#161a20] border border-white/10 rounded-sm text-[#8c9ba5] text-sm">
          No authorized dealers found matching "<strong>{searchQuery}</strong>". Call our 24/7 hotline at <strong>+91 98422 10492</strong> for direct dispatch.
        </div>
      )}

      {/* 24/7 MOBILE SERVICE VAN BOOKING MODAL */}
      {bookingVanModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#181c22] border border-[#4caf50] rounded-sm max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-fade-in">
            <button
              onClick={() => setBookingVanModal(null)}
              className="absolute top-4 right-4 text-[#8c9ba5] hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            {bookingSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-14 h-14 text-[#4caf50] mx-auto mb-3" />
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                  Emergency Mobile Van Dispatched!
                </h3>
                <p className="text-xs text-[#b0bec5] mb-4 leading-relaxed">
                  Our mobile technician unit from <strong>{bookingVanModal.name}</strong> has received your alert for <strong>{farmerLocation}</strong>. Call confirmation will be sent to <strong>{farmerPhone}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => setBookingVanModal(null)}
                  className="btn-primary text-xs py-2.5 px-6 mx-auto"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookVanSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-[#e67e22] text-xs font-bold uppercase">
                  <Truck className="w-4 h-4" />
                  <span>Request On-Farm Emergency Service Van</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                  {bookingVanModal.name}
                </h3>
                <p className="text-xs text-[#8c9ba5]">
                  Mobile mechanic team equipped with air compressor, OBD diagnostics, and genuine spare parts.
                </p>

                <div>
                  <label className="block text-xs text-[#8c9ba5] font-bold mb-1">
                    Your Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={farmerPhone}
                    onChange={(e) => setFarmerPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#111418] border border-white/10 focus:border-[#4caf50] rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#8c9ba5] font-bold mb-1">
                    Farm Location / Village / Landmark *
                  </label>
                  <input
                    type="text"
                    required
                    value={farmerLocation}
                    onChange={(e) => setFarmerLocation(e.target.value)}
                    placeholder="e.g. Near Peelamedu Water Tank, Pollachi Road"
                    className="w-full bg-[#111418] border border-white/10 focus:border-[#4caf50] rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-xs py-3 mt-2"
                >
                  <span>Dispatch 24/7 Service Van Now</span>
                  <Truck className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

