import React from 'react';
import { Button, Card, Badge } from '../components';

const Landing: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Book Your Bus Journey with Ease
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Safe, comfortable, and affordable travel across India
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = '/search')}
          >
            Find Buses Now
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Travelers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="lg" className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                10K+
              </h3>
              <p className="text-gray-600">Buses Available</p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                500K+
              </h3>
              <p className="text-gray-600">Happy Travelers</p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                1M+
              </h3>
              <p className="text-gray-600">Reviews</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search
              </h3>
              <p className="text-gray-600">
                Enter your route and travel date
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Select
              </h3>
              <p className="text-gray-600">
                Choose your preferred bus and seat
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pay
              </h3>
              <p className="text-gray-600">
                Secure payment with multiple options
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Travel
              </h3>
              <p className="text-gray-600">
                Receive your ticket and enjoy your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverable padding="lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Delhi to Agra
                  </h3>
                  <p className="text-gray-600 text-sm">Express Service</p>
                </div>
                <Badge variant="success">Popular</Badge>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-600 text-sm">Starting from</p>
                  <p className="text-2xl font-bold text-blue-600">₹450</p>
                </div>
                <Button variant="tertiary" size="sm">
                  View Buses
                </Button>
              </div>
            </Card>

            <Card hoverable padding="lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Mumbai to Pune
                  </h3>
                  <p className="text-gray-600 text-sm">AC Sleeper</p>
                </div>
                <Badge variant="success">Popular</Badge>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-600 text-sm">Starting from</p>
                  <p className="text-2xl font-bold text-blue-600">₹350</p>
                </div>
                <Button variant="tertiary" size="sm">
                  View Buses
                </Button>
              </div>
            </Card>

            <Card hoverable padding="lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bangalore to Mysore
                  </h3>
                  <p className="text-gray-600 text-sm">Volvo Multi-Axle</p>
                </div>
                <Badge variant="success">Popular</Badge>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-600 text-sm">Starting from</p>
                  <p className="text-2xl font-bold text-blue-600">₹400</p>
                </div>
                <Button variant="tertiary" size="sm">
                  View Buses
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your bus tickets now and travel comfortably across India
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = '/search')}
          >
            Search Buses Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
