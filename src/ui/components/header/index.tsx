import { Styled } from "../../../styles";
import Separator from "../separador";
import { Link } from "react-router-dom";
import usePath from "../../../data/custom-hooks/usePath";
import { ImageRenderer } from "../image-renderer";
import avatar from "/public/assets/image-avatar.png";
import logo from "/public/assets/logo.svg";
import ShoppingCart from "../shopping-cart";

export default function Header() {
    const { isCurrentPath } = usePath();

    const count = 0;

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
                            onClick={() => console.log("click")}
                        />
                    </li>
                    <li>
                        <ImageRenderer path={avatar} />
                    </li>
                </ul>
            </Styled.Navbar>
            <Separator width={"90%"} />
        </>
    );
}