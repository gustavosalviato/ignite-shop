import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { IProduct, useCartContext } from '../../contexts/cartContext';
import { CartClose, CartFinalization, CartFinalizationDetails, CartProduct, CartProductDetails, CartProductImage, Content, Overlay } from './styles';


export const CartItemsModal = () => {

    const { cartItems, totalCart, removeProductToCart } = useCartContext()

    const formattedTotalCart = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(totalCart)

    const handleRemoveProductToCart = (cartItem: IProduct) => {
        removeProductToCart(cartItem.id)
    }

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <CartClose>
                        <X
                            size={24}
                            weight="bold"
                        />
                    </CartClose>
                    <h2>Sacola de Compras</h2>

                    <section>
                        {cartItems.length <= 0 && (
                            <p>Seu carrinho está vazio :[ </p>
                        )}

                        {cartItems.map((cartItem) => (
                            <CartProduct key={cartItem.id}>
                                <CartProductImage>
                                    <Image
                                        src={cartItem.imageUrl}
                                        alt=''
                                        width={100}
                                        height={93}
                                    />
                                </CartProductImage>

                                <CartProductDetails>
                                    <span>{cartItem.name}</span>

                                    <strong>{cartItem.price}</strong>


                                    <button
                                        onClick={() => handleRemoveProductToCart(cartItem)}
                                    >
                                        Remover
                                    </button>
                                </CartProductDetails>
                            </CartProduct>
                        ))}


                        <CartFinalization>
                            <CartFinalizationDetails>
                                <span>Quantidade</span>
                                <span
                                    className='quantity'>
                                    {cartItems.length} {cartItems.length <= 1 ? <p>item</p> : <p>itens</p>}
                                </span>
                            </CartFinalizationDetails>

                            <CartFinalizationDetails>
                                <strong>Valor total</strong>
                                <strong className='total'>{formattedTotalCart}</strong>
                            </CartFinalizationDetails>

                            <button>Finalizar Compra</button>
                        </CartFinalization>
                    </section>
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}