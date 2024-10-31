import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  status: string;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      status: "unauthenticated",

      login: () => {
        set({ status: "authenticated" });
      },

      logout: () => {
        set({ status: "unauthenticated" });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
