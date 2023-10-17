import { useItemQuantity } from "@/src/data/contexts/use-item-quantity";
import { Styled } from "@/src/styles";
import { FaMinus, FaPlus } from "react-icons/fa";

export function QuantityCounterButton() {
    const { quantity, decrementQuantity, incrementQuantity } = useItemQuantity();
    return (
        <Styled.QuantityButtonWrapper>
            <AddToCartButtom icon={FaMinus} OnClick={decrementQuantity} />
            <span>{quantity}</span>
            <AddToCartButtom icon={FaPlus} OnClick={incrementQuantity} />
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