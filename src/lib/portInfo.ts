import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { markdownToHtml } from '@/lib/markdownToHtml';
export type Items = {
  [key: string]: any;
};
const portInfoDirectory = path.join(process.cwd(), 'port-info');

export async function getPortInfo() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(portInfoDirectory);
  const allPortInfo = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(portInfoDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);
      const convert = await markdownToHtml(content);
      const items: Items = {
        id,
        title: data.title,
        latitude: data.latitude,
        longitude: data.longitude,
        content: convert,
      };

      // Combine the data with the id
      return items;
    })
  );
  const sorted = allPortInfo.sort(({ title: a }, { title: b }) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  return { allPortInfo: sorted };
}
