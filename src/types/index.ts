export interface Bus {
  id: number;
  name: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seatsLeft: number;
  rating: number;
  reviews: number;
  amenities: string[];
  busType: string;
}

export interface SearchParams {
  from: string;
  to: string;
  date: string;
  passengers: number;
}

export interface FilterOptions {
  busTypes: string[];
  priceRange: [number, number];
  departureTimes: string[];
  amenities: string[];
  minRating: number;
}
