export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "kids-haircut",
    name: "Kids Haircut",
    price: "$20",
    duration: "30 Mins",
    slug: "kids-haircut",
    shortDesc: "Haircuts for kids ages 4 to 10.",
    longDesc: "We're patient and skilled at cutting kids' hair. We deliver clean, age-appropriate cuts in a comfortable environment.",
    image: "https://vibe.filesafe.space/1781208974742594917/attachments/25259145-c648-4637-bc0a-59fc06e12d88.jpg",
    benefits: ["Kid-friendly barbers", "Quick 30-min session", "Clean precise cuts", "Comfortable atmosphere"]
  },
  {
    id: "young-adult",
    name: "Young Adult",
    price: "$25",
    duration: "30 Mins",
    slug: "young-adult",
    shortDesc: "Modern cuts for young adults.",
    longDesc: "Modern cuts for teens and young men. From fades to textured tops, we keep up with the latest styles.",
    image: "https://vibe.filesafe.space/1781208974742594917/attachments/86bcf385-ae90-48f2-8986-3a97a0055ec8.jpg",
    benefits: ["Trend-forward styles", "Expert fade work", "30-min precision", "Affordable excellence"]
  },
  {
    id: "adult-haircut",
    name: "Adult Haircut",
    price: "$45",
    duration: "35 Mins",
    slug: "adult-haircut",
    shortDesc: "Standard adult haircut.",
    longDesc: "A classic precision cut. We consult with you first to make sure you get exactly the style you want.",
    image: "https://vibe.filesafe.space/1781208974742594917/attachments/f5e6e4d3-7030-4b2c-994f-51d8a9b0a196.jpg",
    benefits: ["Personalized consultation", "Expert precision fades", "Style-matched cuts", "Hot towel finish available"]
  },
  {
    id: "bald-head-beard",
    name: "Bald Head Beard",
    price: "$32.50",
    duration: "30 Mins",
    slug: "bald-head-beard",
    shortDesc: "Smooth shave plus beard sculpting.",
    longDesc: "A smooth head shave paired with expert beard sculpting and lining.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/57221d24-d0d2-47a8-b608-e9e207310962.png",
    benefits: ["Full head shave", "Beard sculpting", "Straight razor finish", "Moisturizer application"]
  },
  {
    id: "basic-shave",
    name: "Basic Shave",
    price: "$30",
    duration: "30 Mins",
    slug: "basic-shave",
    shortDesc: "Classic straight razor shave.",
    longDesc: "A classic straight razor shave with hot towel prep and premium shave cream for a smooth finish.",
    image: "https://vibe.filesafe.space/1781208974742594917/attachments/a9952a01-235f-4ad0-af0b-081111b4f60d.jpg",
    benefits: ["Hot towel preparation", "Premium shave cream", "Straight razor precision", "Cool towel finish"]
  },
  {
    id: "shape-n-tape",
    name: "Shape n Tape",
    price: "$35",
    duration: "35 Mins",
    slug: "shape-n-tape",
    shortDesc: "Lineup and shape-up for clean edges.",
    longDesc: "A quick lineup and shape-up to keep your edges crisp and clean between full haircuts.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/d101bc35-fb24-4eea-941a-eba8e5ee9c54.png",
    benefits: ["Razor-sharp lineup", "Temple fades", "Beard edge-up", "Precision tape technique"]
  },
  {
    id: "eyebrows",
    name: "Eyebrows",
    price: "$15",
    duration: "15 Mins",
    slug: "eyebrows",
    shortDesc: "Quick eyebrow cleanup.",
    longDesc: "Quick eyebrow cleanup and shaping to keep you looking sharp.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/57221d24-d0d2-47a8-b608-e9e207310962.png",
    benefits: ["Symmetrical shaping", "Stray hair removal", "Natural arch definition", "Quick 15-min service"]
  },
  {
    id: "cut-n-color",
    name: "Cut n Color",
    price: "$80",
    duration: "1 Hour",
    slug: "cut-n-color",
    shortDesc: "Haircut with color treatment.",
    longDesc: "A full haircut combined with professional hair coloring.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/0523d677-a103-4a02-b4dd-87812acd4de9.png",
    benefits: ["Full precision cut", "Professional color application", "Wash and style", "Color consultation included"]
  },
  {
    id: "haircut-n-beard",
    name: "Haircut n Beard",
    price: "$45",
    duration: "45 Mins",
    slug: "haircut-n-beard",
    shortDesc: "Haircut plus full beard service.",
    longDesc: "A full haircut combined with a complete beard trim and lineup.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/57221d24-d0d2-47a8-b608-e9e207310962.png",
    benefits: ["Precision haircut", "Full beard trim", "Beard lineup", "Complementary styling"]
  },
  {
    id: "full-service",
    name: "Full Service",
    price: "$75",
    duration: "Ask for details",
    slug: "full-service",
    shortDesc: "Complete haircut, beard, and shave package.",
    longDesc: "Our complete package: haircut, beard service, straight razor shave, and lineup.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/1bbd14db-0b55-4e67-b305-9340e9e76692.png",
    benefits: ["Complete haircut", "Full beard service", "Straight razor shave", "Lineup and edges", "Hot towel ritual", "Premium finish"]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};
