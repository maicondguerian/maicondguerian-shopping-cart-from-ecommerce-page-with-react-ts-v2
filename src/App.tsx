import { GlobalStyles } from "@styles/";
import Container from "@ui/container";
import { Outlet } from "react-router-dom";
import Header from "./ui/components/header";
import { useCart } from "./data/contexts/cartContext";
import { useMediaQueries } from "./data/contexts/mediaQueries";
import { Footer } from "./ui/components/footer";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./data/contexts/themeContext";

function App() {
  const context = useCart();
  const querieContext = useMediaQueries();
  const contextTheme = useTheme();

  return (
    <ThemeProvider theme={contextTheme.theme}>
      <Container
        onClick={() => {
          context.setShowCheckoutCartModal(false);
          querieContext.setShowMediaQuerieSideMenu(false);
          querieContext.setShowProfileMenu(false);
        }}>
        <GlobalStyles />
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
export default App;