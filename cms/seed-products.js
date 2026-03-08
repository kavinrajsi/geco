const strapi = require("@strapi/strapi");

async function seed() {
  const app = await strapi.createStrapi({ appDir: process.cwd() }).load();

  console.log("Seeding product data...");

  // Create product categories
  const productCategories = [];
  const catData = [
    { name: "Tile Adhesives", slug: "tile-adhesives" },
    { name: "Grouts", slug: "grouts" },
    { name: "Waterproofing", slug: "waterproofing" },
  ];

  for (const cat of catData) {
    const existing = await app
      .documents("api::product-category.product-category")
      .findMany({ filters: { name: cat.name } });
    if (existing.length > 0) {
      productCategories.push(existing[0]);
      console.log(`Product category "${cat.name}" already exists, skipping.`);
    } else {
      const created = await app
        .documents("api::product-category.product-category")
        .create({ data: cat });
      productCategories.push(created);
      console.log(`Created product category: ${cat.name}`);
    }
  }

  const findCat = (name) => productCategories.find((c) => c.name === name);

  // Product data based on Figma design
  const products = [
    {
      name: "GECO TILEBOND CLASSIC",
      slug: "geco-tilebond-classic",
      tagline: "Highly Polymer Modified Tile & Stone Adhesive",
      description:
        "GECO TILEBOND CLASSIC is a highly polymer-modified white cement-based adhesive designed for fixing tiles and natural stones. Its advanced polymers deliver superior adhesion, and its self-curing property doesn't leave any air pockets resulting in stronger anchoring of tiles and stones. It adds to the aesthetic look of light-coloured tiles and stones.",
      productCategory: findCat("Tile Adhesives").documentId,
      features: [
        { text: "Self-curing" },
        { text: "Strong Bonding Strength" },
        { text: "Enhanced Durability" },
        { text: "Water Resistant" },
        { text: "Excellent Slip Resistant" },
        { text: "Enhanced Aesthetics" },
        { text: "Faster Installation" },
        { text: "Reduced Shrinkage" },
        { text: "Better Coverage & Efficiency" },
      ],
      areasOfApplication: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "GECO TILEBOND CLASSIC can be used:",
              bold: true,
            },
          ],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "for fixing all types of light-coloured ceramic, vitrified, glass mosaic and stone tiles up to 600 x 600 mm in size and natural stones",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "on interior floors and walls, exterior floors, and in wet and submerged areas",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "for tile-on-tile application",
                },
              ],
            },
          ],
        },
      ],
      standardCompliance: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "GECO TILEBOND CLASSIC complies with IS 15477:2019 – Type 2T Adhesive standards.",
            },
          ],
        },
      ],
      howToUse: [
        {
          stepNumber: 1,
          title: "Prepare the Surface",
          description:
            "Ensure the substrate is properly cured, clean, dry, level, and free from dust or loose particles. Repair cracks if required.",
        },
        {
          stepNumber: 2,
          title: "Mix the Adhesive",
          description:
            "Add TILEBOND to water as per the mixing ratio & mix until a workable paste is obtained. Allow the paste to stand for 2 mins. for it to mature.",
        },
        {
          stepNumber: 3,
          title: "Apply the Adhesive",
          description:
            "Spread the adhesive on the surface using a notched trowel to create uniform grooves. Apply only as much area as you can tile within 10–15 minutes.",
        },
        {
          stepNumber: 4,
          title: "Fix the Tiles",
          description:
            "Press the tiles firmly into the adhesive bed, adjust alignment, and lightly tap with a rubber mallet. Leave to set before grouting.",
        },
      ],
      highlight: {
        title:
          "The Tile Adhesive Advantage: Superior Bonding, Speed, and Flexibility",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Tile adhesives are transforming modern construction by replacing traditional sand-cement mortar with a faster, stronger, and more reliable solution. They allow thin-bed application, quicker drying, and reduced labour, completing projects faster with consistent quality. Lighter, cleaner, and eco-friendly, tile adhesives minimise waste and enhance durability.",
              },
            ],
          },
        ],
        buttonText: "Learn more",
        buttonLink: "/about",
      },
      faqs: [
        {
          question:
            "What makes GECO Tilebond better than traditional cement mortar?",
          answer:
            "GECO Tilebond offers superior bonding strength, self-curing properties, and water resistance compared to traditional cement mortar. It eliminates air pockets, provides faster installation, and delivers enhanced durability for long-lasting tile installations.",
        },
        {
          question:
            "Do tile adhesives contribute to long-lasting tile installations?",
          answer:
            "Absolutely. Their flexible, high-strength bonding resists movement, temperature changes, and moisture-related issues—greatly improving the durability of tiled surfaces.",
        },
        {
          question:
            "What makes TILEBOND CLASSIC suitable for light-coloured tiles?",
          answer:
            "TILEBOND CLASSIC uses a white cement base which prevents discolouration and staining of light-coloured tiles and stones, maintaining their aesthetic appearance over time.",
        },
        {
          question:
            "What kinds of tiles can be fixed using TILEBOND CLASSIC?",
          answer:
            "TILEBOND CLASSIC can fix all types of light-coloured ceramic, vitrified, glass mosaic, and stone tiles up to 600 x 600 mm in size, as well as natural stones.",
        },
        {
          question: "Does TILEBOND CLASSIC offer strong durability?",
          answer:
            "Yes. TILEBOND CLASSIC is designed for enhanced durability with its advanced polymer modification, providing strong bonding that withstands moisture, temperature variations, and everyday wear and tear.",
        },
      ],
    },
    {
      name: "GECO TILEBOND PREMIUM",
      slug: "geco-tilebond-premium",
      tagline: "High Performance Polymer Modified Tile Adhesive",
      description:
        "GECO TILEBOND PREMIUM is a high-performance grey cement-based tile adhesive with advanced polymer modification. Suitable for large format tiles, heavy natural stones, and demanding applications. It provides exceptional bonding strength and flexibility for both interior and exterior installations.",
      productCategory: findCat("Tile Adhesives").documentId,
      features: [
        { text: "High Bonding Strength" },
        { text: "Large Format Tile Compatible" },
        { text: "Self-curing" },
        { text: "Water Resistant" },
        { text: "Anti-slip Formula" },
        { text: "Extended Open Time" },
        { text: "Crack Resistant" },
      ],
      areasOfApplication: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "GECO TILEBOND PREMIUM can be used:",
              bold: true,
            },
          ],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "for fixing large format tiles (up to 1200 x 1200 mm) and heavy natural stones",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "on interior and exterior floors and walls including facades",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "in swimming pools, wet areas, and high-traffic zones",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "for tile-on-tile and stone-on-stone applications",
                },
              ],
            },
          ],
        },
      ],
      standardCompliance: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "GECO TILEBOND PREMIUM complies with IS 15477:2019 – Type 2T Adhesive standards and meets international C2TE classification.",
            },
          ],
        },
      ],
      howToUse: [
        {
          stepNumber: 1,
          title: "Surface Preparation",
          description:
            "Clean the substrate thoroughly. Ensure it is structurally sound, dry, and free from oil, grease, paint, or any loose material.",
        },
        {
          stepNumber: 2,
          title: "Mixing",
          description:
            "Add TILEBOND PREMIUM powder to clean water in the recommended ratio. Mix with a drill mixer until a smooth, lump-free paste is achieved. Let it rest for 3 minutes.",
        },
        {
          stepNumber: 3,
          title: "Application",
          description:
            "Apply the adhesive using an appropriate notched trowel. For large format tiles, apply adhesive on both the substrate and the tile back (double butter method).",
        },
        {
          stepNumber: 4,
          title: "Tile Fixing",
          description:
            "Place tiles firmly into the adhesive with a slight twisting motion. Use spacers for uniform joints. Allow 24 hours before grouting.",
        },
      ],
      highlight: {
        title: "Built for Demanding Installations",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "GECO TILEBOND PREMIUM handles the toughest tiling challenges—large formats, heavy stones, and high-traffic areas. Its advanced polymer technology ensures tiles stay firmly bonded through thermal cycles, moisture exposure, and structural movement.",
              },
            ],
          },
        ],
        buttonText: "Learn more",
        buttonLink: "/about",
      },
      faqs: [
        {
          question: "Can TILEBOND PREMIUM be used for exterior facades?",
          answer:
            "Yes. TILEBOND PREMIUM is specifically formulated for demanding exterior applications including facades, balconies, and terraces, offering excellent weather resistance.",
        },
        {
          question: "What is the maximum tile size supported?",
          answer:
            "TILEBOND PREMIUM supports tiles up to 1200 x 1200 mm and heavy natural stones, making it ideal for large format installations.",
        },
        {
          question: "How long should I wait before grouting?",
          answer:
            "Allow a minimum of 24 hours after tile installation before proceeding with grouting to ensure proper adhesive curing.",
        },
      ],
    },
    {
      name: "GECO GROUTFILL",
      slug: "geco-groutfill",
      tagline: "Premium Polymer Modified Tile Joint Grout",
      description:
        "GECO GROUTFILL is a premium polymer-modified cementitious grout designed for filling joints between tiles and stones. Available in multiple colours, it provides a smooth, durable finish that resists water, stains, and cracking. Its anti-fungal properties keep tile joints clean and hygienic.",
      productCategory: findCat("Grouts").documentId,
      features: [
        { text: "Anti-fungal & Anti-bacterial" },
        { text: "Water Resistant" },
        { text: "Stain Resistant" },
        { text: "Crack Resistant" },
        { text: "Multiple Colour Options" },
        { text: "Smooth Finish" },
        { text: "Easy to Apply" },
      ],
      areasOfApplication: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "GECO GROUTFILL can be used:",
              bold: true,
            },
          ],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "for grouting joints (2–10 mm width) between ceramic, vitrified, and porcelain tiles",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "on interior and exterior floors and walls",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "in wet areas including bathrooms, kitchens, and swimming pool surrounds",
                },
              ],
            },
          ],
        },
      ],
      standardCompliance: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "GECO GROUTFILL complies with IS 15477:2019 joint filling compound standards.",
            },
          ],
        },
      ],
      howToUse: [
        {
          stepNumber: 1,
          title: "Prepare Joints",
          description:
            "Ensure tile adhesive has fully cured (minimum 24 hours). Clean joints of dust, debris, and excess adhesive.",
        },
        {
          stepNumber: 2,
          title: "Mix the Grout",
          description:
            "Add GROUTFILL powder to clean water as per the recommended ratio. Mix until a smooth, creamy consistency is achieved.",
        },
        {
          stepNumber: 3,
          title: "Apply the Grout",
          description:
            "Spread grout diagonally across tile joints using a rubber float. Press firmly to fill joints completely.",
        },
        {
          stepNumber: 4,
          title: "Clean & Finish",
          description:
            "After 15–20 minutes, wipe off excess grout with a damp sponge. Avoid disturbing the filled joints. Allow 24 hours to cure.",
        },
      ],
      highlight: {
        title: "Perfect Joints, Lasting Beauty",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "GECO GROUTFILL delivers smooth, colour-consistent joints that resist water, stains, and fungal growth. With easy application and a range of colours to match any tile, it is the finishing touch that completes your tiling project.",
              },
            ],
          },
        ],
        buttonText: "Learn more",
        buttonLink: "/about",
      },
      faqs: [
        {
          question: "How many colours are available?",
          answer:
            "GECO GROUTFILL is available in over 15 colours to match a wide range of tile types and design preferences.",
        },
        {
          question: "Can GROUTFILL be used in wet areas?",
          answer:
            "Yes. GROUTFILL is water resistant and anti-fungal, making it ideal for bathrooms, kitchens, swimming pool surrounds, and other wet areas.",
        },
        {
          question: "What joint width does GROUTFILL support?",
          answer:
            "GROUTFILL is designed for joint widths between 2 mm and 10 mm for optimal results.",
        },
      ],
    },
  ];

  for (const product of products) {
    const existing = await app
      .documents("api::product.product")
      .findMany({ filters: { slug: product.slug } });

    if (existing.length > 0) {
      console.log(`Product "${product.name}" already exists, skipping.`);
      continue;
    }

    const created = await app.documents("api::product.product").create({
      data: product,
    });

    await app.documents("api::product.product").publish({
      documentId: created.documentId,
    });

    console.log(`Created & published product: ${product.name}`);
  }

  console.log("\nProduct seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
