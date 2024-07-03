import "./App.css";
import { AppProvider } from "./provider/app-provider";
import { AppRoutes } from "./routes";
import "@/mocks";

// eslint-disable-next-line react/prop-types
function App() {
  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
}

export default App;
