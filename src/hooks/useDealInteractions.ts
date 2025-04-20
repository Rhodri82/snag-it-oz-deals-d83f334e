
import React from 'react';
import { showAchievement } from '@/components/gamification/AchievementPopup';

export const useDealInteractions = (temperature: number, featured: boolean, expired: boolean) => {
  const [saved, setSaved] = React.useState(false);
  const [userVote, setUserVote] = React.useState<'yeah' | 'nah' | null>(null);
  const [voteAnimation, setVoteAnimation] = React.useState<'yeah' | 'nah' | null>(null);

  const handleVote = (type: 'yeah' | 'nah') => {
    const newVote = userVote === type ? null : type;
    setUserVote(newVote);
    
    if (newVote) {
      setVoteAnimation(newVote);
      setTimeout(() => setVoteAnimation(null), 500);
    }
    
    if (newVote === 'yeah') {
      if (temperature >= 90) {
        showAchievement({
          title: "Ripper Deal Hunter",
          description: "You've spotted a deadset bargain!",
          points: 50,
          type: 'deal'
        });
      } else if (featured) {
        showAchievement({
          title: "Featured Deal Expert",
          description: "You've got an eye for quality deals!",
          points: 30,
          type: 'special'
        });
      }
    }
  };

  const handleSave = () => {
    const newSaved = !saved;
    setSaved(newSaved);
    
    if (newSaved && !expired) {
      showAchievement({
        title: "Deal Collector",
        description: "Good on ya for saving this beauty!",
        points: 10,
        type: 'deal'
      });
    }
  };

  return {
    saved,
    userVote,
    voteAnimation,
    handleVote,
    handleSave
  };
};
