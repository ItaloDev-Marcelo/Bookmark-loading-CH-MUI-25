import Hero from './components/pages/HeroSection';
import FeaturesSection from './components/pages/FeaturesSection'
import PriceSection from './components/pages/PriceSection';
import AskedSection from './components/pages/AskedSection';
import NewsSection from './components/pages/NewsSection'
function App() {
  return (
        <>
        <Hero/>
        <main className='px-4 lg:px-7'>
          <FeaturesSection />
          <PriceSection/>
          <AskedSection/>
          <NewsSection/>
          </main>
        </>
  );
}

export default App;
