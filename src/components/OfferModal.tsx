// components/OfferModal.tsx
'use client';

import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OfferModal({ isOpen, onClose }: ModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkgnebev', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
          setShowSuccess(false);
          form.reset();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('There was a problem submitting your offer. Please try again.');
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-[600px] p-6 sm:p-12 relative text-gray-900 animate-in fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute right-4 sm:right-6 top-4 sm:top-6 text-2xl hover:rotate-90 transition-transform text-gray-600 hover:text-gray-900"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 pr-8">
          Make an Offer for heyamz.com
        </h2>

        {!showSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block font-semibold mb-2 text-sm sm:text-base">
                <i className="fas fa-user mr-2 text-[#FF9900]"></i>Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2.5 sm:p-3 rounded-xl border-2 border-gray-200 
                         focus:border-[#FF9900] focus:ring-2 focus:ring-[#FF9900]/10
                         text-sm sm:text-base bg-gray-50 hover:bg-white
                         transition-colors duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-sm sm:text-base">
                <i className="fas fa-envelope mr-2 text-[#FF9900]"></i>Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2.5 sm:p-3 rounded-xl border-2 border-gray-200 
                         focus:border-[#FF9900] focus:ring-2 focus:ring-[#FF9900]/10
                         text-sm sm:text-base bg-gray-50 hover:bg-white
                         transition-colors duration-200"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-sm sm:text-base">
                <i className="fas fa-tag mr-2 text-[#FF9900]"></i>Your Offer (USD)
              </label>
              <input
                type="number"
                name="offer"
                required
                min="1"
                className="w-full p-2.5 sm:p-3 rounded-xl border-2 border-gray-200 
                         focus:border-[#FF9900] focus:ring-2 focus:ring-[#FF9900]/10
                         text-sm sm:text-base bg-gray-50 hover:bg-white
                         transition-colors duration-200"
                placeholder="Enter your offer amount"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-sm sm:text-base">
                <i className="fas fa-comment mr-2 text-[#FF9900]"></i>Message (Optional)
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full p-2.5 sm:p-3 rounded-xl border-2 border-gray-200 
                         focus:border-[#FF9900] focus:ring-2 focus:ring-[#FF9900]/10
                         text-sm sm:text-base bg-gray-50 hover:bg-white
                         transition-colors duration-200 resize-none"
                placeholder="Any additional information you'd like to share"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF9900] to-[#ffd814] 
                       text-black font-semibold py-3 sm:py-4 rounded-xl 
                       uppercase tracking-wide text-sm sm:text-base
                       hover:shadow-lg hover:-translate-y-0.5 transition-all
                       border border-[#FF9900]/10"
            >
              Submit Offer
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 bg-green-50 p-4 sm:p-6 rounded-xl">
            <i className="fas fa-check-circle text-xl sm:text-2xl mb-3 block"></i>
            <p className="text-sm sm:text-base">Thank you for your offer! We'll get back to you soon.</p>
          </div>
        )}

        {/* Optional: Loading state */}
        <div 
          className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center"
          style={{ display: 'none' }} // Show this when loading
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9900]"></div>
        </div>
      </div>
    </div>
  );
}