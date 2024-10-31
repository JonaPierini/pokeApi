import { Route, Routes } from "react-router-dom";
import { AuthNavigation } from "./AuthNavigation";
import { AppNavigation } from "./AppNavigation";
import { useAuthStore } from "../store/useAuthStore";

export const AppRouter = () => {
  const { status } = useAuthStore();
  return (
    <Routes>
      {status === "unauthenticated" ? (
        <>
          <Route path="/*" element={<AuthNavigation />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<AppNavigation />} />
        </>
      )}
    </Routes>
  );
};
