import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export const AuthNavigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route index path="/*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};
