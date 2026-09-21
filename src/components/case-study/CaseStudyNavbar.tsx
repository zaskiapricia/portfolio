import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CaseStudyNavbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHome = () => navigate('/');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FF5BBC]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center">
        <button
          onClick={goHome}
          className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Portfolio</span>
          <span className="sm:hidden">Back</span>
        </button>

        <button
          className="md:hidden text-white p-1 ml-auto"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FF5BBC] border-t border-white/20"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              <li>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    goHome();
                  }}
                  className="text-white font-semibold text-lg w-full text-left py-2"
                >
                  Back to Portfolio
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
