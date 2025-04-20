
import React from 'react';
import { ImageIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage?: string;
  className?: string;
  label?: string;
  helperText?: string;
}

const ImageUpload = ({
  onImageSelect,
  selectedImage,
  className,
  label = "Upload Image",
  helperText,
}: ImageUploadProps) => {
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div className={className}>
      <Label className="mb-1 block">{label}</Label>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors overflow-hidden bg-background",
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
            className="object-contain w-full h-full"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground px-4">
            <ImageIcon className="w-8 h-8" />
            <p className="text-sm font-medium text-center">
              Drop an image here or click to upload
            </p>
          </div>
        )}
      </div>

      {helperText && (
        <p className="text-xs text-muted-foreground mt-1">{helperText}</p>
      )}
    </div>
  );
};

export default ImageUpload;
