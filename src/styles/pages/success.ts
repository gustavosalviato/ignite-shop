import { cursorTo } from "readline";
import { styled } from "..";

export const SuccessContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    margin: '0 auto',


    h1: {
        fontSize: '3.2rem',
        color: '$gray100',
    },

    p: {
        width: '100%',
        maxWidth: '59rem',
        marginTop: '3.2rem',
        color: '$gray300',
        fontSize: '2.4rem',
        textAlign: 'center',
        lineHeight: '1.4',

    },

    a: {
        display: 'block',
        marginTop: '8rem',
        fontSize: '2rem',
        fontWeight: '700',
        color: '$green500',
        transition: '0.4s',

        '&:hover': {
            color: '$green300',
        }

    }
})

export const ImageSuccessContainer = styled('div', {
    width: '100%',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    maxWidth: '13rem',
    height: '14.5rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: '6.4rem',

    img: {
        objectFit: 'cover',
    }
})  