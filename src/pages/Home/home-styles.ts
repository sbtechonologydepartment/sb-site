import styled from "styled-components";
import { emergeUpDown } from "../../styles/keyframes/emergeUpDown";
import { emergeFromLowerLeftDiagonal } from "../../styles/keyframes/emergeFromLowerLeftDiagonal";

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;

    > div#start-home {
        position: relative;
        
        height: 87vh;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > #logo-home {
            height: calc(50vh - 22rem);
            margin-right: 35%;
            margin-top: 5%;
            animation: ${emergeUpDown} 1s ease-in-out backwards;
        }

        > #arrow-home {
            position: absolute;
            top: 0;
            right: 0;

            height: calc(100vh - 23rem);

            animation: ${emergeFromLowerLeftDiagonal} 1.2s ease-in-out 700ms backwards;
        }
    }
`