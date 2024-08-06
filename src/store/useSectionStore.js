import { create } from "zustand";

const useSectionStore = create((set) => ({
  expandedSections: {},
  initializeSections: (sectionIds) =>
    set({
      expandedSections: sectionIds.reduce((acc, id) => {
        acc[id] = false; // Initialize all sections as not expanded
        return acc;
      }, {}),
    }),
  toggleSection: (id) =>
    set((state) => ({
      expandedSections: {
        ...state.expandedSections,
        [id]: !state.expandedSections[id],
      },
    })),
  isExpanded: (id) => (state) => state.expandedSections[id] || false,
  getSectionState: () => (state) => state.expandedSections,
}));

export default useSectionStore;
