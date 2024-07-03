import { lazyImport } from "@/utils/lazy-import";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "@/routes/auth-layout";
import { ProtectedRoute } from "@/routes/protected-route";

const { LoginFormContainer } = lazyImport(
  () => import("@/pages/login"),
  "LoginFormContainer"
);

const { ForgotPasswordContainer } = lazyImport(
  () => import("@/pages/forgot-password"),
  "ForgotPasswordContainer"
);

const { ResetPasswordContainer } = lazyImport(
  () => import("@/pages/reset-password"),
  "ResetPasswordContainer"
);

const { HomeContainer } = lazyImport(
  () => import("@/pages/home"),
  "HomeContainer"
);

const { QrCodeContainer } = lazyImport(
  () => import("@/pages/qr-code"),
  "QrCodeContainer"
);


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path={"/login"} element={<LoginFormContainer />} />
        <Route
          path={"/forgot-password"}
          element={<ForgotPasswordContainer />}
        />
        <Route path={"/reset-password"} element={<ResetPasswordContainer />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path={"/"} element={<HomeContainer />} />
        <Route path={"/qr-code"} element={<QrCodeContainer/>} />
      </Route>
    </Routes>
  );
};
