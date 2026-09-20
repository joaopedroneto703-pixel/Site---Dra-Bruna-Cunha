export interface LocationInfo {
  id: string;
  name: string;
  city?: string;
  phone: string;
  formattedPhone: string;
  whatsappUrl: string;
  labelBadge?: string;
}

export interface ExamItem {
  id: string;
  name: string;
  detail?: string;
  popular?: boolean;
}

export interface ExamCategory {
  id: string;
  category: string;
  subtitle: string;
  iconName: 'breast' | 'gynecology' | 'abdomen' | 'prostate' | 'thyroid' | 'obstetrics';
  exams: ExamItem[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  ratio: 'portrait' | 'landscape' | 'square';
  aspectClass: string;
  colSpanClass: string;
  placeholderDescription: string;
  imageSrc?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
