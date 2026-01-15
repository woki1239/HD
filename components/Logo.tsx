import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img 
    src="https://image2url.com/r2/default/images/1768208930705-c1122dc2-7cf4-4929-ad7c-fae9d16149db.png" 
    alt="Home of Design Logo" 
    className={`object-contain ${className}`}
  />
);