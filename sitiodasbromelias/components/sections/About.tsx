"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Dog } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-amber-700 mb-4">
              Sobre o Sítio
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Localizado em Marechal Floriano, o Sítio das Bromélias é um refúgio
              perfeito para quem busca tranquilidade e conexão com a natureza. 
              Com uma área verde exuberante e infraestrutura completa, oferecemos 
              o espaço ideal para suas reuniões familiares e momentos de lazer.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-amber-500" />
                  <span className="text-lg font-semibold">Marechal Floriano, BR 262, Km 57</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-amber-500" />
                  <span className="text-lg font-semibold">Acomodamos até 20 pessoas</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Dog className="w-8 h-8 text-amber-500" />
                  <span className="text-lg font-semibold">Pet friendly</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/casa.jpeg"
              alt="Vista do Sítio"
              className="w-full h-[400px] object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
