"use client";

import Link from "next/link";

export default function ConsultaExamePage() {
  return (
    <div className="bg-gray-50 flex flex-col">
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Consulte seu Exame
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Acesse o resultado do seu exame de forma rápida e segura.
            </p>
          </div>
        </div>
      </section>

      <div className="flex-grow max-w-xl mx-auto mt-8">
        <iframe
          src="https://worklabweb.com.br/frame.php?Cliente=1687&i=3"
          name="I1"
          className="w-full border-0"
          style={{ minHeight: '200px' }}
        ></iframe>

        <div className="my-8 text-center">
          <Link href={"/"} className="text-blue-600 hover:underline text-2xl font-medium">
            &larr; Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
