import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Services from "./components/services";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Subscribe from "./components/subscribe";
import Blogs from "./components/blogs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="grid grid-cols-1 gap-24 pt-10 font-poppins">
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Subscribe />
      <Blogs/>
      <Footer />
    </div>
  );
}

export default App;
