
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, ShoppingBag, Monitor, Gamepad, Utensils, Car, Home as HomeIcon } from "lucide-react";

const CATEGORIES = [
  { name: "Electronics", icon: Monitor, count: 145 },
  { name: "Gaming", icon: Gamepad, count: 87 },
  { name: "Food & Dining", icon: Utensils, count: 62 },
  { name: "Automotive", icon: Car, count: 34 },
  { name: "Home & Garden", icon: HomeIcon, count: 53 },
  { name: "Fashion", icon: ShoppingBag, count: 76 },
];

const Categories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Browse Categories</h1>
          <Button className="flex items-center gap-2">
            <Tag size={18} />
            View All Tags
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.count} active deals
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;
