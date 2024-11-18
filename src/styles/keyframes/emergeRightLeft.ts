import { keyframes } from "styled-components";

export const emergeRightLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const emergeRightLeftWithouOpacity = keyframes`
    from {
        transform: translateX(90vw);
    }

    to {
        transform: translateX(0);
    }
`