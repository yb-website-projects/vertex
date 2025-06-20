import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import { join } from 'path';

export async function getPage(slug: string, locale: string) {
  const text = await readFile(
    join(process.cwd(), `src/shared/lib/policies/${locale}`, `${slug}.md`),
    'utf8'
  );
  const {
    content,
    data: { title, date, shortDescription },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, body, shortDescription };
}

export async function getPageSlugs(locale: string) {
  const files = await readdir(join(process.cwd(), `src/shared/lib/policies/${locale}`));
  return files.filter((file) => file.endsWith('.md')).map((file) => file.slice(0, -'.md'.length));
}
