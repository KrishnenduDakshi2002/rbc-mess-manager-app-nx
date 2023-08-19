import { StateCreator } from 'zustand';

export interface AdminSlice {
  admin: boolean;
}

export const adminSlice: StateCreator<AdminSlice> = (set) => ({
  admin: false,
});
