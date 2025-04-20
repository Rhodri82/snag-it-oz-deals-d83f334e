
import React from 'react';
import Header from '../components/Header';
import DealCard from '../components/DealCard';
import { Badge } from "@/components/ui/badge";

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
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_DEALS.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
