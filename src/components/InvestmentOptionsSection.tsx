"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InvestmentOptionsSection() {
  const { t } = useLanguage();
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
    <div
      id="investment-options-wrapper"
      className="investment-options-wrapper"
      style={{ backgroundColor: "#111D29", width: "100%", minHeight: "100%" }}
    >
      <section
        id="investment-options-section"
        className="w-full relative overflow-hidden investment-options-section"
        style={{ backgroundColor: "#111D29" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Título */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{
                fontFamily:
                  '"Avenir", "Avenir Black", "Avenir Light", sans-serif',
                fontWeight: 700,
              }}
            >
              {t("investment.title")}
            </h2>
          </motion.div>

          {/* Opções de Investimento - Layout Mais Leve */}
          <div className="space-y-8">
            {investmentOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-[#252A35] rounded-lg p-6 md:p-8 border border-gray-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Informações do Lote */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 font-diodrum">
                      Lote {option.lotSize}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed font-body mb-4">
                      {option.description}
                    </p>
                  </div>

                  {/* Valor do Investimento */}
                  <div className="flex-shrink-0">
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-400 mb-2 block font-avenir uppercase tracking-wide">
                        {t("investment.label")}
                      </span>
                      <div className="flex items-baseline gap-1 justify-end">
                        <span
                          className="text-lg font-avenir font-semibold"
                          style={{ color: "#B2A28E" }}
                        >
                          R$
                        </span>
                        <span
                          className="text-3xl md:text-4xl font-bold font-avenir tracking-tight"
                          style={{ color: "#B2A28E" }}
                        >
                          {option.investment.replace("R$ ", "").split(",")[0]}
                          <span
                            className="text-xl font-avenir font-semibold"
                            style={{ color: "#B2A28E" }}
                          >
                            ,{option.investment.split(",")[1] || "00"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
