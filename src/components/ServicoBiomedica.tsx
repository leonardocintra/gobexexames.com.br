import Image from 'next/image';

export function ServicoBiomedica() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
              <Image
                src="/michelle.jpeg"
                alt="Michelle Carvalho"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Michelle Carvalho</h2>
            <p className="text-xl text-gray-600 mb-2">CRMB 5487</p>
            <p className="text-lg text-gray-700 mb-4">Atendimento online e presencial</p>
            <p className="text-lg text-gray-700 mb-6">Atende nas cidades de Franca, Ibiraci e Cássia</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Consultoria que oferece:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-8">
              <li>Entrevista Integrativa</li>
              <li>Avaliação de exames segundo parâmetros ideais</li>
              <li>Recomendações terapêuticas para equilíbrio de vitaminas e minerais</li>
              <li>Fórmulas magistrais para suplementação ortomolecular</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Como funciona a consultoria biomédica?</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A consultoria biomédica oferece uma abordagem personalizada para a sua saúde e bem-estar. Através de uma análise detalhada do seu histórico, exames e estilo de vida, desenvolvemos um plano de tratamento exclusivo para você. Nosso objetivo é identificar a causa raiz de quaisquer desequilíbrios e fornecer as ferramentas necessárias para otimizar sua saúde de forma integral. Acompanhamos seu progresso de perto, ajustando as estratégias conforme necessário para garantir os melhores resultados. Com a Dra. Michelle Carvalho, você terá um suporte completo e especializado para alcançar seus objetivos de saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}