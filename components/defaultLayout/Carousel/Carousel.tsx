import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { selectNavToggled } from '@redux/slices/navSlice';
import horizontalScroll from '@tools/horizontalScroll';
import styles from './Carousel.module.css';
import { CarouselCard } from '@components/defaultLayout';

interface CarouselPops {
  images: StaticImageData[];
}

const Carousel: FC<CarouselPops> = ({ images }) => {
  const scrollRef = horizontalScroll();
  const navToggled = useSelector((state: RootState) => selectNavToggled(state));
  const style = navToggled ? { transform: 'translateY(0%) scale(1)' } : {};
  return (
    <div ref={scrollRef} className={styles.carousel} style={style}>
      {
        images.map((image: StaticImageData, index) => {
          return (
            <CarouselCard src={image} key={index}/>
          );
        })
      }
    </div>
  );
};

export default Carousel;