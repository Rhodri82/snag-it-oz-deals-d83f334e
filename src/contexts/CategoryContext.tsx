
import React, { createContext, useContext, useState, useCallback } from 'react';
import { CategoryWithCount, DealCategory } from '@/types/categories';
import { AUSTRALIAN_DEAL_CATEGORIES, mainCategories } from '@/components/sidebar/sidebar-data';

interface CategoryContextType {
  categories: DealCategory[];
  activeCategory?: string;
  setActiveCategory: (slug?: string) => void;
  favoriteCategories: string[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  categoriesWithCount: CategoryWithCount[];
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string>();
  const [favoriteCategories, setFavoriteCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('favoriteCategories');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = useCallback((slug: string) => {
    setFavoriteCategories(prev => {
      const newFavorites = prev.includes(slug)
        ? prev.filter(id => id !== slug)
        : [...prev, slug];
      localStorage.setItem('favoriteCategories', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((slug: string) => {
    return favoriteCategories.includes(slug);
  }, [favoriteCategories]);

  const value = {
    categories: AUSTRALIAN_DEAL_CATEGORIES,
    activeCategory,
    setActiveCategory,
    favoriteCategories,
    toggleFavorite,
    isFavorite,
    categoriesWithCount: mainCategories,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
}
