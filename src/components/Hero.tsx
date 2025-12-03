"use client";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import LoadingScreen from "./LoadingScreen";

import ResizeLoading from "./ResizeLoading";

import { useResizeLoading } from "../hooks/useResizeLoading";

import { useLanguage } from "@/contexts/LanguageContext";

// Interface para as props do componente Hero

interface HeroProps {
  onContactClick: () => void;
}

// Componente principal da seção Hero da Comunidade Terra Ventos

// Este componente contém o vídeo de fundo, animações e call-to-actions principais

export default function Hero({ onContactClick }: HeroProps) {
  const { t } = useLanguage();

  // Estados para controle de vídeos

  const [currentVideo, setCurrentVideo] = useState<string>("");

  // ID do vídeo fixo do Vimeo que será exibido como fundo

  const videoId = "1142706851"; // Vídeo fixo do Vimeo

  // Estados para controlar diferentes fases de carregamento

  const [isLoading, setIsLoading] = useState(true); // Loading screen inicial

  const [isVideoLoading, setIsVideoLoading] = useState(false); // Carregamento do vídeo

  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Reprodução do vídeo

  const [videoError, setVideoError] = useState(false); // Erro no carregamento do vídeo

  const [videoKey, setVideoKey] = useState(0); // Chave para forçar reload do iframe

  const [isBlackScreen, setIsBlackScreen] = useState(false); // Detectar tela preta

  // Hook personalizado para detectar redimensionamento significativo da janela

  const isResizeLoading = useResizeLoading({
    threshold: 25, // 25% de mudança para triggerar o loading

    duration: 3000, // 3 segundos de duração do loading
  });

  // Função para finalizar o loading screen inicial

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Effect para carregar o vídeo fixo do Vimeo ao montar o componente

  useEffect(() => {
    console.log("🎬 Carregando vídeo do Vimeo:", videoId);

    setCurrentVideo(videoId);

    setIsVideoLoading(true);

    setIsVideoPlaying(false);

    setVideoError(false);
  }, []);

  // Funções para lidar com eventos do vídeo

  const handleVideoLoadStart = () => {
    console.log("🔄 Carregamento do iframe iniciado");

    setIsVideoLoading(true);

    setVideoError(false);

    // Simular carregamento completo após um tempo (para UX)

    setTimeout(() => {
      setIsVideoLoading(false);

      setIsVideoPlaying(true);
    }, 2000);
  };

  // Função para lidar com erros no carregamento do vídeo

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLIFrameElement, Event>
  ) => {
    console.error("❌ Erro ao carregar vídeo do Vimeo:", e);

    console.error("❌ ID do vídeo:", currentVideo);

    console.error(
      "❌ URL completa:",
      `https://player.vimeo.com/video/${currentVideo}`
    );

    setIsVideoLoading(false);

    setIsVideoPlaying(false);

    setVideoError(true);
  };

  // Função para recarregar o vídeo

  const reloadVideo = () => {
    console.log("🔄 Recarregando vídeo para evitar tela preta...");

    setVideoKey((prev) => prev + 1); // Força reload do iframe

    setIsVideoLoading(true);

    setIsVideoPlaying(false);

    setVideoError(false);

    setIsBlackScreen(false);

    // Simular carregamento

    setTimeout(() => {
      setIsVideoLoading(false);

      setIsVideoPlaying(true);
    }, 2000);
  };

  // Função para detectar tela preta e recarregar automaticamente

  const handleBlackScreen = () => {
    console.log("⚫ Tela preta detectada, recarregando vídeo...");

    setIsBlackScreen(true);

    setTimeout(() => {
      reloadVideo();
    }, 3000); // Aguarda 3 segundos antes de recarregar
  };

  return (
    <>
      {/* Tela de loading inicial */}

      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Loading durante redimensionamento da janela */}

      <ResizeLoading isVisible={isResizeLoading} />

      {/* Seção principal do Hero */}

      <section className="relative min-h-screen flex items-center w-full max-w-full overflow-hidden">
        {/* Container do vídeo de fundo */}

        <div className="absolute inset-0 w-full h-full">
          {/* Fundo preto como fallback caso o vídeo não carregue */}

          <div className="absolute inset-0 bg-black"></div>

          {/* Iframe do vídeo do YouTube com configurações otimizadas */}

          {currentVideo && (
            <div className="absolute inset-0 w-full h-full z-5 overflow-hidden">
              {/* Gradiente sutil para suavizar bordas cortadas */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 z-10 pointer-events-none"></div>

              <iframe
                key={videoKey} // Força reload quando a chave muda
                className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2
                  w-[250vh] h-[140.625vw] scale-125
                  sm:w-[200vh] sm:h-[112.5vw] sm:scale-110
                  md:w-[177.78vh] md:h-[56.25vw] md:scale-100"
                src={`https://player.vimeo.com/video/${currentVideo}?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                title="Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={false}
                onLoad={handleVideoLoadStart}
                onError={handleVideoError}
                loading="eager"
              />
            </div>
          )}

          {/* Overlay para detectar tela preta */}

          {isVideoPlaying && (
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={handleBlackScreen}
              title="Clique para recarregar o vídeo se estiver com tela preta"
            />
          )}

          {/* Indicador de tela preta detectada */}

          {isBlackScreen && (
            <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              ⚫ Recarregando vídeo...
            </div>
          )}

          {/* Botão de reload manual */}

          {isVideoPlaying && !isBlackScreen && (
            <button
              onClick={reloadVideo}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              title="Recarregar vídeo"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          )}

          {/* Overlay de loading durante carregamento do vídeo */}

          {isVideoLoading && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
              <div className="text-center text-white">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>

                <p className="text-xl font-semibold mb-2">
                  {t("hero.loading")}
                </p>

                <p className="text-sm text-white/80">
                  {t("hero.loading.subtitle")}
                </p>
              </div>
            </div>
          )}

          {/* Tela de erro caso o vídeo não carregue */}

          {videoError && (
            <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
              <div className="text-center text-white max-w-md mx-auto px-4">
                <div className="text-6xl mb-4">⚠️</div>

                <p className="text-xl font-semibold mb-2">
                  {t("hero.video.error")}
                </p>

                <p className="text-sm text-white/80 mb-2">
                  {t("hero.video.error.subtitle")}
                </p>

                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors text-sm"
                  >
                    🔄 Recarregar página
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Overlay claro para melhorar a visibilidade do texto */}

        <div className="absolute inset-0 bg-black/5 z-10"></div>

        {/* Gradiente sutil para melhorar a legibilidade do texto */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/2 via-transparent to-black/8 z-15"></div>

        {/* Container principal do conteúdo */}

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-start sm:items-center justify-center pt-8 sm:pt-8 md:pt-0 md:py-0">
          <div className="w-full max-w-6xl relative">
            {/* Título Principal - Layout Editorial */}
            <motion.div
              className="mb-8 sm:mb-10 md:mb-8"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-breathing leading-[0.9]">
                <span className="relative inline-block">
                  <span className="relative z-10 text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                    Bitupitá
                  </span>
                  {/* Efeito de glow elegante */}
                  <motion.span
                    className="absolute inset-0 text-accent-300 blur-sm opacity-60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  >
                    Bitupitá
                  </motion.span>
                  {/* Efeito de brilho pulsante */}
                  <motion.span
                    className="absolute inset-0 text-accent-400 blur-md opacity-0"
                    animate={{
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Bitupitá
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Badge Flutuante - Área com Gradiente Sólido (oculto no mobile para não interferir) */}
            <motion.div
              className="hidden sm:block absolute -top-4 right-8 md:right-16 lg:right-24"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 px-6 py-3 rounded-full shadow-2xl ring-4 ring-accent-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-white/90 rounded-full"></div>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-diodrum">
                    4.300m²
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Grid de Slogans - Sem Fundo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 md:gap-6 mb-10 sm:mb-8 md:mb-10">
              {/* Slogan 1 */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -50, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -5 }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight font-diodrum drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  Seu Refúgio Particular
                </p>
              </motion.div>

              {/* Slogan 2 */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 50, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -5 }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight font-diodrum drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] md:text-right">
                  Seu Melhor Investimento
                </p>
              </motion.div>
            </div>

            {/* Texto descritivo - Estilo Editorial */}
            <motion.div
              className="mb-10 sm:mb-8 md:mb-10 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="flex items-start gap-4">
                <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-accent-400 to-transparent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl font-diodrum font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
                  Descubra o paraíso intocado do litoral cearense e garanta seu
                  lugar neste destino exclusivo.
                </p>
              </div>
            </motion.div>

            {/* CTAs - Layout Horizontal Moderno */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-6 items-stretch sm:items-center mt-4 sm:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.6,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.a
                href="#por-que-fazer-parte"
                className="group relative bg-accent-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold hover:bg-accent-600 transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 transform hover:-translate-y-2 font-diodrum text-center overflow-hidden"
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

        {/* Balão "Pé na Areia" - Superior Direito */}
        <motion.div
          className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-white/20"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-center text-white">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-500">
              Pé na Areia
            </div>
          </div>
        </motion.div>

        {/* Segunda estatística flutuante */}

        <motion.div
          className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-white/20"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-center text-white">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-500">
              {t("stats.value")}
            </div>

            <div className="text-xs sm:text-sm text-white/80">
              {t("stats.volume")}
            </div>
          </div>
        </motion.div>

        {/* Elementos decorativos flutuantes */}

        <motion.div
          className="flex absolute top-1/4 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-accent-500 rounded-full items-center justify-center shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Segundo elemento decorativo flutuante */}

        <motion.div
          className="flex absolute bottom-1/4 right-4 sm:right-8 w-7 h-7 sm:w-10 sm:h-10 bg-white/20 rounded-full items-center justify-center shadow-lg backdrop-blur-sm"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.1, rotate: -10 }}
        >
          <svg
            className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </motion.div>
      </section>
    </>
  );
}
