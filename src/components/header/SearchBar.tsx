
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    
    if (window.innerWidth < 768) {
      setShowSearch(false);
    }
  };

  if (!showSearch) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setShowSearch(true)}
        className="md:hidden"
      >
        <Search className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <form onSubmit={handleSearch} className="flex-1 flex items-center">
      <Input
        type="search"
        placeholder="Search deals..."
        className="w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus
      />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setShowSearch(false)}
        type="button"
      >
        <X className="h-5 w-5" />
      </Button>
    </form>
  );
};
