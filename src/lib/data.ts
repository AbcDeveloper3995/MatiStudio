import fs from 'fs';
import path from 'path';

export interface Servicio {
  nombre: string;
  precio?: number;
  precio_desde?: number;
  duracion_minutos?: number;
  durationMinutes?: number;
  durationLabel?: string;
  descripcion: string;
}

export interface Categoria {
  nombre: string;
  servicios: Servicio[];
}

export interface DataJson {
  categorias: Categoria[];
}

export function getMatiStudioData(): DataJson {
  try {
    const filePath = path.join(process.cwd(), 'dataJson.txt');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as DataJson;
  } catch (error) {
    console.error("Error reading dataJson.txt:", error);
    return { categorias: [] };
  }
}
