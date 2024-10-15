import HeroSection from '@/components/HeroSection';
import KeyFeatures from '@/components/KeyFeatures';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
}