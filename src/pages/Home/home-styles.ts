import styled from "styled-components";
import { emergeUpDown } from "../../styles/keyframes/emergeUpDown";
import { emergeFromLowerLeftDiagonal } from "../../styles/keyframes/emergeFromLowerLeftDiagonal";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20vh;

    > div#start-home {
        position: relative;
        
        height: 87vh;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > #logo-home {
            max-height: 14rem;
            height: calc(40vw - 20rem);
            min-height: 8rem;

            margin-right: 35%;
            margin-top: 5%;

            animation: ${emergeUpDown} 1s ease-in-out backwards;
            z-index: 5;

            @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
               
            }
        }

        > #arrow-home {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;

            min-height: 30rem;
            height: calc(100vw - 10rem);
            max-height: 50rem;

            animation: ${emergeFromLowerLeftDiagonal} 1.2s ease-in-out 700ms backwards;
        }
    }
`