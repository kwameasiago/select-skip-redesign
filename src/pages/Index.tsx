import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle"
import ProgressSteps from "../components/ProgressSteps"
import { fetchSkips } from '../redux/skipsSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store';

type ProgressStep = {
    step: number;
    title: string;
    isActive: boolean;
    isCompleted: boolean;
};

const Index: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {data, error, loading} = useSelector((state: RootState) => state.skips)

    useEffect(() => {
        dispatch(fetchSkips({postcode: 'NR32', area: 'Lowestoft'}))
      }, [dispatch])

    const progressStepsData: ProgressStep[] = [
        { step: 1, title: 'Location', isActive: false, isCompleted: true },
        { step: 2, title: 'Waste Type', isActive: false, isCompleted: true },
        { step: 3, title: 'Select Skip', isActive: true, isCompleted: false },
        { step: 4, title: 'Permit Check', isActive: false, isCompleted: false },
        { step: 5, title: 'Choose Date', isActive: false, isCompleted: false },
        { step: 6, title: 'Payment', isActive: false, isCompleted: false },
    ];
    
    if(loading){
        return <h1>Loading ....</h1>
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
            <ThemeToggle />
            <div className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-2">Choose Your Skip Size</h1>
                        <p className="text-muted-foreground">Select the skip size that best suits your needs</p>
                    </div>
                </div>
                <div className="flex items-center justify-center overflow-x-auto pb-4">
                    <ProgressSteps steps={progressStepsData} />
                </div>
            </div>
        </div>
    );
};

export default Index;
