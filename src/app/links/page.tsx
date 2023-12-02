import React from 'react';
import { HelloDetails } from '@/components/Sections/Hero';

function Links() {
  return (
    <main className="hello-section">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div>
          <HelloDetails />
        </div>
      </div>
    </main>
  );
}

export default Links;
