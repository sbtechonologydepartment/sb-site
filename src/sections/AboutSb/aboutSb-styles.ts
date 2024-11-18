import styled, { css } from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { emergeUpDown } from "../../styles/keyframes/emergeUpDown";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

interface IProps extends IPropsTheme {
    $alreadyseen: 'true' | 'false'
}

export const Container = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    width: 100%;

    > div#title {
        opacity: 0;
        ${(props) => props.$alreadyseen === "true" ? css`animation: ${emergeUpDown} 1.5s ease-in-out forwards;` : ""}

        text-align: center;

        span {
            display: block;
            margin-bottom: .6rem;

            font-size: ${({theme}) => theme.FONT_SIZE.M};
            color: ${({theme}) => theme.COLORS.STRONG_GRAY};
        }

        strong {
            font-size: ${({theme}) => theme.FONT_SIZE.XG};
            color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
            letter-spacing: 3.5px;
            
        }
    }

    > div#content {
        width: 70%;
        max-width: 82rem;
        padding: 2% 3%;

        outline: 1px dashed transparent;
        border-radius: 1rem;
        transition: all 1s ease-in-out 1.2s;

        ${(props) => props.$alreadyseen === "true" ? css`outline: 3px dashed ${props.theme.COLORS.ORANGE_MAIN};` : ""}

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            width: 84%;
            padding: 4% 5%;
        }

        p {
            transition: all 3s ease-in-out 2s;

            font-size: ${({theme}) => theme.FONT_SIZE.M};
            color: ${({theme, $alreadyseen}) => $alreadyseen === "true" ? theme.COLORS.STRONG_GRAY : theme.COLORS.DARK_BLUE};
            text-align: justify; 
        }
    }
`