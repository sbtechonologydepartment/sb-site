import styled, { css } from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { emergeUpDown } from "../../styles/keyframes/emergeUpDown";
import { emergeDownUp } from "../../styles/keyframes/emergeDownUp";
import { emergeRightLeft } from "../../styles/keyframes/emergeRightLeft";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

interface IProps extends IPropsTheme {
    $alreadyseen: 'true' | 'false'
}

export const Container = styled.div<IProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7rem;

    padding-inline: 10%;
    padding-top: 3%;
    width: 100%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MDD}) {
        flex-direction: column ;
    }

    > div#texts {
        align-self: flex-start;

        max-width: 50rem;

        margin-top: 5rem;

        display: flex;
        flex-direction: column;
        gap: 3rem;

        > div#title-section {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            color: ${({theme}) => theme.COLORS.GRAY};

            width: fit-content;
            padding-right: 4.5rem;
            padding-bottom: .5rem;

            position: relative;

            opacity: 0;
            animation: ${(props) => props.$alreadyseen === 'true' ? css`${emergeUpDown} 1.5s ease-in-out both` : ''};

            &::after {
                content: '';
                width: ${(props) => props.$alreadyseen === 'true' ? '100%' : '0%'};
                height: 2px;
                position: absolute;
                bottom: -4px;
                left: 0;
                border-bottom: 3px dashed ${({theme}) => theme.COLORS.ORANGE_MAIN};
                transition: all 1.5s ease-in-out 1.3s;
            }

            span {
                font-size: ${({theme}) => theme.FONT_SIZE.M};
            }

            strong {
                font-size: ${({theme}) => theme.FONT_SIZE.XG};
                color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
                letter-spacing: 3px;
            }
        }

        > div#text-about-sandra {
            font-size: ${({theme}) => theme.FONT_SIZE.P};
            color: ${({theme}) => theme.COLORS.GRAY};
            line-height: 1.5;
            text-align: left;

            animation: ${(props) => props.$alreadyseen === 'true' ? css`${emergeDownUp} 1.5s ease-in-out 2.6s backwards` : ''};

            @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
                font-size: ${({theme}) => theme.FONT_SIZE.M};
            }   
        }
    }

    > div#sandra-photo {
        height: 50rem;
        width: 40rem;

        border: ${({theme}) => theme.COLORS.ORANGE_MAIN} 1.5px solid;
        border-radius: 2rem;

        overflow: hidden;

        opacity: 0;
        animation: ${(props) => props.$alreadyseen === 'true' ? css`${emergeRightLeft} 1.5s ease-in-out 2.7s both` : ''};

        @media (max-width: ${DEVICE_BREAKPOINTS.MDD}) {
            height: 47rem;
            width: 100%;
        }

        > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`