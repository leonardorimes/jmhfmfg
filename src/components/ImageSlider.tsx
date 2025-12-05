"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  alt: string;
  className?: string;
  maxImages?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  enableModal?: boolean;
}

export default function ImageSlider({
  images,
  alt,
  className = "",
  maxImages = 4,
  autoPlay = false,
  autoPlayInterval = 5000,
  enableModal = false,
}: ImageSliderProps) {
  // Limitar ao máximo de imagens
  const limitedImages = images.slice(0, maxImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");

  const openModal = (imageSrc: string) => {
    if (enableModal) {
      setModalImage(imageSrc);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Auto-play
  useEffect(() => {
    if (autoPlay && limitedImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % limitedImages.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, limitedImages.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % limitedImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + limitedImages.length) % limitedImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (limitedImages.length === 0) {
    return null;
  }

  // Se houver apenas uma imagem, não mostrar slider
  if (limitedImages.length === 1) {
    return (
      <>
        <div 
          className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-accent-200/50 ${enableModal ? 'cursor-pointer' : ''} ${className}`}
          onClick={() => enableModal && openModal(limitedImages[0])}
        >
          <Image
            src={limitedImages[0]}
            alt={alt}
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
          {enableModal && (
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-[#142431]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
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
      </>
    );
  }

  return (
    <>
      <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-accent-200/50 group ${enableModal ? 'cursor-pointer' : ''} ${className}`}>
        {/* Container das imagens */}
        <div 
          className="relative w-full h-full"
          onClick={(e) => {
            if (enableModal) {
              e.stopPropagation();
              openModal(limitedImages[currentIndex]);
            }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute inset-0 ${enableModal ? 'cursor-pointer' : ''}`}
            >
              <Image
                src={limitedImages[currentIndex]}
                alt={`${alt} - ${currentIndex + 1}`}
                fill
                className="object-cover"
                quality={90}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Overlay sutil - pointer-events-none para não bloquear clique */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
          
          {/* Ícone de zoom quando hover e modal habilitado */}
          {enableModal && (
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-[#142431]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          )}
        </div>

      {/* Botões de navegação */}
      {limitedImages.length > 1 && (
        <>
          {/* Botão anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Imagem anterior"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-accent-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Botão próximo */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Próxima imagem"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-accent-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores de slide */}
      {limitedImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {limitedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

        {/* Contador de imagens */}
        {limitedImages.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium z-10">
            {currentIndex + 1} / {limitedImages.length}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
    </>
  );
}

