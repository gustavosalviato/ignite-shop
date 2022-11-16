import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
})

export const Header = styled('header', {
    width: '100%',
    maxWidth: 1180,
    padding: '3.2rem 0',
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    button: {
        height: '3.8rem',
        width: '3.8rem',

        backgroundColor: '$green500',
        borderRadius: '6px',
        border: '0',
        padding: '0.8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.4s',

        position: 'relative',

        // '&:hover': {
        //     backgroundColor: '$green300',
        // },

        svg: {
            color: '$white'
        },

        span: {
            position: 'absolute',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: '$green300',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            color: '$white',

            top: 'calc(-2rem / 2)',
            right: 'calc(-2rem / 2)',

            fontWeight: 'bold',
            fontSize: '1.4rem',
        },

    }

})