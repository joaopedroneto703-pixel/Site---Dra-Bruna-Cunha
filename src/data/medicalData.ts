import { ExamCategory, GalleryPhoto, LocationInfo, NavItem } from '../types';

export const DOCTOR_DATA = {
  name: 'Dra. Bruna Cunha',
  crm: 'CRM-GO 27405',
  specialtyTagline: 'MEDICINA • ULTRASSONOGRAFIA',
  headline: 'Cuidado médico com precisão, tecnologia e acolhimento.',
  specialtyTitle: 'Clínica Geral e Ultrassonografia',
  aboutTitle: 'Cuidado que une conhecimento e tecnologia',
  aboutBio:
    'Médica clínico geral com atuação especializada em ultrassonografia, oferecendo exames com tecnologia, precisão e atenção individualizada em diferentes localidades de Goiás.',
  instagramHandle: '@drabrunacunhamello',
  instagramUrl: 'https://www.instagram.com/drabrunacunhamello/',
  instagramSectionTitle: 'Acompanhe o trabalho da Dra. Bruna',
  finalCtaTitle: 'Seu cuidado começa com uma escolha.',
  finalCtaSubtitle: 'Agende seu exame em uma das unidades de atendimento da Dra. Bruna.',
  copyright: '© 2026 Dra. Bruna Cunha. Todos os direitos reservados.',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Exames', href: '#exames' },
  { label: 'Onde Atendo', href: '#onde-atendo' },
  { label: 'Contato', href: '#contato' },
];

export const LOCATIONS_DATA: LocationInfo[] = [
  {
    id: 'genesis',
    name: 'Clínica Gênesis',
    city: 'Fazenda Nova - GO',
    phone: '5562991798429',
    formattedPhone: '(62) 99179-8429',
    whatsappUrl: 'https://wa.me/5562991798429',
    labelBadge: 'Atendimento Especializado',
  },
  {
    id: 'ceom',
    name: 'CEOM',
    city: 'Jussara - GO',
    phone: '5562985678340',
    formattedPhone: '(62) 98567-8340',
    whatsappUrl: 'https://wa.me/5562985678340',
    labelBadge: 'Centro Diagnóstico',
  },
  {
    id: 'una',
    name: 'Clínica UNA',
    city: 'Montes Claros de Goiás - GO',
    phone: '5562996209789',
    formattedPhone: '(62) 99620-9789',
    whatsappUrl: 'https://wa.me/5562996209789',
    labelBadge: 'Unidade Médica',
  },
  {
    id: 'renove',
    name: 'Renove Centro Clínico',
    phone: '5562984123312',
    formattedPhone: '(62) 98412-3312',
    whatsappUrl: 'https://wa.me/5562984123312',
    labelBadge: 'Centro Clínico',
  },
];

export const EXAM_CATEGORIES: ExamCategory[] = [
  {
    id: 'mamas',
    category: 'Mamas e região',
    subtitle: 'Avaliação detalhada e preventiva do tecido mamário e cadeias linfáticas axilares.',
    iconName: 'breast',
    exams: [
      {
        id: 'usg-mamas-axilas',
        name: 'USG de Mamas e Axilas',
        detail: 'Rastreamento preventivo, nódulos, cistos e integridade dos tecidos.',
        popular: true,
      },
    ],
  },
  {
    id: 'ginecologicos',
    category: 'Ginecológicos',
    subtitle: 'Diagnóstico por imagem da saúde da mulher, útero, ovários e ciclo reprodutivo.',
    iconName: 'gynecology',
    exams: [
      {
        id: 'usg-endovaginal',
        name: 'USG Endovaginal',
        detail: 'Análise de alta resolução de útero, endométrio e ovários.',
        popular: true,
      },
      {
        id: 'usg-pelve-feminina',
        name: 'USG Pelve Feminina via abdominal',
        detail: 'Visualização da anatomia pélvica por via supra-púbica.',
      },
      {
        id: 'usg-foliculos',
        name: 'USG Endovaginal para contagem de folículos',
        detail: 'Avaliação precisa da reserva ovariana e planejamento reprodutivo.',
      },
      {
        id: 'usg-ovulacao',
        name: 'USG Endovaginal para acompanhamento de ovulação',
        detail: 'Monitoramento seriado do desenvolvimento folicular e ovulação.',
      },
    ],
  },
  {
    id: 'abdome-urinario',
    category: 'Abdome e aparelho urinário',
    subtitle: 'Estudo minucioso dos órgãos abdominais, sistema hepático, vesícula e trato urinário.',
    iconName: 'abdomen',
    exams: [
      {
        id: 'usg-abdome-superior',
        name: 'USG Abdome Superior',
        detail: 'Avaliação de fígado, vesícula biliar, vias biliares, pâncreas e baço.',
      },
      {
        id: 'usg-abdome-total',
        name: 'USG Abdome Total',
        detail: 'Exame panorâmico de todos os órgãos intra-abdominais e retroperitoneais.',
        popular: true,
      },
      {
        id: 'usg-rins-vias',
        name: 'USG Rins e Vias Urinárias',
        detail: 'Investigação de litíase (cálculos), dilatações, bexiga e parênquima renal.',
      },
    ],
  },
  {
    id: 'prostata',
    category: 'Próstata',
    subtitle: 'Exame direcionado à saúde urológica masculina e mensuração do volume prostático.',
    iconName: 'prostate',
    exams: [
      {
        id: 'usg-prostata-abdominal',
        name: 'USG Próstata via abdominal',
        detail: 'Avaliação de dimensões prostáticas, resíduo miccional pós-esvaziamento e bexiga.',
      },
    ],
  },
  {
    id: 'tireoide',
    category: 'Tireoide',
    subtitle: 'Detecção precoce de nódulos cervicais e mapeamento hemodinâmico vascular.',
    iconName: 'thyroid',
    exams: [
      {
        id: 'usg-tireoide',
        name: 'USG da Tireoide',
        detail: 'Mensuração de volume, parênquima glandular e classificação de nódulos.',
      },
      {
        id: 'usg-tireoide-doppler',
        name: 'USG da Tireoide com Doppler',
        detail: 'Estudo dinâmico do fluxo vascular intratiroidiano e padrão de perfusão.',
        popular: true,
      },
    ],
  },
  {
    id: 'obstetricia',
    category: 'Obstetrícia',
    subtitle: 'Acompanhamento do desenvolvimento fetal com tecnologia de imagem e carinho.',
    iconName: 'obstetrics',
    exams: [
      {
        id: 'usg-obstetrica-simples',
        name: 'USG Obstétrica Simples',
        detail: 'Avaliação biométrica fetal, batimentos cardíacos, líquido amniótico e placenta.',
      },
      {
        id: 'usg-obstetrica-doppler',
        name: 'USG Obstétrica com Doppler',
        detail: 'Análise hemodinâmica das artérias uterinas, umbilical e cerebral média.',
        popular: true,
      },
      {
        id: 'usg-morfo-1',
        name: 'USG Obstétrica Morfológica — 1º Trimestre',
        detail: 'Transluscência nucal, osso nasal e rastreamento precoce de aneuploidias.',
        popular: true,
      },
      {
        id: 'usg-morfo-2',
        name: 'USG Obstétrica Morfológica — 2º Trimestre',
        detail: 'Análise minuciosa de todos os sistemas anatômicos e estruturas fetais.',
        popular: true,
      },
      {
        id: 'usg-obstetrica-3d',
        name: 'USG Obstétrica 3D',
        detail: 'Renderização tridimensional volumétrica da face e traços do bebê.',
        popular: true,
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'galeria-1',
    title: 'Consultório & Acolhimento',
    subtitle: 'Espaço planejado para conforto e escuta atenta',
    ratio: 'portrait',
    aspectClass: 'aspect-[3/4]',
    colSpanClass: 'col-span-12 md:col-span-4',
    placeholderDescription: 'Foto 1 • Retrato no consultório clínico da Dra. Bruna Cunha',
  },
  {
    id: 'galeria-2',
    title: 'Precisão em Ultrassonografia',
    subtitle: 'Tecnologia diagnóstica aplicada com rigor técnico',
    ratio: 'landscape',
    aspectClass: 'aspect-[16/10]',
    colSpanClass: 'col-span-12 md:col-span-8',
    placeholderDescription: 'Foto 2 • Dra. Bruna realizando exame de ultrassom com equipamento digital',
  },
  {
    id: 'galeria-3',
    title: 'Atenção Individualizada',
    subtitle: 'Cada paciente recebida com dedicação e clareza',
    ratio: 'square',
    aspectClass: 'aspect-square',
    colSpanClass: 'col-span-12 md:col-span-4',
    placeholderDescription: 'Foto 3 • Momento de orientação clínica e explicação atenta do laudo',
  },
  {
    id: 'galeria-4',
    title: 'Ambiente Médico Moderno',
    subtitle: 'Equipamentos de alta definição e biossegurança',
    ratio: 'landscape',
    aspectClass: 'aspect-[16/9]',
    colSpanClass: 'col-span-12 md:col-span-4',
    placeholderDescription: 'Foto 4 • Sala de exames com transdutores e monitores de alta precisão',
  },
  {
    id: 'galeria-5',
    title: 'Retrato Profissional',
    subtitle: 'Compromisso ético com a saúde em Goiás',
    ratio: 'portrait',
    aspectClass: 'aspect-[3/4]',
    colSpanClass: 'col-span-12 md:col-span-4',
    placeholderDescription: 'Foto 5 • Retrato editorial profissional da Dra. Bruna Cunha',
  },
];
