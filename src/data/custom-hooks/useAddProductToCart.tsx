import * as React from "react";
import PRODUCT from "@/product.json";
import { useItemQuantity } from "@src/data/contexts/use-item-quantity";

type Product = {
    id: number
    quantity: number
}

export default function useShoppingCart() {
    const [productCartList, setProductCartList] = React.useState<Product[]>([]);
    const { quantity } = useItemQuantity();

    function addProductToCart(id: Product) {
        const newProductsCartList = [...productCartList];

        const productIndex = productCartList.findIndex((item) => item.id === PRODUCT.id);

        console.log(productIndex);
    }
    function removeToCart() {

    }

    return {

    };
}
