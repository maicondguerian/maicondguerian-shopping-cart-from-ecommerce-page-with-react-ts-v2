import { useCart } from "@/src/data/contexts/cartContext";
import { Styled } from "@/src/styles";
import { FaMinus, FaPlus } from "react-icons/fa";

export function QuantityCounterButton() {
    const { itemQuantity, incrementItemQuantity, decrementItemQuantity } = useCart();

    return (
        <Styled.QuantityButtonWrapper>
            <AddToCartButtom icon={FaMinus} onClick={decrementItemQuantity} />
            <span>{itemQuantity}</span>
            <AddToCartButtom icon={FaPlus} onClick={incrementItemQuantity} />
        </Styled.QuantityButtonWrapper>
    );
}

export type AddToCartButtomProps = {
    icon?: React.ElementType;
    size?: number;
    color?: string;
    name?: string;
} & React.HtmlHTMLAttributes<HTMLButtonElement>
export function AddToCartButtom({ onClick, icon: Icon, size, color, name, ...rest }: AddToCartButtomProps) {
    return <Styled.AddTocartButton onClick={onClick} {...rest}>{Icon ? <Icon size={size} color={color} /> : <></>}{name}</Styled.AddTocartButton>;
}