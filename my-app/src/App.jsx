import React from 'react';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import Skills from './Skills.jsx';
import Whyus from './whyus.jsx';
import Cta from './Cta.jsx';


function App() {
  return (
    <>
    
    <Header />
    <Hero />
    <main>
    <Whyus />
    <Skills />
    <Services />
    <Cta />
    <Contact />
    </main>
    <Footer />
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;
