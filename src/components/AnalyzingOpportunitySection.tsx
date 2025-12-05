"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

// Ícones para cada feature
const featureIcons = [
  // 1. Sol nascente sobre linhas horizontais (praia)
  <svg key="1" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 9h18M3 15h18M12 2v3m0 14v3m9-9h-3m-12 0H3m16.364-5.636l-2.121 2.121M6.343 6.343L4.222 4.222m15.556 15.556l-2.121-2.121M6.343 17.657L4.222 19.778" />
  </svg>,
  // 2. Clipboard com checkmark (documentação)
  <svg key="2" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123.08m-5.801 0c.065.21.1.433.1.664 0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75 2.25 2.25 0 01.1-.664m6.8 0c.063-.185.106-.38.123-.583m-1.023 0a48.432 48.432 0 00-1.123.08M15 10.75a3 3 0 11-6 0 3 3 0 016 0zm-3 7.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25 4.5-4.5" />
  </svg>,
  // 3. Kite (kitesurf)
  <svg key="3" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773l-1.591-1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>,
  // 4. Mão segurando moeda (compra direta)
  <svg key="4" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5z" />
  </svg>,
  // 5. Quadrado com m² (valor m²)
  <svg key="5" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 18A2.25 2.25 0 016 15.75h2.25A2.25 2.25 0 0110.5 18v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V18zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 18a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18z" />
  </svg>,
  // 6. Pin de localização (próximo a Curimãs)
  <svg key="6" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
  // 7. Diamante (alta valorização)
  <svg key="7" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>,
  // 8. Coroa/Laurel (exclusivo)
  <svg key="8" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
];

export default function AnalyzingOpportunitySection() {
  const { t } = useLanguage();
  const opportunities = [
    { text: t("analyzing.item1"), icon: featureIcons[0] },
    { text: t("analyzing.item2"), icon: featureIcons[1] },
    { text: t("analyzing.item3"), icon: featureIcons[2] },
    { text: t("analyzing.item4"), icon: featureIcons[3] },
    { text: t("analyzing.item5"), icon: featureIcons[4] },
    { text: t("analyzing.item6"), icon: featureIcons[5] },
    { text: t("analyzing.item7"), icon: featureIcons[6] },
    { text: t("analyzing.item8"), icon: featureIcons[7] },
  ];

  // Extrair "20% anual" do texto para destacar
  const highlightText = t("analyzing.highlight");
  const parts = highlightText.split(/(20% anual)/i);
  
  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"
    >
      {/* Background Image - faded, light-toned */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-white"></div>
        <Image
          src="/images/bitupita/DJI_20251019210520_0107_D.jpg"
          alt="Bitupitá - Vista aérea da costa"
          fill
          className="object-cover opacity-30"
          quality={90}
          sizes="100vw"
        />
        {/* Overlay claro para suavizar */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-12 md:py-16">
          {/* Lado Esquerdo - Título e Texto */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-1 flex flex-col justify-center"
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#142431] mb-6 md:mb-8 leading-[1.1] uppercase text-center lg:text-left"
              style={{
                fontFamily: '"Avenir Light", "Avenir", sans-serif',
                fontWeight: 300,
              }}
            >
              {t("analyzing.title")}
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-[#142431] leading-relaxed font-body max-w-lg">
              {parts.map((part, index) => {
                if (part.match(/20% anual/i)) {
                  return (
                    <strong key={index} style={{ fontWeight: 700 }}>
                      {part}
                    </strong>
                  );
                }
                return <span key={index}>{part}</span>;
              })}
            </p>
          </motion.div>

          {/* Lado Direito - Grid de Features 2x4 */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  {/* Ícone */}
                  <div className="mb-4 text-[#142431] flex-shrink-0 flex items-center justify-center">
                    {opportunity.icon}
                  </div>
                  {/* Título */}
                  <p 
                    className="text-sm md:text-base lg:text-lg text-[#142431] leading-relaxed"
                    style={{
                      fontFamily: '"Avenir", "Avenir Black", "Avenir Light", sans-serif',
                    }}
                  >
                    {opportunity.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
