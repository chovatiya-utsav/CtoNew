import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { mockLocations } from '../utils/mockData';

interface SearchFormProps {
  onSearch?: (params: {
    from: string;
    to: string;
    date: string;
    passengers: number;
  }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [from, setFrom] = useState('Delhi');
  const [to, setTo] = useState('Agra');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.({ from, to, date, passengers });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            From
          </label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {mockLocations.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            To
          </label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {mockLocations.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Input
            label="Date"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="passengers"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Passengers
          </label>
          <select
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Passenger' : 'Passengers'}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <Button type="submit" variant="primary" size="md" fullWidth>
            Search Buses
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
