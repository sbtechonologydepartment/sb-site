import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { emergeRightLeftWithouOpacity } from "../../styles/keyframes/emergeRightLeft";

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

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        padding-block: 1.3rem;
    }

    > div#logo-header {
        width: 15rem;
        height: 3rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            width: 14rem;
            height: 2.7rem;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    > div:last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        width: 75%;

        > div.nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 6rem;
    
            justify-self: center;
    
            > button.nav-button {
                position: relative;
    
                font-size: ${({theme}) => theme.FONT_SIZE.P};
                color: ${({theme}) => theme.COLORS.STRONG_GRAY};
    
                transition: all 500ms ease-in-out;
            }
    
            > button.nav-button:hover {
                color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
            }
    
            > button.nav-button::after {
                content: '';
    
                width: 0%;
                height: 1px;
    
                position: absolute;
                bottom: -4px;
                right: 0;
    
                background-color: ${({theme}) => theme.COLORS.ORANGE_MAIN};
    
                transition: width 350ms ease-in-out 251ms;
            }
    
            > button.nav-button:hover::after {
                width: 100%;
                left: 0;
            }
        }
    
        > div.nav-social-media {
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
    }

    > #open-side-bar {
        font-size: 3rem;
        color: ${({theme}) => theme.COLORS.STRONG_GRAY};

        transition: all 600ms ease-in-out;

        &:hover {
            color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
        }
    }
`

export const SideBar = styled.div<IPropsTheme>`

    transition: all ease-in-out 1s;
    &.open {
        animation: ${emergeRightLeftWithouOpacity} 1s ease-in-out backwards;
    }
    &.close {
        transform: translateX(100vw);
    }

    display: flex;
    flex-direction: column;

    height: 100vh;
    max-width: 23rem;

    border-radius: 5% 0% 0% 5%;
    border-left: 1px solid ${({theme}) => theme.COLORS.GRAY};
    
    position: absolute;
    right: 0;
    top: 0;

    background-color: ${({theme}) => theme.COLORS.LIGHT_BLUE};

    > #close-side-bar {
        position: absolute;
        top: 2%;
        right: 4%;

        font-size: 2.7rem;
        color: ${({theme}) => theme.COLORS.STRONG_GRAY};

        transition: all 600ms ease-in-out;

        &:hover {
            color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
        }
    }

    > #nav-side-bar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    > #nav-social-media-side-bar {
        position: absolute;
        bottom: 10%;
    }
`