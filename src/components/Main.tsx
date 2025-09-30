"use client";
import { IProduct } from "@/types/IProduct";
import ExamCard from "./ExamCard";

// Dados de exemplo - você pode substituir pelo seu array de dados
const examsSample: IProduct[] = [
  {
    title: "Check-up personalizado",
    description:
      "Check-up completo para avaliação geral da saúde. Para homens, mulheres e crianças!",
    imageUrl: "/exams/checkup.png",
  },
  {
    title: "Toxicológico para CNH",
    description:
      "Exames para detecção de substâncias tóxicas e drogas no organismo. Utilizado em avaliações clínicas e ocupacionais.",
    imageUrl: "/exams/cnh.png",
  },
  {
    title: "Preventivo / Papanicolau",
    description:
      "Exame preventivo para detecção precoce de câncer cervical. Importante para a saúde da mulher.",
    imageUrl: "/exams/papanicolau.png",
  },
  {
    title: "Exame IGE",
    description:
      "Identificação de parasitas, ovos e cistos nas fezes. Fundamental para diagnóstico de verminoses e outras parasitoses intestinais.",
    imageUrl: "/exams/coceira.jpeg",
  },
  {
    title: "Dengue",
    description:
      "Exame para detecção do vírus da dengue no organismo. Importante para diagnóstico e tratamento precoce.",
    imageUrl: "/exams/dengue.png",
  },
  {
    title: "Dores nas pernas ?",
    description:
      "D' dimero é um exame de sangue importante para detectar a presença de coágulos sanguíneos no corpo.",
    imageUrl: "/exams/trombose.jpg",
  },
];

interface MainProps {
  exams?: IProduct[];
}

export default function Main({ exams = examsSample }: MainProps) {
  return (
    <main className="py-16" id="exames">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos Exames Laboratoriais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de exames laboratoriais com tecnologia de
            ponta e resultados precisos para cuidar da sua saúde e bem-estar.
          </p>
        </div>

        {/* Cards dos exames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {exams.map((exam, index) => (
            <ExamCard key={index} exam={exam} />
          ))}
        </div>

        <div className="text-center text-gray-600 mb-16 text-4xl">
          E muito mais exames! Consulte nossa equipe para mais informações.
        </div>

        {/* Seção adicional de benefícios */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Resultados Rápidos
              </h3>
              <p className="text-gray-600">
                Entrega dos resultados em até 24 horas para a maioria dos
                exames.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Equipamentos Modernos
              </h3>
              <p className="text-gray-600">
                Tecnologia de última geração para máxima precisão nos
                resultados.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Equipe Especializada
              </h3>
              <p className="text-gray-600">
                Profissionais qualificados e experientes em análises clínicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
