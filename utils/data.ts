import * as XLSX from 'xlsx';
import ProcessData from './ProcessData';

export const fetchAllShapes = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/shapes`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching shapes:', error);
    throw error;
  }
};

export const fetchShapeDetails = async (shapeId: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/shapes/${shapeId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching images for shape ${shapeId}:`, error);
    throw error;
  }
};

export const fetchAllCoatingCategories = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/coatings/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching coatings:', error);
    throw error;
  }
}

export const fetchCoatingCategoryDetails = async (categoryId: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/coatings/categories/${categoryId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching details for coating ${categoryId}:`, error);
    throw error;
  }
}

export const fetchExcelData = async (filePath: string) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();

    /* Convert arrayBuffer to a workbook */
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Parse sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
    const headers = jsonData[0].map((header, index) => ({ value: header}));
    const dataRows = jsonData.slice(1).map(row => row.map((cell, index) => ({ value: ProcessData(cell)})));
    
    return { headers, data: dataRows };
  } catch (error) {
    console.error(`Error fetching Excel data from ${filePath}:`, error);
    throw error;
  }
};