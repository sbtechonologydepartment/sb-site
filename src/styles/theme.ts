interface IColors {
    ORANGE_MAIN: string
    ORANGE_PRIMARY: string
    ORANGE_SECONDARY: string
    DARK_BLUE: string
    LIGHT_BLUE: string
    WHITE: string
    GRAY: string
    STRONG_GRAY: string
}

interface IFonts {
    P: string
    M: string
    G: string
    XG: string
    XXG: string
}

interface ITheme {
    COLORS: IColors
    FONT_SIZE: IFonts
}

export interface IPropsTheme {
    theme: ITheme
}

export const Theme: ITheme = {
    COLORS: {
        ORANGE_MAIN: '#F75800',
        ORANGE_PRIMARY: '#E5632A',
        ORANGE_SECONDARY: '#E47B2F',

        DARK_BLUE: '#0A1B22',
        LIGHT_BLUE: '#153D50',

        WHITE: '#FFFFFF',
        GRAY: '#F4F4F4',
        STRONG_GRAY: '#E1E1E1'
    },

    FONT_SIZE: {
        P: '1.4rem',
        M: '1.8rem',
        G: '2.2rem',
        XG: '3rem',
        XXG: '4rem'
    }
}