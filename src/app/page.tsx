import Hero from '@/components/Sections/Hero';

import Reviews from '@/components/Sections/Reviews';
import Navigation from '@/components/Navigation/Navigation';
import MainClientSections from '@/components/Sections/main-client-sections';

export default function Home() {
  return (
    <main>
      <div className="hello-section" id="hello">
        <Navigation />
        <Hero />
      </div>
      <Reviews />
      <MainClientSections />
    </main>
  );
}
