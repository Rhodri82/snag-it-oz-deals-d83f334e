
import { Deal } from '@/types/deals';

export const SAMPLE_DEALS: Deal[] = [
  {
    id: 1,
    title: "Xbox Series X Console - Save $150",
    description: "Latest Xbox Series X console with one controller. Free click and collect.",
    price: "$649",
    previousPrice: "$799",
    retailer: "JB Hi-Fi",
    imageUrl: "/placeholder.svg",
    postedBy: "DealHunter",
    timestamp: "2 hours ago",
    categories: ["Gaming", "Electronics"],
    temperature: 25,
    votes: {
      yeah: 45,
      nah: 2
    },
    commentCount: 12,
    shipping: "Free Click & Collect",
    discount: "$150 off",
    dealUrl: "#",
    location: "National"
  },
  {
    id: 2,
    title: "Dyson V15 Detect Absolute+ Cordless Vacuum",
    description: "Latest Dyson V15 with laser dust detection and HEPA filtration.",
    price: "$999",
    previousPrice: "$1,399",
    retailer: "The Good Guys",
    imageUrl: "/placeholder.svg",
    postedBy: "BargainPro",
    timestamp: "5 hours ago",
    categories: ["Home", "Appliances"],
    temperature: 35,
    votes: {
      yeah: 89,
      nah: 4
    },
    commentCount: 28,
    shipping: "$15 Delivery",
    discount: "$400 off",
    dealUrl: "#",
    location: "National",
    featured: true
  },
  {
    id: 3,
    title: "Nintendo Switch OLED Model",
    description: "Latest Nintendo Switch with OLED screen. Includes Mario Kart 8 Deluxe.",
    price: "$449",
    previousPrice: "$549",
    retailer: "Amazon AU",
    imageUrl: "/placeholder.svg",
    postedBy: "NintendoFan",
    timestamp: "1 day ago",
    categories: ["Gaming", "Electronics"],
    temperature: 42,
    votes: {
      yeah: 120,
      nah: 5
    },
    commentCount: 34,
    shipping: "Free Prime Delivery",
    discount: "$100 off",
    dealUrl: "#",
    location: "Online"
  }
];

