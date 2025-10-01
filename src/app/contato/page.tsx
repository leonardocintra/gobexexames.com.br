export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Estamos aqui para esclarecer suas dúvidas e agendar seus exames.
              Fale conosco através dos canais abaixo.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          {/* Informações de contato */}
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Informações de Contato
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 justify-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    WhatsApp
                  </h3>
                  <a 
                    href="https://wa.me/5535991040975" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors duration-200 font-medium"
                  >
                    (35) 99104-0975
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 justify-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Endereço
                  </h3>
                  <p className="text-gray-600">Av. São Vicente de Paulo, 230</p>
                  <p className="text-gray-600">Bairro Centro - Cássia - MG</p>
                  <p className="text-gray-600">CEP: 37980-000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 justify-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-600">
                    Segunda à Sexta: 07:00 - 17:00
                  </p>
                  <p className="text-gray-600">Sábado: 07:00 - 12:00</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
