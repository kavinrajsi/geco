export const categories = [
  "Tile Adhesives",
  "Tile Grouts",
  "Tapes",
  "Sealants",
];

export const products = [
  {
    id: "geco-tilebond",
    name: "GECO TILEBOND",
    category: "Tile Adhesives",
    description:
      "High-performance tile adhesive for fixing ceramic and vitrified tiles on walls and floors.",
  },
  {
    id: "geco-tilebond-plus",
    name: "GECO TILEBOND PLUS",
    category: "Tile Adhesives",
    description:
      "Premium tile adhesive with enhanced bonding strength for large-format and heavy tiles.",
  },
  {
    id: "geco-tilebond-classic",
    name: "GECO TILEBOND CLASSIC",
    category: "Tile Adhesives",
    description:
      "Reliable tile adhesive for standard ceramic tile installations on interior surfaces.",
  },
  {
    id: "geco-jointfill-epoxy",
    name: "GECO JOINTFILL EPOXY",
    category: "Tile Grouts",
    description:
      "Epoxy-based tile grout offering superior stain resistance and durability for joints.",
  },
  {
    id: "geco-jointfill",
    name: "GECO JOINTFILL",
    category: "Tile Grouts",
    description:
      "Cementitious tile grout for filling joints in ceramic and vitrified tile installations.",
  },
  {
    id: "geco-durafill-12",
    name: "GECO DURAFILL 12",
    category: "Tile Grouts",
    description:
      "High-strength grout designed for joints up to 12mm wide with excellent water resistance.",
  },
  {
    id: "geco-durafill-max",
    name: "GECO DURAFILL MAX",
    category: "Tile Grouts",
    description:
      "Maximum-performance grout for wide joints with superior flexibility and colour retention.",
  },
  {
    id: "geco-masking-tape",
    name: "GECO MASKING TAPE",
    category: "Tapes",
    description:
      "General-purpose masking tape for clean paint lines and surface protection during application.",
  },
  {
    id: "geco-uniseal",
    name: "GECO UNISEAL",
    category: "Sealants",
    description:
      "Universal silicone sealant for sealing joints in bathrooms, kitchens, and wet areas.",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}
