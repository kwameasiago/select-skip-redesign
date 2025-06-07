import { Skeleton } from "../ui/Skeleton";
import SkipCardSkeleton from "../ui/SkipCardSkeleton";
import ThemeToggle from "../ThemeToggle";

const SkipSizeSkeleton = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
            <ThemeToggle />

            {/* Header Skeleton */}
            <div className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="text-center mb-8">
                        <Skeleton className="h-8 w-64 mx-auto mb-2" />
                        <Skeleton className="h-5 w-96 mx-auto" />
                    </div>

                    {/* Progress Steps Skeleton */}
                    <div className="flex items-center justify-center overflow-x-auto pb-4">
                        <div className="flex items-center space-x-4 min-w-max">
                            <Skeleton className="h-9 w-20 rounded-full" />
                            <div className="flex items-center space-x-0">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="flex flex-col items-center relative">
                                            <Skeleton className="w-10 h-10 rounded-full" />
                                            <Skeleton className="mt-3 h-3 w-16" />
                                        </div>
                                        {index < 5 && <Skeleton className="w-16 h-0.5 mx-4" />}
                                    </div>
                                ))}
                            </div>
                            <Skeleton className="h-9 w-20 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Skeleton */}
            <div className="max-w-7xl mx-auto px-4 py-12">


                {/* Skip Selection Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <SkipCardSkeleton key={index} />
                    ))}
                </div>

                {/* Help Section Skeleton */}
                <div className="mt-16 text-center">
                    <div className="bg-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border">
                        <Skeleton className="h-8 w-64 mx-auto mb-4" />
                        <Skeleton className="h-5 w-96 mx-auto mb-6" />
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Skeleton className="h-12 w-48" />
                            <Skeleton className="h-12 w-40" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SkipSizeSkeleton;