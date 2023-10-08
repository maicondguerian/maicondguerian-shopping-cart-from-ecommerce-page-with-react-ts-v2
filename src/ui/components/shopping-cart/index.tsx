import { BsCart2 } from "react-icons/bs";
import { Styled } from "../../../styles";

interface ShoppingCartProps {
    onClick: () => void;
    isCartEmpty: boolean;

}
export default function ShoppingCart({ onClick, isCartEmpty }: ShoppingCartProps) {
    return (
        <Styled.Cart onClick={onClick}>
            <BsCart2 size={25} />
            {!isCartEmpty && (
                <Styled.CartBadge>3</Styled.CartBadge>
            )}
        </Styled.Cart>
    );
}