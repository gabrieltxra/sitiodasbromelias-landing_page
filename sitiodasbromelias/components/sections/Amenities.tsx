"use client";

import { motion } from "framer-motion";
import { School as Pool, UtensilsCrossed, Fish, Trees } from "lucide-react";

const amenities = [
  {
    icon: Pool,
    title: "Piscina",
    description: "Piscina ampla com área de descanso"
  },
  {
    icon: UtensilsCrossed,
    title: "Churrasqueira",
    description: "Área de churrasco completa"
  },
  {
    icon: Fish,
    title: "Pesca",
    description: "Lago para pesca esportiva"
  },
  {
    icon: Trees,
    title: "Área Verde",
    description: "Extensa área verde para lazer"
  }
];

export function Amenities() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4">
            Comodidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para momentos especiais em um único lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 ease-in-out duration-300"
            >
              <div className="flex justify-center mb-6">
                <amenity.icon className="w-16 h-16 text-amber-500" />
              </div>
              <h3 className="text-2xl font-semibold text-amber-700 mb-2 text-center">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-center">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
