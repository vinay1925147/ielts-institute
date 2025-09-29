import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Feature from "./Components/Features/Feature";
import Campus from "./Components/Campus/Campus";
import Contract from "./Components/Contact/Contract";

// import Program from "./Components/Program/Program";
import Testimonial from "./Components/Testimonials/Testimonial";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title style={{}} subtitle="
Choose your journey and start learning today" title="Our Features" />
        <Feature />
        {/* <Title subtitle="what we are programm" title="our Program" />
        <Program /> */}
        
        {/* <Title subtitle="what we are Gallery" title=" Gellery" />
        <Campus /> */}
        <Title subtitle="What Our Students Say" title=" Testimonials" />
        <Testimonial />
        <Title subtitle="get in touch" title=" Contact us" />
        <Contract />
          <Footer/>
      </div>
    
    </>
  );
};

export default App;
