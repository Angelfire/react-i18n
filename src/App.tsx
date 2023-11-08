import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Services />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
