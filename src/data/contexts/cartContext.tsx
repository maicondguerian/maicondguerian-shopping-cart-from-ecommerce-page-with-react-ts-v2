import * as React from "react";
import PRODUCT from "@/product.json";

type Product = {
    id: number
    quantity: number
    title: string
    price: number
    originalPrice: number
    productImage: string
}

export type CartContextProps = {
    itemQuantity: number
    setItemQuantity: React.Dispatch<React.SetStateAction<number>>
    incrementItemQuantity: () => void
    decrementItemQuantity: () => void
    addProductToCart: () => void
    removeProductFromCart: (_arg: number) => void
    cartQuantity: number
    productCartList: Array<Product>
    setProductCartList: React.Dispatch<React.SetStateAction<Product[]>>
    showCheckoutCartModal: boolean
    setShowCheckoutCartModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const CartContext = React.createContext({} as CartContextProps);

type CartProviderProps = {
    children: React.ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
    const [itemQuantity, setItemQuantity] = React.useState(0);
    const [productCartList, setProductCartList] = React.useState<Product[]>([{ id: 10, originalPrice: 3000.00, price: 2735.00, quantity: 1, title: "iPhone11", productImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQ1ylVrNN8l2tSx4s-NdfZGxXMkrNzryD98fOpt09jqlhmHDffnulI-7NIPXjxZeRfPdt5EnXm0_wj7fxMuAXKR_gaF9qDP0K2Nn626a0Cb4pciY3RuygLXAOzZhGG0Hh7xVKTpR8&usqp=CAc" }, { id: 11, originalPrice: 3000.00, price: 2735.00, quantity: 1, title: "iPhone11", productImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQ1ylVrNN8l2tSx4s-NdfZGxXMkrNzryD98fOpt09jqlhmHDffnulI-7NIPXjxZeRfPdt5EnXm0_wj7fxMuAXKR_gaF9qDP0K2Nn626a0Cb4pciY3RuygLXAOzZhGG0Hh7xVKTpR8&usqp=CAc" }]);
    const [showCheckoutCartModal, setShowCheckoutCartModal] = React.useState(false);

    function addProductToCart() {
        const { title, id } = PRODUCT;
        const productIndex = productCartList.findIndex((element) => element.id === PRODUCT.id);
        if (productIndex >= 0 && itemQuantity !== 0) {
            const uptatedProductCart = [...productCartList];
            uptatedProductCart[productIndex] = {
                ...uptatedProductCart[productIndex],
                quantity: uptatedProductCart[productIndex]?.quantity + itemQuantity,
                price: uptatedProductCart[productIndex]?.price + PRODUCT.price * itemQuantity
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
                    price: PRODUCT.price * itemQuantity,
                    originalPrice: 125,
                    productImage: ""
                }
            ]);
        }
        setItemQuantity(0);
    }
    productCartList;
    const cartQuantity = productCartList.reduce((total, item) => total + item.quantity, 0);

    function removeProductFromCart(arg: number) {
        const newProductList = [...productCartList];
        newProductList.splice(arg, 1);
        setProductCartList(newProductList);
    }

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
            setProductCartList,
            showCheckoutCartModal,
            setShowCheckoutCartModal,
            removeProductFromCart

        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = React.useContext(CartContext);
    return context;
}