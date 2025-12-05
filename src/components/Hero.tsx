"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center w-full max-w-full overflow-hidden">
      {/* Container da imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fundo preto como fallback */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Imagem de fundo estática com efeito de zoom/drone */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.15, 1.1],
              x: [0, -20, 10],
              y: [0, -15, 5],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/bitupita/DJI_20251019210520_0107_D.jpg"
              alt="Bitupitá - Paisagem paradisíaca"
              fill
              className="object-cover"
              quality={90}
              priority
              sizes="100vw"
            />
          </motion.div>
          {/* Overlay escuro para melhorar legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
      </div>

      {/* Overlay claro para melhorar a visibilidade do texto */}
      <div className="absolute inset-0 bg-black/5 z-10"></div>

      {/* Gradiente sutil para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/2 via-transparent to-black/8 z-15"></div>

      {/* Logo - Canto Superior Direito */}
      <motion.div
        className="absolute top-6 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Logo size="lg" color="white" />
      </motion.div>

      {/* Container principal do conteúdo */}
      <div className="relative z-30 w-full h-full px-4 sm:px-6 lg:px-8">
        {/* Conteúdo Centralizado */}
        <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center">
          {/* Título Principal - Bitupitá: Pé na Areia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-6 sm:mb-8"
          >
            <h1 
              className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
              style={{
                fontFamily: '"DiodrumCyrillic", "DiodrumRounded", sans-serif',
                fontWeight: 400,
                letterSpacing: '0px',
                color: '#F8F0E5',
              }}
            >
              Bitupitá: Pé na Areia
            </h1>
          </motion.div>

          {/* Badge 4.300m² */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="mb-8 sm:mb-10"
          >
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 px-6 py-3 rounded-full shadow-2xl ring-4 ring-accent-500/30 inline-block">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-white/90 rounded-full"></div>
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-diodrum">
                  4.300m²
                </span>
              </div>
            </div>
          </motion.div>

          {/* Slogans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 max-w-4xl">
            {/* Slogan 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                style={{
                  fontFamily: '"Avenir", "Avenir Light", sans-serif',
                  fontWeight: 700,
                }}
              >
                Seu Refúgio Particular.
              </p>
            </motion.div>

            {/* Slogan 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                style={{
                  fontFamily: '"Avenir", "Avenir Light", sans-serif',
                  fontWeight: 700,
                }}
              >
                Seu Melhor Investimento.
              </p>
            </motion.div>
          </div>

          {/* Texto descritivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-8 sm:mb-10 max-w-3xl"
          >
            <p 
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed"
              style={{
                fontFamily: '"Avenir", "Avenir Light", sans-serif',
                fontWeight: 700,
              }}
            >
              Descubra o paraíso intocado do litoral cearense e garanta seu lugar neste destino exclusivo.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.3,
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.a
              href="#por-que-fazer-parte"
              className="group relative bg-accent-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold hover:bg-accent-600 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 transform hover:-translate-y-2 font-diodrum text-center overflow-hidden inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("hero.discover")}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
