import produce from "immer";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
    cartItems: IProduct[],
    cartQuantity: number,
    AddProductToCart: (product: IProduct) => void,

}

export interface IProduct {
    id: number,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
}

export const CartContext = createContext({} as CartContextType)

interface CarContextProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CarContextProviderProps) => {

    const [cartItems, setCartItems] = useState<IProduct[]>([])

    const cartQuantity = cartItems.length

    const AddProductToCart = (product: IProduct) => {

        const productAlreadyExists = cartItems.findIndex((cartItem) => cartItem.id === product.id)

        const newProduct = produce(cartItems, (draft) => {
            if (productAlreadyExists < 0) {
                draft.push(product)
            }
        })

        setCartItems(newProduct)

    }

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, AddProductToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)