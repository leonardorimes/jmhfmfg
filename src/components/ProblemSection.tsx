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
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6 px-2 break-words"
            style={{
              fontFamily: '"Avenir", "Avenir Black", "Avenir Light", sans-serif',
              fontWeight: 700,
            }}
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
              className="rounded-xl p-8 md:p-10 shadow-lg transition-all duration-300"
              style={{
                backgroundColor: benefit.area ? "#111D29" : "#F9FAFB",
                border: benefit.area ? "1px solid #C8B49B" : "1px solid #E5E7EB",
              }}
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
                  <div className="flex flex-col items-center text-center">
                    {/* Ícone circular no topo */}
                    <div className="mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center mx-auto" style={{ borderColor: "#C8B49B" }}>
                        <div style={{ color: "#C8B49B" }} className="w-8 h-8 md:w-10 md:h-10">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    {/* Título grande */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
                      fontFamily: '"Avenir", "Avenir Black", "Avenir Light", sans-serif',
                      fontWeight: 700,
                    }}>
                      {benefit.area}
                    </h3>
                    {/* Texto descritivo */}
                    <p className="text-base md:text-lg text-white/90 font-body leading-relaxed">
                      {benefit.areaDescription}
                    </p>
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
