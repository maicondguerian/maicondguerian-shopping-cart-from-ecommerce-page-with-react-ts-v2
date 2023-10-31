import { Link } from "react-router-dom";
import { Styled } from "@styles/";
import Separator from "@ui/separador";
import usePath from "@src/data/custom-hooks/usePath";
import { ImageRenderer } from "@ui/image-renderer";
import avatar from "@/public/assets/image-avatar.png";
import logo from "@/public/assets/logo.svg";
import ShoppingCart from "@/src/ui/components/cart-buttom";
import { useCart } from "@/src/data/contexts/cartContext";

export default function Header() {
    const { isCurrentPath } = usePath();
    const context = useCart();

    return (
        <>
            <Styled.Navbar>
                <header>
                    <ul>
                        <li />
                        <li>
                            <Link to={"/"}><ImageRenderer path={logo} /></Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={isCurrentPath("/collections") ? "currentPage" : "regularStyle"}
                        >
                            <Link to={"/collections"}> collections</Link>
                        </li>
                        <li>men</li>
                        <li>woman</li>
                        <li>about us</li>
                        <li>contact</li>
                    </ul>
                </header>
                <ul>
                    <li>
                        <ShoppingCart
                            isCartEmpty={context.cartQuantity < 1}
                        />
                    </li>
                    <li>
                        <ImageRenderer path={avatar} />
                    </li>
                </ul>
            </Styled.Navbar>
            <Separator width="70%" />
        </>
    );
}