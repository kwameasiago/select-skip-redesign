
import React, { useEffect } from 'react';
import { AlertTriangle, Truck, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';



interface SkipCardProps {
    size: number;
    price: number;
    hirePeriod: number;
    isSelected: boolean;
    vat: number;
    postcode: string;
    allowed_on_road?: boolean;
    onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
    size,
    price,
    hirePeriod,
    vat,
    isSelected,
    postcode,
    allowed_on_road = false,
    onSelect
}) => {
    
    let imageurls = ['https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg', 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg']
    return (
        <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 overflow-hidden ${isSelected
            ? 'border-green-500 shadow-xl shadow-green-500/20 bg-green-50 dark:bg-green-950/30'
            : 'hover:shadow-blue-500/10 hover:border-blue-500/50'
            }`}>
            <div className="relative overflow-hidden">
                <img
                    src={allowed_on_road ? imageurls[1] : imageurls[0]}
                    alt={`${'size'} skip`}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className={`border-0 shadow-lg ${isSelected
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white'
                        }`}>
                        <Truck className="w-3 h-3 mr-1" />
                        {size} Yards
                    </Badge>
                </div>

                {isSelected && (
                    <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-green-500 text-white border-0 shadow-lg">
                            <Check className="w-3 h-3 mr-1" />
                            Selected
                        </Badge>
                    </div>
                )}

                {!allowed_on_road && (
                    <div className="absolute bottom-4 left-4">
                        <Badge variant="destructive" className="bg-orange-500 text-white border-0 shadow-lg">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Not Allowed On The Road
                        </Badge>
                    </div>
                )}
            </div>

            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-foreground">{postcode}</h3>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">£{price}</div>
                        <div className="text-sm text-muted-foreground">vat: £{vat}</div>
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Hire period:</span>
                        <span className="font-medium">{hirePeriod} day(s)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Transport cost:</span>
                        <span className="font-medium">__</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Per tonne cost:</span>
                        <span className="font-medium">__</span>
                    </div>

                </div>

                <button
                    onClick={onSelect}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isSelected
                            ? 'bg-green-500 hover:bg-green-600 text-white'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                        }`}
                >
                    {isSelected ? 'Selected' : 'Select Skip'}
                </button>
            </CardContent>
        </Card>
    );
};

export default SkipCard;
