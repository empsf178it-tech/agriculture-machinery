// FIELDCORE Implements Catalog & Compatibility Matrix Data
import { getImage } from '../assets/images';

export const implementsCatalog = [
  {
    id: "rotavator-impl",
    name: "Heavy-Duty Rotavator",
    category: "Soil Preparation",
    hpRequired: "35 - 60 HP",
    workingWidth: "1.5m - 2.1m",
    compatibility: "Utility & Heavy Tractors",
    application: "Single-pass seedbed preparation, soil pulverization, stubble mixing",
    description: "PTO-driven rotary tiller engineered with heat-treated Boron steel L-blades for deep soil churning.",
    image: getImage(49)
  },
  {
    id: "cultivator-impl",
    name: "Spring Loaded Cultivator",
    category: "Soil Cultivation",
    hpRequired: "40 - 75 HP",
    workingWidth: "9 to 13 Tines",
    compatibility: "All Standard 3-Point Tractors",
    application: "Secondary soil loosening, weed root extraction, soil aeration",
    description: "High-clearance frame equipped with shock-absorbing springs and reversible shovels.",
    image: getImage(50)
  },
  {
    id: "seed-drill-impl",
    name: "Automatic Seed & Fertilizer Drill",
    category: "Planting & Sowing",
    hpRequired: "35 - 55 HP",
    workingWidth: "9 to 11 Rows",
    compatibility: "Compact & Utility Tractors",
    application: "Simultaneous seed sowing and fertilizer placement at precise depth",
    description: "Calibrated flute roller metering system with independent openers and press wheels.",
    image: getImage(51)
  },
  {
    id: "plough-impl",
    name: "Hydraulic Reversible Mouldboard Plough",
    category: "Primary Tillage",
    hpRequired: "50 - 90 HP",
    workingWidth: "2 to 3 Bottoms",
    compatibility: "Heavy 4WD Tractors",
    application: "Deep soil inversion, hardpan shattering, organic matter burial",
    description: "Heavy boxed steel frame with hydraulic turnover cylinder for seamless furrow turning.",
    image: getImage(52)
  },
  {
    id: "trailer-impl",
    name: "Hydraulic Tipping Farm Trailer",
    category: "Transportation",
    hpRequired: "35 - 120 HP",
    workingWidth: "3 to 10 Ton Capacity",
    compatibility: "All Towing Tractors",
    application: "Crop harvest transport, fertilizer hauling, field soil movement",
    description: "Heavy ribbed steel bed with rear hydraulic tipping ram and heavy-duty leaf springs.",
    image: getImage(53)
  },
  {
    id: "disc-harrow-impl",
    name: "Mounted Offset Disc Harrow",
    category: "Soil Preparation",
    hpRequired: "45 - 75 HP",
    workingWidth: "12 to 18 Discs",
    compatibility: "Utility & Heavy Tractors",
    application: "Clod crushing, heavy weed slicing, orchard soil conditioning",
    description: "Notched high-carbon steel discs with dust-sealed spool bearings.",
    image: getImage(54)
  },
  {
    id: "ridger-impl",
    name: "Adjustable 2-Row Ridger",
    category: "Row Preparation",
    hpRequired: "30 - 50 HP",
    workingWidth: "2 Rows (600-900mm gap)",
    compatibility: "Compact & Utility Tractors",
    application: "Making ridges and furrows for sugarcane, potato, and cotton crops",
    description: "Adjustable wings allowing custom ridge width and depth adjustments.",
    image: getImage(55)
  },
  {
    id: "leveler-impl",
    name: "Heavy Land Leveler / Blade",
    category: "Field Levelling",
    hpRequired: "35 - 70 HP",
    workingWidth: "2.1m to 2.4m",
    compatibility: "All Standard Tractors",
    application: "Surface land leveling, dirt road maintenance, field bed smoothing",
    description: "High-grade steel scraping blade with 360-degree angle adjustment.",
    image: getImage(56)
  }
];

export const compatibilityFlow = [
  {
    tractor: "FIELDCORE X90 (90 HP Utility)",
    implement: "RT180 Heavy Rotavator",
    application: "Single-Pass Paddy & Wheat Bed Prep",
    result: "Saves up to 45% field operating time compared to traditional plowing."
  },
  {
    tractor: "FIELDCORE X120 (120 HP Heavy)",
    implement: "Hydraulic 3-Bottom Mouldboard Plough",
    application: "Deep Subsoiling & Hardpan Shattering",
    result: "Inverts topsoil up to 350mm depth for root aeration and water retention."
  },
  {
    tractor: "FIELDCORE PW900 (7 HP Power Weeder)",
    implement: "Ridger Attachment",
    application: "Sugarcane & Vegetable Row Earthing Up",
    result: "Completes 1 acre of row ridging in under 2 hours with minimal fuel."
  },
  {
    tractor: "FIELDCORE X90 (90 HP Utility)",
    implement: "AS500 12m Boom Sprayer",
    application: "High-Speed Crop Protection Spraying",
    result: "Covers 15 acres per hour with uniform chemical droplet atomization."
  }
];
