import fs from 'fs';
import path from 'path';
const newsletterDir = path.join(process.cwd(), 'public/docs');
export function getNewsletter() {
  const newsletterFileNames = fs.readdirSync(newsletterDir);
  const allNewsletterData = newsletterFileNames.map((fileName) => {
    const id = fileName.replace(/\.pdf$/, '');

    const imagePath = `/images/newsletter/${id}.jpg`;
    const pdfPath = `/docs/${id}.pdf`;

    return {
      id,
      imagePath,
      pdfPath,
    };
  });
  const newsletters = allNewsletterData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  return {
    newsletters,
  };
}
