import * as React from "react";

type ItemCounterContextProps = {
    incrementItemQuantity: () => void
    decrementItemQuantity: () => void
    quantity: number
}
export const ItemCounterContext = React.createContext({} as ItemCounterContextProps);

export function ItemContextProvider2({ children }: { children: React.ReactNode }) {

    const [state, dispatch] = React.useReducer((state: { quantity: number; }, action: { type: string }) => {
        switch (action.type) {
            case "increment":
                return { quantity: state.quantity + 1 };
            case "decrement":
                return { quantity: state.quantity - 1 };
            default:
                throw new Error("Error in swith case");
        }
    }, {
        quantity: 0
    });

    const quantity = state.quantity;

    function incrementItemQuantity() {
        dispatch({ type: "increment" });
    }
    function decrementItemQuantity() {
        if (quantity > 0) {
            dispatch({ type: "decrement" });
        }
    }

    return (
        <ItemCounterContext.Provider value={{
            incrementItemQuantity,
            decrementItemQuantity,
            quantity
        }}>
            {children}
        </ItemCounterContext.Provider>
    );
}

export function useItemQuantity2() {
    const { quantity, incrementItemQuantity, decrementItemQuantity } = React.useContext(ItemCounterContext);
    return { quantity, incrementItemQuantity, decrementItemQuantity };
}