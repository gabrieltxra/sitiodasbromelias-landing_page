"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contato - Sítio das Bromélias");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`
    );
    window.location.href = `mailto:dasbromeliassitio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-amber-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-amber-800">Entre em Contato</h2>
        <p className="text-lg text-gray-600">
          Tire suas dúvidas ou faça sua reserva
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all focus:bg-amber-50"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all focus:bg-amber-50"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all focus:bg-amber-50"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <Mail className="w-5 h-5" />
          Enviar Mensagem
        </motion.button>
      </form>
    </motion.div>
  </div>
</section>

  );
}