"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function TechnicalSpecsSection() {
  const { t } = useLanguage();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");

  // Imagens do terreno (fotos aéreas)
  const terrainImages = [
    "/images/bitupita/DJI_20251019210520_0107_D.jpg",
    "/images/bitupita/DJI_20251019210524_0108_D.jpg",
    "/images/bitupita/DJI_20251019210747_0114_D.jpg",
    "/images/bitupita/DJI_20251019214527_0135_D.jpg",
  ];

  const openImageModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImage("");
  };

  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-12 sm:py-16 md:py-20 bg-[#1A202C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-breathing">
            {t("technical.specs")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-avenir">
            {t("technical.ideal-space")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Lado Esquerdo - Informações Técnicas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Área Total */}
            <div className="bg-[#252A35] rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#142431] rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white font-diodrum">
                  {t("technical.total-area")}
                </h4>
              </div>
              <p className="text-sm text-gray-400 mb-2 font-body">
                {t("technical.total-area.note")}
              </p>
              <p className="text-2xl font-bold text-[#142431] font-breathing">
                {t("technical.total-area.value")}
              </p>
            </div>

            {/* Frente Mar */}
            <div className="bg-[#252A35] rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#142431] rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white font-diodrum">
                  {t("technical.beach-front")}
                </h4>
              </div>
              <p className="text-sm text-gray-400 mb-2 font-body">
                {t("technical.beach-front.note")}
              </p>
              <p className="text-2xl font-bold text-[#142431] font-breathing">
                {t("technical.beach-front.value")}
              </p>
            </div>

            {/* Frente Rua */}
            <div className="bg-[#252A35] rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#142431] rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white font-diodrum">
                  {t("technical.street-front")}
                </h4>
              </div>
              <p className="text-2xl font-bold text-[#142431] font-breathing mt-5">
                {t("technical.street-front.value")}
              </p>
            </div>

            {/* Profundidade */}
            <div className="bg-[#252A35] rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#142431] rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white font-diodrum">
                  {t("technical.depth")}
                </h4>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                {t("technical.depth.value")}
              </p>
            </div>
          </motion.div>

          {/* Lado Direito - Fotos da Planta e do Terreno */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Planta de Situação */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 font-diodrum">
                Planta de Situação
              </h3>
              <div
                className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden cursor-pointer group border border-gray-700/50"
                onClick={() => openImageModal("/images/bitupita/PROJETO-TERRAVENTOS.jpg")}
              >
                <Image
                  src="/images/bitupita/PROJETO-TERRAVENTOS.jpg"
                  alt="Planta de Situação - Bitupitá"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-[#142431]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm">
                  {t("investment.site-plan")}
                </div>
              </div>
            </div>

            {/* Fotos do Terreno */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 font-diodrum">
                Fotos do Terreno
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {terrainImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[200px] md:h-[250px] rounded-xl overflow-hidden cursor-pointer group border border-gray-700/50"
                    onClick={() => openImageModal(image)}
                  >
                    <Image
                      src={image}
                      alt={`Foto do terreno - ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      quality={90}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
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
            onClick={closeImageModal}
          >
            {/* Botão de fechar */}
            <button
              onClick={closeImageModal}
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
                  src={modalImage}
                  alt="Imagem ampliada"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}

