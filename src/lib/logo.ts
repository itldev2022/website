import fs from 'fs';
import path from 'path';
const logoBuyersDirectory = path.join(process.cwd(), 'public/logo/buyers');
const logoSuppliersDirectory = path.join(
  process.cwd(),
  'public/logo/suppliers'
);
const logoCarriersDirectory = path.join(process.cwd(), 'public/logo/suppliers');
export function getLogo() {
  const buyersfileNames = fs.readdirSync(logoBuyersDirectory);
  const allBuyerData = buyersfileNames.map((fileName) => {
    const id = fileName.replace(/\.jpg$/, '');

    const fullPath = `/logo/buyers/${fileName}`;

    return {
      id,
      fullPath,
    };
  });
  const buyers = allBuyerData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  const suppliersfileNames = fs.readdirSync(logoSuppliersDirectory);
  const allSupplierData = suppliersfileNames.map((fileName) => {
    const id = fileName.replace(/\.jpg$/, '');

    const fullPath = `/logo/suppliers/${fileName}`;
    return {
      id,
      fullPath,
    };
  });
  const suppliers = allSupplierData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  const carriersfileNames = fs.readdirSync(logoCarriersDirectory);
  const allCarrierData = carriersfileNames.map((fileName) => {
    const id = fileName.replace(/\.jpg$/, '');

    const fullPath = `/logo/suppliers/${fileName}`;
    return {
      id,
      fullPath,
    };
  });
  const carriers = allCarrierData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  return {
    buyers,
    suppliers,
    carriers,
  };
}
