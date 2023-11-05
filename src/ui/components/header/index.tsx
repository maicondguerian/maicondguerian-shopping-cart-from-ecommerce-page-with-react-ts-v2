import * as React from "react";
import { Link } from "react-router-dom";
import { Styled } from "@styles/";
import Separator from "@ui/separador";
import usePath from "@src/data/custom-hooks/usePath";
import { ImageRenderer } from "@ui/image-renderer";
import avatar from "@/public/assets/image-avatar.png";
import logo from "@/assets/logo.svg";
import ShoppingCart from "@/src/ui/components/cart-buttom";
import { useCart } from "@/src/data/contexts/cartContext";
import { CartCheckout } from "../cart-check-out";

export default function Header() {
    const { isCurrentPath } = usePath();
    const context = useCart();
    const [prevCartQuantity, setPrevCartQuantity] = React.useState(context.cartQuantity);

    React.useEffect(() => {
        if (context.cartQuantity !== prevCartQuantity) {
            setPrevCartQuantity(context.cartQuantity);
        }
    }, [context.cartQuantity, prevCartQuantity]);

    function checkCartQuantity() {
        if (context.cartQuantity === 0) return true;
        return context.cartQuantity > prevCartQuantity;
    }

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
                            isCartEmpty={checkCartQuantity()}
                            onClick={(event) => {
                                context.setShowCheckoutCartModal((prevState) => !prevState);
                                event.stopPropagation();
                            }}
                        />
                    </li>
                    <li>
                        <ImageRenderer path={avatar} />
                    </li>
                </ul>
                <CartCheckout
                    isCheckoutCartOpen={true}
                    className={context.showCheckoutCartModal ? "toggleOpenCheckoutCart" : "toggleHideCheckoutCart"}
                />
            </Styled.Navbar>
            <Separator width="70%" mb={"0"} />
        </>
    );
}