"use client";

import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
        <img
          src="/casainterno.jpeg"
          alt="Sítio das Bromélias"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-white"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-block bg-amber-500/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-6"
          >
            Seu refúgio na natureza
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Sítio das Bromélias
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Conecte-se com a natureza e viva momentos inesquecíveis. 
            Um refúgio pet friendly com piscina, pesca, área de churrasco 
            e muita natureza para relaxar com quem você ama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/27999530720"
              className="bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105 
              text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center 
              gap-2 shadow-lg hover:shadow-xl"
            >
              <WhatsappLogo weight="fill" className="w-6 h-6" />
              Agende sua Visita
            </a>

            <a
              href="#gallery"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all 
              text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
            >
              Conheça o Espaço
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-12 flex items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                🌿 20 pessoas
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                🐶 Pet friendly
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-8 bg-white/30 rounded-full relative"
          >
            <div className="absolute top-0 w-full h-1/3 bg-white rounded-full animate-bounce" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
