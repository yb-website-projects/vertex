'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './PostsLoop.module.scss';

export const PostsLoop = () => {
  const t = useTranslations('newsAndUpdates');

  const posts = [
    {
      title: t('posts.title1', {
        fallback: 'Global Financing Reform in Focus: Why FfD4 in Seville Matters',
      }),
      description: t('posts.description1', {
        fallback:
          'The upcoming UN conference in Seville marks a pivotal moment for reshaping the global financial architecture. As debt pressures rise and sustainable development goals remain underfunded, FfD4 brings critical momentum to reform efforts—and signals where global capital may shift next',
      }),
      image: '/images/news/news1.png',
      link: '/news-and-updates/why-ffd4-in-seville-matters',
    },
    {
      title: t('posts.title2', {
        fallback: 'Europe’s Investment Landscape: Innovation and Fragmentation',
      }),
      description: t('posts.description2', {
        fallback:
          'Europe stands at a crossroads—rich in technology and green leadership, yet constrained by fragmented markets and tightening fiscal pressures. This analysis explores where capital is flowing, what’s holding it back, and why bold investment reform is urgently needed.',
      }),
      image: '/images/news/news2.png',
      link: '/news-and-updates/europes-investment-landscape-research',
    },
    {
      title: t('posts.title3', {
        fallback: 'Vertex FinCapital on the 9th Annual European Fund Finance Symposium',
      }),
      description: t('posts.description3', {
        fallback:
          'As Europe’s fund finance ecosystem evolves, the 9th Annual Symposium in London becomes a critical touchpoint for private capital professionals. Vertex FinCapital highlights why this year’s discussions on structuring, liquidity, and regulatory shifts are particularly relevant for fund managers and institutional investors.',
      }),
      image: '/images/news/news3.png',
      link: '/news-and-updates/9th-european-fund-finance-symposium-overview',
    },
    {
      title: t('posts.title4', {
        fallback: "Venture Capital Forum 2025: Redefining Europe's Innovation Capital Flow",
      }),
      description: t('posts.description4', {
        fallback:
          'The upcoming forum in Amsterdam gathers Europe’s top LPs and GPs to examine how capital allocation is evolving across biotech, tech, and climate ventures. Vertex FinCapital outlines why this event is pivotal for shaping the continent’s innovation finance landscape.',
      }),
      image: '/images/news/news4.png',
      link: '/news-and-updates/venture-capital-forum-2025-insights',
    },
  ];

  return (
    <section className={styles.postsLoop}>
      <div className={'_container'}>
        <div className={styles.postsLoop__content}>
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className={styles.top}>
                <Image src={post.image} alt={post.title} width={460} height={150} />
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
              <Button buttonType="link" url={post.link} color="white">
                {t('posts.buttonText', {
                  fallback: 'Read',
                })}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
