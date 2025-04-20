
import React from 'react';
import { User, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DealMetadataProps {
  postedBy: string;
  location?: string;
  expiresAt?: string;
  className?: string;
}

export const DealMetadata = ({ postedBy, location, expiresAt, className }: DealMetadataProps) => {
  return (
    <div className={cn("flex items-center gap-4 text-xs text-muted-foreground mt-2 mb-3", className)}>
      <div className="flex items-center">
        <User className="w-3 h-3 mr-1" />
        <span>Spotted by {postedBy}</span>
      </div>
      {location && (
        <div className="flex items-center">
          <MapPin className="w-3 h-3 mr-1" />
          <span>{location}</span>
        </div>
      )}
      {expiresAt && (
        <div className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          <span>Expires: {expiresAt}</span>
        </div>
      )}
    </div>
  );
};
