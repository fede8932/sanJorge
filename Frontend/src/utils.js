export function isSupplierInBrand(supplier, brand) {
  const supplierId = supplier.id;
  const brandSupplierIds = brand.brandSuppliers.map((bs) => bs.supplierId);
  return brandSupplierIds.includes(supplierId);
}
export function dateConverter(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que se suma 1.
  const year = date.getFullYear();

  const formattedDate = `${day < 10 ? "0" : ""}${day}-${
    month < 10 ? "0" : ""
  }${month}-${year}`;
  return formattedDate;
}
export function redondearADosDecimales(numero) {
  return Math.round(numero * 100) / 100;
}
export function convertToDate(string) {
  const fecha = new Date(string);
  return fecha.toISOString();
}
export function formatNumberWithLeadingZeros(number, desiredLength) {
  const numString = String(number);
  const zerosToAdd = Math.max(0, desiredLength - numString.length);
  const leadingZeros = "0".repeat(zerosToAdd);
  return leadingZeros + numString;
}
export function camelCaseToText(cadenaCamelCase) {
  // Agregar espacios entre las palabras en CamelCase usando una expresión regular
  const cadenaConEspacios = cadenaCamelCase.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Convertir la cadena resultante a mayúsculas
  const cadenaMayusculas = cadenaConEspacios.toUpperCase();

  return cadenaMayusculas;
}

export function fechaConverter() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que se suma 1.
  const year = date.getFullYear();

  const formattedDate = `${day < 10 ? "0" : ""}${day}-${
    month < 10 ? "0" : ""
  }${month}-${year}`;
  return formattedDate;
}