
import React, { useState } from 'react';
import Header from '../components/Header';
import DealCard from '../components/DealCard';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SAMPLE_DEALS = [
  {
    id: 1,
    title: "Nintendo Switch OLED - JB Hi-Fi Deal",
    price: "$398",
    retailer: "JB Hi-Fi",
    description: "Latest Nintendo Switch OLED model with white Joy-Cons. Pickup in store or delivery available.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    timestamp: "2 hours ago",
    temperature: 85,
    votes: { yeah: 45, nah: 3 }
  },
  {
    id: 2,
    title: "iPhone 15 Pro with $200 Gift Card",
    price: "$1,499",
    retailer: "Telstra",
    description: "Get a $200 gift card when you purchase any iPhone 15 Pro model. Limited time offer.",
    timestamp: "5 hours ago",
    temperature: 65,
    votes: { yeah: 32, nah: 8 }
  },
  {
    id: 3,
    title: "Anker PowerCore Essential 20000 PD Power Bank",
    price: "$49.99",
    retailer: "Amazon",
    description: "20000mAh portable charger with USB-C Power Delivery. Fast charging for phones and tablets.",
    imageUrl: "/lovable-uploads/9a5ec587-4dca-49aa-a508-0de8c79de058.png",
    timestamp: "3 hours ago",
    temperature: 92,
    votes: { yeah: 67, nah: 2 }
  },
  {
    id: 4,
    title: "Dyson V8 Cordless Vacuum - 25% OFF",
    price: "$449",
    retailer: "eBay",
    description: "Certified refurbished Dyson V8 with 2 year warranty. Use code DYSON25.",
    timestamp: "Yesterday",
    temperature: 78,
    votes: { yeah: 53, nah: 7 }
  },
  {
    id: 5,
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: "$348",
    retailer: "JB Hi-Fi",
    description: "Industry-leading noise cancellation. 30 hour battery life. Limited time offer.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    timestamp: "1 day ago",
    temperature: 88,
    votes: { yeah: 41, nah: 4 }
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-2 py-3">
          <div className="flex items-center text-sm overflow-x-auto hide-scrollbar">
            <Button 
              variant={activeTab === "popular" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setActiveTab("popular")}
              className="rounded-full text-xs"
            >
              Popular deals
            </Button>
            <Button 
              variant={activeTab === "newest" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setActiveTab("newest")}
              className="rounded-full text-xs"
            >
              Newest
            </Button>
            <Button 
              variant={activeTab === "hottest" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setActiveTab("hottest")}
              className="rounded-full text-xs"
            >
              Hottest
            </Button>
            <Button 
              variant={activeTab === "discussed" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setActiveTab("discussed")}
              className="rounded-full text-xs"
            >
              Discussed
            </Button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-2 py-3">
        {activeTab === "popular" && (
          <div className="space-y-1">
            {SAMPLE_DEALS.map((deal) => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
        )}
        {activeTab === "newest" && (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            Switch to this tab to see the newest deals
          </div>
        )}
        {activeTab === "hottest" && (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            Switch to this tab to see the hottest deals
          </div>
        )}
        {activeTab === "discussed" && (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            Switch to this tab to see the most discussed deals
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
