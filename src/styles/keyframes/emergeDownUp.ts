import { keyframes } from "styled-components";

export const emergeDownUp = keyframes`
     from {
        opacity: 0;
        transform: translateY(100px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`