import { create } from 'zustand';

import { appSlice } from './appSlice';
import { userSlice } from './userSlice';
import { adminSlice } from './adminSlice';

const store = (set) => ({
  ...appSlice(set),
  ...userSlice(set),
  ...adminSlice(set),
});
