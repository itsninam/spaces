import "./App.scss";
import { Route, Routes } from "react-router-dom";

//Components
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

//Pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Spotlight from "./pages/Spotlight";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Wrapper>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Main>
                <About />
                <Spotlight />
              </Main>
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
