import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LabVida</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Laboratório de análises clínicas com mais de 15 anos de
              experiência, oferecendo exames de qualidade com tecnologia
              avançada e equipe especializada.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href="#exames"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Exames
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 (11) 1234-5678</p>
              <p>📧 contato@labvida.com.br</p>
              <p>
                📍 Rua das Análises, 123
                <br />
                São Paulo - SP
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 LabVida - Laboratório de Análises Clínicas. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
