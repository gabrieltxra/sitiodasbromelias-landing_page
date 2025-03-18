"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

const images = [
  "/flor.jpeg",
  "/cachorro1.jpeg",
  "/pimbolim.jpeg",
  "/piscina.jpeg",
  "/cachorro.jpeg",
  "/sinuca.jpeg"
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria</h2>
          <p className="text-lg text-gray-600">Conheça um pouco do nosso espaço</p>
        </motion.div>

        {/* Carrossel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex-[0_0_75%] md:flex-[0_0_33%] px-2"
                >
                  <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
                    <img
                      src={image}
                      alt={`Sítio das Bromélias ${index + 1}`}
                      className="w-full h-80 object-cover transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
