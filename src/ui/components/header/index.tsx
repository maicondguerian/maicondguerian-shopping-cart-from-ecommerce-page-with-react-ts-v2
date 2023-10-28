import { Link } from "react-router-dom";
import { Styled } from "@styles/";
import Separator from "@ui/separador";
import usePath from "@src/data/custom-hooks/usePath";
import { ImageRenderer } from "@ui/image-renderer";
import avatar from "@/public/assets/image-avatar.png";
import logo from "@/public/assets/logo.svg";
import ShoppingCart from "@/src/ui/components/cart-buttom";
import useShoppingCart from "@/src/data/custom-hooks/useAddProductToCart";

export default function Header() {
    const { isCurrentPath } = usePath();
    const { cartQuantity } = useShoppingCart();
    console.log(cartQuantity);

    const count = 2;

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
                            isCartEmpty={count < 1}
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