import React, { useState, useMemo } from 'react';
import {
  SearchForm,
  FiltersSidebar,
  BusCard,
  LoadingSpinner,
  Modal,
} from '../components';
import { mockBuses } from '../utils/mockData';
import type { Bus, SearchParams } from '../types';

type SortOption = 'price_low' | 'price_high' | 'rating' | 'departure';

const Search: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('price_low');
  const [showResults, setShowResults] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [searchResults, setSearchResults] = useState<Bus[]>(mockBuses);

  const [busTypeFilters, setBusTypeFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [departureTimeFilters, setDepartureTimeFilters] = useState<string[]>([]);
  const [amenityFilters, setAmenityFilters] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  const handleSearch = (params: SearchParams) => {
    setIsLoading(true);
    // Simulate API call with random selection
    setTimeout(() => {
      // Randomly select 5-15 buses from the mock data
      const count = Math.floor(Math.random() * 11) + 5; // 5-15 buses
      const shuffled = [...mockBuses].sort(() => 0.5 - Math.random());
      setSearchResults(shuffled.slice(0, count));
      setIsLoading(false);
      setShowResults(true);
    }, 1000);
  };

  const handleClearFilters = () => {
    setBusTypeFilters([]);
    setPriceRange([0, 5000]);
    setDepartureTimeFilters([]);
    setAmenityFilters([]);
    setMinRating(0);
  };

  const getDepartureTimeCategory = (time: string): string => {
    const hour = parseInt(time.split(':')[0]);
    const isPM = time.includes('PM');
    const hour24 = isPM && hour !== 12 ? hour + 12 : hour === 12 && !isPM ? 0 : hour;

    if (hour24 >= 5 && hour24 < 8) return 'early_morning';
    if (hour24 >= 8 && hour24 < 12) return 'morning';
    if (hour24 >= 12 && hour24 < 17) return 'afternoon';
    if (hour24 >= 17 && hour24 < 22) return 'evening';
    return 'night';
  };

  const filteredAndSortedBuses = useMemo(() => {
    let filtered = searchResults.filter((bus) => {
      if (busTypeFilters.length > 0 && !busTypeFilters.includes(bus.busType)) {
        return false;
      }

      if (bus.price < priceRange[0] || bus.price > priceRange[1]) {
        return false;
      }

      if (departureTimeFilters.length > 0) {
        const timeCategory = getDepartureTimeCategory(bus.departureTime);
        if (!departureTimeFilters.includes(timeCategory)) {
          return false;
        }
      }

      if (amenityFilters.length > 0) {
        const hasAllAmenities = amenityFilters.every((amenity) =>
          bus.amenities.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }

      if (bus.rating < minRating) {
        return false;
      }

      return true;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price_low':
          return a.price - b.price;
        case 'price_high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'departure':
          return a.departureTime.localeCompare(b.departureTime);
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    busTypeFilters,
    priceRange,
    departureTimeFilters,
    amenityFilters,
    minRating,
    sortBy,
  ]);

  const handleViewSeats = (bus: Bus) => {
    setSelectedBus(bus);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchForm onSearch={handleSearch} />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        ) : showResults ? (
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="hidden lg:block lg:w-80 flex-shrink-0">
              <FiltersSidebar
                busTypes={busTypeFilters}
                onBusTypesChange={setBusTypeFilters}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                departureTimes={departureTimeFilters}
                onDepartureTimesChange={setDepartureTimeFilters}
                amenities={amenityFilters}
                onAmenitiesChange={setAmenityFilters}
                minRating={minRating}
                onMinRatingChange={setMinRating}
                onClearAll={handleClearFilters}
              />
            </aside>

            <main className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Available Buses
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {filteredAndSortedBuses.length} buses found
                  </p>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="lg:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                    </svg>
                    Filters
                  </button>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-1 sm:flex-initial"
                  >
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="departure">Departure Time</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {filteredAndSortedBuses.length > 0 ? (
                  filteredAndSortedBuses.map((bus) => (
                    <BusCard
                      key={bus.id}
                      bus={bus}
                      onViewSeats={() => handleViewSeats(bus)}
                    />
                  ))
                ) : (
                  <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 text-gray-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No buses found
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your filters or search criteria
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </main>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600">
              Enter your travel details to search for buses
            </p>
          </div>
        )}
      </div>

      <Modal
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        title="Filters"
        size="lg"
      >
        <FiltersSidebar
          busTypes={busTypeFilters}
          onBusTypesChange={setBusTypeFilters}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          departureTimes={departureTimeFilters}
          onDepartureTimesChange={setDepartureTimeFilters}
          amenities={amenityFilters}
          onAmenitiesChange={setAmenityFilters}
          minRating={minRating}
          onMinRatingChange={setMinRating}
          onClearAll={handleClearFilters}
        />
      </Modal>

      <Modal
        isOpen={!!selectedBus}
        onClose={() => setSelectedBus(null)}
        title="Seat Selection"
        size="xl"
      >
        {selectedBus && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedBus.name}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedBus.from} → {selectedBus.to}
            </p>
            <p className="text-lg text-gray-700">
              Seat selection interface will be implemented in the next phase
            </p>
            <p className="text-gray-500 mt-2">
              This feature is coming soon!
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Search;
