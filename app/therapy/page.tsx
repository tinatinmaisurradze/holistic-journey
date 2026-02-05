'use client';
// ორი წერტილი (..) ნიშნავს ერთი ფოლდერით მაღლა ასვლას. 
// აქ გვჭირდება ორი წყვილი, რომ ჯერ therapy-დან გამოვიდეთ, მერე app-დან.
import Navbar from '../../components/Navbar'; 
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TherapyPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] font-sans selection:bg-[#f2c5d3]">
      <Navbar />
      
      <section className="pt-44 pb-32 px-6 max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1a2f38]/40 hover:text-[#1a2f38] transition-colors mb-12">
          <ArrowLeft size={14} /> უკან დაბრუნება
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-[10px] uppercase tracking-[0.5em] text-[#a3b18a] mb-6">
            სერვისი
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a2f38] mb-12">
            ინდივიდუალური <br /> <span className="italic font-light">ფსიქოთერაპია</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[3/4] bg-white p-3 shadow-sm border border-gray-100 rotate-[-1deg]">
              <img 
                src="/therapy.jpg" 
                alt="ფსიქოთერაპია" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x533?text=Therapy"; }}
              />
            </div>

            <div className="space-y-8 text-[#1a2f38]/70 leading-relaxed font-light">
              <p>
                ფსიქოთერაპია არის მოგზაურობა საკუთარ თავში, სადაც ჩვენ ერთად ვპოულობთ იმ რესურსებს, რომლებიც დაგეხმარებათ ცხოვრებისეული სირთულეების გადალახვაში.
              </p>
              <p>
                ეთო და თათული — 9 წლიანი გამოცდილება საშუალებას გვაძლევს შემოგთავაზოთ უსაფრთხო და მზრუნველი გარემო პიროვნული ზრდისთვის.
              </p>
              
              <Link href="/#contact">
                <button className="mt-12 w-full py-4 bg-[#1a2f38] text-white text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-[#a3b18a] transition-all">
                  ჩაეწერე კონსულტაციაზე
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}