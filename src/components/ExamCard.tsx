import { IProduct } from "@/types/IProduct";

interface ExamCardProps {
  exam: IProduct;
}

export default function ExamCard({ exam }: ExamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
          {exam.imageUrl ? (
            <img
              src={exam.imageUrl}
              alt={exam.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500 italic">
                [Imagem do exame: {exam.title}]
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {exam.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{exam.description}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Solicitar Exame
        </button>
      </div>
    </div>
  );
}
