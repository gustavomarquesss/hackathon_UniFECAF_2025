import { create } from "zustand";

interface RouteLoadingState {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const useRouteLoading = create<RouteLoadingState>((set) => ({
  isLoading: false,
  setLoading: (value) => set({ isLoading: value }),
}));
