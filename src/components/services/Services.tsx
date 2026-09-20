import React, { useState } from 'react';
import { EXAM_CATEGORIES } from '../../data/medicalData';
import { ServiceCard } from './ServiceCard';
import { Search, Sparkles, SlidersHorizontal } from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = EXAM_CATEGORIES.filter((category) => {
    // Filter by tab
    if (selectedCategoryId !== 'all' && category.id !== selectedCategoryId) {
      return false;
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchCategory = category.category.toLowerCase().includes(q);
      const matchExams = category.exams.some((exam) =>
        exam.name.toLowerCase().includes(q) || (exam.detail && exam.detail.toLowerCase().includes(q))
      );
      return matchCategory || matchExams;
    }

    return true;
  });

  return (
    <section id="exames" className="relative py-20 lg:py-28 bg-[#FAF8F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B1837F]/25 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#B1837F] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8F85]" />
            Catálogo de Exames
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#241817]">
            Ultrassonografia
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B5755] leading-relaxed">
            Exames realizados com precisão, tecnologia e cuidado em cada etapa.
          </p>
        </div>

        {/* Filter & Quick Search Controls */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategoryId('all')}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategoryId === 'all'
                  ? 'bg-[#241817] text-white shadow-xs'
                  : 'bg-white text-[#6B5755] border border-[#ECE4DF] hover:bg-[#FAF8F6] hover:text-[#241817]'
              }`}
            >
              Todos os exames
            </button>
            {EXAM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategoryId === cat.id
                    ? 'bg-[#241817] text-white shadow-xs'
                    : 'bg-white text-[#6B5755] border border-[#ECE4DF] hover:bg-[#FAF8F6] hover:text-[#241817]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#998381]" />
            <input
              type="text"
              placeholder="Buscar exame ou região..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#ECE4DF] bg-white py-2 pl-9 pr-4 text-xs text-[#241817] placeholder:text-[#998381] focus:border-[#FF8F85] focus:outline-none focus:ring-1 focus:ring-[#FF8F85]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#998381] hover:text-[#241817]"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <ServiceCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl bg-white p-10 text-center border border-[#ECE4DF]">
            <p className="font-serif text-lg text-[#241817]">Nenhum exame encontrado para sua busca.</p>
            <p className="text-xs text-[#6B5755] mt-1">
              Verifique a grafia ou limpe o campo de busca para exibir todos os exames disponíveis.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategoryId('all');
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#241817] px-5 py-2 text-xs font-semibold text-white hover:bg-[#B1837F]"
            >
              Exibir catálogo completo
            </button>
          </div>
        )}

        {/* Bottom Assurance Note */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-white via-[#FFFDFD] to-white p-6 border border-[#ECE4DF] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#FFEAE8] text-[#FF8F85] flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#241817]">
                Dúvidas sobre o preparo do seu exame?
              </p>
              <p className="text-xs text-[#6B5755]">
                Orientações detalhadas de jejum ou bexiga cheia são passadas pela equipe de cada unidade no momento do agendamento.
              </p>
            </div>
          </div>
          <a
            href="#onde-atendo"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-[#241817] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#B1837F] transition-colors"
          >
            Falar com a unidade
          </a>
        </div>
      </div>
    </section>
  );
};
