import React from 'react';
import { cn } from "@/lib/utils"; // Updated to use path alias

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, className, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] animate-scale-in opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="p-3 mb-4 rounded-lg bg-primary/10 w-fit text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
