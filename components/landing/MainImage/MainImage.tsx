import React, { FC } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { selectNavToggled } from '@redux/slices/navSlice';
import { selectImage } from '@redux/slices/imageSlice';
import { close } from '@redux/slices/navSlice';
import { RootState } from '@redux/store';
import styles from './MainImage.module.css';

const MainImage: FC = () => {
  const dispatch = useAppDispatch();
  const navToggled = useAppSelector((state: RootState) => selectNavToggled(state));
  const src = useAppSelector((state: RootState) => selectImage(state));
  const style = navToggled ? { transform: 'translateY(-399px)', cursor: 'pointer' } : {};

  const clickHandler = () => {
    return () => {
      dispatch(close());
    };
  };

  return (
    <div className={styles.imageContainer} style={style} onClick={clickHandler()}>
      <Image src={src} style={{ objectFit: 'cover' }} fill alt='Image of red panda.'/>
    </div>
  );
};

export default MainImage;