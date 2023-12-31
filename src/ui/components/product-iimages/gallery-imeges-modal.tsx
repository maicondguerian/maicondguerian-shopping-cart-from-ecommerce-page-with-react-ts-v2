import { Styled } from "@/src/styles";

import { AddToCartButtomProps } from "../quantity-counter-button";

type FullsizeImageModalProps = {
    getSelectedImage?: number | null;
    getSetSelectImage?: React.Dispatch<React.SetStateAction<number | null>>
    isOpen: boolean | React.MutableRefObject<boolean>;
    getCloseModalFunciton?: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

export function FullsizeImageModal({
    isOpen = false,
    children }
    : FullsizeImageModalProps) {

    return (
        isOpen && (
            <Styled.Overlay>
                <Styled.Modal>
                    {children}
                </Styled.Modal>
            </Styled.Overlay>
        )
    );
}

type ChangeImageButtomProps = Omit<AddToCartButtomProps, "name">;

export function ChangeImageButtom({ icon: Icon, onClick, color, size, }: ChangeImageButtomProps) {
    return (<Styled.ImageChangerButton onClick={onClick}> {Icon ? <Icon size={size} color={color} /> : <></>} </Styled.ImageChangerButton>

    );
}