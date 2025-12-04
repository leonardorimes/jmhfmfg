"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1A202C] border-t border-gray-400/20 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo size="md" color="white" />
          </motion.div>

          {/* Texto de direitos */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm sm:text-base text-gray-300 font-body mb-2">
              {t("footer.company")}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 font-body">
              {t("footer.rights")}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

