import { Styled } from "@/src/styles";
import { ImageRenderer } from "../image-renderer";
import { galleryImages } from "./gallery-images";
import { AddToCartButtomProps } from "../quantity-counter-button";

import { useEffect } from "react";

type FullsizeImageModalProps = {
    getSelectedImage?: number | null;
    getSetSelectImage?: React.Dispatch<React.SetStateAction<number | null>>
    isOpen: boolean;
    getCloseModalFunciton?: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

export function FullsizeImageModal({
    getSelectedImage,
    getSetSelectImage,
    isOpen = false,
    getCloseModalFunciton,
    children }
    : FullsizeImageModalProps) {

    return (
        isOpen && (
            <>
                <Styled.Modal>
                    {children}
                </Styled.Modal>
            </>
        )
    );
}

type ChangeImageButtomProps = Omit<AddToCartButtomProps, "name">;

export function ChangeImageButtom({ icon: Icon, onClick, color, size, }: ChangeImageButtomProps) {
    return (<Styled.ImageChangerButton onClick={onClick}> {Icon ? <Icon size={size} color={color} /> : <></>} </Styled.ImageChangerButton>

    );
}