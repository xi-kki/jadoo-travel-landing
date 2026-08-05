import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import BookTrip from "@/components/BookTrip";
import Testimonials from "@/components/Testimonials";
import Logos from "@/components/Logos";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Logos />
      <Subscribe />
      <Footer />
    </main>
  );
}
