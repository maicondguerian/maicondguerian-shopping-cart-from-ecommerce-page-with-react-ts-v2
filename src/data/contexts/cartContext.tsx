import * as React from "react";
import PRODUCT from "@/product.json";

type CartContextProps = {
    itemQuantity: number
    setItemQuantity: React.Dispatch<React.SetStateAction<number>>
    incrementItemQuantity: () => void
    decrementItemQuantity: () => void
    addProductToCart: () => void
    cartQuantity: number
    productCartList: Array<object>
    showCheckoutCartModal: boolean
    setShowCheckoutCartModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const CartContext = React.createContext({} as CartContextProps);

type CartProviderProps = {
    children: React.ReactNode
}

type Product = {
    id: number
    quantity: number
    title: string
    price: number
}
export function CartProvider({ children }: CartProviderProps) {
    const [itemQuantity, setItemQuantity] = React.useState(0);
    const [productCartList, setProductCartList] = React.useState<Product[]>([]);
    const [showCheckoutCartModal, setShowCheckoutCartModal] = React.useState(false);

    function addProductToCart() {
        const { title, id } = PRODUCT;
        const productIndex = productCartList.findIndex((element) => element.id === PRODUCT.id);
        if (productIndex >= 0 && itemQuantity !== 0) {
            const uptatedProductCart = [...productCartList];
            uptatedProductCart[productIndex] = {
                ...uptatedProductCart[productIndex],
                quantity: uptatedProductCart[productIndex]?.quantity + itemQuantity,
                price: uptatedProductCart[productIndex]?.price + (PRODUCT.price * itemQuantity)
            };
            setProductCartList(uptatedProductCart);
        }
        else if (productIndex <= 0 && itemQuantity !== 0) {
            setProductCartList([
                ...productCartList,
                {
                    id,
                    title,
                    quantity: itemQuantity,
                    price: (PRODUCT.price * itemQuantity)
                }
            ]);
        }

        setItemQuantity(0);
    }

    const cartQuantity = productCartList.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            decrementItemQuantity: () => {
                if (itemQuantity > 0) {
                    setItemQuantity((prevState) => prevState - 1);
                }
            },
            incrementItemQuantity: () => {
                setItemQuantity((prevState) => prevState + 1);
            },
            itemQuantity,
            setItemQuantity,
            addProductToCart,
            cartQuantity,
            productCartList,
            showCheckoutCartModal,
            setShowCheckoutCartModal

        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = React.useContext(CartContext);
    return context;
}