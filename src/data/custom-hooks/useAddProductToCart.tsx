/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from "react";
import PRODUCT from "@/product.json";
import { useItemQuantity2 } from "../contexts/use-item-quantity";

type Product = {
    id: number
    quantity: number
    title: string
    price: number | string
}

export default function useShoppingCart() {
    const [productCartList, setProductCartList] = React.useState<Product[]>([]);
    const { quantity } = useItemQuantity2();

    function addProductToCart() {
        const productIndex = productCartList.findIndex((element) => element.id === PRODUCT.id);
        if (productIndex >= 0) {
            const uptatedProductCart = [...productCartList];
            uptatedProductCart[productIndex] = {
                ...uptatedProductCart[productIndex],
                quantity: uptatedProductCart[productIndex].quantity + quantity
            };
            setProductCartList(uptatedProductCart);
        } else {
            setProductCartList([
                ...productCartList,
                {
                    ...PRODUCT,
                    quantity: quantity
                }
            ]);
        }
    }

    const cartQuantity = productCartList.reduce((total, item) => total + item.quantity, 0);
    console.log(cartQuantity);

    console.log(productCartList);
    return {
        addProductToCart,
        cartQuantity
    };

}
