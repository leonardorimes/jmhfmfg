"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function ProblemSection() {
  const { t } = useLanguage();
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para processar embeds do Instagram
    const processEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    // Verificar se o script já existe
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    
    if (!existingScript) {
      // Carregar script do Instagram Embed
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        // Aguardar um pouco para garantir que o script está totalmente carregado
        setTimeout(processEmbeds, 100);
      };
      document.body.appendChild(script);
    } else {
      // Se o script já existe, aguardar um pouco e processar
      setTimeout(processEmbeds, 100);
    }

    // Processar embeds quando o componente estiver visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(processEmbeds, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (instagramRef.current) {
      observer.observe(instagramRef.current);
    }

    // Tentar processar novamente após um delay maior
    const timeoutId = setTimeout(processEmbeds, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: t("benefits.exclusive"),
      description: t("benefits.exclusive.desc"),
      area: "4.300m²",
      areaDescription: t("benefits.exclusive.area"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      area: "2.000m²",
      areaDescription: t("benefits.constructive.area"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      area: "2.300m²",
      areaDescription: t("benefits.green.area"),
    },
  ];

  return (
    <AnimatedSection
      id="por-que-fazer-parte"
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Logo como sombra de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-10 scale-[3]">
          <Logo size="lg" color="default" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6 font-breathing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {t("benefits.title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.8 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {benefit.area ? (
                <>
                  <div className="flex items-start mb-4">
                    <div className="text-accent-500 mr-3 mt-1">{benefit.icon}</div>
                    <div>
                      <div className="text-3xl font-bold text-accent-500 font-breathing mb-2">
                        {benefit.area}
                      </div>
                      <p className="text-sm text-secondary-500 font-body">
                        {benefit.areaDescription}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-4">
                    <div className="text-accent-500 mr-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-primary-500">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-secondary-500 text-sm leading-relaxed font-body">
                    {benefit.description}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Seção Premium - Descrição e Ficha Técnica */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Descrição Principal */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary-500 leading-relaxed font-avenir max-w-4xl mx-auto">
              {t("technical.ideal-space")}
            </p>
          </motion.div>

          {/* Ficha Técnica */}
          <motion.div
            className="bg-gradient-to-br from-neutral-50 to-accent-50/30 border-2 border-accent-200/50 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary-500 mb-8 text-center font-breathing">
              {t("technical.specs")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Área Total */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-accent-100 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-accent-500"
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
                  <h4 className="text-lg font-semibold text-primary-500 font-diodrum">
                    {t("technical.total-area")}
                  </h4>
                </div>
                <p className="text-sm text-secondary-500 mb-2 font-body">
                  {t("technical.total-area.note")}
                </p>
                <p className="text-2xl font-bold text-accent-500 font-breathing">
                  {t("technical.total-area.value")}
                </p>
              </motion.div>

              {/* Frente Mar */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-accent-100 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-accent-500"
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
                  <h4 className="text-lg font-semibold text-primary-500 font-diodrum">
                    {t("technical.beach-front")}
                  </h4>
                </div>
                <p className="text-sm text-secondary-500 mb-2 font-body">
                  {t("technical.beach-front.note")}
                </p>
                <p className="text-2xl font-bold text-accent-500 font-breathing">
                  {t("technical.beach-front.value")}
                </p>
              </motion.div>

              {/* Frente Rua */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-accent-100 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-accent-500"
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
                  <h4 className="text-lg font-semibold text-primary-500 font-diodrum">
                    {t("technical.street-front")}
                  </h4>
                </div>
                <p className="text-2xl font-bold text-accent-500 font-breathing mt-5">
                  {t("technical.street-front.value")}
                </p>
              </motion.div>

              {/* Profundidade */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-accent-100 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-accent-500"
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
                  <h4 className="text-lg font-semibold text-primary-500 font-diodrum">
                    {t("technical.depth")}
                  </h4>
                </div>
                <p className="text-sm text-secondary-500 leading-relaxed font-body">
                  {t("technical.depth.value")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Vídeo Instagram */}
          <motion.div
            className="mt-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div 
              ref={instagramRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-accent-200/50 bg-white p-4 md:p-8 flex justify-center"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DRdFlqDidey/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "1rem",
                  margin: "1px",
                  maxWidth: "100%",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href="https://www.instagram.com/p/DRdFlqDidey/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
                    style={{
                      background: "#FFFFFF",
                      lineHeight: "0",
                      padding: "0 0",
                      textAlign: "center",
                      textDecoration: "none",
                      width: "100%",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "50%",
                          flexGrow: "0",
                          height: "40px",
                          marginRight: "14px",
                          width: "40px",
                        }}
                      ></div>
                      <div style={{ display: "flex", flexDirection: "column", flexGrow: "1", justifyContent: "center" }}>
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "4px",
                            flexGrow: "0",
                            height: "14px",
                            marginBottom: "6px",
                            width: "100px",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "4px",
                            flexGrow: "0",
                            height: "14px",
                            width: "60px",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ padding: "19% 0" }}></div>
                    <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}></div>
                    <div style={{ paddingTop: "8px" }}>
                      <div
                        style={{
                          color: "#3897f0",
                          fontFamily: "Arial,sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "550",
                          lineHeight: "18px",
                        }}
                      >
                        Ver esta publicação no Instagram
                      </div>
                    </div>
                    <div style={{ padding: "12.5% 0" }}></div>
                  </a>
                  <p
                    style={{
                      color: "#c9c8cd",
                      fontFamily: "Arial,sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      marginBottom: "0",
                      marginTop: "8px",
                      overflow: "hidden",
                      padding: "8px 0 7px",
                      textAlign: "center",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <a
                      href="https://www.instagram.com/p/DRdFlqDidey/?utm_source=ig_embed&utm_campaign=embed_video_watch_again"
                      style={{
                        color: "#c9c8cd",
                        fontFamily: "Arial,sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        lineHeight: "17px",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Uma publicação compartilhada por Terra Ventos (@terraventos)
                    </a>
                  </p>
                </div>
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
