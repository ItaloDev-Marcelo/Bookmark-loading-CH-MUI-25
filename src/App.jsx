import Hero from './pages/HeroSection';
import FeaturesSection from './pages/FeaturesSection'
import PriceSection from './pages/PriceSection';
import AskedSection from './pages/AskedSection';
import NewsSection from './pages/NewsSection'
import Footer from './pages/Footer';

function App() {
  return (
        <>
        <Hero/>
        <main className='px-4 lg:px-7'>
          <FeaturesSection />
          <PriceSection/>
          <AskedSection/>
          </main>
          <NewsSection/>
          <Footer/>
        </>
  );
}

export default App;
