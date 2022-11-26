import Image from 'next/image'
import logoImg from '../../assets/logo.png'
import { HeaderContainer } from "./styles"
import { CartButton } from "../CartButton"
import * as Dialog from '@radix-ui/react-dialog';

export const Header = () => {



    return (
        <HeaderContainer>
            <Image
                src={logoImg}
                alt=""
            />
            <Dialog.Root>
                
            </Dialog.Root>
            <CartButton />
        </HeaderContainer>

    )
}