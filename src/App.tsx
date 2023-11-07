import { GlobalStyles } from "@styles/";
import Container from "@ui/container";
import { Outlet } from "react-router-dom";
import Header from "./ui/components/header";
import { useCart } from "./data/contexts/cartContext";
import { useMediaQueries } from "./data/contexts/MediaQueries";

function App() {
  const context = useCart();
  const querieContext = useMediaQueries();

  return (
    <Container
      onClick={() => {
        context.setShowCheckoutCartModal(false);
        querieContext.setShowMediaQuerieSideMenu(false);
      }}>
      <Header />
      <GlobalStyles />
      <Outlet />
    </Container>
  );
}
export default App;