
import React from 'react';
import { Check } from 'lucide-react';

interface ProgressStepProps {
  step: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
  isLast?: boolean;
}

const StepItem: React.FC<ProgressStepProps> = ({ 
  step, 
  title, 
  isActive, 
  isCompleted, 
  isLast = false 
}) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center relative">
        <div 
          className={`
            w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300
            ${isCompleted 
              ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
              : isActive 
                ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/25 scale-110' 
                : 'bg-muted border-border text-muted-foreground'
            }
          `}
        >
          {isCompleted ? <Check className="w-5 h-5" /> : step}
        </div>
        <span 
          className={`
            mt-3 text-xs font-medium text-center max-w-20
            ${isActive ? 'text-blue-600 font-semibold' : isCompleted ? 'text-emerald-600' : 'text-muted-foreground'}
          `}
        >
          {title}
        </span>
      </div>
      {!isLast && (
        <div 
          className={`
            w-16 h-0.5 mx-4 transition-all duration-500
            ${isCompleted ? 'bg-emerald-500' : 'bg-border'}
          `}
        />
      )}
    </div>
  );
};

export default StepItem;
