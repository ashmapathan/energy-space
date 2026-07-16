import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Blogs from "../components/Blogs";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact"
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {

  return (
    <>
      <Header 
       darkMode={darkMode}
       setDarkMode={setDarkMode}
      />
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Benefits darkMode={darkMode}/>
      <Blogs darkMode={darkMode}/>
      <FAQ darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </>
  );
}

export default Home;