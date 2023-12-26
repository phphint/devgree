"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiSlice = exports.toggleSkillsSubMenu = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
// reducers/uiSlice.js

const uiSlice = exports.uiSlice = (0, _toolkit.createSlice)({
  name: 'ui',
  initialState: {
    isSkillsSubMenuOpen: false
  },
  reducers: {
    toggleSkillsSubMenu: state => {
      state.isSkillsSubMenuOpen = !state.isSkillsSubMenuOpen;
    }
  }
});

// Action creators are generated for each case reducer function
const {
  toggleSkillsSubMenu
} = uiSlice.actions;
exports.toggleSkillsSubMenu = toggleSkillsSubMenu;
var _default = exports.default = uiSlice.reducer;