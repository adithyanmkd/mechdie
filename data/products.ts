/**
 * MECH & DIE - Product Catalog Data
 * 
 * All 14 products across 6 core categories with client-approved descriptions.
 */

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  category: ProductCategory;
  image: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  specifications: ProductSpecification[];
  features: string[];
}

export type ProductCategory =
  | "Pumps & Accessories"
  | "Bakery / Food Processing"
  | "Industrial & Metal Forming"
  | "Air Compressors"
  | "Universal Joints"
  | "Custom Pneumatic Machines";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Pumps & Accessories",
  "Bakery / Food Processing",
  "Industrial & Metal Forming",
  "Air Compressors",
  "Universal Joints",
  "Custom Pneumatic Machines",
];

export const products: Product[] = [
  // --------------------------------------------------------------------------
  // BAKERY / FOOD PROCESSING (4 products)
  // --------------------------------------------------------------------------
  {
    id: "prod-1",
    slug: "idli-steaming-cabinet",
    name: "Idli Steaming Cabinet",
    category: "Bakery / Food Processing",
    image: "/products/idli-steaming-cabinet.png",
    gallery: ["/products/idli-steaming-cabinet.png"],
    shortDescription:
      "The Idli Steaming Cabinet is designed for commercial food preparation environments requiring organized and efficient steaming operations.",
    fullDescription:
      "The Idli Steaming Cabinet is designed for commercial food preparation environments requiring organized and efficient steaming operations. Constructed with stainless steel, it features multiple trays, an insulated chamber and a front-access door for convenient loading and unloading. Its cabinet-style design provides a practical solution for batch steaming in restaurants, hotels and food production facilities.",
    specifications: [
      { label: "Material Construction", value: "Stainless Steel Construction" },
      { label: "Chamber", value: "Insulated chamber for thermal retention" },
      { label: "Trays", value: "Multiple high-capacity batch steaming trays" },
      { label: "Door Mechanism", value: "Front-access door for convenient loading/unloading" },
      { label: "Recommended Use", value: "Restaurants, hotels, catering, and food production units" },
    ],
    features: [
      "Heavy-gauge stainless steel construction for hygienic food processing",
      "Cabinet-style insulated design minimizing thermal dissipation",
      "Multi-tray arrangement for synchronized batch preparation",
      "Ergonomic front-access loading and unloading mechanism",
    ],
  },
  {
    id: "prod-2",
    slug: "automatic-chapathi-maker",
    name: "Automatic Chapathi Maker",
    category: "Bakery / Food Processing",
    image: "/products/automatic-chapathi-maker.png",
    gallery: ["/products/automatic-chapathi-maker.png"],
    shortDescription:
      "The Automatic Chapati Maker is designed for commercial food production environments requiring consistent and streamlined chapati preparation.",
    fullDescription:
      "The Automatic Chapati Maker is designed for commercial food production environments requiring consistent and streamlined chapati preparation. Featuring stainless steel construction and a conveyor-based processing arrangement, the machine is intended to support continuous food production operations. Its configuration can be suited to the production requirements of restaurants, hotels, catering businesses and commercial food manufacturing facilities.",
    specifications: [
      { label: "Material", value: "Food-grade stainless steel fabrication" },
      { label: "Processing Arrangement", value: "Conveyor-based automated continuous system" },
      { label: "Production Mode", value: "Continuous stream food preparation" },
      { label: "Suitable For", value: "Restaurants, hotels, catering businesses & food manufacturing" },
      { label: "Quality Standard", value: "Standardized thickness and roundness calibration" },
    ],
    features: [
      "Continuous conveyor-based processing for streamlined productivity",
      "Durable food-grade stainless steel contact and exterior surfaces",
      "Uniform heating and press calibration for consistent chapati output",
      "Configurable production speeds tailored to commercial requirements",
    ],
  },
  {
    id: "prod-3",
    slug: "burger-patty-forming-machine",
    aliases: ["industrial-burger-patty-forming-machine"],
    name: "Burger Patty Forming Machine",
    category: "Bakery / Food Processing",
    image: "/products/industrial-burger-patty-forming-machine.png",
    gallery: ["/products/industrial-burger-patty-forming-machine.png"],
    shortDescription:
      "The Burger Patty Forming Machine is designed to streamline burger patty production for commercial food processing operations.",
    fullDescription:
      "The Burger Patty Forming Machine is designed to streamline burger patty production for commercial food processing operations. It helps produce consistently shaped patties while supporting improved production efficiency and standardized output. With a focus on practical operation and hygienic food processing, the machine is suitable for burger manufacturing units, restaurants, hotels and food production businesses.",
    specifications: [
      { label: "Application", value: "Burger manufacturing units, restaurants, hotels & food businesses" },
      { label: "Operation Type", value: "Semi-automatic / Continuous commercial portioning" },
      { label: "Shape Uniformity", value: "Standardized circular patty portioning" },
      { label: "Hygiene Compliance", value: "Sanitary washdown food processing design" },
    ],
    features: [
      "Consistent shaping supporting improved production efficiency",
      "Standardized portion output with reduced manual handling",
      "Constructed for practical operation and rapid sanitary cleaning",
      "Ideal for meat, vegetarian, and plant-based patty lines",
    ],
  },
  {
    id: "prod-4",
    slug: "tilting-grinder-machine",
    aliases: ["commercial-stainless-steel-food-processing-unit"],
    name: "Tilting Grinder Machine",
    category: "Bakery / Food Processing",
    image: "/products/commercial-stainless-steel-food-processing-unit.png",
    gallery: ["/products/commercial-stainless-steel-food-processing-unit.png"],
    shortDescription:
      "The Tilting Grinder Machine is designed for commercial food processing and grinding operations with a manual lever-operated tilting mechanism.",
    fullDescription:
      "The Tilting Grinder Machine is designed for commercial food processing and grinding operations. Featuring a stainless steel construction, manual lever-operated tilting mechanism and dispensing outlet, it offers a practical solution for handling processed food materials. Its tilting arrangement supports convenient discharge and easier handling during food preparation operations.",
    specifications: [
      { label: "Material Construction", value: "Heavy-duty stainless steel body & drum" },
      { label: "Tilting Mechanism", value: "Manual lever-operated tilting arrangement" },
      { label: "Discharge", value: "Integrated dispensing outlet for convenient discharge" },
      { label: "Application", value: "Commercial food processing, batter grinding & food prep" },
    ],
    features: [
      "Manual lever-operated tilt mechanism for effortless emptying",
      "Integrated dispensing outlet for sanitary material handling",
      "Robust stainless steel drum and frame built for commercial duty",
      "Smooth rotational grinding mechanism with easy cleaning access",
    ],
  },

  // --------------------------------------------------------------------------
  // PUMPS & ACCESSORIES (5 products)
  // --------------------------------------------------------------------------
  {
    id: "prod-5",
    slug: "cast-iron-submersible-pump",
    aliases: ["heavy-duty-industrial-submersible-pump"],
    name: "Cast Iron Submersible Pump",
    category: "Pumps & Accessories",
    image: "/products/heavy-duty-industrial-submersible-pump.png",
    gallery: ["/products/heavy-duty-industrial-submersible-pump.png"],
    shortDescription:
      "The Cast Iron Submersible Pump is designed for dependable water pumping across various residential, agricultural and industrial applications.",
    fullDescription:
      "The Cast Iron Submersible Pump is designed for dependable water pumping across various residential, agricultural and industrial applications. Featuring a robust cast iron construction, it offers durability and reliable performance in demanding operating environments. Its submersible design allows efficient operation while positioned underwater, making it suitable for a range of water transfer and drainage requirements.",
    specifications: [
      { label: "Body Material", value: "Robust high-tensile Cast Iron" },
      { label: "Operating Configuration", value: "Submersible (underwater positioning)" },
      { label: "Applications", value: "Residential, agricultural & industrial drainage" },
      { label: "Duty Type", value: "Continuous underwater fluid transfer" },
    ],
    features: [
      "Heavy-duty cast iron body resistant to abrasive wear and impact",
      "Submersible positioning allows efficient self-cooling operation",
      "Reliable performance in demanding industrial drainage environments",
      "Versatile application across domestic, farm, and facility setups",
    ],
  },
  {
    id: "prod-6",
    slug: "centrifugal-monoblock-pump",
    aliases: ["high-flow-industrial-centrifugal-pump"],
    name: "Centrifugal Monoblock Pump",
    category: "Pumps & Accessories",
    image: "/products/high-flow-industrial-centrifugal-pump.png",
    gallery: ["/products/high-flow-industrial-centrifugal-pump.png"],
    shortDescription:
      "The Centrifugal Monoblock Pump is designed for efficient and dependable water transfer across a variety of applications.",
    fullDescription:
      "The Centrifugal Monoblock Pump is designed for efficient and dependable water transfer across a variety of applications. Its compact monoblock construction integrates the pump and electric motor into a single unit, providing a practical solution for water supply and pumping requirements. Engineered for reliable operation, it is suitable for domestic, agricultural and general-purpose water transfer applications.",
    specifications: [
      { label: "Construction", value: "Compact Monoblock (Integrated pump & electric motor)" },
      { label: "Service Applications", value: "Domestic, agricultural & general-purpose water transfer" },
      { label: "Pump Type", value: "Centrifugal end-suction fluid transfer" },
      { label: "Engineering Standard", value: "Precision-balanced rotor for low-vibration operation" },
    ],
    features: [
      "Integrated single-unit monoblock construction saving installation space",
      "High hydraulic efficiency for domestic and farm water distribution",
      "Durable housing engineered for continuous and intermittent duties",
      "Practical, low-maintenance design with straightforward installation",
    ],
  },
  {
    id: "prod-7",
    slug: "sewage-submersible-pump",
    aliases: ["commercial-drainage-submersible-pump"],
    name: "Sewage Submersible Pump with Float Switch",
    category: "Pumps & Accessories",
    image: "/products/commercial-drainage-submersible-pump.png",
    gallery: ["/products/commercial-drainage-submersible-pump.png"],
    shortDescription:
      "The Submersible Pump with Float Switch is designed to provide efficient water pumping with automatic water-level-based operation.",
    fullDescription:
      "The Submersible Pump with Float Switch is designed to provide efficient water pumping with automatic water-level-based operation. The integrated float switch helps control pump operation according to the water level, reducing the need for continuous manual monitoring. It is suitable for water transfer, drainage and water management applications where automatic pump control is required.",
    specifications: [
      { label: "Control Mechanism", value: "Integrated automatic liquid-level float switch" },
      { label: "Operation Type", value: "Automatic start/stop based on water level" },
      { label: "Applications", value: "Sewage handling, water transfer, sump drainage" },
      { label: "Monitoring Requirement", value: "Zero manual intervention automated duty" },
    ],
    features: [
      "Integrated float switch automatically controls operation by water depth",
      "Protects against dry running and overflow in drainage pits",
      "Efficient submersible motor housing ensuring quiet performance",
      "Ideal for commercial sewage pits, basements, and sump drainage",
    ],
  },
  {
    id: "prod-8",
    slug: "self-priming-monoblock-pump",
    aliases: ["self-priming-industrial-surface-pump"],
    name: "Self-Priming Monoblock Pump",
    category: "Pumps & Accessories",
    image: "/products/self-priming-industrial-surface-pump.png",
    gallery: ["/products/self-priming-industrial-surface-pump.png"],
    shortDescription:
      "The Self-Priming Monoblock Pump is designed for water transfer applications requiring self-priming capability.",
    fullDescription:
      "The Self-Priming Monoblock Pump is designed for water transfer applications requiring self-priming capability. Its integrated pump and motor assembly provides a compact and practical pumping solution for domestic, agricultural and general water supply requirements. The self-priming design helps establish pumping operation under suitable installation and operating conditions.",
    specifications: [
      { label: "Priming Type", value: "Self-priming internal chamber design" },
      { label: "Assembly", value: "Integrated pump and motor monoblock configuration" },
      { label: "Applications", value: "Domestic water supply, agriculture & general utilities" },
      { label: "Installation", value: "Surface mounting with rapid suction evacuation" },
    ],
    features: [
      "Rapid self-priming design eliminates manual repriming hassles",
      "Compact monoblock integration combining high torque and small footprint",
      "Reliable water supply performance across farm, residential, and shop uses",
      "Robust casting engineered for durability and simple servicing",
    ],
  },
  {
    id: "prod-9",
    slug: "float-switch",
    aliases: ["industrial-liquid-level-float-switch"],
    name: "Float Switch",
    category: "Pumps & Accessories",
    image: "/products/industrial-liquid-level-float-switch.png",
    gallery: ["/products/industrial-liquid-level-float-switch.png"],
    shortDescription:
      "The Float Switch is designed to monitor water levels and support automatic control of compatible pumping systems.",
    fullDescription:
      "The Float Switch is designed to monitor water levels and support automatic control of compatible pumping systems. It operates based on changes in water level, helping activate or deactivate connected pumps according to the configured switching arrangement. It provides a practical solution for automated water management in tanks, reservoirs and drainage systems.",
    specifications: [
      { label: "Function", value: "Liquid level monitoring & automated switching" },
      { label: "Control Mode", value: "Pump activation/deactivation via tilt sensor" },
      { label: "Applications", value: "Overhead tanks, underground reservoirs & drainage sumps" },
      { label: "Enclosure", value: "Chemical and water-resistant sealed float body" },
    ],
    features: [
      "Monitors water levels reliably to prevent dry-run damage and tank overflow",
      "Automatic activation and cut-off for compatible single or 3-phase pumps",
      "Flexible heavy-duty submersible cable with adjustable counterweight",
      "Universal compatibility with industrial, commercial, and domestic pumps",
    ],
  },

  // --------------------------------------------------------------------------
  // INDUSTRIAL & METAL FORMING (2 products)
  // --------------------------------------------------------------------------
  {
    id: "prod-10",
    slug: "back-shoulder-thermocol-filling-machine",
    aliases: ["hydraulic-foam-pad-forming-machine"],
    name: "Back Shoulder Thermocol Filling Machine",
    category: "Industrial & Metal Forming",
    image: "/products/hydraulic-foam-pad-forming-machine.png",
    gallery: ["/products/hydraulic-foam-pad-forming-machine.png"],
    shortDescription:
      "Specialized industrial solution for thermocol filling operating on just 30 watts without requiring an external air compressor.",
    fullDescription:
      "The Back Shoulder Thermocol Filling Machine is a specialized industrial solution designed for thermocol filling applications. Developed with a compact structure and low power consumption, it provides a practical solution for production environments requiring efficient and consistent filling operations.\n\nOperating with a power consumption of just 30 watts, the machine does not require an external air compressor. Its low-noise operation, adjustable speed and stainless steel cylinder contribute to convenient operation and reliable performance.\n\nWith a stated production capacity of up to 400 pieces per hour, it is designed to support productivity while maintaining a compact operational footprint.",
    specifications: [
      { label: "Power Consumption", value: "Ultra-low 30 Watts" },
      { label: "Air Compressor", value: "Not required (No external compressor needed)" },
      { label: "Production Capacity", value: "Up to 400 pieces per hour" },
      { label: "Cylinder Material", value: "Durable stainless steel cylinder" },
      { label: "Operational Features", value: "Low-noise operation with adjustable speed controls" },
    ],
    features: [
      "Operates efficiently on just 30 watts, drastically cutting utility costs",
      "Compressor-free design eliminates the cost and noise of air compressors",
      "High throughput of up to 400 pieces per hour for steady line output",
      "Low-noise motor with variable speed calibration and stainless cylinder",
    ],
  },
  {
    id: "prod-11",
    slug: "metal-strip-bending-forming-machine",
    aliases: ["precision-industrial-metal-forming-press"],
    name: "Metal Strip Bending & Forming Machine",
    category: "Industrial & Metal Forming",
    image: "/products/precision-industrial-metal-forming-press.png",
    gallery: ["/products/precision-industrial-metal-forming-press.png"],
    shortDescription:
      "The Metal Strip Bending & Forming Machine is designed for precision metal forming and customized component manufacturing.",
    fullDescription:
      "The Metal Strip Bending & Forming Machine is designed for precision metal forming and customized component manufacturing. It supports the bending and shaping of metal strips into different profiles and configurations according to production requirements.\n\nSuitable for manufacturing flat metal strips, custom brackets, bent metal rods, U-shaped profiles, Ω-shaped profiles and metal channels, the machine offers a practical solution for application-specific metal forming operations. Its configurable design supports customized manufacturing requirements across various industrial sectors.",
    specifications: [
      { label: "Supported Profiles", value: "Flat strips, brackets, bent rods, U-profiles, Ω-profiles, channels" },
      { label: "Operation", value: "Precision strip bending, profiling and forming" },
      { label: "Design", value: "Configurable tooling for application-specific metal forming" },
      { label: "Applications", value: "Automotive brackets, construction hardware & industrial fasteners" },
    ],
    features: [
      "Shapes flat strips, custom brackets, bent rods, U and Ω-profiles",
      "Highly configurable die arrangements for application-specific production",
      "Heavy rigid frame minimizing angular deflection during bending",
      "Supports customized manufacturing requirements across diverse industries",
    ],
  },

  // --------------------------------------------------------------------------
  // AIR COMPRESSORS (1 product)
  // --------------------------------------------------------------------------
  {
    id: "prod-12",
    slug: "piston-air-compressor",
    aliases: ["industrial-piston-air-compressor"],
    name: "Piston Air Compressor",
    category: "Air Compressors",
    image: "/products/industrial-piston-air-compressor.png",
    gallery: ["/products/industrial-piston-air-compressor.png"],
    shortDescription:
      "The Piston Air Compressor is designed to generate compressed air for a wide range of industrial and commercial requirements.",
    fullDescription:
      "The Piston Air Compressor is designed to generate compressed air for a wide range of industrial and commercial requirements. Its reciprocating compression mechanism uses pistons and cylinders to compress incoming air and deliver it at the required pressure.\n\nThe two-stage configuration compresses air through successive stages, making it suitable for applications requiring higher pressure output. Built for practical compressed-air requirements, it can support workshops, manufacturing facilities and various industrial operations.",
    specifications: [
      { label: "Compression Mechanism", value: "Reciprocating piston and cylinder assembly" },
      { label: "Configuration", value: "Two-stage successive compression for higher pressure" },
      { label: "Applications", value: "Workshops, manufacturing facilities & industrial operations" },
      { label: "Duty Level", value: "Heavy-duty commercial & industrial air delivery" },
    ],
    features: [
      "Two-stage reciprocating compression designed for reliable high-pressure output",
      "Heavy cast iron cylinder block ensuring effective heat dissipation",
      "Supplies steady compressed pneumatic air for tooling, machinery, and plants",
      "Practical, field-tested engineering built for longevity and easy maintenance",
    ],
  },

  // --------------------------------------------------------------------------
  // UNIVERSAL JOINTS (1 product)
  // --------------------------------------------------------------------------
  {
    id: "prod-13",
    slug: "industrial-universal-joints",
    aliases: ["precision-machined-universal-joint-couplers"],
    name: "Industrial Universal Joints",
    category: "Universal Joints",
    image: "/products/precision-machined-universal-joint-couplers.png",
    gallery: ["/products/precision-machined-universal-joint-couplers.png"],
    shortDescription:
      "Precision-engineered Industrial Universal Joints designed to transmit rotational torque between connected shafts operating at different angular positions.",
    fullDescription:
      "Precision-engineered Industrial Universal Joints designed to transmit rotational torque between connected shafts operating at different angular positions.\n\nThese components are suitable for automotive drivetrains, trucks, agricultural equipment and industrial machinery where reliable power transmission is essential.\n\nWith customized manufacturing capabilities, universal joints can be produced according to customer-provided engineering drawings or physical samples. This enables application-specific solutions based on dimensional and functional requirements.",
    specifications: [
      { label: "Function", value: "Rotational torque transmission across angular misalignments" },
      { label: "Applications", value: "Automotive drivetrains, trucks, agricultural equipment & machinery" },
      { label: "Custom Manufacturing", value: "Produced per customer engineering drawings or physical samples" },
      { label: "Dimensional Standards", value: "Tailored to exact client functional & torque tolerances" },
    ],
    features: [
      "Reliable angular torque transmission for high-stress mechanical drive lines",
      "Built for trucks, automotive drivetrains, tractors, and industrial machines",
      "Custom manufacturing available from engineering blueprints or physical samples",
      "Case-hardened bearing surfaces ensuring superior resistance to torsional fatigue",
    ],
  },

  // --------------------------------------------------------------------------
  // CUSTOM PNEUMATIC MACHINES (1 product)
  // --------------------------------------------------------------------------
  {
    id: "prod-14",
    slug: "pneumatic-machine-fixture",
    aliases: ["custom-precision-pneumatic-machine"],
    name: "Custom Pneumatic Machine & Fixture",
    category: "Custom Pneumatic Machines",
    image: "/products/custom-precision-pneumatic-machine.png",
    gallery: ["/products/custom-precision-pneumatic-machine.png"],
    shortDescription:
      "Customized pneumatic machines and industrial fixtures designed to meet specific manufacturing and operational requirements.",
    fullDescription:
      "Customized pneumatic machines and industrial fixtures designed to meet specific manufacturing and operational requirements.\n\nFeaturing pneumatic cylinders, interconnected pneumatic tubing, precision metal fixtures and a control housing, these systems can be configured for specialized industrial applications. Each solution can be developed according to the customer's production requirements, operating conditions and application needs.\n\nFrom custom fixtures to pneumatic assembly systems, MECH & DIE focuses on delivering practical engineering solutions for specialized industrial operations.",
    specifications: [
      { label: "Key Components", value: "Pneumatic cylinders, tubing, precision fixtures, control housing" },
      { label: "Design Approach", value: "Custom developed to client production requirements & operating conditions" },
      { label: "Solution Range", value: "Custom fixtures, clamping stations, pneumatic assembly systems" },
      { label: "Engineering Desk", value: "MECH & DIE bespoke machine fabrication" },
    ],
    features: [
      "Engineered to order based on specific part geometry and cycle time goals",
      "High-precision pneumatic actuation, guided slides, and clamp tooling",
      "Integrated control housing and high-flex pneumatic distribution tubing",
      "Turnkey solutions from concept design to on-site implementation",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug || p.aliases?.includes(slug));
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All" || !category) {
    return products;
  }
  return products.filter((p) => p.category === category);
}
