import { create } from "zustand";
import { createFavouriteSlice, type favProps } from "./favourite.slice";
import { createStarSlice, type StarFnProps } from "./star.slice";

type StoreState = favProps & StarFnProps;

export const useStoer = create<StoreState>((...a) => ({
  ...createFavouriteSlice(...a),
  ...createStarSlice(...a),
}));
