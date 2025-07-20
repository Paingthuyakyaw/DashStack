import { create } from "zustand";
import { createFavouriteSlice, type favProps } from "./favourite.slice";

export const useStoer = create<favProps>((...a) => ({
  ...createFavouriteSlice(...a),
}));
