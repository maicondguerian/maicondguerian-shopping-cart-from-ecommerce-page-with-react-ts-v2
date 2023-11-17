import { useMediaQueries } from "@src/data/contexts/mediaQueries";
import { GlobalStyles } from "@styles/";
import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import { Container } from "@ui/container";
import { Header } from "@ui/header";
import { useCart } from "@src/data/contexts/cartContext";
import { Footer } from "@ui/footer";
import { useTheme } from "@src/data/contexts/themeContext";

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