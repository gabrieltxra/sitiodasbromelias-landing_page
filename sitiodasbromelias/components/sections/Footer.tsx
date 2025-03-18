"use client";

import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-4 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Sítio das Bromélias</h3>
            <ul className="text-amber-200 space-y-1 text-sm leading-relaxed">
              <li>📍 Marechal Floriano, BR 262, Km 57</li>
              <li>🌿 Acomodamos até 20 pessoas</li>
              <li>🐶 Pet friendly</li>
            </ul>
          </div>

      
          <div className="flex flex-col items-start md:items-end space-y-2">
            <span className="uppercase text-sm tracking-wide text-amber-300">Nos siga no instagram</span>
            <a
              href="https://www.instagram.com/sitiodasbromelias_es/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @sitiodasbromelias_es
            </a>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 text-center text-amber-200 space-y-2 text-sm">
          <p>
            Site desenvolvido por{" "}
            <a
              href="mailto:gabrielteixeira1133@gmail.com"
              className="underline hover:text-white transition-colors"
            >
              Gabriel Teixeira
            </a>
            .
          </p>
          <p>&copy; {new Date().getFullYear()} Sítio das Bromélias. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
