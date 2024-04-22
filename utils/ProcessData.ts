export default function ProcessData(cell: any): any {
  const value = Number(cell);
  if (!isNaN(value)) {
    return Math.round(value * 100) / 100;
  }
  return cell;
}