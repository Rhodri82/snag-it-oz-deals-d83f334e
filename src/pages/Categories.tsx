
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, ChevronRight, ChevronDown } from "lucide-react";
import { CATEGORIES } from '../data/mockData';

const Categories = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };
  
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
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    {category.name}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => toggleCategory(category.id)}
                  >
                    {expandedCategory === category.id ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.count} active deals
                </p>
                
                {expandedCategory === category.id && category.subcategories && (
                  <div className="mt-4 border-t pt-3">
                    <ul className="space-y-2">
                      {category.subcategories.map(sub => (
                        <li key={sub.id} className="flex justify-between items-center">
                          <span className="text-sm hover:text-primary cursor-pointer">
                            {sub.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {sub.count}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;
