import AiTools from "../components/AiTools";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Plan from "../components/Plan";
import Ready from "../components/Ready";
import Testimonial from "../components/Testimonial";
import ToolList from "../components/ToolList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolList/>
      <AiTools />
      <Testimonial />
      <Plan />
      <Ready/>
      <Footer />
    </>
  );
};

export default Home;
