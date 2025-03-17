
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ProgressItemProps {
  title: string;
  value: number;
  maxValue: number;
  color?: string;
}

const ProgressItem = ({ title, value, maxValue, color = 'bg-primary' }: ProgressItemProps) => {
  const percentage = Math.min(Math.round((value / maxValue) * 100), 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm text-muted-foreground">
          {value}/{maxValue} ({percentage}%)
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

interface ProgressTrackerProps {
  items: ProgressItemProps[];
  className?: string;
}

const ProgressTracker = ({ items, className }: ProgressTrackerProps) => {
  const totalCompleted = items.reduce((acc, item) => acc + item.value, 0);
  const totalRequired = items.reduce((acc, item) => acc + item.maxValue, 0);
  const overallPercentage = Math.round((totalCompleted / totalRequired) * 100);
  
  return (
    <div className={cn("p-6 bg-white rounded-xl border border-border shadow-sm", className)}>
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Your Progress</h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Overall completion</span>
            <span className="text-sm font-medium">{overallPercentage}%</span>
          </div>
          <Progress value={overallPercentage} className="h-3" />
        </div>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <ProgressItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
