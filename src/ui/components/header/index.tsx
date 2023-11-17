import * as React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BiSolidMoon, BiSun, BiUser } from "react-icons/bi";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { IoIosArrowDown } from "react-icons/io";
import { Styled } from "@styles/";
import { HiOutlineHome } from "react-icons/hi";
import Separator from "@ui/separador";
import usePath from "@src/data/custom-hooks/usePath";
import { ImageRenderer } from "@ui/image-renderer";
import avatar from "@src/assets/image-avatar.png";
import ShoppingCart from "@/src/ui/components/cart-buttom";
import { useCart } from "@/src/data/contexts/cartContext";
import { CartCheckout } from "@ui/cart-check-out";
import SidebarHeader from "@ui/header/sidebar-header";
import { useMediaQueries } from "@src/data/contexts/mediaQueries";
import AccountMenu from "@ui/profile-menu";
import CustomButtom from "@/src/ui/components/CustomButtom";
import { useTheme } from "@/src/data/contexts/themeContext";
import { Logo } from "@ui/header/svg-treatment";

export function Header() {
    const context = useCart();
    const mediaContext = useMediaQueries();
    const [prevCartQuantity, setPrevCartQuantity] = React.useState(context.cartQuantity);
    const [showMenuTheme, setShowMenuTheme] = React.useState(false);
    const contextTheme = useTheme();

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
            <Styled.Navbar settings={mediaContext.showProfileMenu}>
                <SidebarHeader
                    className={mediaContext.showMediaQuerieSideMenu ? "toggleOpenSideBar" : "toggleCloseSideBar"}
                    isOpen={mediaContext.showMediaQuerieSideMenu}
                    onClick={(event) => event.stopPropagation()}
                >
                    <MenuLinks />
                </SidebarHeader >
                <header>
                    <ul>
                        <li onClick={(event) => {
                            mediaContext.toggleSideMenu();
                            event.stopPropagation();
                        }} />
                        <li>
                            <Link to={"/"}>
                                <Logo />
                            </Link>
                        </li>
                    </ul>
                    <MenuLinks />
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
                        <CustomButtom
                            icon={IoIosArrowDown}
                            size={21}
                            onClick={(event) => {
                                event.stopPropagation();
                                mediaContext.setShowProfileMenu((prevState) => !prevState);
                            }}
                        />
                        <AccountMenu
                            isOpen={mediaContext.showProfileMenu}
                        >
                            <ul>
                                <li><CustomButtom icon={HiOutlineHome} size={22} name="home" /></li>
                                <Separator />
                                <li><CustomButtom icon={BiUser} size={22} name="profile" /></li>
                                <Separator />
                                <li
                                    onMouseEnter={() => setShowMenuTheme(true)}
                                    onMouseLeave={() => setShowMenuTheme(false)}
                                >
                                    <CustomButtom icon={BiSun} size={22} name="theme" />
                                </li>
                                <Separator />
                                <li><CustomButtom icon={FiLogOut} size={22} name="sign out" /></li>
                                {showMenuTheme && (
                                    <ul
                                        onMouseEnter={() => setShowMenuTheme(true)}
                                        onMouseLeave={() => setShowMenuTheme(false)}
                                    >
                                        <li><CustomButtom icon={BiSolidMoon} size={22} name="dark" onClick={contextTheme.toggleDark} /></li>
                                        <Separator />
                                        <li><CustomButtom icon={BiSun} size={22} name="light" onClick={contextTheme.toggleLight} /></li>
                                        <Separator />
                                        <li><CustomButtom icon={WiMoonAltWaningCrescent2} size={22} name="system" onClick={contextTheme.toggleLight} /></li>
                                    </ul>
                                )}
                            </ul>
                        </AccountMenu>

                    </li>
                </ul>
                <CartCheckout
                    showCheckoutCartModal={context.showCheckoutCartModal}
                />
            </Styled.Navbar>
            <Separator width="70%" align="center" />
        </>
    );
}

export function MenuLinks() {
    const { isCurrentPath } = usePath();

    return (
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
    );
}