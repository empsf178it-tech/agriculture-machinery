// FIELDCORE Fictional Demo Machinery Data Catalog
// Uses generated local images (p1 to p48) via image asset loader for blazingly fast page loading
import { getImage } from '../assets/images';

export const categoriesData = [
  {
    id: "tractors",
    number: "01",
    name: "Tractors",
    count: 3,
    description: "Versatile heavy-duty and utility tractors for field preparation, transport, and PTO operations.",
    image: getImage(1)
  },
  {
    id: "power-weeders",
    number: "02",
    name: "Power Weeders",
    count: 3,
    description: "Compact high-torque machines for efficient inter-cultivation, weed management, and soil aeration.",
    image: getImage(2)
  },
  {
    id: "tillers",
    number: "03",
    name: "Mini Tillers",
    count: 2,
    description: "Lightweight equipment engineered for small farms, orchard rows, gardens, and intensive cultivation.",
    image: getImage(3)
  },
  {
    id: "rotavators",
    number: "04",
    name: "Rotavators",
    count: 2,
    description: "Efficient PTO-driven rotary tillers for single-pass seedbed preparation and residue mixing.",
    image: getImage(4)
  },
  {
    id: "cultivators",
    number: "05",
    name: "Cultivators",
    count: 2,
    description: "Heavy-duty spring and rigid tine implements for deep soil loosening and weed root removal.",
    image: getImage(5)
  },
  {
    id: "sprayers",
    number: "06",
    name: "Sprayers",
    count: 2,
    description: "Precision boom and power sprayers for crop protection, fertilizer delivery, and farm hygiene.",
    image: getImage(6)
  },
  {
    id: "harvesters",
    number: "07",
    name: "Harvesters & Reapers",
    count: 3,
    description: "High-capacity combine harvesters and self-propelled reapers for rapid crop harvesting.",
    image: getImage(7)
  },
  {
    id: "threshers",
    number: "08",
    name: "Threshers",
    count: 2,
    description: "Post-harvest processing machinery engineered for clean grain separation with minimal loss.",
    image: getImage(8)
  }
];

export const machineryCatalog = [
  {
    id: "pw900",
    name: "FIELDCORE PW900 Power Weeder",
    shortName: "PW900 Power Weeder",
    category: "Power Weeders",
    categoryId: "power-weeders",
    isFeatured: true,
    tag: "Best Seller",
    tagline: "Compact power for efficient field cultivation.",
    powerHp: "7.0 HP",
    workingWidth: "800 mm",
    fuelType: "Petrol / Diesel",
    transmission: "Gear Drive (2 Forward + 1 Reverse)",
    weight: "98 kg (Demo)",
    priceEstimate: "$1,850 - $2,200",
    image: getImage(9),
    gallery: [
      getImage(9),
      getImage(10),
      getImage(11)
    ],
    description: "The FIELDCORE PW900 is engineered specifically for demanding inter-cultivation between crop rows, orchard maintenance, and vegetable farm weed management. Powered by a heavy-duty 7 HP engine with a full gear transmission, it handles tough soil conditions with minimal operator effort.",
    performance: [
      "Heavy-duty forged rotary blades for effortless soil turning and weed slicing.",
      "Vibration-isolated height-adjustable handlebar for all-day operator comfort.",
      "Dual safety kill-switch and protective tilling guard for field safety.",
      "Quick-attach implement hitch compatible with ridger and ditcher accessories."
    ],
    applications: [
      "Row-crop inter-cultivation (Cotton, Sugarcane, Maize, Vegetables)",
      "Weed management in fruit orchards & vineyard rows",
      "Soil aeration and secondary bed preparation",
      "Paddy field secondary tilling with puddle wheel attachments"
    ],
    controls: "Ergonomic 180° swivel handlebar with dual-clutch drive lever, throttle trigger, emergency stop safety cut-off, and heavy-duty gear shift selector.",
    specifications: [
      { label: "Engine Power", value: "7.0 HP @ 3600 RPM (Demo Spec)" },
      { label: "Displacement", value: "212 cc 4-Stroke OHV" },
      { label: "Fuel Tank Capacity", value: "3.6 Liters" },
      { label: "Working Width", value: "800 - 1050 mm (Adjustable)" },
      { label: "Working Depth", value: "100 - 150 mm" },
      { label: "Blade Assembly", value: "24 Forged High-Carbon Steel Tines" },
      { label: "Transmission Type", value: "All-Gear Heavy Industrial Drive" },
      { label: "Gears", value: "2 Forward, 1 Reverse" },
      { label: "Operating Weight", value: "98 kg" },
      { label: "Tire Size", value: "4.00-8 Tractor Lug Tires" }
    ]
  },
  {
    id: "mt600",
    name: "FIELDCORE MT600 Mini Tiller",
    shortName: "MT600 Mini Tiller",
    category: "Mini Tillers",
    categoryId: "tillers",
    isFeatured: true,
    tag: "Lightweight",
    tagline: "Precision soil preparation for compact farm plots.",
    powerHp: "5.5 HP",
    workingWidth: "600 mm",
    fuelType: "Petrol",
    transmission: "Belt + Chain Drive",
    weight: "54 kg (Demo)",
    priceEstimate: "$1,100 - $1,400",
    image: getImage(12),
    gallery: [
      getImage(12),
      getImage(13),
      getImage(14)
    ],
    description: "Designed for small-scale horticulture, green-house beds, and narrow orchard paths. The MT600 delivers nimble maneuvering without compromising soil pulverization efficiency.",
    performance: [
      "Lightweight alloy chassis frame for easy transport and tight turn radii.",
      "High-speed rototiller blades for fine seedbed finishing.",
      "Foldable handle design for convenient pickup truck transport."
    ],
    applications: [
      "Greenhouse bed preparation",
      "Horticulture & nursery soil mixing",
      "Kitchen garden cultivation"
    ],
    controls: "Single-lever throttle with centrifugal clutch safety release.",
    specifications: [
      { label: "Engine Power", value: "5.5 HP Overhead Valve Engine" },
      { label: "Working Width", value: "600 mm" },
      { label: "Working Depth", value: "120 mm" },
      { label: "Weight", value: "54 kg" },
      { label: "Fuel Capacity", value: "2.5 Liters" }
    ]
  },
  {
    id: "rt180",
    name: "FIELDCORE RT180 Rotavator",
    shortName: "RT180 Rotavator",
    category: "Rotavators",
    categoryId: "rotavators",
    isFeatured: true,
    tag: "Heavy Implements",
    tagline: "Single-pass seedbed preparation for demanding soils.",
    powerHp: "45-60 HP Compatible",
    workingWidth: "1800 mm",
    fuelType: "PTO Driven",
    transmission: "Multi-Speed Gearbox",
    weight: "420 kg (Demo)",
    priceEstimate: "$2,800 - $3,500",
    image: getImage(24),
    gallery: [
      getImage(24),
      getImage(25),
      getImage(26)
    ],
    description: "The FIELDCORE RT180 PTO rotavator connects to 45-60 HP tractors to pulverize clods, mix crop residue, and create ideal seedbeds in a single field pass.",
    performance: [
      "Boron steel L-type blades engineered for minimal soil drag.",
      "Heavy-duty side gear drive sealed against dust and slurry.",
      "Adjustable trailing board for uniform soil leveling."
    ],
    applications: [
      "Primary & secondary tillage in dry or wet fields",
      "Paddy land puddling operations",
      "Crop stubble incorporation"
    ],
    controls: "PTO shaft connection with shear bolt protection mechanism.",
    specifications: [
      { label: "Required HP", value: "45 - 60 HP Tractor" },
      { label: "Working Width", value: "1800 mm (6 Feet)" },
      { label: "No. of Blades", value: "42 Boron Steel L-Blades" },
      { label: "Gearbox", value: "Multi-Speed Heavy Duty Gearbox" },
      { label: "Weight", value: "420 kg" }
    ]
  },
  {
    id: "x120",
    name: "FIELDCORE X120 Heavy Tractor",
    shortName: "X120 Heavy Tractor",
    category: "Tractors",
    categoryId: "tractors",
    isFeatured: true,
    tag: "Flagship Machine",
    tagline: "Unmatched traction, hydraulic power, and heavy field torque.",
    powerHp: "120 HP",
    workingWidth: "Tractor Unit",
    fuelType: "Turbo Diesel",
    transmission: "16F + 16R Synchro Shuttle",
    weight: "4,600 kg (Demo)",
    priceEstimate: "$48,000 - $55,000",
    image: getImage(15),
    gallery: [
      getImage(15),
      getImage(16),
      getImage(17)
    ],
    description: "The FIELDCORE X120 is built for demanding commercial farms that require maximum drawbar pull, deep plowing, heavy transport, and continuous PTO harvesting operations.",
    performance: [
      "4.4L 4-Cylinder Turbocharged Intercooled Diesel Engine.",
      "Climate-controlled operator cabin with 360-degree panoramic glass view.",
      "Category II 3-point hitch with 4,200 kg hydraulic lift capacity.",
      "Electro-hydraulic 4WD engagement with automatic differential lock."
    ],
    applications: [
      "Deep subsoiling & multi-bottom ploughing",
      "Heavy load agricultural trailer transport",
      "Large combine & forage harvester towing",
      "High-speed broadacre tillage"
    ],
    controls: "CommandTouch armrest with integrated joystick controls, digital dashboard display, and power shuttle lever.",
    specifications: [
      { label: "Engine", value: "120 HP 4-Cylinder Turbo Diesel" },
      { label: "Drive Type", value: "4WD Electro-Hydraulic" },
      { label: "Lift Capacity", value: "4,200 kg at ball ends" },
      { label: "PTO Speed", value: "540 / 1000 RPM Independent" },
      { label: "Fuel Tank", value: "180 Liters" }
    ]
  },
  {
    id: "x90",
    name: "FIELDCORE X90 Utility Tractor",
    shortName: "X90 Utility Tractor",
    category: "Tractors",
    categoryId: "tractors",
    isFeatured: false,
    tag: "Versatile",
    tagline: "The workhorse tractor for medium-sized farm enterprises.",
    powerHp: "90 HP",
    workingWidth: "Tractor Unit",
    fuelType: "Diesel",
    transmission: "12F + 12R Mechanical Shuttle",
    weight: "3,500 kg (Demo)",
    priceEstimate: "$34,000 - $39,000",
    image: getImage(18),
    gallery: [
      getImage(18),
      getImage(19),
      getImage(20)
    ],
    description: "Combining high fuel efficiency with rugged mechanical simplicity, the X90 is the perfect mid-size tractor for planting, spraying, baling, and general utility work.",
    performance: [
      "Direct-injection high-torque engine with low maintenance costs.",
      "Dual-clutch PTO drive for uninterrupted implement operation.",
      "Heavy-duty front axle engineered for front-end loader attachments."
    ],
    applications: [
      "Medium farm tillage & cultivation",
      "Front-end loader material handling",
      "Crop spraying & seed drilling"
    ],
    controls: "Ergonomic side-shift gear levers with hydrostatic power steering.",
    specifications: [
      { label: "Engine Power", value: "90 HP @ 2200 RPM" },
      { label: "Lift Capacity", value: "3,200 kg" },
      { label: "Transmission", value: "12F + 12R Synchro Shift" },
      { label: "Hydraulic Valves", value: "2 Spool Valves Standard" }
    ]
  },
  {
    id: "r400",
    name: "FIELDCORE R400 Crop Reaper",
    shortName: "R400 Crop Reaper",
    category: "Harvesters & Reapers",
    categoryId: "harvesters",
    isFeatured: true,
    tag: "Harvesting",
    tagline: "Fast self-propelled windrow harvesting for grain crops.",
    powerHp: "4.0 HP Diesel",
    workingWidth: "1200 mm",
    fuelType: "Diesel",
    transmission: "Belt Drive + Gear",
    weight: "165 kg (Demo)",
    priceEstimate: "$2,400 - $2,900",
    image: getImage(41),
    gallery: [
      getImage(41),
      getImage(42)
    ],
    description: "The FIELDCORE R400 Reaper cuts and neatly windrows paddy, wheat, barley, and sesame crops close to the ground, dramatically accelerating harvest timelines.",
    performance: [
      "High-speed cutter bar with hardened teeth for clean stalk cutting.",
      "Vertical conveyor chain that lays crops neatly to one side.",
      "Compact footprint capable of entering small terraced farm fields."
    ],
    applications: [
      "Paddy rice harvesting",
      "Wheat & barley field windrowing",
      "Fodder grass cutting"
    ],
    controls: "Operator walk-behind handle with blade engagement clutch and steering brakes.",
    specifications: [
      { label: "Engine", value: "4.0 HP Air-Cooled Diesel" },
      { label: "Cut Width", value: "1200 mm (4 Feet)" },
      { label: "Harvest Speed", value: "2.5 - 4.0 km/h" },
      { label: "Cutting Height", value: "50 - 100 mm" }
    ]
  },
  {
    id: "as500",
    name: "FIELDCORE AS500 Agricultural Sprayer",
    shortName: "AS500 Sprayer",
    category: "Sprayers",
    categoryId: "sprayers",
    isFeatured: true,
    tag: "Crop Protection",
    tagline: "Uniform chemical & fertilizer delivery across wide crop fields.",
    powerHp: "18-30 HP Tractor PTO / Power Unit",
    workingWidth: "12 Meter Boom",
    fuelType: "PTO / Engine Drive",
    transmission: "Triplex Plunger Pump",
    weight: "280 kg Tank Empty (Demo)",
    priceEstimate: "$3,200 - $4,100",
    image: getImage(34),
    gallery: [
      getImage(34),
      getImage(35)
    ],
    description: "Engineered for precise crop care, the AS500 features a 500-liter UV-stabilized polyethylene tank and a 12-meter foldable hydraulic spray boom for uniform field coverage.",
    performance: [
      "Heavy-duty brass nozzle tips with anti-drip check valves.",
      "High-pressure ceramic plunger pump resisting corrosive chemicals.",
      "Triple filtration system preventing nozzle clogging during operation."
    ],
    applications: [
      "Pest & disease control spraying",
      "Foliar liquid fertilizer application",
      "Weed control herbicide spraying"
    ],
    controls: "3-way multi-section pressure control regulator manifold.",
    specifications: [
      { label: "Tank Capacity", value: "500 Liters Polyethylene" },
      { label: "Boom Length", value: "12 Meters (Foldable)" },
      { label: "Pump Pressure", value: "40 - 50 Bar" },
      { label: "Nozzles", value: "24 Anti-Drip Ceramic Fan Nozzles" }
    ]
  },
  {
    id: "c200",
    name: "FIELDCORE C200 Heavy Cultivator",
    shortName: "C200 Cultivator",
    category: "Cultivators",
    categoryId: "cultivators",
    isFeatured: false,
    tag: "Soil Prep",
    tagline: "Heavy-duty spring tine soil loosening and aeration.",
    powerHp: "45-65 HP Tractor",
    workingWidth: "2000 mm",
    fuelType: "3-Point Hitch",
    transmission: "Spring Loaded Tines",
    weight: "290 kg (Demo)",
    priceEstimate: "$1,600 - $2,100",
    image: getImage(30),
    gallery: [
      getImage(30),
      getImage(31)
    ],
    description: "The C200 cultivator uses 9 heavy-duty spring-loaded tines to break hard soil crusts, eradicate deep weed roots, and prepare fields after primary ploughing.",
    performance: [
      "High-tensile spring steel tines that absorb field obstacle shocks.",
      "Reversible shovel points doubling component service life."
    ],
    applications: [
      "Deep soil aeration",
      "Weed root extraction",
      "Secondary seedbed preparation"
    ],
    controls: "Standard Cat-II 3-Point Linkage adjustment.",
    specifications: [
      { label: "Number of Tines", value: "9 Spring Loaded Tines" },
      { label: "Working Width", value: "2000 mm" },
      { label: "Frame Material", value: "Heavy Square Steel Tubing" }
    ]
  },
  {
    id: "h500",
    name: "FIELDCORE H500 Combine Harvester",
    shortName: "H500 Combine Harvester",
    category: "Harvesters & Reapers",
    categoryId: "harvesters",
    isFeatured: false,
    tag: "Heavy Harvesting",
    tagline: "Complete cutting, threshing, and grain cleaning in one operation.",
    powerHp: "110 HP",
    workingWidth: "3200 mm Cutter",
    fuelType: "Turbo Diesel",
    transmission: "Hydrostatic Drive",
    weight: "5,800 kg (Demo)",
    priceEstimate: "$65,000 - $78,000",
    image: getImage(38),
    gallery: [
      getImage(38),
      getImage(39),
      getImage(40)
    ],
    description: "A self-propelled multi-crop combine harvester equipped with axial-flow threshing technology for wheat, paddy, corn, and soy crops.",
    performance: [
      "Large 3.2m cutter bar with hydraulic reel height adjustment.",
      "Dual cleaning sieves with powerful adjustable air blower."
    ],
    applications: [
      "Large scale commercial grain harvesting",
      "Contract harvesting operations"
    ],
    controls: "Cabin multifunction joystick control with digital loss monitor.",
    specifications: [
      { label: "Engine Power", value: "110 HP Turbo Diesel" },
      { label: "Grain Tank", value: "2,200 Liters" },
      { label: "Threshing System", value: "Axial Flow Rotor" }
    ]
  },
  {
    id: "t300",
    name: "FIELDCORE T300 Multi-Crop Thresher",
    shortName: "T300 Thresher",
    category: "Threshers",
    categoryId: "threshers",
    isFeatured: false,
    tag: "Post Harvest",
    tagline: "Stationary high-capacity grain separation and cleaning.",
    powerHp: "15 HP Electric / PTO",
    workingWidth: "Stationary Machine",
    fuelType: "Electric / PTO",
    transmission: "Belt Pulley",
    weight: "650 kg (Demo)",
    priceEstimate: "$3,800 - $4,600",
    image: getImage(43),
    gallery: [
      getImage(43),
      getImage(44)
    ],
    description: "Heavy-duty multi-crop stationary thresher capable of processing harvested bundles of paddy, wheat, pulse, and mustard with over 99% grain purity.",
    performance: [
      "High-speed rasp bar cylinder for gentle yet effective grain detachment.",
      "Blower fan and reciprocating sieve assembly for chaff removal."
    ],
    applications: [
      "Stationary threshing on farm yards",
      "Multi-grain crop processing"
    ],
    controls: "Main belt clutch with feeding hopper safety guard.",
    specifications: [
      { label: "Output Capacity", value: "1,000 - 1,500 kg/hr Grain" },
      { label: "Compatible Power", value: "15 HP Motor or 35 HP PTO" },
      { label: "Grain Purity", value: "> 99.2%" }
    ]
  }
];
