import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import { join } from 'path';

export async function getPost(slug: string, locale: string) {
  const text = await readFile(
    join(process.cwd(), `src/shared/lib/news/${locale}`, `${slug}.md`),
    'utf8'
  );
  const {
    content,
    data: { title, date, image, seo_title, seo_description, next },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, body, image, seo_title, seo_description, next };
}

export async function getPostSlugs(locale: string) {
  const files = await readdir(join(process.cwd(), `src/shared/lib/news/${locale}`));
  return files.filter((file) => file.endsWith('.md')).map((file) => file.slice(0, -'.md'.length));
}
