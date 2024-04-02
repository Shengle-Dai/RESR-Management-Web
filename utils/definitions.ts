export interface ShapeImage {
  id: number;
  base64_data: string;
}

export interface Shape {
  id: number;
  name: string;
  images?: ShapeImage[];
}
