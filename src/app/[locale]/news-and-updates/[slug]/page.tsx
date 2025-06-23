import React from 'react';

import type { Metadata } from 'next';

import { getPost, getPostSlugs } from '@/features/news/news';

import { Button } from '@/shared/ui/kit';

import st from './page.module.scss';

type PageParams = { locale: string; slug: string };

export async function generateStaticParams(): Promise<PageParams[]> {
  const locales = ['en', 'de', 'it'];
  const params: PageParams[] = [];

  for (const locale of locales) {
    const slugs = await getPostSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { locale, slug } = awaitedParams;
  const post = await getPost(slug, locale);
  const pageTitle = `${post.title}`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: '',
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const awaitedParams = await params;
  const { locale, slug } = awaitedParams;
  const post = await getPost(slug, locale);
  return (
    <>
      <section className={st.post}>
        <div className={st.post__thumbnail} style={{ backgroundImage: `url(${post.image})` }}></div>
        <div className="_container">
          <div className={st.post__body}>
            <article className={st.post__content}>
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </article>
          </div>
          <div className={st.post__buttons}>
            <Button buttonType="link" url={'/the-fund'} color="white">
              Explore the Fund
            </Button>
            <Button buttonType="link" url={post.next} color="gray" arrow>
              Next Insight
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
