import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { theme } from "@/themes";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Some thing went wrong</h2>
    </div>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <React.Suspense>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                <Router>{children}</Router>
              </QueryClientProvider>
            </HelmetProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
