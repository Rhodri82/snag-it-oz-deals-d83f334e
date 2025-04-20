
import React from 'react';
import { ImageIcon, Upload } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage?: string;
  className?: string;
}

const ImageUpload = ({ onImageSelect, selectedImage, className }: ImageUploadProps) => {
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div 
      className={cn(
        "relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",
        className
      )}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageSelect}
        accept="image/*"
      />
      {selectedImage ? (
        <img 
          src={selectedImage} 
          alt="Selected preview" 
          className="object-contain w-full h-full p-2"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="w-8 h-8" />
          <p className="text-sm font-medium">Drop an image here or click to upload</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
