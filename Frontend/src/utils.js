export function isSupplierInBrand(supplier, brand) {
  const supplierId = supplier.id;
  const brandSupplierIds = brand.brandSuppliers.map((bs) => bs.supplierId);
  return brandSupplierIds.includes(supplierId);
}
