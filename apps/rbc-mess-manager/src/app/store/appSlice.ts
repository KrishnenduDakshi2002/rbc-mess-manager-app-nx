import { StateCreator } from 'zustand';

export interface AppState {
  name: boolean & null;
  user: boolean;
}

export const appSlice: StateCreator<AppState> = (set) => ({
  name: null,
  user: false,
});
