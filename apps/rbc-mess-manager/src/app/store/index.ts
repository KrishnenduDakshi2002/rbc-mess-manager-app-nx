import { create } from 'zustand';
import { createStore } from 'zustand';

import { AppState, appSlice } from './appSlice';
import { User, userSlice } from './userSlice';
import { AdminSlice, adminSlice } from './adminSlice';

const store = (set) => ({
  ...appSlice(set),
  ...userSlice(set),
  ...adminSlice(set),
});
