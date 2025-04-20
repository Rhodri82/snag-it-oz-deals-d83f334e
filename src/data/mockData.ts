
import { User, Deal, Comment, Category } from "../types";
import { 
  Monitor, 
  Gamepad, 
  Utensils, 
  Car, 
  Home as HomeIcon, 
  ShoppingBag, 
  Smartphone, 
  Laptop, 
  Tv, 
  Camera,
  Headphones,
  Gift
} from "lucide-react";

// Mock Users
export const USERS: User[] = [
  {
    id: "1",
    username: "dealfinder",
    avatar: "https://i.pravatar.cc/150?img=1",
    reputation: 1250,
    createdAt: new Date("2023-01-15")
  },
  {
    id: "2",
    username: "savvyshopper",
    avatar: "https://i.pravatar.cc/150?img=2",
    reputation: 890,
    createdAt: new Date("2023-04-20")
  },
  {
    id: "3",
    username: "bargainhunter",
    avatar: "https://i.pravatar.cc/150?img=3",
    reputation: 540,
    createdAt: new Date("2023-08-10")
  },
];

// Mock Comments
export const COMMENTS: Comment[] = [
  {
    id: "c1",
    content: "Great deal! I bought two already and they work perfectly.",
    author: USERS[0],
    createdAt: new Date("2025-04-19T14:30:00"),
    likes: 15
  },
  {
    id: "c2",
    content: "Is this better than the previous model? Anyone knows?",
    author: USERS[1],
    createdAt: new Date("2025-04-19T15:45:00"),
    likes: 8
  },
  {
    id: "c3",
    content: "Deal expired for me, showing full price now.",
    author: USERS[2],
    createdAt: new Date("2025-04-19T17:20:00"),
    likes: 21
  },
  {
    id: "c4",
    content: "Thanks for sharing! Been waiting for this to go on sale.",
    author: USERS[1],
    createdAt: new Date("2025-04-19T18:10:00"),
    likes: 12
  }
];

// Mock Categories with subcategories
export const CATEGORIES: Category[] = [
  { 
    id: "electronics", 
    name: "Electronics", 
    icon: Monitor, 
    count: 145,
    subcategories: [
      { id: "smartphones", name: "Smartphones", count: 42 },
      { id: "laptops", name: "Laptops & Computers", count: 38 },
      { id: "tvs", name: "TVs", count: 29 },
      { id: "cameras", name: "Cameras", count: 21 },
      { id: "audio", name: "Audio & Headphones", count: 15 }
    ]
  },
  { 
    id: "gaming", 
    name: "Gaming", 
    icon: Gamepad, 
    count: 87,
    subcategories: [
      { id: "console", name: "Consoles", count: 24 },
      { id: "games", name: "Games", count: 48 },
      { id: "accessories", name: "Accessories", count: 15 }
    ]
  },
  { 
    id: "food", 
    name: "Food & Dining", 
    icon: Utensils, 
    count: 62,
    subcategories: [
      { id: "groceries", name: "Groceries", count: 28 },
      { id: "restaurants", name: "Restaurant Deals", count: 19 },
      { id: "alcohol", name: "Drinks & Alcohol", count: 15 }
    ]
  },
  { 
    id: "automotive", 
    name: "Automotive", 
    icon: Car, 
    count: 34,
    subcategories: [
      { id: "parts", name: "Car Parts", count: 17 },
      { id: "accessories", name: "Car Accessories", count: 12 },
      { id: "services", name: "Auto Services", count: 5 }
    ]
  },
  { 
    id: "home", 
    name: "Home & Garden", 
    icon: HomeIcon, 
    count: 53,
    subcategories: [
      { id: "furniture", name: "Furniture", count: 19 },
      { id: "appliances", name: "Appliances", count: 22 },
      { id: "garden", name: "Garden & Outdoor", count: 12 }
    ]
  },
  { 
    id: "fashion", 
    name: "Fashion", 
    icon: ShoppingBag, 
    count: 76,
    subcategories: [
      { id: "mens", name: "Men's Fashion", count: 27 },
      { id: "womens", name: "Women's Fashion", count: 38 },
      { id: "kids", name: "Kid's Fashion", count: 11 }
    ]
  },
];

// Mock Deals with enhanced structure
export const DEALS: Deal[] = [
  {
    id: "1",
    title: "Nintendo Switch OLED - JB Hi-Fi Deal",
    price: "$398",
    originalPrice: "$469",
    discount: "15% off",
    retailer: "JB Hi-Fi",
    description: "Latest Nintendo Switch OLED model with white Joy-Cons. Pickup in store or delivery available. Comes with 12-month warranty and free Mario Kart 8 Deluxe download code.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "https://jbhifi.com.au",
    category: "gaming",
    subcategory: "console",
    temperature: 85,
    votes: { yeah: 45, nah: 3 },
    comments: [COMMENTS[0], COMMENTS[3]],
    author: USERS[0],
    createdAt: new Date("2025-04-18T10:30:00"),
    expiresAt: new Date("2025-04-25T23:59:59"),
    isExpired: false,
    isHot: true,
    location: "National",
    shippingCost: "Free shipping over $50",
    dealCode: "SWITCH15"
  },
  {
    id: "2",
    title: "iPhone 15 Pro with $200 Gift Card",
    price: "$1,499",
    originalPrice: "$1,699",
    discount: "$200 gift card",
    retailer: "Telstra",
    description: "Get a $200 gift card when you purchase any iPhone 15 Pro model. Limited time offer. All colors available. Must be activated on a Telstra plan.",
    imageUrl: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
    link: "https://telstra.com.au",
    category: "electronics",
    subcategory: "smartphones",
    temperature: 65,
    votes: { yeah: 32, nah: 8 },
    comments: [COMMENTS[1], COMMENTS[2]],
    author: USERS[1],
    createdAt: new Date("2025-04-17T15:45:00"),
    expiresAt: new Date("2025-04-22T23:59:59"),
    isExpired: false,
    isHot: true,
    location: "National",
    shippingCost: "Free delivery",
    dealCode: "IPHONE15PRO"
  },
  {
    id: "3",
    title: "Dyson V12 Detect Slim - 20% Off",
    price: "$799",
    originalPrice: "$999",
    discount: "20% off",
    retailer: "Harvey Norman",
    description: "Dyson V12 Detect Slim with laser dust detection and LCD display. Includes all attachments and 2-year warranty. In-store only, limited stock available.",
    imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001",
    link: "https://harveynorman.com.au",
    category: "home",
    subcategory: "appliances",
    temperature: 75,
    votes: { yeah: 28, nah: 5 },
    comments: [],
    author: USERS[2],
    createdAt: new Date("2025-04-16T09:15:00"),
    expiresAt: new Date("2025-04-21T23:59:59"),
    isExpired: false,
    isHot: true,
    location: "Sydney, Melbourne, Brisbane",
    shippingCost: "Click & Collect available",
    dealCode: "DYSON20"
  },
  {
    id: "4",
    title: "Woolworths $10 off $100 Spend",
    price: "$10 off",
    originalPrice: "$100",
    discount: "10% off",
    retailer: "Woolworths",
    description: "Get $10 off when you spend $100 or more at Woolworths. Valid in-store and online. Excludes gift cards, tobacco and lottery products.",
    imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58",
    link: "https://woolworths.com.au",
    category: "food",
    subcategory: "groceries",
    temperature: 92,
    votes: { yeah: 54, nah: 2 },
    comments: [],
    author: USERS[0],
    createdAt: new Date("2025-04-19T08:30:00"),
    expiresAt: new Date("2025-04-23T23:59:59"),
    isExpired: false,
    isHot: true,
    location: "National",
    shippingCost: "N/A",
    dealCode: "SAVE10WW"
  },
  {
    id: "5",
    title: "Sony WH-1000XM5 Headphones",
    price: "$348",
    originalPrice: "$549",
    discount: "36% off",
    retailer: "Amazon Australia",
    description: "Sony's flagship noise cancelling headphones at the lowest price ever. All colors available. Includes carry case and audio cable.",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
    link: "https://amazon.com.au",
    category: "electronics",
    subcategory: "audio",
    temperature: 88,
    votes: { yeah: 41, nah: 3 },
    comments: [],
    author: USERS[1],
    createdAt: new Date("2025-04-15T14:20:00"),
    expiresAt: new Date("2025-04-20T23:59:59"),
    isExpired: false,
    isHot: true,
    location: "National",
    shippingCost: "Free with Prime",
    dealCode: ""
  },
  {
    id: "6",
    title: "50% off T-Bone Steaks at Coles",
    price: "$15",
    originalPrice: "$30",
    discount: "50% off",
    retailer: "Coles",
    description: "Half price on premium T-Bone steaks, 400g each. Perfect for weekend BBQ. Limited time only, while stocks last.",
    imageUrl: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
    link: "https://coles.com.au",
    category: "food",
    subcategory: "groceries",
    temperature: 95,
    votes: { yeah: 67, nah: 1 },
    comments: [],
    author: USERS[2],
    createdAt: new Date("2025-04-19T07:45:00"),
    expiresAt: new Date("2025-04-21T23:59:59"),
    isExpired: false,
    isHot: true,
    location: "National",
    shippingCost: "N/A",
    dealCode: ""
  }
];
