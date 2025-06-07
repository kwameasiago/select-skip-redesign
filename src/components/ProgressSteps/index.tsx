import React from "react";
import StepItem from "./StepItem";

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
  );
};

export default ProgressSteps;
