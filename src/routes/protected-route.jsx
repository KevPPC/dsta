import { MainLayout } from "@/components/layout/main-layout";
import { useGetProfile } from "@/hooks";
import { useProfileStore } from "@/stores";
import { storage } from "@/utils";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  useGetProfile();
  const { profile } = useProfileStore();
  const location = useLocation();

  const token = storage.getToken();

  if (!token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  if (profile) {
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    );
  }

  return <h1>Loading...</h1>;
};
