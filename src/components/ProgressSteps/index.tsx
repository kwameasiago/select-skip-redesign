import React from "react";
import StepItem from "./StepItem";
import { Button } from "../ui/Button";
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Step = {
  step: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
};

type ProgressStepsProps = {
  steps: Step[];
};

const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps }) => {
  return (
    <div className="flex items-center space-x-4 min-w-max">
      <Button
        variant="outline"
        onClick={() => { }}
        className="flex items-center gap-2 px-4 py-2 border-2 hover:bg-muted !rounded-full"
        size="sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Back</span>
      </Button>
      <div className="flex items-center space-x-0">
        {steps.map((step, index) => (
          <StepItem
            key={step.step}
            step={step.step}
            title={step.title}
            isActive={step.isActive}
            isCompleted={step.isCompleted}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
      <Button
        variant="outline"
        onClick={() => { }}
        className="flex items-center gap-2 px-4 py-2 border-2 hover:bg-muted !rounded-full"
        size="sm"
      >
        
        <span className="hidden sm:inline">Next</span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ProgressSteps;
