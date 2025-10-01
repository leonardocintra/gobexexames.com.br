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
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">Gobex</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Gobex é um laboratório de análises clínicas e citológicas que
              emprega as mais modernas técnicas na busca por resultados
              precisos. Isso facilita muito na indicação do tratamento médico
              mais adequado a cada situação específica do paciente.
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
                <Link
                  href="/consulta"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Consultar exames
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 (35) 99104-0975</p>
              <p>📧 contato@gobexexames.com.br</p>
              <p>
                📍 Av. São Vicente de Paulo, 230
                <br />
                Bairro Centro - Cássia - MG
                <br />
                CEP: 37980-000
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2021 - {new Date().getFullYear()} | Gobex Exames -
            Laboratório de Análises Clínicas. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido por{" "}
            <Link
              target="_blank"
              className="underline"
              href={"https://leonardocintra.com.br"}
            >
              Leonardo Cintra
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
