import "./App.scss";

//Components
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

//Pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";

function App() {
  return (
    <Wrapper>
      <LandingPage />
      <Main>
        <About />
      </Main>
    </Wrapper>
  );
}

export default App;
