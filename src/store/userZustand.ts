import { create } from "zustand";
import { AuthStoreInterface, IUser } from "./store.interface";

export const useAuthStore = create<AuthStoreInterface>((set) => ({
  isLoggedIn: false,
  user: {} as IUser,
  setIsLoggedIn: (val) => set(() => ({ isLoggedIn: val })), // function to set the authentication status
  setUser: (user) => set({ user }), // function to set user information
}));
