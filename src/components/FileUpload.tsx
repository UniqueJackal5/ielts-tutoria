
import React, { useState } from 'react';
import { Upload, X, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  allowedFileTypes?: string[];
  className?: string;
}

const FileUpload = ({
  onFilesSelected,
  maxFiles = 5,
  maxSizeMB = 10,
  allowedFileTypes = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.mp3', '.mp4'],
  className
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      validateAndAddFiles(Array.from(e.target.files));
    }
  };
  
  const validateAndAddFiles = (newFiles: File[]) => {
    setError(null);
    
    if (files.length + newFiles.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files.`);
      return;
    }
    
    const validFiles = newFiles.filter(file => {
      // Check file size
      if (file.size > maxSizeBytes) {
        setError(`File ${file.name} is too large. Maximum size is ${maxSizeMB}MB.`);
        return false;
      }
      
      // Check file type
      const fileExt = `.${file.name.split('.').pop()?.toLowerCase()}`;
      if (!allowedFileTypes.includes(fileExt) && !allowedFileTypes.includes('*')) {
        setError(`File ${file.name} has an invalid file type. Allowed types: ${allowedFileTypes.join(', ')}`);
        return false;
      }
      
      return true;
    });
    
    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles];
      setFiles(updatedFiles);
      onFilesSelected(updatedFiles);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      validateAndAddFiles(Array.from(e.dataTransfer.files));
    }
  };
  
  const removeFile = (indexToRemove: number) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    onFilesSelected(updatedFiles);
  };
  
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };
  
  return (
    <div className={cn("space-y-4", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 transition-colors duration-200 flex flex-col items-center justify-center cursor-pointer",
          isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/50",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <input
          id="file-upload"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
          accept={allowedFileTypes.join(',')}
        />
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
            <Upload className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-medium">Drag & drop files here</p>
            <p className="text-sm text-muted-foreground">
              or <span className="text-primary font-medium">browse files</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Supports: {allowedFileTypes.join(', ')} up to {maxSizeMB}MB
          </p>
        </div>
      </div>
      
      {error && (
        <div className="text-sm text-destructive animate-fade-in">
          {error}
        </div>
      )}
      
      {files.length > 0 && (
        <div className="space-y-2 animate-fade-in">
          <div className="text-sm font-medium">
            {files.length} file{files.length !== 1 ? 's' : ''} selected
          </div>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between bg-secondary rounded-lg p-3 pr-4 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium truncate max-w-[200px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {files.length > 0 && (
        <div className="pt-2 flex justify-end animate-fade-in">
          <Button
            className="space-x-2"
            onClick={() => {
              // File upload logic would go here
              // After upload succeeds:
              setFiles([]);
              // Show success message
            }}
          >
            <Check className="h-4 w-4" />
            <span>Upload Files</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
