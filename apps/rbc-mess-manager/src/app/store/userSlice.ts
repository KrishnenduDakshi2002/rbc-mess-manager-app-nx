import { StateCreator } from 'zustand';

export interface User {
  name: boolean & null;
  user: boolean;
}

export const userSlice: StateCreator<User> = (set) => ({
  name: null,
  user: false,
});
