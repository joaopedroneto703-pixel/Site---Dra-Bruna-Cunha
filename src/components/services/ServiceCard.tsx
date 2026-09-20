import React from 'react';
import { ExamCategory } from '../../types';
import {
  BreastIcon,
  GynecologyIcon,
  AbdomenIcon,
  ProstateIcon,
  ThyroidIcon,
  ObstetricsIcon,
  WhatsAppIcon,
} from '../icons/CustomIcons';
import { CheckCircle2, ChevronRight, Activity } from 'lucide-react';

interface ServiceCardProps {
  category: ExamCategory;
  onSelectCategory?: (category: ExamCategory) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ category }) => {
  const renderIcon = () => {
    switch (category.iconName) {
      case 'breast':
        return <BreastIcon className="h-6 w-6 text-[#FF8F85]" />;
      case 'gynecology':
        return <GynecologyIcon className="h-6 w-6 text-[#FF8F85]" />;
      case 'abdomen':
        return <AbdomenIcon className="h-6 w-6 text-[#FF8F85]" />;
      case 'prostate':
        return <ProstateIcon className="h-6 w-6 text-[#FF8F85]" />;
      case 'thyroid':
        return <ThyroidIcon className="h-6 w-6 text-[#FF8F85]" />;
      case 'obstetrics':
        return <ObstetricsIcon className="h-6 w-6 text-[#FF8F85]" />;
      default:
        return <Activity className="h-6 w-6 text-[#FF8F85]" />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-[#ECE4DF] bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-[#FF8F85]/60 hover:shadow-xl hover:-translate-y-1">
      {/* Top Category Badge & Icon */}
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFEAE8] to-white border border-[#FF8F85]/20 shadow-xs transition-transform duration-300 group-hover:scale-105">
            {renderIcon()}
          </div>
          <span className="rounded-full bg-[#FAF8F6] border border-[#ECE4DF] px-3 py-1 text-[11px] font-semibold text-[#6B5755]">
            {category.exams.length} {category.exams.length === 1 ? 'exame' : 'exames'}
          </span>
        </div>

        {/* Category Heading */}
        <h3 className="mt-5 font-serif text-xl font-semibold text-[#241817] group-hover:text-[#B1837F] transition-colors">
          {category.category}
        </h3>
        <p className="mt-1.5 text-xs text-[#6B5755] leading-relaxed">
          {category.subtitle}
        </p>

        {/* Exams List */}
        <div className="mt-5 space-y-2.5 pt-4 border-t border-[#ECE4DF]">
          {category.exams.map((exam) => (
            <div
              key={exam.id}
              className="flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-[#FAF8F6]"
            >
              <CheckCircle2 className="h-4 w-4 text-[#FF8F85] shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-xs sm:text-sm font-semibold text-[#241817]">
                    {exam.name}
                  </p>
                  {exam.popular && (
                    <span className="shrink-0 text-[9px] font-semibold uppercase tracking-wider text-[#B1837F] bg-[#B1837F]/10 px-1.5 py-0.5 rounded">
                      Destaque
                    </span>
                  )}
                </div>
                {exam.detail && (
                  <p className="text-[11px] text-[#6B5755] mt-0.5 leading-snug">
                    {exam.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer with Direct Scheduling Link */}
      <div className="mt-6 pt-4 border-t border-[#ECE4DF]">
        <a
          href="#onde-atendo"
          className="inline-flex w-full items-center justify-between rounded-xl bg-[#FAF8F6] px-4 py-2.5 text-xs font-semibold text-[#241817] transition-all group-hover:bg-[#241817] group-hover:text-white"
        >
          <span>Agendar este exame</span>
          <ChevronRight className="h-4 w-4 text-[#B1837F] group-hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
};
