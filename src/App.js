import styled, { createGlobalStyle } from "styled-components";
import Logo from "./Logo";
import HeaderText from "./HeaderTxt";
import Searcher from "./Searcher";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Logo alt="new" fill="none" stroke="white" />
      <AppHeader>
        <HeaderText />
      </AppHeader>
      <Searcher />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  text-align: center;
  overflow-x: hidden;
  height: 100vh;
  color: white;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background-color: #282c34;
  }
`;

const AppHeader = styled.header`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
