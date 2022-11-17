import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
    cartItems: CartItem[],
    cartQuantity: number,
}

export interface IProduct {
    id: number,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
}

interface CartItem extends IProduct {
    quantity: number
}

export const CartContext = createContext({} as CartContextType)

interface CarContextProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CarContextProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.length

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)