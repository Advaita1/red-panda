import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useAppDispatch } from '@redux/hooks';
import { toggle } from '@redux/slices/navSlice';
import { setImage } from '@redux/slices/imageSlice';
import styles from './CarouselCard.module.css';

interface CarouselCardProps {
  src: StaticImageData;
}

const CarouselCard: FC<CarouselCardProps> = ({ src }) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      dispatch(setImage(src))
      dispatch(toggle());
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