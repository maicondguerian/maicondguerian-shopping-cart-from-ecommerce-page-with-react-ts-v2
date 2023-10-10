import { ThemeProvider } from "styled-components";
import { GlobalStyles, LightTheme } from "@/styles";
import Container from "@ui/container";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Container />
    </ThemeProvider>
  );
}
export default App;