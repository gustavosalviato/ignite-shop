import Image from 'next/image'
import logoImg from '../../assets/logo.png'
import { HeaderContainer } from "./styles"
import { CartButton } from "../CartButton"
import * as Dialog from '@radix-ui/react-dialog';
import { CartItemsModal } from '../CartItemsModal';

export const Header = () => {

    return (
        <HeaderContainer>
            <Image
                src={logoImg}
                alt=""
            />
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <CartButton
                        showQuantity
                    />

                </Dialog.Trigger>

                <CartItemsModal />
            </Dialog.Root>


        </HeaderContainer>

    )
}