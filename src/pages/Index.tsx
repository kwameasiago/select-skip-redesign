import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle"
import ProgressSteps from "../components/ProgressSteps"
import { fetchSkips } from '../redux/skipsSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store';
import SkipCard from "../components/SkipCard";
import SkipSizeSkeleton from '../components/Skeleton/SkipSizeSkeleton'


type ProgressStep = {
    step: number;
    title: string;
    isActive: boolean;
    isCompleted: boolean;
};

const Index: React.FC = () => {
    const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
    const dispatch = useDispatch<AppDispatch>()
    const { data, error, loading } = useSelector((state: RootState) => state.skips)

    useEffect(() => {
        dispatch(fetchSkips({ postcode: 'NR32', area: 'Lowestoft' }))
    }, [dispatch])

    const progressStepsData: ProgressStep[] = [
        { step: 1, title: 'Location', isActive: false, isCompleted: true },
        { step: 2, title: 'Waste Type', isActive: false, isCompleted: true },
        { step: 3, title: 'Select Skip', isActive: true, isCompleted: false },
        { step: 4, title: 'Permit Check', isActive: false, isCompleted: false },
        { step: 5, title: 'Choose Date', isActive: false, isCompleted: false },
        { step: 6, title: 'Payment', isActive: false, isCompleted: false },
    ];

    const handleSkipSelect = (skipId: number) => {
        setSelectedSkip(skipId);
        console.log(`Selected skip: ${skipId}`);
    };

    if (loading) {
        return <SkipSizeSkeleton />
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
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8" >

                    {data.map((skip) => (
                        <SkipCard
                            key={skip.id}
                            size={skip.size}
                            hirePeriod={skip.hire_period_days}
                            price={skip.price_before_vat}
                            vat={skip.vat}
                            postcode={skip.postcode}
                            transport_cost={skip.transport_cost}
                            per_tonne_cost={skip.per_tonne_cost}
                            allowed_on_road={skip.allowed_on_road}
                            allows_heavy_waste={skip.allows_heavy_waste}
                            updated_at={skip.updated_at}
                            created_at={skip.created_at}
                            isSelected={selectedSkip === skip.id}
                            
                            onSelect={() => handleSkipSelect(skip.id)}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Need Help Choosing?</h3>
                        <p className="text-muted-foreground mb-6">
                            Not sure which skip size is right for your project? Our team is here to help you make the best choice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                Call Us: 0800 123 4567
                            </button>
                            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 px-6 py-3 rounded-lg font-semibold transition-colors">
                                Get Size Guide
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
