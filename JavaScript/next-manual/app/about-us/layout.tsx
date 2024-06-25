import React from 'react';

export default function AboutLayout({
  children,
} : {
  children : React.ReactNode
}) {
  return (
    <div>
      {children}
      &copy; About-us Layout !! 
    </div>
  );
}