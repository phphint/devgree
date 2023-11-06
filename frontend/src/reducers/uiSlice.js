// reducers/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isSkillsSubMenuOpen: false
  },
  reducers: {
    toggleSkillsSubMenu: (state) => {
      state.isSkillsSubMenuOpen = !state.isSkillsSubMenuOpen;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleSkillsSubMenu } = uiSlice.actions;

export default uiSlice.reducer;
