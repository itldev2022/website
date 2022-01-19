import { remark } from 'remark';
import html from 'remark-html';
export async function markdownToHtml(props: string) {
  const processedContent = await remark().use(html).process(props);
  return processedContent.toString();
}
