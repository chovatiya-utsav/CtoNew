import React from 'react';
import Button from './Button';

interface FiltersSidebarProps {
  busTypes: string[];
  onBusTypesChange: (types: string[]) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  departureTimes: string[];
  onDepartureTimesChange: (times: string[]) => void;
  amenities: string[];
  onAmenitiesChange: (amenities: string[]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  onClearAll: () => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  busTypes,
  onBusTypesChange,
  priceRange,
  onPriceRangeChange,
  departureTimes,
  onDepartureTimesChange,
  amenities,
  onAmenitiesChange,
  minRating,
  onMinRatingChange,
  onClearAll,
}) => {
  const busTypeOptions = [
    'AC Seater',
    'Non-AC Seater',
    'AC Sleeper',
    'Volvo Multi-Axle',
  ];

  const departureTimeOptions = [
    { label: 'Early Morning (12 AM - 6 AM)', value: 'early_morning' },
    { label: 'Morning (6 AM - 12 PM)', value: 'morning' },
    { label: 'Afternoon (12 PM - 6 PM)', value: 'afternoon' },
    { label: 'Evening (6 PM - 12 AM)', value: 'evening' },
  ];

  const amenityOptions = ['AC', 'WiFi', 'USB Charging', 'Water Bottle', 'Snacks'];

  const handleBusTypeToggle = (type: string) => {
    if (busTypes.includes(type)) {
      onBusTypesChange(busTypes.filter((t) => t !== type));
    } else {
      onBusTypesChange([...busTypes, type]);
    }
  };

  const handleDepartureTimeToggle = (time: string) => {
    if (departureTimes.includes(time)) {
      onDepartureTimesChange(departureTimes.filter((t) => t !== time));
    } else {
      onDepartureTimesChange([...departureTimes, time]);
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    if (amenities.includes(amenity)) {
      onAmenitiesChange(amenities.filter((a) => a !== amenity));
    } else {
      onAmenitiesChange([...amenities, amenity]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <Button variant="tertiary" size="sm" onClick={onClearAll}>
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Bus Type</h3>
          <div className="space-y-2">
            {busTypeOptions.map((type) => (
              <label key={type} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={busTypes.includes(type)}
                  onChange={() => handleBusTypeToggle(type)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                onPriceRangeChange([priceRange[0], Number(e.target.value)])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-900 mb-3">Departure Time</h3>
          <div className="space-y-2">
            {departureTimeOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={departureTimes.includes(option.value)}
                  onChange={() => handleDepartureTimeToggle(option.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-900 mb-3">Amenities</h3>
          <div className="space-y-2">
            {amenityOptions.map((amenity) => (
              <label key={amenity} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-900 mb-3">Minimum Rating</h3>
          <div className="space-y-2">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === rating}
                  onChange={() => onMinRatingChange(rating)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {rating}+ Stars
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
