import type { StateCreator } from "zustand";

export interface cardDataProps {
  id: number;
  name: string;
  price: string;
  rating: number;
  img: string;
}

export interface favProps {
  card: cardDataProps[];

  setCard: (data: cardDataProps) => void;
}

export const createFavouriteSlice: StateCreator<favProps> = (set) => {
  const localCard = localStorage.getItem("fav")
    ? JSON.parse(localStorage.getItem("fav") as string)
    : [];
  return {
    card: localCard,
    setCard: (data) =>
      set((state) => {
        const filter = state.card.some((da) => da.id === data.id)
          ? state.card.filter((da) => da.id !== data.id)
          : [...state.card, data];
        localStorage.setItem("fav", JSON.stringify(filter));
        return {
          card: filter,
        };
      }),
  };
};
