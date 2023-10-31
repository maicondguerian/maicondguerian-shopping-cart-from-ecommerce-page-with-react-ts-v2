import { BsCart2 } from "react-icons/bs";
import { Styled } from "@styles/";
import { useCart } from "@/src/data/contexts/cartContext";

export interface ShoppingCartProps {
    onClick?: () => void;
    isCartEmpty: boolean;

}
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

