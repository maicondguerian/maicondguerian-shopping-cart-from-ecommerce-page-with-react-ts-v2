import { GlobalStyles } from "@styles/";
import Container from "@ui/container";
import { Outlet } from "react-router-dom";
import Header from "./ui/components/header";
import { useCart } from "./data/contexts/cartContext";

function App() {
  const context = useCart();

  return (
    <Container
      onClick={() => {
        context.setShowCheckoutCartModal(false);
      }}>
      <Header />
      <GlobalStyles />
      <Outlet />
    </Container>
  );
}
export default App;