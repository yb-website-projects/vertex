import React from 'react';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getPage, getPageSlugs } from '@/features/policy/policy';

import st from './page.module.scss';

type PageParams = { locale: string; slug: string };

export async function generateStaticParams(): Promise<PageParams[]> {
  const locales = ['en', 'de', 'it'];
  const params: PageParams[] = [];

  for (const locale of locales) {
    const slugs = await getPageSlugs(locale);
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
  const page = await getPage(slug, locale);
  const pageTitle = `${page.title} | Vertex`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: '',
    },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const awaitedParams = await params;
  const { locale, slug } = awaitedParams;
  const page = await getPage(slug, locale);
  const t = await getTranslations('policy');
  return (
    <>
      <section className={st.policy}>
        <div className="_container">
          <div className={st.policy__body}>
            <div className={st.policy__title}>
              <h1>{page.title}</h1>
              <p>
                {t('date', { fallback: 'Last Revised:' })} {page.date}
              </p>
            </div>
            <article className={st.policy__content}>
              <div dangerouslySetInnerHTML={{ __html: page.body }} />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
