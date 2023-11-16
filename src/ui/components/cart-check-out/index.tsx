import Separator from "@ui/separador";
import { ImageRenderer } from "../image-renderer";
import { AddToCartButtom } from "../quantity-counter-button";
import { useCart } from "@/src/data/contexts/cartContext";
import { Styled } from "@/src/styles";
import { PriceFormatter } from "@/src/data/utils/price-formatter";
import { AiOutlineDelete } from "react-icons/ai";
import { ChangeImageButtom as TrashButtom } from "../product-iimages/gallery-imeges-modal";

type CartCheckoutProps = {
    className?: string
    showCheckoutCartModal: boolean
}

export function CartCheckout({ className, showCheckoutCartModal }: CartCheckoutProps) {
    const context = useCart();
    return (
        <>
            {

                <Styled.CheckoutWrapper
                    showCheckoutCartModal={showCheckoutCartModal}
                    onClick={(event) => event.stopPropagation()}
                    className={className}
                >
                    <span>Cart</span>
                    <Separator mb="0" />
                    <div>
                        {context.cartQuantity === 0 && (
                            <p>Your cart is empty</p>
                        )}
                        <>
                            {context.productCartList.map((elem, i) => (
                                <section key={elem.id}>
                                    <ul>
                                        <li><ImageRenderer path={elem.productImage} width={70} /></li>
                                        <ul>
                                            <li>{elem.title}</li>
                                            <li>{PriceFormatter(elem.price)} x {elem.quantity} <strong>{PriceFormatter(elem.price * elem.quantity)}</strong></li>
                                        </ul>
                                        <li><TrashButtom onClick={() => context.removeProductFromCart(i)} icon={AiOutlineDelete} size={23} /> </li>
                                    </ul>
                                    <section>
                                        <div>subtotal:</div>
                                        <div>{PriceFormatter(elem.price * elem.quantity)}</div>
                                    </section>
                                    <Separator width="100%" />
                                    <AddToCartButtom
                                        name={"checkout"}
                                    />
                                </section>
                            ))}
                        </>
                    </div>
                </Styled.CheckoutWrapper >

            }
        </>
    );
}