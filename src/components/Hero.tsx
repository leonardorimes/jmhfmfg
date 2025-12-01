"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";
import LoadingScreen from "./LoadingScreen";
import ResizeLoading from "./ResizeLoading";
import { useResizeLoading } from "../hooks/useResizeLoading";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

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
  const [previousVideo, setPreviousVideo] = useState<string>("");

  // ID do vídeo fixo do YouTube que será exibido como fundo
  const videoId = "0oS_uOBhVYw"; // Vídeo fixo do YouTube

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

  // Effect para carregar o vídeo fixo do YouTube ao montar o componente
  useEffect(() => {
    console.log("🎬 Carregando vídeo do YouTube:", videoId);
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
    console.error("❌ Erro ao carregar vídeo do YouTube:", e);
    console.error("❌ ID do vídeo:", currentVideo);
    console.error(
      "❌ URL completa:",
      `https://www.youtube.com/embed/${currentVideo}`
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

      {/* Seção Hero com layout split-screen - vídeo à esquerda, texto à direita */}
      <section className="relative w-full max-w-full overflow-x-hidden flex flex-col lg:flex-row">
        {/* TÍTULO MOBILE - Acima do vídeo (apenas mobile) */}
        <div className="lg:hidden relative w-full px-6 py-8 z-30" style={{ backgroundColor: '#F9F6F1' }}>
          <motion.div
            className="relative z-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h1 className="text-2xl sm:text-3xl leading-relaxed font-breathing text-gray-900 flex items-center justify-center gap-4">
              {/* Linha vertical à esquerda */}
              <div className="h-16 sm:h-20 w-0.5 bg-accent-500 flex-shrink-0"></div>
              
              <div className="flex-1 text-center space-y-3 sm:space-y-4">
                <span className="block text-primary-600 tracking-wide">{t("hero.bitupita")}</span>
                <span className="block text-primary-700">
                  <span className="lg:hidden whitespace-nowrap">{t("hero.refuge")}</span>
                  <span className="hidden lg:block">
                    {(() => {
                      const refugeText = t("hero.refuge");
                      const words = refugeText.split(" ");
                      const firstTwo = words.slice(0, 2).join(" ");
                      const rest = words.slice(2).join(" ");
                      return (
                        <>
                          <span className="mr-12 xl:mr-16 whitespace-nowrap">{firstTwo}</span> <span className="xl:mt-16"></span>{rest}
                        </>
                      );
                    })()}
                  </span>
                </span>
              </div>
            </h1>
          </motion.div>
        </div>

        {/* LADO ESQUERDO - VÍDEO (55% em desktop, 50vh em mobile) */}
        <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-full bg-black overflow-hidden flex-shrink-0">
          {/* Fundo preto como fallback caso o vídeo não carregue */}
          <div className="absolute inset-0 bg-black"></div>

          {/* Iframe do vídeo do YouTube com configurações otimizadas */}
          {currentVideo && (
            <div className="absolute inset-0 w-full h-full z-5 overflow-hidden">
              {/* Gradiente sutil para suavizar bordas cortadas */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10 pointer-events-none"></div>
              <iframe
                key={videoKey} // Força reload quando a chave muda
                className="absolute top-1/2 left-1/2 
                  w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2
                  lg:w-[177.78vh] lg:h-[56.25vw]
                  md:w-[200vh] md:h-[112.5vw] md:scale-110
                  w-[250vh] h-[140.625vw] scale-125"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&mute=1&loop=1&playlist=${currentVideo}&controls=0&showinfo=0&rel=0&modestbranding=1&fs=0&disablekb=1&enablejsapi=1&start=0&vq=hd1080&quality=high&hd=1`}
                title="Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
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
            <div className="absolute top-4 right-4 z-20 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              ⚫ Recarregando vídeo...
            </div>
          )}

          {/* Botão de reload manual */}
          {isVideoPlaying && !isBlackScreen && (
            <button
              onClick={reloadVideo}
              className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
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

        {/* LADO DIREITO - CONTEÚDO DE TEXTO (45% em desktop, auto em mobile) */}
        <div className="relative w-full lg:w-[45%] flex items-start justify-start overflow-x-hidden overflow-y-auto flex-shrink-0 pb-6 lg:pb-8" style={{ backgroundColor: '#F9F6F0' }}>
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {/* Gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-transparent to-accent-100/20"></div>
            {/* Círculos decorativos */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-accent-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-300/10 rounded-full blur-3xl"></div>
            {/* Linhas decorativas */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-200/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-200/30 to-transparent"></div>
          </div>

          {/* Container do conteúdo */}
          <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-4 lg:py-6">
            <motion.div
              className="text-gray-900 overflow-x-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Layout: Tudo empilhado verticalmente */}
              <div className="space-y-4 sm:space-y-3 md:space-y-4 lg:space-y-8">
                {/* Título principal (oculto no mobile, visível no desktop) */}
                <motion.h1
                  className="hidden lg:flex items-start gap-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-relaxed lg:leading-loose font-breathing text-gray-900 text-left lg:tracking-[0.15em] xl:tracking-[0.2em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Linha vertical à esquerda */}
                  <div className="h-24 xl:h-28 w-0.5 bg-accent-500 flex-shrink-0 mt-2"></div>
                  
                  <div className="flex-1 space-y-10 sm:space-y-12 lg:space-y-8 xl:space-y-10">
                    <span className="block text-gray-900">{t("hero.bitupita")}</span>
                    <span className="block text-gray-900 overflow-x-hidden">
                      {(() => {
                        const refugeText = t("hero.refuge");
                        const words = refugeText.split(" ");
                        const firstTwo = words.slice(0, 2).join(" ");
                        const rest = words.slice(2).join(" ");
                        return (
                          <>
                            <span className="mr-40 xl:mr-48 whitespace-nowrap">{firstTwo}</span> <span className="text-4xl xl:text-5xl whitespace-nowrap">{rest}</span>
                          </>
                        );
                      })()}
                    </span>
                  </div>
                </motion.h1>

                {/* Destaque - Área */}
                <motion.div
                  className="mt-4 sm:mt-2 md:mt-3 lg:mt-6 text-center lg:text-left relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="inline-block relative">
                    {/* Fundo decorativo */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-accent-100/40 to-accent-200/20 rounded-2xl blur-xl"></div>
                    <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-accent-600 font-breathing drop-shadow-sm">
                      <span className="relative z-10 bg-gradient-to-br from-accent-600 to-accent-500 bg-clip-text text-transparent">
                        4,300m²
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Subtítulo */}
                <motion.h2
                  className="text-gray-900 font-bold leading-tight sm:leading-relaxed mt-4 sm:mt-2 md:mt-3 lg:mt-6 text-center lg:text-left"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="space-y-3 sm:space-y-1.5">
                    {/* Textos empilhados verticalmente */}
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-600 relative inline-block">
                      <span className="relative z-10">{t("hero.best-investment")}</span>
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-accent-300/40 rounded-full"></div>
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-1 md:mt-2 lg:mt-3 text-secondary-600 leading-relaxed">
                      {t("hero.discover-paradise")}
                    </div>
                  </div>
                </motion.h2>

                {/* Botão Mobile - Abaixo de tudo */}
                <motion.div
                  className="sm:hidden flex justify-center mt-5 mb-3 w-full"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.6,
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                <motion.a
                  href="https://chat.whatsapp.com/IRDTyn0rKIXLVGQNqPkzQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-r from-accent-500 to-accent-600 text-white px-10 py-4 rounded-xl text-base font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-avenir whitespace-nowrap overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Saiba Mais
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.a>
                </motion.div>
              </div>

              {/* Botão Desktop */}
              <motion.div
                className="hidden sm:flex justify-start mt-4 sm:mt-6 md:mt-8 lg:mt-12 mb-3 lg:mb-4 w-full"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.6,
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.a
                  href="https://chat.whatsapp.com/IRDTyn0rKIXLVGQNqPkzQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-avenir w-full sm:w-auto overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Saiba Mais
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
