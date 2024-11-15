import {Lato, Nunito} from 'next/font/google'


export const fontBody = Nunito({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '500', '600', '700'],
})

export const fontHeading = Lato({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['700'],
})