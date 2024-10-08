import { keyframes } from "styled-components";

export const emergeFromLowerLeftDiagonal = keyframes`
    from {
        opacity: 0;
        transform: translate(-100px, 150px);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
`