import Separator from "@ui/separador";
// import { ImageRenderer } from "../image-renderer";
// import { galleryImages } from "@ui/product-iimages/gallery-images";
// import { AddToCartButtom } from "../quantity-counter-button";
import { Styled } from "@/src/styles";

export function CartCheckout() {
    return (
        <Styled.CheckoutWrapper>
            <div>
                <h3>Cart</h3>
            </div>
            <Separator width="100%" mb="20px" />
        </Styled.CheckoutWrapper>
    );
}