"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InvestmentOptionsSection() {
  const { t } = useLanguage();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const investmentOptions = [
    {
      number: "1",
      lotSize: t("investment.lot-250"),
      investment: "R$ 80.000,00",
      description: t("investment.lot-250.desc"),
    },
    {
      number: "2",
      lotSize: t("investment.lot-500"),
      investment: "R$ 150.000,00",
      description: t("investment.lot-500.desc"),
    },
  ];

  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-12 sm:py-16 md:py-20 bg-[#F9F6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Lado Esquerdo - Opções de Investimento */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-8 md:mb-12 font-breathing text-center lg:text-left px-2 break-words">
              {t("investment.title")}
            </h2>

            <div className="space-y-6">
              {investmentOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-accent-200/50 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-start gap-6">
                    {/* Número */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-3xl font-bold text-white font-breathing">
                          {option.number}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-500 mb-5 font-diodrum">
                        Lote {option.lotSize}
                      </h3>
                      
                      {/* Investimento - Design Premium */}
                      <div className="mb-6 p-5 bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-xl border border-accent-200/50 shadow-sm">
                        <div className="flex flex-col">
                          <span className="text-sm md:text-base font-medium text-secondary-600 mb-3 font-avenir uppercase tracking-wide">
                            {t("investment.label")}
                          </span>
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-xl md:text-2xl text-secondary-500 font-avenir font-semibold">R$</span>
                            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-600 font-avenir tracking-tight leading-none">
                              {option.investment.replace("R$ ", "").split(",")[0]}
                            </span>
                            <span className="text-2xl md:text-3xl text-accent-500 font-avenir font-semibold">
                              ,{option.investment.split(",")[1] || "00"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-base md:text-lg text-secondary-500 leading-relaxed font-body">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito - Planta de Situação */}
          <motion.div
            className="relative lg:sticky lg:top-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="bg-white rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border-2 border-accent-200/50 overflow-hidden">
              <div 
                className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[700px] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setIsImageModalOpen(true)}
              >
                <Image
                  src="/images/bitupita/PROJETO-TERRAVENTOS.jpg"
                  alt="Planta de Situação - Bitupitá"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                {/* Overlay com ícone de zoom */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                {/* Indicador de clique */}
                <div className="absolute bottom-4 right-4 bg-accent-500/90 text-white px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Clique para ampliar
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm md:text-base text-secondary-500 font-body">
                  {t("investment.site-plan")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Ampliação da Imagem */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Imagem ampliada */}
            <motion.div
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/bitupita/PROJETO-TERRAVENTOS.jpg"
                  alt="Planta de Situação - Bitupitá (Ampliado)"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="100vw"
                />
              </div>
              {/* Legenda no modal */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                01 PLANTA DE SITUAÇÃO - Escala 1:500
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}

