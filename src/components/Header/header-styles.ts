import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    position: fixed;

    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 2rem 13%;

    background-color: rgba(10, 27, 34, .8);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(10px);

    > div#logo-header {
        width: 15rem;
        height: 3rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    > div#nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6rem;

        justify-self: center;

        > a {
            position: relative;

            font-size: ${({theme}) => theme.FONT_SIZE.P};
            color: ${({theme}) => theme.COLORS.STRONG_GRAY};

            transition: all 500ms ease-in-out;
        }

        > a:hover {
            color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
        }

        > a::after {
            content: '';

            width: 0%;
            height: 1px;

            position: absolute;
            bottom: -4px;
            right: 0;

            background-color: ${({theme}) => theme.COLORS.ORANGE_MAIN};

            transition: width 350ms ease-in-out 251ms;
        }

        > a:hover::after {
            width: 100%;
            left: 0;
        }
    }

    > div#nav-social-media {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        width: fit-content;

        > a {
            color: ${({theme}) => theme.COLORS.STRONG_GRAY};
            transition: color 350ms ease-in-out;
        }

        > a:hover {
            color: ${({theme}) => theme.COLORS.ORANGE_SECONDARY};
        }
    }
`