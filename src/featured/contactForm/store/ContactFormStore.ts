import { create } from 'zustand';

type ContactFormStore = {
  isSuccess: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
};

export const useContactFormStore = create<ContactFormStore>((set) => ({
  isSuccess: false,
  setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
}));
