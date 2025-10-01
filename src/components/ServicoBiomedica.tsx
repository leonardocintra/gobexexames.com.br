import Image from 'next/image';

export function ServicoBiomedica() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden">
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
            <p className="text-xl text-gray-600 mb-2 font-bold">CRMB-1429</p>
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
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A consultoria biomédica oferece uma abordagem personalizada para a sua saúde e bem-estar. Através de uma análise detalhada do seu histórico, exames e estilo de vida, desenvolvemos um plano de tratamento exclusivo para você. Nosso objetivo é identificar a causa raiz de quaisquer desequilíbrios e fornecer as ferramentas necessárias para otimizar sua saúde de forma integral. Acompanhamos seu progresso de perto, ajustando as estratégias conforme necessário para garantir os melhores resultados. Com a Dra. Michelle Carvalho, você terá um suporte completo e especializado para alcançar seus objetivos de saúde.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://wa.me/5535999916488?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20biomédica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Fale comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}