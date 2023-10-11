import PRODUCT from "@/product.json";
import { Styled } from "@/src/styles";
import { AddToCartButtom, QuantityCounterButton } from "../quantity-counter-button";
import { BsCart2 } from "react-icons/bs";
import ShoppingCart from "../shopping-cart";

export default function ProductDetails() {
    return (
        <Styled.ProductWrapper>
            <span>{PRODUCT.brand}</span>
            <h1>{PRODUCT.title}</h1>
            <p>{PRODUCT.description}</p>
            <ul>
                <span>{PRODUCT.brand}</span>
                <li>{PRODUCT.price}</li>
                <li>{PRODUCT.price * 2}</li>
            </ul>
            <ul>
                <li><QuantityCounterButton /></li>
                <li><AddToCartButtom icon={BsCart2} /></li>
                <li><ShoppingCart
                    isCartEmpty={true}
                />
                </li>
            </ul>
        </Styled.ProductWrapper >
    );
}