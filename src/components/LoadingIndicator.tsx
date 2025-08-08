import React from 'react';

interface LoadingIndicatorProps {
  message?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center py-12'>
      <div className='flex flex-col items-center space-y-4'>
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-600 opacity-75"></span> 
          <span className="relative inline-flex size-3 rounded-full bg-neutral-700"></span>
        </span>
        {message && <p className='text-sm text-gray-600'>{message}</p>}
      </div>
    </div>
  );
};

export default LoadingIndicator;