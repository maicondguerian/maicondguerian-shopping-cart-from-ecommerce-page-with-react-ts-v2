import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles";
import Container from "./ui/components/container";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Container />
    </ThemeProvider>
  );
}
export default App;