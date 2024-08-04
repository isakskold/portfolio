// useSectionStore.js
import { create } from "zustand";

const useSectionStore = create((set) => ({
  expandedSections: {},
  toggleSection: (id) =>
    set((state) => ({
      expandedSections: {
        ...state.expandedSections,
        [id]: !state.expandedSections[id],
      },
    })),
}));

export default useSectionStore;
