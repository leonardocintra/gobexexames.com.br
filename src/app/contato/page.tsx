"use client";
import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Informações de Contato
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Telefone
                  </h3>
                  <p className="text-gray-600">(11) 1234-5678</p>
                  <p className="text-gray-600">(11) 9 8765-4321</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    E-mail
                  </h3>
                  <p className="text-gray-600">contato@labvida.com.br</p>
                  <p className="text-gray-600">agendamento@labvida.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
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
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Endereço
                  </h3>
                  <p className="text-gray-600">Rua das Análises, 123</p>
                  <p className="text-gray-600">Bairro Saúde - São Paulo, SP</p>
                  <p className="text-gray-600">CEP: 01234-567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
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
                <div>
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

            {/* Placeholder para mapa */}
            <div className="mt-8 bg-gray-200 rounded-lg p-8 text-center">
              <div className="text-gray-500">
                <svg
                  className="w-12 h-12 mx-auto mb-4"
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
                <p className="italic">
                  [Colocar mapa do Google Maps com localização do laboratório]
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Envie sua Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="agendamento">Agendamento de Exame</option>
                    <option value="resultados">Dúvidas sobre Resultados</option>
                    <option value="valores">Informações sobre Valores</option>
                    <option value="convenio">Convênios Médicos</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>

            {/* Informações adicionais */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                💡 Dica Importante
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                Para agendamento de exames, tenha em mãos sua solicitação médica
                e documento de identidade. Alguns exames requerem preparo
                específico - consulte nossas orientações ou entre em contato
                conosco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
