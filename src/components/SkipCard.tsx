
import React from 'react';
import moment from 'moment';
import { AlertTriangle, Truck, Check, Package, X, Minus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface SkipCardProps {
    size: number;
    postcode: string;
    price: number;
    hirePeriod: number;
    vat: number;
    allows_heavy_waste: boolean;
    updated_at: string;
    created_at: string;
    per_tonne_cost: number | null;
    transport_cost: number | null;
    allowed_on_road: boolean;
    isRestricted?: boolean;
    isSelected?: boolean;
    onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
    size,
    postcode,
    price,
    vat,
    allows_heavy_waste,
    hirePeriod,
    created_at,
    updated_at,
    per_tonne_cost,
    transport_cost,
    allowed_on_road,
    isSelected = false,
    onSelect
}) => {
    const getCardStyles = () => {
        if (isSelected) {
            return 'border-green-500 shadow-xl shadow-green-500/20 bg-green-50 dark:bg-green-950/30';
        }
        if (!allowed_on_road) {
            return 'hover:shadow-orange-500/10 hover:border-orange-500/50 border-orange-200 dark:border-orange-800';
        }
        return 'hover:shadow-blue-500/10 hover:border-blue-500/50';
    };

    const getHeaderStyles = () => {
        if (isSelected) {
            return 'bg-gradient-to-r from-green-500 to-emerald-500';
        }
        if (!allowed_on_road) {
            return 'bg-gradient-to-r from-orange-500 to-red-500';
        }
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
    };


    const getIconBadgeStyles = () => {
        if (isSelected) {
          return '!bg-green-500 text-white';
        }
        if (!allowed_on_road) {
          return '!bg-orange-500 text-white';
        }
        return '!bg-blue-500 text-white';
      };

    const getRestrictionNoticeStyles = () => {
        if (isSelected) {
            return {
                background: 'bg-green-50 dark:bg-green-950/30',
                border: 'border-green-200 dark:border-green-800',
                iconColor: 'text-green-600',
                titleColor: 'text-green-800 dark:text-green-200',
                textColor: 'text-green-700 dark:text-green-300'
            };
        }
        return {
            background: 'bg-orange-50 dark:bg-orange-950/30',
            border: 'border-orange-200 dark:border-orange-800',
            iconColor: 'text-orange-600',
            titleColor: 'text-orange-800 dark:text-orange-200',
            textColor: 'text-orange-700 dark:text-orange-300'
        };
    };

    const getRelativeTimestamp = (created_at: string, updated_at: string): string => {
        const created = moment(created_at);
        const updated = moment(updated_at);

        if (created.isSameOrAfter(updated)) {
            return `Created ${created.fromNow()}`;
        } else {
            return `Updated ${updated.fromNow()}`;
        }
    }

    const restrictionStyles = getRestrictionNoticeStyles();

    return (
        <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 overflow-hidden ${getCardStyles()}`}>
            {/* Header Section with Icon */}
            <div className={`relative p-12 text-white ${getHeaderStyles()}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-white/20 p-3 rounded-full">
                            <Package className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{postcode}</h3>

                            <p className="text-white/60 text-xs mt-1">
                                {getRelativeTimestamp(created_at, updated_at)}
                            </p>


                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-3xl font-bold">£{price}</div>
                        <div className="text-white/80 text-sm">Vat: £{vat}</div>
                    </div>
                </div>

                {/* Status Badges */}
                <div className="absolute top-4 right-4 flex gap-4">
                    <Badge variant="secondary" className={`border-0 shadow-lg ${getIconBadgeStyles()}`}>
                        <Truck className="w-3 h-3 mr-1" />
                        {size} Yards
                    </Badge>
                    {isSelected && (
                        <Badge variant="secondary" className="bg-white !text-green-600 border-0 shadow-lg">
                            <Check className="w-3 h-3 mr-1" />
                            Selected
                        </Badge>
                    )}
                </div>

                {/* Road Restriction Warning */}
                {!allowed_on_road && (
                    <div className="absolute bottom-4 left-4">
                        <Badge variant="destructive" className="bg-white/20 text-white border-white/30 shadow-lg">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Road Restrictions Apply
                        </Badge>
                    </div>
                )}
            </div>

            <CardContent className="p-6">
                {/* Capacity and Duration Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground font-medium">Hire Period:</span>
                        <span className="font-semibold">{hirePeriod} {hirePeriod === 1 ? 'day' : 'days'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground font-medium">Allows heavy waste:</span>
                        <span className={`font-semibold ${allows_heavy_waste ? 'text-orange-600' : 'text-green-600'}`}>
                            {allows_heavy_waste ? <X className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground font-medium">Transport cost:</span>
                        <span className="font-semibold">
                            {transport_cost !== null ? `£${transport_cost}` : <Minus className="w-5 h-5 text-muted-foreground" />}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground font-medium">Per tonne cost:</span>
                        <span className="font-semibold">
                            {per_tonne_cost !== null ? `£${per_tonne_cost}` : <Minus className="w-5 h-5 text-muted-foreground" />}
                        </span>
                    </div>
                </div>

                {/* Restriction Notice - Always visible when restricted */}
                {!allowed_on_road && (
                    <div className={`mb-4 p-3 ${restrictionStyles.background} ${restrictionStyles.border} rounded-lg`}>
                        <div className="flex items-start gap-2">
                            <AlertTriangle className={`w-4 h-4 ${restrictionStyles.iconColor} mt-0.5 flex-shrink-0`} />
                            <div className="text-sm">
                                <p className={`font-medium ${restrictionStyles.titleColor}`}>Road Permit Required</p>
                                <p className={restrictionStyles.textColor}>This skip size may require council permits for road placement.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Select Button */}
                <button
                    onClick={onSelect}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isSelected
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : !allowed_on_road
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
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
