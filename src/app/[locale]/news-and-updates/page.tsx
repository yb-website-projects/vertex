import type { Metadata } from 'next';

import { CtaBlock, NewsHero, PostsLoop } from './components';

export const metadata: Metadata = {
  title: 'Fund News and Market Updates',
  description:
    'Stay informed with the latest fund announcements, regulatory updates, and market developments from Vertex FinCapital.',
  openGraph: {
    title: 'Fund News and Market Updates',
    description:
      'Stay informed with the latest fund announcements, regulatory updates, and market developments from Vertex FinCapital.',
    //images: 'https://vertexfincapital.com/images/meta.png',
  },
};

export default function NewsAndUpdatesPage() {
  return (
    <>
      <NewsHero />
      <PostsLoop />
      <CtaBlock />
    </>
  );
}
