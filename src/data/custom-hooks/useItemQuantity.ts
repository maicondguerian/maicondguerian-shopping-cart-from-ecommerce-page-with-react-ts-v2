import * as React from "react";

export function useItemQuantity() {
    const [itemQuantity, setItemQuantity] = React.useState(0);

    function incrementItemQuantity() {
        setItemQuantity((prevState) => prevState + 1);
    }
    function decrementItemQuantity() {
        if (itemQuantity > 0) {
            setItemQuantity((prevState) => prevState - 1);
        }
    }

    return {
        quantity: itemQuantity,
        incrementItemQuantity,
        decrementItemQuantity,
        setItemQuantity
    };

}