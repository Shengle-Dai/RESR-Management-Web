export const toBlobURL = (base64: string, mimeType: string = "image/png"): string => {
  const byteString = atob(base64.split(",")[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([intArray], { type: mimeType });
  return URL.createObjectURL(blob);
};