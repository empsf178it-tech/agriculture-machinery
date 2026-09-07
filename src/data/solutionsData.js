// FIELDCORE Agricultural Solutions & Application Matching Data
import { getImage } from '../assets/images';

export const solutionsData = [
  {
    id: "soil-prep",
    title: "Soil Preparation",
    subtitle: "Turn raw land into ideal, aerated seedbeds in minimal passes.",
    iconName: "Shovel",
    image: getImage(57),
    overview: "Effective soil preparation sets the foundation for crop yield. FIELDCORE machinery pairs high-hp tractors with high-torque rotavators and cultivators to crush hard soil clods, incorporate stubble, and retain soil moisture.",
    challenge: "Hard soil crusting, dense stubble residue, and high fuel expenditure from multiple field passes.",
    solutionDetails: "Pairing the FIELDCORE X90/X120 Tractor with the RT180 PTO Rotavator and C200 Heavy Cultivator achieves complete pulverized tilth in just one or two passes, reducing diesel consumption by 35%.",
    recommendedMachines: [
      { id: "x120", name: "FIELDCORE X120 Heavy Tractor", role: "Primary Drawbar Pull & PTO Power" },
      { id: "rt180", name: "FIELDCORE RT180 Rotavator", role: "Rotary pulverization & stubble mixing" },
      { id: "c200", name: "FIELDCORE C200 Cultivator", role: "Deep soil aeration & hardpan breaking" }
    ]
  },
  {
    id: "weed-management",
    title: "Weed Management",
    subtitle: "Precision inter-cultivation for healthy crop roots without manual labor.",
    iconName: "Scissors",
    image: getImage(58),
    overview: "Weeds compete directly with crops for nutrients, sunlight, and moisture. FIELDCORE power weeders and compact mini tillers let farmers maneuver easily between narrow rows to uproot weeds and aerate soil.",
    challenge: "High cost of manual weeding labor and crop damage from wide machinery.",
    solutionDetails: "The FIELDCORE PW900 Power Weeder features an adjustable 800mm working width and side protection discs, ensuring weeds are uprooted cleanly without touching crop stalks.",
    recommendedMachines: [
      { id: "pw900", name: "FIELDCORE PW900 Power Weeder", role: "Row-crop inter-cultivation & weeding" },
      { id: "mt600", name: "FIELDCORE MT600 Mini Tiller", role: "Greenhouse & narrow row tilling" }
    ]
  },
  {
    id: "planting",
    title: "Planting & Sowing",
    subtitle: "Uniform seed placement and fertilizer metering for maximum germination.",
    iconName: "Sprout",
    image: getImage(59),
    overview: "Uniform seed depth and distance directly impact germination rate and crop density. FIELDCORE planting systems combine precise metering mechanisms with heavy tractor hitches.",
    challenge: "Uneven seed depth leading to patchy crop emergence and seed wastage.",
    solutionDetails: "Automated fluted-roller seed drills deliver seeds and fertilizer at calibrated depths, ensuring consistent germination across varying field topographies.",
    recommendedMachines: [
      { id: "x90", name: "FIELDCORE X90 Utility Tractor", role: "Precision draft control towing" },
      { id: "sd8", name: "FIELDCORE SD8 Seed Drill", role: "Calibrated 8-row sowing" }
    ]
  },
  {
    id: "crop-care",
    title: "Crop Care & Protection",
    subtitle: "Targeted liquid spraying and nutrient delivery with zero chemical waste.",
    iconName: "Droplets",
    image: getImage(60),
    overview: "Timely application of crop protection solutions safeguards yields against pests and blights. FIELDCORE boom sprayers offer wide coverage with anti-drip pressure control.",
    challenge: "Uneven spray coverage, chemical drift, and high application time.",
    solutionDetails: "12-meter hydraulic boom sprayers deliver fine atomized droplets under constant pressure, covering vast acreages quickly.",
    recommendedMachines: [
      { id: "as500", name: "FIELDCORE AS500 Agricultural Sprayer", role: "500L Boom Spraying" },
      { id: "x90", name: "FIELDCORE X90 Utility Tractor", role: "Low-footprint field traversal" }
    ]
  },
  {
    id: "harvesting",
    title: "Harvesting Operations",
    subtitle: "Fast, clean cutting and gathering to protect grain quality.",
    iconName: "Wheat",
    image: getImage(61),
    overview: "Harvesting windows are short and rain risks can destroy standing crops. FIELDCORE reapers and combine harvesters accelerate crop gathering while preserving grain integrity.",
    challenge: "Labor shortages during harvest peak season causing crop shatter loss.",
    solutionDetails: "Self-propelled reapers cut and convey crops into windrows in minutes, while combine harvesters complete cutting, threshing, and cleaning simultaneously.",
    recommendedMachines: [
      { id: "r400", name: "FIELDCORE R400 Crop Reaper", role: "Self-propelled field windrowing" },
      { id: "h500", name: "FIELDCORE H500 Combine Harvester", role: "Full broadacre harvesting" }
    ]
  },
  {
    id: "post-harvest",
    title: "Post-Harvest Processing",
    subtitle: "Clean grain separation and residue processing on the farm yard.",
    iconName: "Box",
    image: getImage(62),
    overview: "Extracting pure grain with low moisture and zero chaff contamination ensures top market pricing. FIELDCORE stationary threshers process harvested crops efficiently.",
    challenge: "Grain breakage, unseparated chaff, and high manual labor in threshing yards.",
    solutionDetails: "High-rpm rasp bar threshing cylinders separate grain cleanly with over 99% purity rating.",
    recommendedMachines: [
      { id: "t300", name: "FIELDCORE T300 Multi-Crop Thresher", role: "Multi-grain stationary threshing" }
    ]
  }
];
