// import Separator from "@ui/separador";
// import { ImageRenderer } from "../image-renderer";
// import { galleryImages } from "@ui/product-iimages/gallery-images";
// import { AddToCartButtom } from "../quantity-counter-button";
import { Styled } from "@/src/styles";

type CartCheckoutProps = {
    isCheckoutCartOpen: boolean
}

export function CartCheckout({ isCheckoutCartOpen = false }: CartCheckoutProps) {
    return (
        <>
            {
                isCheckoutCartOpen && (
                    <Styled.CheckoutWrapper>
                        d
                    </Styled.CheckoutWrapper>
                )
            }
        </>
    );
}