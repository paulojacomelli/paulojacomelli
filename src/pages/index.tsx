import { useEffect, useState } from 'react';

// Sections
import HomeSection from './sections/Home';
import Service from './sections/Service';
import Portfolio from './sections/portfolio';
import Inspire from './sections/inspire';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

// Components
import Loader from '../components/Loader';
import Footer from './sections/Footer';

// -------------------

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOffLoader, setFadeOffLoader] = useState<boolean>(false);

  useEffect(() => {
    const loaderTimer = setTimeout(handleLoad, 750);
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleLoad = () => {
    setFadeOffLoader(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading ? <Loader fadeOffLoader={fadeOffLoader} /> : <></>}

      <div id="content" className="site-content center-relative">
        <HomeSection />
        <Service />
        <Portfolio />
        <Inspire />
        <About />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
