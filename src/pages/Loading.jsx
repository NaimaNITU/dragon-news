import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner text-primary"></span>
      <p className="ml-2 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
