/**
 * Generates the source path for an image based on a parameter and value.
 * 
 * @param {string} parameter - The category of the icon (e.g., 'status', 'priority').
 * @param {string} value - The specific value for the icon (e.g., 'Todo', 'High').
 * @returns {string} The full path to the icon image.
 */
function getImageSrc(parameter, value) {
  // Validate the parameter and value inputs
  if (!parameter || !value) {
      console.warn('Invalid parameter or value provided to getImageSrc');
      return '';
  }

  // Construct and return the image source path
  return `/icons/${parameter}/${value}.svg`;
}

export default getImageSrc;
