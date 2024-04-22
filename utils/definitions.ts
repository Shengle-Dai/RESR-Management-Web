export interface ImageData {
  id: number;
  base64_data: string;
}

export interface Shape {
  id: number;
  name: string;
  images?: ImageData[];
}

export interface Coating {
  id: number;
  sub_category: string;
  thickness: string;
  color: string;
}

export interface CoatingCategory {
  id: number;
  name: string;
  coatings: Coating[];
  images?: ImageData[];
}

export interface MagneticMaterial {
  id: number;
  name: string;
  is_rare_earth: boolean;
}

export type TableCell = {
  value: React.ReactNode;
  highlight?: boolean;
};