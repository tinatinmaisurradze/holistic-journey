'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { Instagram, Mail, Send, Compass, Calendar, CheckCircle2 } from 'lucide-react';

// Custom Cursor კომპონენტი
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: any) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-[#a3b18a] pointer-events-none z-[9999] hidden md:block"
      animate={{ 
        x: mousePos.x - 12, 
        y: mousePos.y - 12,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(163, 177, 138, 0.1)' : 'transparent'
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax ეფექტებისთვის
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#f8f5f0] overflow-x-hidden font-sans selection:bg-[#f2c5d3] cursor-none">
      <CustomCursor />
      <Navbar />
      
      <section className="relative pt-32 pb-32 px-6 flex flex-col items-center">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }}
          className="text-center mb-24 md:mb-32 relative"
        >
          <span className="block text-[10px] uppercase tracking-[0.5em] text-[#1a2f38]/40 mb-10">
            ეთო & თათული — პიროვნული ზრდა
          </span>
          
          <h1 className="text-[52px] md:text-[130px] font-serif text-[#1a2f38] leading-[1.1] md:leading-[0.95] tracking-tight md:tracking-[-0.02em] mb-12">
            ჰოლისტიკური <br /> 
            <span className="italic font-light text-[#a3b18a]">მოგზაურობა</span>
          </h1>
          
          <p className="text-[14px] md:text-[16px] text-[#1a2f38]/60 max-w-sm mx-auto leading-relaxed tracking-wide font-light px-4">
            გეხმარებით პიროვნულ განვითარებაში <br className="hidden md:block" />
            ფსიქოთერაპია / სუნთქვის პრაქტიკა
          </p>
        </motion.div>

        {/* Grid Section - Parallax-ით */}
        <div id="about" className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center mb-44 px-4 scroll-mt-32">
          
          <Link href="/therapy">
            <motion.div style={{ y: y1 }} whileHover={{ scale: 1.02 }} className="flex flex-col items-center cursor-pointer group">
              <div className="w-full aspect-[3/4] bg-white p-3 shadow-sm border border-gray-100 rotate-[-2deg] overflow-hidden">
                <img src="/therapy.jpg" alt="Therapy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                     onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x533?text=Therapy"; }} />
              </div>
              <h3 className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[#1a2f38] font-bold opacity-80">ფსიქოთერაპია</h3>
            </motion.div>
          </Link>

          <Link href="/growth">
            <motion.div style={{ y: y2 }} whileHover={{ scale: 1.05 }} className="flex flex-col items-center z-20 cursor-pointer group">
              <div className="w-full aspect-[3/4] bg-white p-3 shadow-xl border border-gray-100 scale-105 overflow-hidden">
                <img src="/eto-tatuli.jpg" alt="Growth" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                     onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x533?text=Growth"; }} />
              </div>
              <h3 className="mt-12 text-[11px] uppercase tracking-[0.3em] text-[#a3b18a] font-bold italic">პიროვნული ზრდა</h3>
            </motion.div>
          </Link>

          <Link href="/breathing">
            <motion.div style={{ y: y1 }} whileHover={{ scale: 1.02 }} className="flex flex-col items-center cursor-pointer group">
              <div className="w-full aspect-[3/4] bg-white p-3 shadow-sm border border-gray-100 rotate-[3deg] overflow-hidden">
                <img src="/breath.jpg" alt="Breathing" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                     onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x533?text=Breathing"; }} />
              </div>
              <h3 className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[#1a2f38] font-bold opacity-80 px-4 text-center">სუნთქვის გაჯანსაღება</h3>
            </motion.div>
          </Link>
        </div>

        {/* Diary Section */}
        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="max-w-5xl w-full mb-44 flex flex-col md:flex-row items-center gap-12 bg-[#fdfbf7] p-10 md:p-20 border-y border-[#1a2f38]/5"
        >
          <div className="w-52 md:w-1/3 aspect-square overflow-hidden rounded-2xl shadow-lg rotate-[-2deg]">
             <img src="/diary-photo.jpg" alt="Story" className="w-full h-full object-cover" 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x400"; }} />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="font-serif italic text-2xl md:text-4xl text-[#1a2f38]/80 leading-relaxed mb-6 px-4">
              "დღეს სუნთქვას ჩემი კეთილდღეობის უდიდესი ნაწილი უჭირავს... ვაშა Breathwork! ✨🙌"
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#a3b18a] px-4">— ეთო, სუნთქვის ინსტრუქტორი</span>
          </div>
        </motion.section>

        {/* Events Section */}
        <div id="events" className="w-full max-w-4xl mb-44 px-6 scroll-mt-32">
          <div className="flex justify-between items-end mb-12 border-b border-[#1a2f38]/10 pb-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a2f38]">დაგეგმილი შეხვედრები</h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#a3b18a]">2026</span>
          </div>
          <div className="space-y-6">
            {[ 
              { title: "ონლაინ მასტერკლასი: სუნთქვის არსი", date: "15 თებერვალი", type: "ონლაინ" },
              { title: "ჯგუფური თერაპია: პიროვნული ზრდა", date: "22 თებერვალი", type: "თბილისი" }
            ].map((event, i) => (
              <motion.div whileHover={{ x: 10 }} key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl border border-gray-50 shadow-sm transition-all group cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-[#f8f5f0] rounded-xl group-hover:bg-[#f2c5d3]/30 transition-colors">
                    <Calendar size={20} className="text-[#1a2f38]" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-[#1a2f38] mb-1">{event.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#1a2f38]/40">{event.type}</p>
                  </div>
                </div>
                <div className="text-right pl-4">
                  <span className="text-sm font-serif italic text-[#a3b18a] whitespace-nowrap">{event.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="w-full max-w-xl flex flex-col items-center scroll-mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="w-full bg-white p-8 md:p-12 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-white overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="text-center mb-12">
                      <h2 className="font-serif text-4xl text-[#1a2f38] mb-4 tracking-tight">დაიწყე მოგზაურობა</h2>
                      <p className="text-[10px] uppercase tracking-widest text-[#1a2f38]/40 text-balance px-4">დაგვიტოვე ინფორმაცია და ჩვენ დაგიკავშირდებით</p>
                    </div>
                    <form className="space-y-10" onSubmit={handleSubmit}>
                      <input required type="text" placeholder="თქვენი სახელი" 
                        className="bg-transparent w-full border-b border-[#1a2f38]/10 pb-3 outline-none text-sm font-medium text-[#1a2f38] placeholder:text-[#1a2f38]/30 focus:border-[#a3b18a] transition-all" />
                      
                      <input required type="email" placeholder="ელ-ფოსტა" 
                        className="bg-transparent w-full border-b border-[#1a2f38]/10 pb-3 outline-none text-sm font-medium text-[#1a2f38] placeholder:text-[#1a2f38]/30 focus:border-[#a3b18a] transition-all" />
                      
                      <textarea required placeholder="სერვისი ან შეკითხვა..." rows={3} 
                        className="bg-transparent w-full border-b border-[#1a2f38]/10 pb-3 outline-none text-sm font-medium text-[#1a2f38] placeholder:text-[#1a2f38]/30 resize-none focus:border-[#a3b18a] transition-all" />
                      
                      <button type="submit" className="w-full py-5 bg-[#1a2f38] text-white text-[10px] uppercase tracking-[0.5em] rounded-full hover:bg-[#a3b18a] transition-all shadow-lg flex items-center justify-center gap-3 active:scale-[0.98]">
                        ინფორმაციის გაზიარება <Send size={14} />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                    <CheckCircle2 size={60} className="text-[#a3b18a] mb-6" />
                    <h3 className="font-serif text-3xl text-[#1a2f38] mb-4 text-balance">მადლობა გაზიარებისთვის!</h3>
                    <p className="text-sm text-[#1a2f38]/60 font-light px-4">თქვენი ინფორმაცია მიღებულია, <br/> ეთო ან თათული მალე დაგიკავშირდებათ.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-16 pb-20">
              <motion.a whileHover={{ y: -5, backgroundColor: '#f2c5d3' }} href="https://www.instagram.com/holisticjourney__/" target="_blank" className="p-5 bg-white rounded-full shadow-sm border border-gray-100 text-[#1a2f38] transition-all"><Instagram size={20} /></motion.a>
              <motion.a whileHover={{ y: -5, backgroundColor: '#a3b18a' }} href="#" className="p-5 bg-white rounded-full shadow-sm border border-gray-100 text-[#1a2f38] transition-all"><Compass size={20} /></motion.a>
              <motion.a whileHover={{ y: -5, backgroundColor: '#1a2f38', color: '#fff' }} href="mailto:info@holistic.ge" className="p-5 bg-white rounded-full shadow-sm border border-gray-100 text-[#1a2f38] transition-all"><Mail size={20} /></motion.a>
            </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-[#1a2f38]/5 opacity-30 text-[10px] uppercase tracking-[0.6em]">
        Holistic Journey © 2026
      </footer>
    </main>
  );
}