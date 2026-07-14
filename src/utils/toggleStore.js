import { create } from "zustand";

const toggleStore = create((set) => ({
  isDark: false,
  toggle: () => set((state) => ({ isDark: !state.isDark })),
}));

export default toggleStore;
