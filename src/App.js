import "./App.scss";

//Components
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

//Pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Spotlight from "./pages/Spotlight";

function App() {
  return (
    <Wrapper>
      <LandingPage />
      <Main>
        <About />
        <Spotlight />
      </Main>
    </Wrapper>
  );
}

export default App;
