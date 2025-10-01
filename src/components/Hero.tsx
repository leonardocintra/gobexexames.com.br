import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Gobex{" "}
              <span className="text-cyan-200">Exames Laboratoriais</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Gobex é um laboratório de análises clínicas e citológicas que emprega as mais modernas técnicas na busca por resultados precisos. Isso facilita muito na indicação do tratamento médico mais adequado a cada situação específica do paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consulta"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Consultar Exame
              </Link>
              <a
                href="/contato"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Image
                src={"/hero.png"}
                alt="Laboratório"
                width={400}
                height={300}
                className="mx-auto rounded-lg"
              />

              <h3 className="text-xl font-semibold mb-2 mt-2">
                Tecnologia Avançada
              </h3>
              <p className="text-blue-100">
                Equipamentos de última geração para resultados precisos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
