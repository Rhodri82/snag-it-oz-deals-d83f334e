
import React from 'react';
import { toast } from "sonner";
import { Trophy, Star, Medal } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  points: number;
  type: 'deal' | 'streak' | 'special';
}

export const showAchievement = (achievement: Achievement) => {
  const icons = {
    deal: Trophy,
    streak: Star,
    special: Medal
  };
  
  const Icon = icons[achievement.type];

  toast.custom((t) => (
    <div className="bg-background border rounded-lg shadow-lg p-4 flex items-start gap-3 animate-in fade-in-0 zoom-in-95">
      <div className="bg-primary/10 p-2 rounded-full">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-base">{achievement.title}</h3>
        <p className="text-sm text-muted-foreground mb-1">{achievement.description}</p>
        <div className="text-xs text-primary font-medium flex items-center gap-1.5">
          +{achievement.points} Fair Dinkum Points
          <div className="animate-bounce">🦘</div>
        </div>
      </div>
    </div>
  ), {
    duration: 4000,
    position: "top-right",
  });
};

