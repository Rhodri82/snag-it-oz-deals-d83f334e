
import React from 'react';
import { User, MapPin, Clock } from "lucide-react";

interface DealMetadataProps {
  postedBy: string;
  location?: string;
  expiresAt?: string;
}

export const DealMetadata = ({ postedBy, location, expiresAt }: DealMetadataProps) => {
  return (
    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2 mb-3">
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
