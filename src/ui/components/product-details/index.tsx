import PRODUCT from "@/product.json";
import { Styled } from "@/src/styles";
import { AddToCartButtom, QuantityCounterButton } from "../quantity-counter-button";
import { BsCart2 } from "react-icons/bs";
import { PriceFormatter } from "@/src/data/utils/price-formatter";
import { useCart } from "@/src/data/contexts/cartContext";

export default function ProductDetails() {
    const context = useCart();
    const amountPriceFormat = ["$"].concat(PriceFormatter(PRODUCT.price).replace(/[^0-9.,]/g, "").split("."));

    const [dollarSign, integerPart, fractionPart] = amountPriceFormat;
    return (
        <Styled.ProductWrapper>
            <span>{PRODUCT.brand}</span>
            <h1>{PRODUCT.title}</h1>
            <p>{PRODUCT.description}</p>
            <div>
                <div>
                    <span>{dollarSign}</span>
                    <span>{integerPart}</span>
                    <span>{fractionPart}</span>
                </div>
                <p>-50%</p>
            </div>
            <span>{PriceFormatter(PRODUCT.price * 2)}</span>
            <ul>
                <li><QuantityCounterButton /></li>
                <li>
                    <AddToCartButtom
                        icon={BsCart2}
                        size={22}
                        name={"Add to cart"}
                        onClick={context.addProductToCart}
                    />
                </li>
            </ul>
        </Styled.ProductWrapper >
    );
}

// import PRODUCT from "@/product.json";
// import { Styled } from "@/src/styles";
// import { AddToCartButtom, QuantityCounterButton } from "../quantity-counter-button";
// import { BsCart2 } from "react-icons/bs";
// import { PriceFormatter } from "@/src/data/utils/price-formatter";
// import { useCart } from "@/src/data/contexts/cartContext";

// export default function ProductDetails() {
//     const context = useCart();

//     const amountPriceFormat = ["$"].concat(PriceFormatter(PRODUCT.price).replace(/[^0-9.,]/g, "").split("."));

//     const [dollarSign, integerPart, fractionPart] = amountPriceFormat;

//     console.log(amountPriceFormat);

//     return (
//         <Styled.ProductWrapper>
//             <span>{PRODUCT.brand}</span>
//             <h1>{PRODUCT.title}</h1>
//             <p>{PRODUCT.description}</p>
//             <section>
//                 <div><span>{dollarSign}</span>
//                     <span>{integerPart}</span>
//                     <span>{fractionPart}</span>
//                 </div>
//                 <p>-50%</p>
//             </section>
//             <span>{PriceFormatter(PRODUCT.price * 2)}</span>
//             <ul>
//                 <li><QuantityCounterButton /></li>
//                 <li>
//                     <AddToCartButtom
//                         icon={BsCart2}
//                         size={22}
//                         name={"Add to cart"}
//                         onClick={context.addProductToCart}
//                     />
//                 </li>
//             </ul>
//         </Styled.ProductWrapper >
//     );
// }