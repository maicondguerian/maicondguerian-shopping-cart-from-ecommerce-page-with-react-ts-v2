import * as React from "react";
import { Link } from "react-router-dom";
import { Styled } from "@styles/";
import Separator from "@ui/separador";
import usePath from "@src/data/custom-hooks/usePath";
import { ImageRenderer } from "@ui/image-renderer";
import avatar from "@src/assets/image-avatar.png";
import logo from "@/src/assets/logo.svg";
import ShoppingCart from "@/src/ui/components/cart-buttom";
import { useCart } from "@/src/data/contexts/cartContext";
import { CartCheckout } from "../cart-check-out";
import SidebarHeader from "./sidebar-header";
import { useMediaQueries } from "@/src/data/contexts/MediaQueries";

export default function Header() {
    const { isCurrentPath } = usePath();
    const context = useCart();
    const mediaContext = useMediaQueries();
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
                <SidebarHeader
                    className={mediaContext.showMediaQuerieSideMenu ? "toggleOpenSideBar" : "toggleCloseSideBar"}
                    isOpen={mediaContext.showMediaQuerieSideMenu && mediaContext.showMobileImageDisplay}
                />
                <header>
                    <ul>
                        <li onClick={mediaContext.toggleSideMenu} />
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