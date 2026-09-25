export interface ProjectImage {
  src: string;
  caption: string;
  alt: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Turnkey";
  year: string;
  size?: string;
  heroImage: string;
  heroAlt: string;
  listImage: string;
  layout: "full" | "split" | "portrait" | "wide";
  overview: string;
  challenge: string;
  approach: string;
  materials: string[];
  lighting: string;
  spatial: string;
  gallery: ProjectImage[];
  beforeAfter?: {
    before: string;
    after: string;
    note: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    meta: string;
  };
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "aroma-de-cafe",
    number: "01",
    title: "Aroma De Cafe",
    location: "Amritsar",
    category: "Hospitality",
    year: "2026",
    size: "4,200 sq. ft.",
    heroImage: "/DADDA.png",
    heroAlt: "Hospitality interior design project",
    listImage: "/DADDA.png",
    layout: "full",
    overview:
      "A hospitality interior in Amritsar shaped around atmosphere, material and the experience of gathering.",
    challenge:
      "The existing shell offered generous proportions but disconnected circulation and inconsistent natural light across the living volumes. The family wanted openness without sacrificing intimacy in individual rooms.",
    approach:
      "We restructured the ground floor around a single sightline that connects the entrance, living and garden-facing dining area. Material palette was reduced deliberately — limestone, white oak and brushed bronze — allowing architecture and light to remain the primary decoration.",
    materials: ["Natural limestone", "White oak veneer", "Brushed bronze hardware", "Linen upholstery", "Lime-washed plaster"],
    lighting:
      "Layered lighting strategy combining recessed architectural cove lighting, warm-dimmed pendant fixtures and controlled daylight through reworked window proportions, avoiding a single dominant ceiling light in any room.",
    spatial:
      "Furniture was positioned to preserve circulation paths and sightlines toward the garden, with custom joinery replacing several freestanding pieces to keep the floor plan visually uncluttered.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/7045763/pexels-photo-7045763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Interior of modern lounge decorated with marble fireplace and black wood rack",
        caption: "The living room fireplace, finished in book-matched natural stone.",
      },
      {
        src: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Bright modern bedroom with bed and bedside tables under pendant lamps",
        caption: "The primary bedroom, oriented toward the eastern garden light.",
      },
      {
        src: "https://images.pexels.com/photos/6580381/pexels-photo-6580381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Stylish modern living room with open kitchen and contemporary design elements",
        caption: "Open living and kitchen volume sharing a single material language.",
      },
    ],
    beforeAfter: {
      before:
        "/wide_angle_high_resolution_modern_interior_archi.jpg",
      after:
        "/ChatGPT Image Sep 13, 2026, 11_06_34 AM.png",
      note: "A considered transformation from the original shell to a refined living environment.",
    },
    outcome:
      "A home that reads as a single continuous gesture rather than a sequence of decorated rooms — delivered on a phased execution timeline coordinated with the family in residence.",
  },
  {
    slug: "uppal-neuro-hospital",
    number: "02",
    title: "Uppal Neuro Hospital & Multispeciality Centre",
    location: "Amritsar",
    category: "Residential",
    year: "2025",
    size: "3,100 sq. ft.",
    heroImage: "/ChatGPT Image Sep 25, 2026, 03_10_13 PM.png",
    heroAlt: "Hospital interior design project",
    listImage: "/ChatGPT Image Sep 25, 2026, 03_10_13 PM.png",
    layout: "portrait",
    overview:
      "A top-floor residence designed for a young couple who wanted a home that felt editorial rather than trend-driven — one that would age with restraint rather than date quickly.",
    challenge:
      "Low ceiling bulkheads and an awkward service core limited furniture planning options across the main living floor.",
    approach:
      "Rather than disguising the structural constraints, we designed around them — using the bulkhead line to anchor a continuous lighting cove and reorganising joinery to absorb the service core into a functional wall of storage.",
    materials: ["Fluted oak panelling", "Honed marble", "Boucle upholstery", "Antique brass"],
    lighting:
      "A single low cove line unifies the ceiling plane, paired with warm 2700K accent fixtures within joinery to avoid visual clutter overhead.",
    spatial:
      "Custom low-profile furniture was specified to keep sightlines toward the terrace glazing uninterrupted from the entrance.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/8135502/pexels-photo-8135502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        alt: "Sophisticated bedroom with modern decor, soft lighting, and luxurious furnishings",
        caption: "Primary bedroom with a restrained material palette.",
      },
      {
        src: "https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        alt: "Cozy modern bedroom with green bedding and soft lighting",
        caption: "Guest bedroom, designed as a quieter counterpoint.",
      },
      {
        src: "https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        alt: "Contemporary kitchen in beige and white colors with minimalist cabinets and marble table",
        caption: "Kitchen and breakfast counter in honed marble.",
      },
    ],
    outcome:
      "A residence that presents as considerably larger than its floor plate suggests, achieved through disciplined material and lighting decisions rather than added square footage.",
  },
  {
    slug: "ranjit-avenue",
    number: "03",
    title: "Ranjit Avenue",
    location: "Amritsar",
    category: "Commercial",
    year: "2025",
    size: "12,000 sq. ft.",
    heroImage:
      "https://images.pexels.com/photos/36286291/pexels-photo-36286291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1300&w=2200",
    heroAlt: "Spacious modern interior of a luxurious corporate building with sleek design and natural light",
    listImage:
      "https://images.pexels.com/photos/36286291/pexels-photo-36286291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1600",
    layout: "wide",
    overview:
      "A corporate headquarters for a family-run enterprise that wanted its workplace to communicate the same quality standards as its client-facing business.",
    challenge:
      "The floor plate needed to balance private cabins, open collaborative desking and formal client-facing reception areas without feeling fragmented.",
    approach:
      "A material and colour language consistent across every zone — from reception to boardroom — was used to unify the experience, while lighting temperature and intensity were varied by function.",
    materials: ["Fluted walnut", "Textured limewash", "Brushed brass", "Wool-blend carpet tile"],
    lighting:
      "Task-appropriate lighting zoning: cooler, brighter light across desking; warmer, dimmable light in meeting and reception areas.",
    spatial:
      "Circulation was planned around a central spine so that visitors experience a considered sequence of spaces from arrival to boardroom.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/5511099/pexels-photo-5511099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Bright and spacious modern office interior featuring sleek workstations",
        caption: "Open collaborative desking zone.",
      },
      {
        src: "https://images.pexels.com/photos/23073436/pexels-photo-23073436.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Stylish office interior featuring a desk, chair, bookshelf, and decorative items",
        caption: "Private cabin with custom joinery and reading corner.",
      },
      {
        src: "https://images.pexels.com/photos/5511119/pexels-photo-5511119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Spacious meeting room with modern lighting in a corporate setting",
        caption: "Boardroom, positioned at the end of the arrival sequence.",
      },
    ],
    outcome:
      "A workplace that has measurably changed how the client hosts visiting partners — now used as a standing venue for client presentations rather than an off-site venue.",
  },
  {
    slug: "hotel-kullu",
    number: "04",
    title: "Hotel Kullu",
    location: "New Delhi",
    category: "Hospitality",
    year: "2024",
    size: "6,800 sq. ft.",
    heroImage: "/bedroom_image.png",
    heroAlt: "Hotel bedroom interior",
    listImage: "/bedroom_image.png",
    layout: "full",
    overview:
      "A boutique hospitality lobby and lounge designed to give a mid-sized property a sense of arrival disproportionate to its footprint.",
    challenge:
      "A low, compressed ceiling height at entry needed to feel intentional rather than restrictive, while guiding guests toward a taller volume beyond.",
    approach:
      "We used a deliberately compressed, dimly lit threshold that opens into a taller, brighter lounge — a classic architectural device for sequencing arrival — reinforced with a considered material change underfoot.",
    materials: ["Book-matched marble", "Cane and rattan detailing", "Aged brass", "Hand-loomed textiles"],
    lighting:
      "Warm, low-level lighting at entry rises in intensity and colour temperature as guests move into the main lounge volume.",
    spatial:
      "Seating was arranged in loose clusters rather than fixed rows, allowing the space to function for both casual guest use and private events.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/14036246/pexels-photo-14036246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Luxurious hotel lobby featuring opulent decor, art, and comfortable seating for guests",
        caption: "Guest lounge, seen from the reception threshold.",
      },
      {
        src: "https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Elegant hotel foyer featuring a grand staircase, marble floors, and a chandelier",
        caption: "Marble foyer connecting the lobby to the upper floors.",
      },
      {
        src: "https://images.pexels.com/photos/19689235/pexels-photo-19689235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Elegant hotel lobby featuring luxurious marble flooring and stylish furnishings",
        caption: "Reception hall detailing in aged brass and stone.",
      },
    ],
    outcome:
      "A lobby experience that has become a recognisable identity marker for the property across its own marketing and guest photography.",
  },
  {
    slug: "the-heritage-home",
    number: "05",
    title: "The Heritage Home",
    location: "New Delhi",
    category: "Turnkey",
    year: "2024",
    size: "5,400 sq. ft.",
    heroImage:
      "https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1300&w=2200",
    heroAlt: "A beautifully decorated dining room featuring a long wooden table and ornate curtains",
    listImage:
      "https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1600",
    layout: "split",
    overview:
      "A full turnkey transformation for a multi-generational family home — from architectural coordination through to final styling — completed as a single managed engagement.",
    challenge:
      "Three generations shared the home, each with different expectations of formality, storage and privacy, within a fixed structural envelope.",
    approach:
      "We developed a shared material language for common areas while allowing individual family wings a degree of personal expression within an agreed palette — keeping the home cohesive without being uniform.",
    materials: ["Teak wood joinery", "Hand-finished plaster", "Natural stone flooring", "Silk-blend drapery"],
    lighting:
      "A zoned lighting control system allows each family wing to independently adjust warmth and intensity while common areas remain consistent.",
    spatial:
      "Furniture and joinery were custom-specified across every room as part of a single coordinated execution timeline, from civil work through final handover.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Modern dining room with marble table, gold accents, and stylish lighting",
        caption: "Formal dining room, shared across the family.",
      },
      {
        src: "https://images.pexels.com/photos/8092429/pexels-photo-8092429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "A luxurious dining room showcasing vintage ceramics and classic furniture",
        caption: "Display joinery holding family heirloom ceramics.",
      },
      {
        src: "https://images.pexels.com/photos/10855258/pexels-photo-10855258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Cozy living room with wooden beams, modern furniture, and a stylish kitchen",
        caption: "Family living room with exposed timber detailing.",
      },
    ],
    outcome:
      "A single, end-to-end engagement — spanning architectural coordination, execution and styling — delivered without requiring the family to separately manage multiple vendors.",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
