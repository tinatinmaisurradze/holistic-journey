'use client';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function GrowthPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] font-sans selection:bg-[#f2c5d3]">
      <Navbar />
      
      <section className="pt-44 pb-32 px-6 max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1a2f38]/40 hover:text-[#1a2f38] transition-colors mb-12">
          <ArrowLeft size={14} /> მთავარზე დაბრუნება
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-[10px] uppercase tracking-[0.5em] text-[#a3b18a] mb-6">პროცესი</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a2f38] mb-12">
            პიროვნული <br /> <span className="italic font-light text-[#f2c5d3]">ზრდა</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[3/4] bg-white p-3 shadow-xl border border-gray-100 scale-105 overflow-hidden">
              <img 
                src="/eto-tatuli.jpg" 
                alt="Personal Growth" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x533?text=Growth"; }}
              />
            </div>

            <div className="space-y-8 text-[#1a2f38]/70 leading-relaxed font-light">
              <p>
                პიროვნული ზრდა არის მუდმივი პროცესი, რომელიც მოითხოვს სიმამაცეს, საკუთარი თავის მიმღებლობას და სწორ ხელმძღვანელობას.
              </p>
              <p>
                ჩვენი ონლაინ მასტერკლასები და ინდივიდუალური შეხვედრები დაგეხმარებათ აღმოაჩინოთ თქვენი შინაგანი პოტენციალი და იპოვოთ ჰარმონია ყოველდღიურობაში.
              </p>
              
              <div className="bg-[#1a2f38]/5 p-8 rounded-[30px] border border-[#1a2f38]/5">
                <h4 className="text-[10px] uppercase tracking-widest text-[#1a2f38] font-bold mb-4">რას გთავაზობთ:</h4>
                <ul className="space-y-3 text-sm italic">
                  <li>• ონლაინ მასტერკლასები</li>
                  <li>• პიროვნული განვითარების გეგმა</li>
                  <li>• ემოციური ინტელექტის ამაღლება</li>
                </ul>
              </div>

              <Link href="/#contact">
                <button className="w-full py-4 bg-[#1a2f38] text-white text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-[#a3b18a] transition-all">
                  დაიწყე მოგზაურობა
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}