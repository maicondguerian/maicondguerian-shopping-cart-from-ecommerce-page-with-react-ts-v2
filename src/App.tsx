import { ThemeProvider } from "styled-components";
import Header from "./ui/components/header";
import { LightTheme } from "./styles";


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Header />
    </ThemeProvider>
  )
}
export default App;