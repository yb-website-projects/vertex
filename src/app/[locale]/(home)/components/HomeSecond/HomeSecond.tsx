'use client';
import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { Swiper as SwiperType } from 'swiper';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { LeftArrow, RightArrow } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit';

import styles from './HomeSecond.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const HomeSecond = () => {
  const t = useTranslations('homeSecond');
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className={styles.homeSecond}>
      <div className={'_container'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade]}
            effect="fade"
            loop={true}
            onSwiper={setSwiper}
          >
            <SwiperSlide>
              <div className={styles.sliderInner}>
                <div className={styles.left}>
                  <div>
                    <span className={styles.number}>1</span>
                    <p>
                      {t('slide1.text1', {
                        fallback:
                          'The fund offers accredited investors access to private market opportunities across real estate, private equity, credit, venture capital, and public equities.',
                      })}
                    </p>
                    <p>
                      {t('slide1.text2', {
                        fallback:
                          'Combining institutional governance with boutique agility, the fund serves as a core alternative allocation for sophisticated portfolios.',
                      })}
                    </p>
                  </div>
                  <div>
                    <h3>
                      {t('slide1.title', {
                        fallback:
                          'Vertex FinCapital is a MAS-regulated investment fund structured under Singapore’s XEQ Global Alternatives VCC.',
                      })}
                    </h3>
                    <Button buttonType="link" url="#" arrow>
                      {t('slide1.button', {
                        fallback: 'Explore the Fund',
                      })}
                    </Button>
                  </div>
                </div>
                <div className={styles.right}>
                  <Image
                    src="/images/home/fundSlide1.png"
                    alt="home second image"
                    width={523}
                    height={543}
                  />
                  <div className={styles.buttons}>
                    <button className={styles.prev} onClick={() => swiper?.slidePrev()}>
                      <LeftArrow />
                    </button>
                    <button className={styles.next} onClick={() => swiper?.slideNext()}>
                      <RightArrow />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sliderInner}>
                <div className={styles.left}>
                  <div>
                    <span className={styles.number}>2</span>
                    <ul>
                      <li>
                        {t('slide2.text1', {
                          fallback:
                            'Real estate (equity or structured debt in development-stage projects)',
                        })}
                      </li>
                      <li>
                        {t('slide2.text2', {
                          fallback: 'Private equity (payments, proptech, scalable B2B platforms)',
                        })}
                      </li>
                      <li>
                        {t('slide2.text3', {
                          fallback: 'Secured private credit (with collateral and oversight)',
                        })}
                      </li>
                      <li>
                        {t('slide2.text4', {
                          fallback:
                            'Venture capital (early-stage fintech, proptech, and infrastructure)',
                        })}
                      </li>
                      <li>
                        {t('slide2.text4', {
                          fallback:
                            'Public small-cap equities (value-oriented with near-term catalysts)',
                        })}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: t('slide2.title', {
                          fallback: 'Our key <br/>investment focus',
                        }),
                      }}
                    />
                    <Button buttonType="link" url="#" arrow>
                      {t('slide1.button', {
                        fallback: 'Explore the Fund',
                      })}
                    </Button>
                  </div>
                </div>
                <div className={styles.right}>
                  <Image
                    src="/images/home/fundSlide2.png"
                    alt="home second image"
                    width={523}
                    height={543}
                  />
                  <div className={styles.buttons}>
                    <button className={styles.prev} onClick={() => swiper?.slidePrev()}>
                      <LeftArrow />
                    </button>
                    <button className={styles.next} onClick={() => swiper?.slideNext()}>
                      <RightArrow />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
