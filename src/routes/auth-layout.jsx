import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthLayout } from "@/components";
import { storage } from "@/utils";

export const AuthRoute = () => {
  const location = useLocation();

  const token = storage.getToken();

  if (token) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
