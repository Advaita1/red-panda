import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './CarouselCard.module.css';

interface CarouselCardProps {
  src: StaticImageData;
  setSelectedPanda: Function;
  toggleNav: Function;
}

const CarouselCard: FC<CarouselCardProps> = ({ src, setSelectedPanda, toggleNav }) => {
  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      setSelectedPanda(src);
      toggleNav();
      event.preventDefault();
    };
  };
  return (
    <div className={styles.card} onClick={clickHandler()}>
      <Image src={src} style={{ objectFit: 'cover' }} fill alt="Image of red panda."/>
    </div>
  );
};

export default CarouselCard;