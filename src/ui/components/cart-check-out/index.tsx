import Separator from "@ui/separador";
import { ImageRenderer } from "../image-renderer";
// import { galleryImages } from "@ui/product-iimages/gallery-images";
import { AddToCartButtom } from "../quantity-counter-button";
import { useCart } from "@/src/data/contexts/cartContext";
import { Styled } from "@/src/styles";
import { galleryImages } from "../product-iimages/gallery-images";
import { PriceFormatter } from "@/src/data/utils/price-formatter";
// import { galleryImages } from "../product-iimages/gallery-images";

type CartCheckoutProps = {
    isCheckoutCartOpen: boolean
    className: string
}

export function CartCheckout({ isCheckoutCartOpen, className }: CartCheckoutProps) {
    const context = useCart();
    return (
        <>
            {

                <Styled.CheckoutWrapper
                    onClick={(event) => event.stopPropagation()}
                    isCheckoutCartOpen={isCheckoutCartOpen}
                    className={className}
                >
                    <span>Cart</span>
                    <Separator mb="0" />
                    <div>
                        {context.cartQuantity === 0 && (
                            <p>Your cart is empty</p>
                        )}
                        <div>
                            {context.productCartList.map((elem) => (
                                <section key={elem.id} className="essa">
                                    <ul>
                                        <li><ImageRenderer path={galleryImages[0].thumbnailImage} width={70} /></li>
                                        <ul>
                                            <li>{elem.title}</li>
                                            <li>{PriceFormatter.format(elem.price / elem.quantity)} x {elem.quantity} <b>{PriceFormatter.format(elem.price)}</b></li>
                                        </ul>
                                        <li><button onClick={() => context.setProductCartList([])}>lixeira</button></li>
                                    </ul>
                                    <AddToCartButtom
                                        name={"checkout"}
                                    />
                                </section>
                            ))}
                        </div>
                    </div>
                </Styled.CheckoutWrapper>

            }
        </>
    );
}