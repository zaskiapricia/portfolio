import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import DignitionCaseStudy from '@/pages/DignitionCaseStudy';


function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<HomePage />} 
        />

        <Route
          path="/projects/dignition"
          element={<DignitionCaseStudy />}
        />

      </Routes>

    </BrowserRouter>
  );
}