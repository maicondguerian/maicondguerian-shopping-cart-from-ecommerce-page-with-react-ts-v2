import { BsCart2 } from "react-icons/bs";
import { Styled } from "@styles/";
import { useCart } from "@/src/data/contexts/cartContext";
import { AddToCartButtomProps } from "../quantity-counter-button";

export type ShoppingCartProps = {
    isCartEmpty: boolean;
} & Pick<AddToCartButtomProps, "onClick">

export default function ShoppingCart({ onClick, isCartEmpty }: ShoppingCartProps) {
    const context = useCart();

    return (
        <Styled.Cart onClick={onClick}>
            <BsCart2 size={25} />
            {!isCartEmpty && (
                <Styled.CartBadge isCartEmpty={isCartEmpty}>{context.cartQuantity}</Styled.CartBadge>
            )}
        </Styled.Cart>
    );
}

