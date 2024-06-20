// app/layout.tsx
import React from 'react';
 // Import global styles if you have any
import Navbar from './components/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>My Blog</title>
        <meta name="description" content="A simple blog application using Next.js and React" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
