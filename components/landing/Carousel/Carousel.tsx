import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import styles from './Carousel.module.css';
import { CarouselCard } from '@components/landing';
import horizontalScroll from '@tools/horizontalScroll';

interface CarouselPops {
  navToggled: boolean;
  pandas: StaticImageData[];
  toggleNav: Function;
  setSelectedPanda: Function;
}

const Carousel: FC<CarouselPops> = ({ navToggled, pandas, toggleNav, setSelectedPanda }) => {
  const scrollRef = horizontalScroll();
  const style = navToggled ? { transform: 'translateY(0%) scale(1)' } : {};
  return (
    <div ref={scrollRef} className={styles.carousel} style={style}>
      {
        pandas.map((panda: StaticImageData, index) => {
          return (
            <CarouselCard src={panda} toggleNav={toggleNav} setSelectedPanda={setSelectedPanda} key={index}/>
          );
        })
      }
    </div>
  );
};

export default Carousel;