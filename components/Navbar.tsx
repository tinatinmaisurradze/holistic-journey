'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = () => {
    setIsOpen(false);
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 md:px-12 bg-[#f8f5f0]/90 backdrop-blur-md z-[100] font-sans border-b border-[#1a2f38]/10 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={handleLogoClick}>
          <img src="/logo.png" alt="Logo" className="w-7 h-7 md:w-9 md:h-9 object-contain" />
          <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#1a2f38] uppercase">
            Holistic Journey
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {['about', 'events', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)} 
              className="text-[11px] uppercase tracking-[0.2em] text-[#1a2f38] font-semibold hover:text-[#a3b18a] transition-all relative group"
            >
              {item === 'about' ? 'ჩვენს შესახებ' : item === 'events' ? 'შეხვედრები' : 'კონტაქტი'}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#a3b18a] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1a2f38]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#f8f5f0] border-b border-[#1a2f38]/10 flex flex-col items-center py-10 gap-8 md:hidden shadow-xl"
          >
            <button onClick={() => scrollToSection('about')} className="text-[12px] uppercase tracking-[0.3em] font-bold text-[#1a2f38]">ჩვენს შესახებ</button>
            <button onClick={() => scrollToSection('events')} className="text-[12px] uppercase tracking-[0.3em] font-bold text-[#1a2f38]">შეხვედრები</button>
            <button onClick={() => scrollToSection('contact')} className="text-[12px] uppercase tracking-[0.3em] font-bold text-[#1a2f38]">კონტაქტი</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}