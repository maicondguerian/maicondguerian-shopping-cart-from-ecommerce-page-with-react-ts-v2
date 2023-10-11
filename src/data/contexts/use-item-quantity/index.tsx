import * as React from "react";

export function useItemQuantity() {

    const [state, dispatch] = React.useReducer((state: { quantity: number; }, action: { type: string }) => {
        switch (action.type) {
            case "increment":
                return { quantity: state.quantity + 1 };
            case "decrement":
                return { quantity: state.quantity - 1 };
            default:
                throw new Error("Error in switch");
        }
    }, {
        quantity: 0
    });

    const quantity = state.quantity;

    function incrementQuantity() {
        dispatch({ type: "increment" });
    }
    function decrementQuantity() {
        if (quantity > 0) {
            dispatch({ type: "decrement" });
        }
    }

    return { quantity, incrementQuantity, decrementQuantity };
}