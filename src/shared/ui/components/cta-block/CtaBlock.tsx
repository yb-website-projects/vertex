import { Button } from '../../kit/button/Button';
import styles from './CtaBlock.module.scss';

export const CtaBlock = ({
  title,
  text,
  buttonText,
  buttonLink,
  backgroundImage,
}: {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}) => {
  return (
    <div className={styles.ctaBlock}>
      <div className={'_container'}>
        <div
          className={styles.ctaBlock__content}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2>{title}</h2>
          <p>{text}</p>
          <Button url={buttonLink} buttonType="link" color="white">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
