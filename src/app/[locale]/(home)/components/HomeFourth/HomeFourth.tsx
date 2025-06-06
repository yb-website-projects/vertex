'use client';
import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { LeftArrow, RightArrow } from '@/shared/ui/icons';

import styles from './HomeFourth.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const HomeFourth = () => {
  const t = useTranslations('homeFourth');
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const slides = [
    {
      title: t('slide1.title', {
        fallback: 'Structural Advantage of a Small Fund',
      }),
      description: t('slide1.description', {
        fallback:
          'The fund’s size enables faster execution, targeted deal access, and active oversight — benefits not typically available to larger institutional vehicles.',
      }),
      image: '/images/home/whySlide1.png',
    },
    {
      title: t('slide2.title', {
        fallback: 'Regulated and Globally Positioned',
      }),
      description: t('slide2.description', {
        fallback:
          'Vertex FinCapital operates under the Singapore VCC framework and is managed by MAS-licensed XEQ Capital, providing legal clarity, investor protection, and international credibility.',
      }),
      image: '/images/home/whySlide2.png',
    },
    {
      title: t('slide3.title', {
        fallback: 'Aligned Profit Distribution Model',
      }),
      description: t('slide3.description', {
        fallback:
          'Investors receive the first 12% p.a. of returns. Only after this threshold is met does the fund share in profits, ensuring investor-first economics at the structural level',
      }),
      image: '/images/home/whySlide3.png',
    },
    {
      title: t('slide4.title', {
        fallback: 'Fee Discipline <br/>and Alignment',
      }),
      description: t('slide4.description', {
        fallback:
          'The fund applies a flat 2% management fee (covering all operating expenses) and performance fees only apply above a 12% return, ensuring investor-aligned incentives.',
      }),
      image: '/images/home/whySlide4.png',
    },
    {
      title: t('slide5.title', {
        fallback: 'Selective <br/>Participation',
      }),
      description: t('slide5.description', {
        fallback:
          'The investor base is intentionally capped at 20–30 parties to preserve deal quality and access discipline.',
      }),
      image: '/images/home/whySlide5.png',
    },
  ];

  return (
    <section className={styles.homeFourth}>
      <div className={'_container'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.homeFourth__heading}
        >
          <h2>
            {t('title', {
              fallback: 'Why Vertex FinCapital',
            })}
          </h2>
          <div className={styles.buttons}>
            <button className={styles.prev} onClick={() => swiper?.slidePrev()}>
              <LeftArrow />
            </button>
            <button className={styles.next} onClick={() => swiper?.slideNext()}>
              <RightArrow />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.homeFourth__slider}
      >
        <Swiper
          spaceBetween={48}
          slidesPerView={4}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={setSwiper}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.sliderInner}>
                <Image src={slide.image} alt={slide.title} width={338} height={438} />
                <h5
                  dangerouslySetInnerHTML={{
                    __html: slide.title,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: slide.description,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.sliderInner}>
                <Image src={slide.image} alt={slide.title} width={338} height={438} />
                <h5
                  dangerouslySetInnerHTML={{
                    __html: slide.title,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: slide.description,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className={styles.buttonsMobile}>
        <button className={styles.prev} onClick={() => swiper?.slidePrev()}>
          <LeftArrow />
        </button>
        <button className={styles.next} onClick={() => swiper?.slideNext()}>
          <RightArrow />
        </button>
      </div>
    </section>
  );
};
