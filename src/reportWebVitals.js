const reportPerformanceMetrics = (callback) => {
  // Check if the callback is a function
  if (callback && typeof callback === 'function') {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Invoke each metric reporting function with the callback
      getCLS(callback);
      getFID(callback);
      getFCP(callback);
      getLCP(callback);
      getTTFB(callback);
    });
  }
};

export default reportPerformanceMetrics;
