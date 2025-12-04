"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ImageSlider from "./ImageSlider";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KnowBitupitaSection() {
  const { t } = useLanguage();
  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-12 sm:py-16 md:py-20 bg-[#1A202C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 md:mt-8 lg:mt-12 mb-8 md:mb-12 font-breathing text-center lg:text-left px-2 break-words">
              {t("know.title")}
            </h2>

            <div className="space-y-8">
              {/* Localização - Estilo Card do Design Canva */}
              <motion.div
                className="bg-[#1A202C] rounded-xl p-6 md:p-8 shadow-lg border border-gray-400/30 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  {/* Ícone de Pin */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center border border-accent-400/30">
                      <svg
                        className="w-6 h-6 text-accent-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-diodrum">
                      {t("know.location")}
                    </h3>
                    <a
                      href="https://www.google.cl/maps/place/2%C2%B053'17.7%22S+41%C2%B016'05.0%22W/@-2.8882406,-41.2706379,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-2.888246!4d-41.268063?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 hover:text-accent-300 font-semibold underline mb-3 inline-block transition-colors duration-200"
                    >
                      {t("know.location.link")}
                    </a>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-body">
                      {t("know.location.desc")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vídeo do Local - Estilo Card do Design Canva */}
              <motion.div
                className="bg-[#1A202C] rounded-xl p-6 md:p-8 shadow-lg border border-gray-400/30 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  {/* Ícone de Câmera */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center border border-accent-400/30">
                      <svg
                        className="w-6 h-6 text-accent-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-diodrum">
                      {t("know.video")}
                    </h3>
                    <a
                      href="https://www.instagram.com/p/DRiZwaWCRz2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 hover:text-accent-300 font-semibold underline mb-3 inline-block transition-colors duration-200"
                    >
                      {t("know.video.link")}
                    </a>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-body">
                      {t("know.video.desc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Lado Direito - Slider de Fotos */}
          <motion.div
            className="relative order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <ImageSlider
                images={[
                  "/images/bitupita/DJI_20251019225755_0155_D.jpg",
                  "/images/bitupita/DJI_20251019225828_0161_D.jpg",
                  "/images/bitupita/DJI_20251019225830_0162_D.jpg",
                  "/images/bitupita/DJI_20251019225848_0165_D.jpg",
                ]}
                alt="Bitupitá - Vista da praia"
                autoPlay={true}
                autoPlayInterval={50000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

