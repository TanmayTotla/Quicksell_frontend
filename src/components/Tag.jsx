import React from 'react';
import './styles/Tag.css';

// Tag component to display a tag with an optional visual indicator
function Tag({ tag, type = 'default' }) {
  // Define a function to set the tag style based on its type
  const getTagStyle = () => {
    switch (type) {
      case 'important':
        return 'tag-important'; // Add specific styles for important tags
      case 'warning':
        return 'tag-warning'; // Add specific styles for warning tags
      default:
        return 'tag-default'; // Default style
    }
  };

  return (
    <div className={`card-tag ${getTagStyle()}`}>
      <span className='tag-indicator'></span>
      <div className='tag-text'>{tag}</div>
    </div>
  );
}

export default Tag;
