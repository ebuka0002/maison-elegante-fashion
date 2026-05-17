import HeroSection from '../components/HeroSection';
import FeaturedCollections from '../components/FeaturedCollections';
import NewArrivals from '../components/NewArrivals';
import BestSellers from '../components/BestSellers';
import Testimonials from '../components/Testimonials';
import InstagramGallery from '../components/InstagramGallery';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <NewArrivals />
      <BestSellers />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </main>
  );
};

export default HomePage;
