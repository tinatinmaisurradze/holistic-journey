'use client';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Wind, CheckCircle } from 'lucide-react';

export default function BreathingPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] font-sans selection:bg-[#a3b18a]/30">
      <Navbar />
      
      <section className="pt-44 pb-32 px-6 max-w-5xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1a2f38]/40 hover:text-[#1a2f38] transition-colors mb-16">
          <ArrowLeft size={14} /> მთავარზე დაბრუნება
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-[10px] uppercase tracking-[0.5em] text-[#a3b18a] mb-6">პრაქტიკა</span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#1a2f38] leading-tight mb-8">
              სუნთქვის <br /> <span className="italic font-light">გაჯანსაღება</span>
            </h1>
            
            <div className="space-y-6 text-[#1a2f38]/70 font-light leading-relaxed text-lg">
              <p>
                "დილით სულ უენერგიო ვიღვიძებდი... დღეს სუნთქვას ჩემი კეთილდღეობის უდიდესი ნაწილი უჭირავს."
              </p>
              <p>
                Breathwork არის უძველესი პრაქტიკა, რომელიც მეცნიერულად დადასტურებული მეთოდებით გვეხმარება ნერვული სისტემის დარეგულირებაში.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {['ენერგიის აღდგენა', 'სტრესის მართვა', 'კონცენტრაციის გაუმჯობესება'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#1a2f38]/60">
                  <CheckCircle size={14} className="text-[#a3b18a]" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-white p-4 shadow-2xl rotate-[2deg]">
              <img src="/breath.jpg" alt="Breathing" className="w-full h-full object-cover" 
                   onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800"; }} />
            </div>
            {/* დეკორატიული ელემენტი */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#a3b18a]/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}