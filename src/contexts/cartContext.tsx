import produce from "immer";
import { DRAFTABLE } from "immer/dist/internal";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
    cartItems: IProduct[],
    cartQuantity: number,
    AddProductToCart: (product: IProduct) => void,
    totalCart: number,
    removeProductToCart: (productId: number) => void,
}

export interface IProduct {
    id: number,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    numberPrice: number,
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


    const removeProductToCart = (productId: number) => {
        const productAlreadyExists = cartItems.findIndex((cartItem) => cartItem.id === productId)

        const newCart = produce(cartItems, (draft) => {
            if (productAlreadyExists >= 0) {
                draft.splice(productAlreadyExists, 1)
            }
        })

        setCartItems(newCart)

    }

    const totalCart = cartItems.reduce((acc, cartItem) => {
        return acc += cartItem.numberPrice
    }, 0)

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, AddProductToCart, removeProductToCart, totalCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)