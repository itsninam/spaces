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
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import Spaces from "./components/Spaces";
import menuItems from "./data/menuItems";
import Footer from "./pages/Footer";

function App() {
  return (
    <Wrapper>
      <Navigation menuItems={menuItems} className="top-nav">
        <Spaces />
      </Navigation>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Main>
                <About />
                <Spotlight />
                <Feedback />
              </Main>
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
