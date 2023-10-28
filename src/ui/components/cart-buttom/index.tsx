import { BsCart2 } from "react-icons/bs";
import { Styled } from "@styles/";
import useShoppingCart from "@/src/data/custom-hooks/useAddProductToCart";

export interface ShoppingCartProps {
    onClick?: () => void;
    isCartEmpty: boolean;

}
export default function ShoppingCart({ onClick, isCartEmpty }: ShoppingCartProps) {
    const { cartQuantity } = useShoppingCart();

    return (
        <Styled.Cart onClick={onClick}>
            <BsCart2 size={25} />
            {!isCartEmpty && (
                <Styled.CartBadge isCartEmpty={isCartEmpty}>{cartQuantity}</Styled.CartBadge>
            )}
        </Styled.Cart>
    );
}

