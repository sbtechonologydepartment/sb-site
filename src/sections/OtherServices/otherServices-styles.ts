import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    height: fit-content;
    padding: 7% 10% 10%;

    background-color: ${({theme}) => theme.COLORS.LIGHT_BLUE};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        >  span {
            font-size: ${({theme}) => theme.FONT_SIZE.M};
            color: ${({theme}) => theme.COLORS.GRAY};
        }

        > strong {
            font-size: ${({theme}) => theme.FONT_SIZE.XG};
            color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
            letter-spacing: 3px;
        }
    }

    > div#listOfServices {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4rem;
    }
`

export const Service = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    width: 28rem;
    height: 40rem;

    border-radius: 2rem;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY};

    background-color: ${({theme}) => theme.COLORS.DARK_BLUE};

    > :first-child {
        position: relative;

        height: 40%;
        width: 100%;

        border-radius: 2rem 2rem 0 0;

        overflow: hidden;

        > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        &::after {
            content: "";

            position: absolute;
            top: 0rem;
            left: 0;

            width: 100%;
            height: 20rem;

            /* background-color: ${(props) => props.theme.COLORS.ORANGE_SECONDARY};
            opacity: 50%; */
        }
    }

    > :last-child {
        width: 100%;
        padding-inline: 10%;

        > strong {
            font-size: ${({theme}) => theme.FONT_SIZE.M};
            color: ${({theme}) => theme.COLORS.GRAY};

            display: block;
            margin-bottom: .8rem;
        }

        > p {
            font-size: ${({theme}) => theme.FONT_SIZE.P};
            text-align: justify;
            color: ${({theme}) => theme.COLORS.STRONG_GRAY};
        }
    }
`