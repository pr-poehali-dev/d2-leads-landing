import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForWhom from "@/components/ForWhom";
import Pricing from "@/components/Pricing";
import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <ForWhom />
      <div id="pricing">
        <Pricing />
      </div>
      <Advantages />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;