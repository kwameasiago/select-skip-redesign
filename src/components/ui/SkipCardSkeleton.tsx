
import React from 'react';
import { Skeleton } from './Skeleton';

const SkipCardSkeleton: React.FC = () => {
  return (
    <div className="border border-border/50 rounded-lg overflow-hidden">
      <Skeleton className="w-full h-52" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Skeleton className="h-6 w-32" />
          <div className="text-right">
            <Skeleton className="h-8 w-16 mb-1" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        
        <Skeleton className="w-full h-12 rounded-lg" />
      </div>
    </div>
  );
};

export default SkipCardSkeleton;
