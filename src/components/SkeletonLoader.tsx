import React from 'react';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
  circle?: boolean;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = 'w-full',
  height = 'h-4',
  className = '',
  rounded = true,
  circle = false,
}) => {
  const roundedStyle = circle
    ? 'rounded-full'
    : rounded
      ? 'rounded'
      : '';

  return (
    <div
      className={`animate-pulse bg-gray-200 ${width} ${height} ${roundedStyle} ${className}`}
      role="status"
      aria-label="Loading content"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonLoader;
