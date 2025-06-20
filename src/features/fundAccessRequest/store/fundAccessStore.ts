import { create } from 'zustand';

type FundAccessStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  isSuccess: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
};

export const useFundAccessStore = create<FundAccessStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  isSuccess: false,
  setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
}));
