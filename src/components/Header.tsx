"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                Gobex
              </span>
            </Link>
          </div>
          <nav className="block md:flex space-x-10">
            <Link
              href="/contato"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contato
            </Link>
            <Link
              href="/consulta"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Consultar Exame
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
