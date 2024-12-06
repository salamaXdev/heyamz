// app/page.tsx
'use client';

import { useState } from 'react';
import { OfferModal } from '@/components/OfferModal';
import { Feature } from '@/components/Feature';
import { motion } from 'framer-motion';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 sm:p-8 relative overflow-hidden">
      {/* Animated background elements - adjusted for mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#FF9900]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#ffd814]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl w-full text-center relative">
        {/* Domain name with responsive sizing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-8 sm:mb-16 group"
        >
          <div className="relative inline-block p-4 sm:p-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF9900] to-[#ffd814] rounded-3xl opacity-20 blur-2xl 
                 group-hover:opacity-30 transition-opacity duration-300">
            </div>

            <h1 className="domain-name relative text-5xl sm:text-7xl md:text-8xl font-black tracking-tight py-4 sm:py-6 px-4 sm:px-8
                 bg-gradient-to-r from-[#FF9900] to-[#ffd814] bg-clip-text text-transparent
                 transition-all duration-300 group-hover:scale-[1.02]">
              heyamz.com
            </h1>
          </div>
        </motion.div>

        {/* Tagline with responsive font size */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-light mb-8 sm:mb-16 text-white/90 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Your Gateway to E-commerce Excellence
        </motion.h2>

        {/* CTA Button with adjusted padding for mobile */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => setIsModalOpen(true)}
          className="cta-gradient text-black font-semibold px-8 sm:px-16 py-4 sm:py-5 rounded-full 
                   uppercase tracking-wide text-lg sm:text-xl hover:shadow-[0_8px_30px_rgb(255,153,0,0.3)] 
                   hover:-translate-y-0.5 transition-all transform hover:scale-105
                   border border-[#FF9900]/20 w-full sm:w-auto max-w-xs mx-auto"
        >
          Make an Offer
        </motion.button>

        {/* Features section with responsive padding */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-12 sm:my-24 p-6 sm:p-12 bg-white/[0.03] backdrop-blur-xl rounded-3xl 
                   border border-[#FF9900]/10 shadow-2xl shadow-[#FF9900]/5
                   hover:bg-white/[0.05] transition-all duration-500"
        >
          <div className="space-y-4">
            <Feature text="Perfect for E-commerce Related Services" />
            <Feature text="Ideal for Seller Tools & Solutions" />
            <Feature text="Great for Marketplace Analytics" />
            <Feature text="Suitable for Shopping Assistant Services" />
          </div>
        </motion.div>

        {/* Use cases section with adjusted spacing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-[#FF9900]/5 to-[#ffd814]/5 rounded-2xl p-6 sm:p-10 my-8 sm:my-16
                   border border-[#FF9900]/10 backdrop-blur-sm hover:backdrop-blur-lg
                   transition-all duration-500"
        >
          <p className="text-xl sm:text-2xl font-light">Ideal for businesses focused on:</p>
          <p className="text-[#ffd814] font-medium mt-4 sm:mt-6 text-lg sm:text-xl tracking-wide">
            Online Retail Solutions • E-commerce Tools<br className="sm:hidden" /> 
            Seller Analytics • Shopping Assistants
          </p>
        </motion.div>

        {/* Contact section with mobile optimization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-16 text-lg sm:text-xl bg-white/[0.03] rounded-2xl p-6 sm:p-8 backdrop-blur-sm mx-4 sm:mx-0"
        >
          <p className="font-light">Ready to acquire this premium domain?</p>
          <p className="mt-3 sm:mt-4">
            Contact us at:{' '}
            <a
              href="mailto:salamadev00@gmail.com"
              className="text-[#FF9900] hover:text-[#ffd814] transition-colors 
                       underline decoration-[#FF9900]/30 hover:decoration-[#ffd814]
                       break-all sm:break-normal"
            >
              salamadev00@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      <OfferModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}