import { useCart } from "@/src/data/contexts/cartContext";
import { Styled } from "@/src/styles";
import { FaMinus, FaPlus } from "react-icons/fa";

export function QuantityCounterButton() {
    const { itemQuantity, incrementItemQuantity, decrementItemQuantity } = useCart();

    return (
        <Styled.QuantityButtonWrapper>
            <AddToCartButtom icon={FaMinus} OnClick={decrementItemQuantity} />
            <span>{itemQuantity}</span>
            <AddToCartButtom icon={FaPlus} OnClick={incrementItemQuantity} />
        </Styled.QuantityButtonWrapper>
    );
}

export type AddToCartButtomProps = {
    OnClick?: () => void,
    icon: React.ElementType;
    size?: number;
    color?: string;
    name?: string;
}
export function AddToCartButtom({ OnClick, icon: Icon, size, color, name }: AddToCartButtomProps) {
    return <Styled.AddTocartButton onClick={OnClick}>{Icon ? <Icon size={size} color={color} /> : <></>}{name}</Styled.AddTocartButton>;
}