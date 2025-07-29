import type { StateCreator } from "zustand";

interface starProp {
  id: number;
  name: string;
  type: string;
  description: string;
  date: string;
}

export interface StarFnProps {
  star: starProp[];
  setStar: (star: starProp) => void;
}

export const createStarSlice: StateCreator<StarFnProps> = (set) => {
  const starLocal = localStorage.getItem("star")
    ? JSON.parse(localStorage.getItem("star") as string)
    : [];
  return {
    star: starLocal,
    setStar: (data) =>
      set((state) => {
        const starCard = state.star.some((item) => item.id === data.id)
          ? state.star.filter((item) => item.id !== data.id)
          : [...state.star, data];
        localStorage.setItem("star", JSON.stringify(starCard));
        return {
          star: starCard,
        };
      }),
  };
};
