import React from 'react';
import type { Bus } from '../types';
import Badge from './Badge';
import Button from './Button';

interface BusCardProps {
  bus: Bus;
  onViewSeats: () => void;
}

const BusCard: React.FC<BusCardProps> = ({ bus, onViewSeats }) => {
  const getSeatsColor = (seatsLeft: number) => {
    if (seatsLeft <= 3) return 'error';
    if (seatsLeft <= 10) return 'warning';
    return 'success';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{bus.name}</h3>
              <Badge variant="info" size="sm" className="mt-1">
                {bus.busType}
              </Badge>
            </div>
            <div className="flex items-center text-yellow-500">
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium text-gray-900">{bus.rating}</span>
              <span className="text-gray-500 text-sm ml-1">
                ({bus.reviews.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Departure</p>
              <p className="text-lg font-semibold text-gray-900">
                {bus.departureTime}
              </p>
              <p className="text-sm text-gray-600">{bus.from}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Duration</p>
              <div className="flex items-center justify-center my-1">
                <div className="h-px bg-gray-300 flex-1"></div>
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              <p className="text-sm font-medium text-gray-600">{bus.duration}</p>
            </div>
            <div className="text-right md:text-right">
              <p className="text-sm text-gray-500">Arrival</p>
              <p className="text-lg font-semibold text-gray-900">
                {bus.arrivalTime}
              </p>
              <p className="text-sm text-gray-600">{bus.to}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {bus.amenities.map((amenity, index) => (
              <Badge key={index} variant="default" size="sm">
                {amenity}
              </Badge>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-gray-200 lg:pl-6 flex flex-col items-center lg:min-w-[200px]">
          <p className="text-sm text-gray-500 mb-1">Starting from</p>
          <p className="text-3xl font-bold text-blue-600 mb-2">₹{bus.price}</p>
          <Badge variant={getSeatsColor(bus.seatsLeft)} size="sm" className="mb-4">
            {bus.seatsLeft} seats left
          </Badge>
          <Button onClick={onViewSeats} variant="primary" size="md" fullWidth>
            View Seats
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
