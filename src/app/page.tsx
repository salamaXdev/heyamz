'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Lottie from 'lottie-react';
import splashAnimation from '../../public/Splash water.json';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isEngaged, setIsEngaged] = useState(false);

  // Persistence for engagement state
  useEffect(() => {
    const saved = localStorage.getItem('water_engagement');
    if (saved === 'true') {
      setIsEngaged(true);
    }
  }, []);

  const handleEngage = () => {
    setIsEngaged(true);
    localStorage.setItem('water_engagement', 'true');

    // Trigger celebration
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#10b981', '#ffffff']
    });
  };

  const facts = [
    {
      text: "Ne pas jeter les <span className='text-blue-600 italic'>plastiques, huiles</span> ou déchets dans les oueds.",
      highlight: "plastiques, huiles"
    },
    {
      text: "Utiliser les <span className='text-blue-600 italic'>poubelles</span> et points de collecte.",
      highlight: "poubelles"
    },
    {
      text: "Les déchets finissent souvent dans l’eau et <span className='text-blue-600 italic'>polluent</span> les cours d’eau.",
      highlight: "polluent"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Auto-advance facts slider
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(factInterval);
    };
  }, [facts.length]);

  return (
    <div className="min-h-screen">
      {/* Navigation Header aligned with content width */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-3'
        : 'bg-transparent py-6'
        }`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/water-logo.png"
                alt="Loukkos Eau Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black font-display text-gray-900 tracking-tight">Loukkos<span className="text-blue-600">Eau</span></span>
          </div>

          {/* Centered Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { label: 'Accueil', href: '#accueil' },
              { label: 'Qualité', href: '#qualite' },
              { label: 'Surface', href: '#surface' },
              { label: 'Souterraines', href: '#souterraines' },
              { label: 'Agir', href: '#actions' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-blue-600 rounded-full transition-all hover:bg-blue-50/50 font-display"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center space-x-4">
            <a href="#actions" className="hidden sm:flex px-6 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 active:scale-95 font-display">
              Contribuer
            </a>
            {/* Mobile Menu Toggle */}
            <button className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-900">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* 1. Creative Hero Section */}
      <section id="accueil" className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 z-0"></div>

        {/* Animated Water Blobs (CSS based) - Kept subtle for depth */}
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob z-0"></div>
        <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-green-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-left">


              <h1 className="text-4xl md:text-6xl font-black font-display leading-[1.1] mb-8 text-gray-900 animate-fade-in">
                Le Loukkos, <br />
                <span className="title-gradient">une richesse à protéger</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                « La qualité de l’eau dépend aujourd’hui de nos gestes pour préserver demain. »
                <span className="block mt-4 text-sm font-bold text-gray-400 uppercase tracking-tighter">Engagement • Sensibilisation • Avenir</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a href="#qualite" className="btn-primary flex items-center group font-display font-bold">
                  <span>Agir maintenant</span>
                  <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="#surface" className="flex items-center space-x-3 text-gray-500 hover:text-blue-600 font-bold font-display transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-200 transition-colors">
                    <i className="fas fa-play text-xs ml-1"></i>
                  </div>
                  <span>En savoir plus</span>
                </a>
              </div>
            </div>

            <div className="lg:w-2/5 relative animate-fade-in flex justify-center items-center" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                {/* Liquid Filling Animation inside the White Circle */}
                <div className="absolute w-[55%] h-[55%] rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-0 overflow-hidden bg-white border-4 border-white">
                  <div className="liquid-wave-container relative w-full h-full">
                    <div className="liquid-wave-element"></div>
                    <div className="liquid-wave-element"></div>
                    <div className="liquid-wave-element"></div>
                    {/* Subtle Shine/Reflect effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Lottie Water Splash Animation */}
                <div className="absolute inset-0 z-10 transition-transform hover:scale-105 duration-700">
                  <Lottie animationData={splashAnimation} loop={true} className="w-full h-full" />
                </div>

                {/* Floating Stats */}
                <div className="absolute top-[15%] right-[5%] bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-sm border border-gray-50/50 animate-float z-30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-water text-xs"></i>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Qualité</span>
                  </div>
                </div>

                <div className="absolute bottom-[15%] left-[5%] bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-sm border border-gray-50/50 animate-float animation-delay-2000 z-30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-50 text-green-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-seedling text-xs"></i>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Écosystème</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Water Quality Overview */}
      <section id="qualite" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 font-display title-gradient uppercase tracking-tight">Importance de la Qualité de l'Eau</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              La préservation de la qualité de l'eau est cruciale car la ressource peut se détériorer sans protection adéquate. La santé publique, l'agriculture et l'équilibre environnemental en dépendent directement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h3 className="text-[32px] font-black mb-6 text-gray-900 font-outfit tracking-tight">Un équilibre fragile</h3>
              <p className="text-[19px] text-gray-600 mb-10 leading-relaxed">
                Le bassin du Loukkos est une ressource vitale. Bien que la qualité actuelle soit globalement satisfaisante, elle reste vulnérable aux pollutions domestiques, industrielles et agricoles.
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 flex-shrink-0 bg-blue-50/80 text-blue-600 rounded-[24px] flex items-center justify-center">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <div className="font-outfit">
                  <p className="text-gray-900 text-xl leading-tight">
                    Prévenir vaut mieux
                  </p>
                  <p className="text-blue-600 text-xl leading-tight">
                    que traiter.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/loukous.jpeg"
                alt="Paysage du bassin du Loukkos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="surface" className="section-padding bg-[#fafbfc] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            {/* Left Column: Context & Summary */}
            <div className="lg:w-[35%] flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-[2px] bg-blue-600"></div>
                  <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px]">Indicateur de Performance</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 leading-[1.1] mb-8 uppercase tracking-tight">
                  État des eaux <br />
                  <span className="title-gradient">de surface</span>
                </h2>

                <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
                  Une analyse rigoureuse basée sur les données collectées par nos <span className="font-bold text-gray-700">10 stations stratégiques</span>, offrant une vision à 360° du bassin du Loukkos.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="group p-5 bg-white rounded-[24px] border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                        <i className="fas fa-chart-line text-sm"></i>
                      </div>
                      <span className="text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded-full font-bold">+12% vs 2024</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Indice Global de Santé</p>
                      <p className="text-2xl font-black text-gray-900 font-outfit">Positif & Stable</p>
                    </div>
                  </div>

                  <div className="group p-5 bg-white rounded-[24px] border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <i className="fas fa-satellite-dish text-sm"></i>
                      </div>
                      <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-bold">Live</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Couverture du Réseau</p>
                      <p className="text-2xl font-black text-gray-900 font-outfit">10/10 Stations</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Column: Detailed Status Cards */}
            <div className="lg:w-[65%] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {[
                  {
                    label: 'Qualité Excellente',
                    value: 70,
                    count: '07',
                    className: 'text-blue-600',
                    bgClass: 'bg-blue-600',
                    lightBg: 'bg-blue-50',
                    borderClass: 'hover:border-blue-100',
                    stations: ['Smir', 'My Bouchta', 'El Hachef', 'Ibn Batouta', 'Oued El Makhazine', 'Tanger MED'],
                    desc: 'Conditions optimales, aucune restriction d\'usage.',
                    icon: 'fa-check-circle'
                  },
                  {
                    label: 'Qualité Bonne',
                    value: 20,
                    count: '02',
                    className: 'text-teal-600',
                    bgClass: 'bg-teal-600',
                    lightBg: 'bg-teal-50',
                    borderClass: 'hover:border-teal-100',
                    stations: ['Nakhla', 'My Hassan Ben Mehdi'],
                    desc: 'Qualité satisfaisante avec surveillance périodique.',
                    icon: 'fa-adjust'
                  },
                  {
                    label: 'Zone Critique',
                    value: 10,
                    count: '01',
                    className: 'text-rose-600',
                    bgClass: 'bg-rose-600',
                    lightBg: 'bg-rose-50',
                    borderClass: 'hover:border-rose-100',
                    stations: ['A. Khattabi'],
                    desc: 'Mesures corrective requises, usage contrôlé.',
                    icon: 'fa-exclamation-triangle'
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col group ${item.borderClass}`}>
                    {/* Card Header with Progress Top Bar */}
                    <div className="h-1.5 w-full bg-gray-50 overflow-hidden">
                      <div className={`h-full ${item.bgClass} transition-all duration-1000 delay-300`} style={{ width: `${item.value}%` }}></div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-8">
                          <div className={`w-12 h-12 rounded-2xl ${item.lightBg} ${item.className} flex items-center justify-center text-xl transition-transform group-hover:rotate-12`}>
                            <i className={`fas ${item.icon}`}></i>
                          </div>
                          <span className="text-4xl font-black text-gray-100 font-outfit leading-none">{item.count}</span>
                        </div>

                        <h4 className={`text-base font-black mb-2 font-display uppercase tracking-tight text-gray-900`}>
                          {item.label}
                        </h4>

                        <div className={`text-[12px] font-bold ${item.className} opacity-80 mb-6 flex items-center`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse"></span>
                          {item.value}% du bassin
                        </div>

                        <div className="mb-8">
                          <p className="text-sm text-gray-500 leading-relaxed mb-4 min-h-[40px]">
                            {item.desc}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.stations.map((station, sIdx) => (
                              <span key={sIdx} className="text-[12px] px-2 py-1 bg-gray-50 text-gray-500 rounded-md font-medium ">
                                {station}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-50 text-center">
                        <span className={`text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:${item.className} transition-colors`}>
                          Détails Station
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Groundwater Quality */}
      <section id="souterraines" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display title-gradient uppercase tracking-tight">Qualité des eaux souterraines</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Les nappes phréatiques du bassin du Loukkos sont des réserves invisibles mais essentielles.
              Découvrez l'état de qualité des principales nappes de notre région.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Charf El Akab', quality: 'Bonne à Moyenne', level: 75 },
              { name: 'Azla', quality: 'Bonne à Moyenne', level: 70 },
              { name: 'Emsa', quality: 'Bonne à Moyenne', level: 72 },
              { name: 'Fnidek', quality: 'Bonne à Moyenne', level: 68 },
              { name: 'Negro', quality: 'Bonne à Moyenne', level: 70 },
              { name: 'Rmel de Larache', quality: 'Bonne à Moyenne', level: 65 },
            ].map((nappe, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-[32px] border border-gray-100 card-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>

                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fas fa-layer-group text-blue-500 mr-3"></i>
                  {nappe.name}
                </h4>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Qualité Globale</span>
                    <span className="text-green-600 font-bold">{nappe.quality}</span>
                  </div>

                  {/* Visual Quality Bar */}
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                      style={{ width: `${nappe.level}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm text-gray-500 italic">
                  <i className="fas fa-info-circle mr-2 opacity-50"></i>
                  Surveillance continue requise
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto pt-10 border-t border-gray-100 text-center relative overflow-hidden">
            <p className="text-xl font-medium text-gray-500 italic leading-relaxed">
              « La qualité des eaux souterraines reste globalement acceptable mais nécessite une protection continue pour les générations futures. »
            </p>
          </div>
        </div>
      </section>

      {/* 5. Did You Know? - Redesigned for Full Width & No Shadow */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>

            <div className="relative z-10 bg-gradient-to-br from-blue-50/50 to-white p-12 md:p-20 rounded-[40px] border border-blue-100/50 text-center group transition-all duration-500 min-h-[400px] flex flex-col justify-center w-full">
              <div className="mb-10 inline-flex items-center justify-center w-24 h-24 bg-white rounded-[30px] shadow-sm transform group-hover:rotate-12 transition-transform duration-500 mx-auto">
                <i className="fas fa-lightbulb text-4xl text-amber-400 animate-pulse"></i>
              </div>

              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-6 font-display">Le saviez-vous ?</h2>

              <div className="relative h-44 md:h-24">
                {facts.map((fact, idx) => (
                  <blockquote
                    key={idx}
                    className={`absolute inset-0 text-xl md:text-3xl font-display font-medium text-gray-900 leading-tight max-w-3xl mx-auto left-0 right-0 transition-all duration-1000 transform ${idx === currentFactIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                      }`}
                    dangerouslySetInnerHTML={{ __html: `« ${fact.text} »` }}
                  />
                ))}
              </div>

              <div className="mt-16 flex items-center justify-center space-x-3">
                {facts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentFactIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${idx === currentFactIndex ? 'w-12 bg-blue-600' : 'w-2 bg-blue-200'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Protect Water Quality? */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-outfit">Pourquoi protéger la qualité de l’eau ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: 'fa-heartbeat',
                title: 'Santé humaine',
                color: 'text-red-500',
                bg: 'bg-red-50',
                image: '/sante.jpeg',
                text: 'Une eau propre est le premier médicament contre les maladies hydriques.'
              },
              {
                icon: 'fa-seedling',
                title: 'Agriculture et sécurité alimentaire',
                color: 'text-green-500',
                bg: 'bg-green-50',
                image: '/securite-alimentaire.jpeg',
                text: 'Des sols fertiles et des cultures saines dépendent d\'une eau sans polluants.'
              },
              {
                icon: 'fa-globe-africa',
                title: 'Protection de l’environnement',
                color: 'text-blue-500',
                bg: 'bg-blue-50',
                image: '/environnement.jpeg',
                text: 'Préserver l\'écosystème du Loukkos pour maintenir la biodiversité locale.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[32px] card-shadow border border-gray-100 overflow-hidden flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 right-4 w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-xl shadow-lg backdrop-blur-sm bg-white/80`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                </div>
                <div className="p-8 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4 font-display text-gray-900 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 Image Gallery Highlights */}
      <section className="pb-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: '/pic1.jpeg', alt: 'Aperçu Loukkos 1' },
              { src: '/pic2.jpeg', alt: 'Aperçu Loukkos 2' },
              { src: '/pic3.jpeg', alt: 'Aperçu Loukkos 3' },
            ].map((pic, idx) => (
              <div key={idx} className="relative h-72 rounded-[32px] overflow-hidden shadow-lg group">
                <Image
                  src={pic.src}
                  alt={pic.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What Can Citizens Do? */}
      <section id="actions" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
                <h2 className="text-4xl font-bold mb-10 font-outfit relative z-10">Que peuvent faire les citoyens ?</h2>
              </div>
              <ul className="space-y-6">
                {[
                  { icon: 'fa-trash-alt', text: 'Ne pas jeter de déchets dans les oueds ou les puits' },
                  { icon: 'fa-tint', text: 'Utiliser l’eau de manière responsable' },
                  { icon: 'fa-filter', text: 'Réduire les sources de pollution' },
                  { icon: 'fa-users', text: 'Sensibiliser son entourage' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-5 group">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span className="text-xl text-gray-700 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-blue-900 rounded-[40px] p-8 md:p-10 text-white relative overflow-hidden card-shadow">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-800 rounded-full -mr-24 -mt-24 opacity-50"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10 font-display">Notre Message</h3>
              <p className="text-lg font-light leading-relaxed relative z-10 opacity-90">
                Notre objectif est de sensibiliser à la protection de la qualité de l’eau afin de préserver cette ressource essentielle pour les générations futures.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                <AnimatePresence mode="wait">
                  {!isEngaged ? (
                    <motion.div
                      key="engage-button"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={handleEngage}
                        className="w-full py-3.5 px-6 bg-white text-blue-900 rounded-xl font-black text-base transition-all shadow-lg hover:bg-blue-50 relative overflow-hidden group"
                      >
                        <span className="relative z-10 uppercase tracking-wider">Je m’engage</span>
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center">
                          <i className="fas fa-check text-xl text-white"></i>
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-black uppercase tracking-tight text-white leading-none mb-1">Engagé !</h4>
                          <p className="text-blue-200 text-xs opacity-80">Merci pour votre contribution.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >

                    <p className="text-base text-blue-100/90 leading-relaxed font-medium italic">
                      « Ensemble, protégeons l’eau du Loukkos. »
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center space-x-4 relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-quote-left text-xs text-blue-200"></i>
                </div>
                <span className="text-blue-200 text-sm italic font-medium">L'engagement de tous pour demain.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Interactive Map */}
      <section className="section-padding bg-gray-50 overflow-hidden" >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6 font-display">Bassin du Loukkos</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-medium">Localisation géographique pour contexte</p>
          <div className="max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.08)] bg-white p-3 border border-white">
            <div className="relative h-[600px] w-full bg-blue-50 rounded-[32px] overflow-hidden group">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270560.717078659!2d-7.529000677343745!3d36.820749592801896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0a4de766a9be43%3A0x6744b97cdf0c14b6!2sOued%20Loukos!5e0!3m2!1sen!2sma!4v1766850507865!5m2!1sen!2sma"
                className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 active:scale-[1.02]"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Hover Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center space-x-3">
                <i className="fas fa-mouse-pointer text-blue-600 text-xs"></i>
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Explorer la carte</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* 10. Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10" >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/water-logo.png"
                  alt="Loukkos Eau Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-xl font-bold font-display text-gray-900">Loukkos<span className="text-blue-600">Eau</span></span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Une initiative pédagogique pour la sensibilisation à la gestion intégrée des ressources en eau dans le bassin du Loukkos.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#accueil" className="text-gray-600 hover:text-blue-600 transition-colors">Accueil</a></li>
                <li><a href="#qualite" className="text-gray-600 hover:text-blue-600 transition-colors">Qualité de l’eau</a></li>
                <li><a href="#surface" className="text-gray-600 hover:text-blue-600 transition-colors">Eaux de surface</a></li>
                <li><a href="#actions" className="text-gray-600 hover:text-blue-600 transition-colors">Actions Citoyennes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Informations</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-users-cog text-blue-600"></i>
                  <span>Réalisé par : Group Bassin loukkos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-calendar-alt text-blue-600"></i>
                  <span>Année universitaire : 2025 - 2026</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-book-open text-blue-600"></i>
                  <span>Module : Gestion intégrée des ressources en eau</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Loukkos Eau. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-blue-600 cursor-pointer">Confidentialité</span>
              <span className="hover:text-blue-600 cursor-pointer">Mentions Légales</span>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}