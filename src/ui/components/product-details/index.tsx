import PRODUCT from "@/product.json";
import { Styled } from "@/src/styles";
import { AddToCartButtom, QuantityCounterButton } from "../quantity-counter-button";
import { BsCart2 } from "react-icons/bs";
import { PriceFormatter } from "@/src/data/utils/price-formatter";

export default function ProductDetails() {
    return (
        <Styled.ProductWrapper>
            <span>{PRODUCT.brand}</span>
            <h1>{PRODUCT.title}</h1>
            <p>{PRODUCT.description}</p>
            <div>
                <p>{PriceFormatter.format(PRODUCT.price)}</p>
                <p>50%</p>
            </div>
            <span>{PriceFormatter.format(PRODUCT.price * 2)}</span>
            <ul>
                <li><QuantityCounterButton /></li>
                <li><AddToCartButtom icon={BsCart2} size={22} name={"Add to cart"} /></li>
            </ul>
        </Styled.ProductWrapper >
    );
}