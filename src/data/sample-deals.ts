
import { Deal } from '@/types/deals';

export const SAMPLE_DEALS: Deal[] = [
  {
    id: 1,
    title: "Xbox Series X Console - Save $150",
    price: "$649",
    previousPrice: "$799",
    retailer: "JB Hi-Fi",
    description: "Latest Xbox Series X console with one controller. Free click and collect.",
    imageUrl: "/placeholder.svg",
    timestamp: "2 hours ago",
    temperature: 25,
    votes: {
      yeah: 45,
      nah: 2
    },
    commentCount: 12,
    shipping: "Free Click & Collect",
    discount: "$150 off",
    categories: ["Gaming", "Electronics"],
    dealUrl: "#",
    postedBy: "DealHunter",
    location: "National"
  },
  {
    id: 2,
    title: "Dyson V15 Detect Absolute+ Cordless Vacuum",
    price: "$999",
    previousPrice: "$1,399",
    retailer: "The Good Guys",
    description: "Latest Dyson V15 with laser dust detection and HEPA filtration.",
    imageUrl: "/placeholder.svg",
    timestamp: "5 hours ago",
    temperature: 35,
    votes: {
      yeah: 89,
      nah: 4
    },
    commentCount: 28,
    shipping: "$15 Delivery",
    discount: "$400 off",
    categories: ["Home", "Appliances"],
    dealUrl: "#",
    postedBy: "BargainPro",
    location: "National",
    featured: true
  }
];
