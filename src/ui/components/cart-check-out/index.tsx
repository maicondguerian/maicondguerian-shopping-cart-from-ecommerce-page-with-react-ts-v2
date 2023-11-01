// import Separator from "@ui/separador";
// import { ImageRenderer } from "../image-renderer";
// import { galleryImages } from "@ui/product-iimages/gallery-images";
// import { AddToCartButtom } from "../quantity-counter-button";
import { Styled } from "@/src/styles";

type CartCheckoutProps = {
    isCheckoutCartOpen: boolean
    className: string
}

export function CartCheckout({ isCheckoutCartOpen, className }: CartCheckoutProps) {
    return (
        <>
            {

                <Styled.CheckoutWrapper
                    onClick={(event) => event.stopPropagation()}
                    isCheckoutCartOpen={isCheckoutCartOpen}
                    className={className}
                >
                    d
                </Styled.CheckoutWrapper>

            }
        </>
    );
}