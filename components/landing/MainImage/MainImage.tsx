import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './MainImage.module.css';

interface MainImageProps {
  src: StaticImageData;
  navToggled: boolean;
  setNavToggled: Function;
}

const MainImage: FC<MainImageProps> = ({ src, navToggled, setNavToggled }) => {
  const style = navToggled ? { transform: 'translateY(-50%)' } : {};
  const clickHandler = () => {
    return () => {
      setNavToggled(false);
    };
  };
  return (
    <div className={styles.imageContainer} style={style} onClick={clickHandler()}>
      <Image src={src} style={{ objectFit: 'cover' }} fill alt='Image of red panda.'/>
    </div>
  );
};

export default MainImage;