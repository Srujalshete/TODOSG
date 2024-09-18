import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full text-teal-400" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;