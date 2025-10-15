import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Routes/MainContent";
import Layouts from "./components/Custom-Components/Main/Layouts";
import About from "./Routes/About";
import { ThemeProvider } from "./components/Custom-Components/theme/theme-provider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layouts>
            <Routes>
              <Route path="/" Component={Main} />
              <Route path="/about" Component={About} />
            </Routes>
          </Layouts>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
