"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KnowBitupitaSection() {
  const { t } = useLanguage();
  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden min-h-[600px] md:min-h-[700px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black"></div>
        <Image
          src="/images/bitupita/DJI_20251019214527_0135_D.jpg"
          alt="Bitupitá - Vista aérea"
          fill
          className="object-cover"
          quality={90}
          sizes="100vw"
          priority
        />
        {/* Overlay sutil para melhorar legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[600px] md:min-h-[700px] py-8">
          {/* Lado Esquerdo - Título */}
          <motion.div
            className="lg:col-span-4 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-12 leading-tight uppercase text-center lg:text-left"
              style={{
                fontFamily: '"Avenir Light", "Avenir", sans-serif',
                fontWeight: 300,
              }}
            >
              {t("know.title")}
            </h2>
          </motion.div>

          {/* Centro - Cards */}
          <motion.div
            className="lg:col-span-8 order-2 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Localização */}
              <motion.div
                className="bg-[#F5F3F0] rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex flex-col">
                  {/* Ícone circular no topo */}
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-[#142431] rounded-full flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-white"
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

                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#142431] mb-4"
                    style={{
                      fontFamily:
                        '"Avenir", "Avenir Black", "Avenir Light", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {t("know.location")}
                  </h3>
                  <a
                    href="https://www.google.cl/maps/place/2%C2%B053'17.7%22S+41%C2%B016'05.0%22W/@-2.8882406,-41.2706379,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-2.888246!4d-41.268063?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#142431] hover:text-[#1a3a4f] font-semibold underline mb-4 inline-block transition-colors duration-200"
                  >
                    {t("know.location.link")}
                  </a>
                  <p className="text-base text-gray-700 leading-relaxed font-body">
                    {t("know.location.desc")}
                  </p>
                </div>
              </motion.div>

              {/* Card Vídeo */}
              <motion.div
                className="bg-[#F5F3F0] rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex flex-col">
                  {/* Ícone circular no topo */}
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-[#142431] rounded-full flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-white"
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

                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#142431] mb-4"
                    style={{
                      fontFamily:
                        '"Avenir", "Avenir Black", "Avenir Light", sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {t("know.video")}
                  </h3>
                  <a
                    href="https://www.instagram.com/p/DRiZwaWCRz2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#142431] hover:text-[#1a3a4f] font-semibold underline mb-4 inline-block transition-colors duration-200"
                  >
                    {t("know.video.link")}
                  </a>
                  <p className="text-base text-gray-700 leading-relaxed font-body">
                    {t("know.video.desc")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
