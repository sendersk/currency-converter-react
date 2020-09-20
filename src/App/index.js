import React from "react";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { Wrapper } from "./styled";
import { SwitchTheme } from "./SwitchTheme";
import { theme, darkTheme } from "../theme";
import { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./themeSlice";

function App() {
  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <Wrapper>
        <SwitchTheme />
        <Clock />
        <Form />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
