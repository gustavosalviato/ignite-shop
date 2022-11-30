import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog';
import { FONT_MANIFEST } from "next/dist/shared/lib/constants";
import { formatDiagnosticsWithColorAndContext } from "typescript";


export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    inset: '100vh',
    background: 'rgba(0, 0, 0, 0.75)',
})


export const Content = styled(Dialog.Content, {
    position: 'fixed',
    width: '30rem',
    right: '0',
    bottom: '0',
    top: '0',
    background: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    padding: '4.8rem',


    boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

    h2: {
        fontWeight: '700',
        fontSize: '2.0rem',
        color: '$gray100',
        marginBottom: '2rem',
    },


    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.4rem',
        flex: '1',
        overflowY: 'auto',

        p: {
            fontSize: '1.6rem',
        }
    }


})

export const CartClose = styled(Dialog.Close, {
    background: 'none',
    border: 'none',
    right: '2.8rem',
    top: '2.8rem',
    position: 'absolute',
    fontSize: '0',
})


// export const CartProduct = styled('div', {
//     width: '100%',
// }

export const CartProduct = styled('div', {
    width: '100%',
    display: 'flex',
    gap: '2.4rem',
})


export const CartProductImage = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    padding: '0.8rem',


    width: '10.1rem',
    height: '9.3rem',

    img: {
        objectFit: 'fit'
    }

})

export const CartProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: '1',

    span: {
        fontSize: '1.8rem',
        color: '$gray300',
    },

    strong: {
        display: 'block',
        marginTop: '1rem',
        color: '$white',
        fontSize: '1.8rem',
    },


    button: {
        background: 'transparent',
        border: 'none',
        color: '$green500',
        marginTop: '1.6rem',
        fontWeight: '700',
        fontSize: '1.8rem',
        padding: '0.8rem 1.6rem',
        borderRadius: 8,
        transition: '0.4s',


        '&:hover': {
            background: '$green500',
            color: '$white',

        }
    }
})


export const CartFinalization = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    gap: '0.8rem',


    button: {
        marginTop: '5.0rem',
        color: '$white',
        background: '$green500',
        border: 0,
        padding: '1.6rem',
        borderRadius: 8,
        fontSize: '1.6rem',
        fontWeight: '700',


    }
})



export const CartFinalizationDetails = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'span + span': {
        display: 'flex',
        gap: '0.8rem',
    },

    span: {
        color: '$gray100',
        fontSize: '1.6rem',
    },

    '.quantity': {
        color: '$gray300',
    },

    strong: {
        color: '$gray100',
        fontSize: '1.8rem',

    },

    '.total': {
        fontSize: '2.4rem',
    }

})
