import Image from 'next/image'
import logoImg from '../../assets/logo.png'
import { HeaderContainer } from "./styles"
import { CartButton } from "../CartButton"
import * as Dialog from '@radix-ui/react-dialog';
import { CartItemsModal } from '../CartItemsModal';
import { useRouter } from 'next/router';

export const Header = () => {

    const { pathname } = useRouter()

    const showCartButton = pathname !== '/success'

    return (
        <HeaderContainer>
            <Image
                src={logoImg}
                alt=""
            />
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    
                    {showCartButton && (
                        <CartButton
                            showQuantity
                            color="gray"
                        />
                    )}


                </Dialog.Trigger>

                <CartItemsModal />
            </Dialog.Root>


        </HeaderContainer>

    )
}