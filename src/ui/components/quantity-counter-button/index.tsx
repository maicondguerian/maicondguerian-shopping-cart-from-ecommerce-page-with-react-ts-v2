import { Styled } from "@/src/styles";
import { FaMinus, FaPlus } from "react-icons/fa";

type QuantityCounterButtonProps = {
    value?: number;
}
export function QuantityCounterButton({ value = 0 }: QuantityCounterButtonProps) {
    return (
        <Styled.QuantityButtonWrapper>
            <AddToCartButtom icon={FaMinus} />
            <span>{value}</span>
            <AddToCartButtom icon={FaPlus} />
        </Styled.QuantityButtonWrapper>
    );
}

type AddToCartButtomProps = {
    OnClick?: () => void,
    icon: React.ElementType;
    size?: number;
    color?: string;
    name?: string;
}
export function AddToCartButtom({ OnClick, icon: Icon, size, color, name }: AddToCartButtomProps) {
    return <Styled.AddTocartButton onClick={OnClick}>{Icon ? <Icon size={size} color={color} /> : <></>}{name}</Styled.AddTocartButton>;
}