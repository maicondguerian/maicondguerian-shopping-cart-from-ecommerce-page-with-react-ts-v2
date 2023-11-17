import { AiOutlineDelete } from "react-icons/ai";
import Separator from "@ui/separador";
import { ImageRenderer } from "@ui/image-renderer";
import { AddToCartButtom } from "@ui/quantity-counter-button";
import { useCart } from "@/src/data/contexts/cartContext";
import { Styled } from "@/src/styles";
import { PriceFormatter } from "@/src/data/utils/price-formatter";
import CustomButtom from "@ui/CustomButtom";

type CartCheckoutProps = {
    className?: string
    showCheckoutCartModal: boolean
}

export function CartCheckout({ className, showCheckoutCartModal }: CartCheckoutProps) {
    const context = useCart();

    const getSubTotal = context.productCartList.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <Styled.CheckoutWrapper
            showCheckoutCartModal={showCheckoutCartModal}
            onClick={(event) => event.stopPropagation()}
            className={className}
        >
            <span>Cart</span>
            <Separator />
            <div>
                {context.cartQuantity === 0 && (
                    <p>Your cart is empty</p>
                )}
                {context.productCartList.map((elem, i) => (
                    <section key={elem.id}>
                        <ul>
                            <li><ImageRenderer path={elem.productImage} width={70} /></li>
                            <ul>
                                <li>{elem.title}</li>
                                <li>{PriceFormatter(elem.price)} x {elem.quantity} <strong>{PriceFormatter(elem.price * elem.quantity)}</strong></li>
                            </ul>
                            <li><CustomButtom onClick={() => context.removeProductFromCart(i)} icon={AiOutlineDelete} size={23} /> </li>
                        </ul>
                        <Separator width="100%" style={{ height: "1px" }} />
                    </section>
                ))}
                {context.productCartList.length > 0 && (
                    <div>
                        <section>
                            <div>subtotal:</div>
                            <div>{PriceFormatter(getSubTotal)}</div>
                        </section>
                        <Separator width="100%" style={{ width: "calc(100% + 1rem)" }} />
                        <AddToCartButtom
                            name={"checkout"}
                        />
                    </div>
                )}
            </div>
        </Styled.CheckoutWrapper >
    );
}