// useSectionStore.js
import { create } from "zustand";

const useSectionStore = create((set) => ({
  expandedSections: {},
  toggleSection: (id) =>
    set((state) => {
      const sectionId = id.replace("Arrow", "");
      return {
        expandedSections: {
          ...state.expandedSections,
          [sectionId]: !state.expandedSections[sectionId],
        },
      };
    }),
}));

export default useSectionStore;
