import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import HowItWorks from "@/components/how-it-works";
import FounderBio from "@/components/founder-bio";
import SignupForm from "@/components/signup-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <FounderBio />
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
