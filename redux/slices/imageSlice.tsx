import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { StaticImageData } from 'next/image';
import RedPanda1 from '@assets/images/red-panda-1.jpg';

interface ImageState {
  src: StaticImageData;
}

const initialState: ImageState = {
  src: RedPanda1
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state: any, action: PayloadAction<StaticImageData>) => {
      state.src = action.payload;
    }
  }
});

export const { setImage } = imageSlice.actions;
export const selectImage = (state: RootState) => state.image.src;
export default imageSlice.reducer;
