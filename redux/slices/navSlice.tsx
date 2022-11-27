import { RootState } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  navToggled: boolean;
}

const initialState: NavState = {
  navToggled: false
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    open: (state) => {
      state.navToggled = true;
    },
    close: (state) => {
      state.navToggled = false;
    },
    toggle: (state) => {
      state.navToggled = !(state.navToggled);
    }
  }
});

export const { open, close, toggle } = navSlice.actions;
export const selectNavToggled = (state: RootState) => state.nav.navToggled;
export default navSlice.reducer;