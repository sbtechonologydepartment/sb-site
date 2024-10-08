import styled from "styled-components";

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
        }

        > #arrow-home {
            position: absolute;
            top: 0;
            right: 0;

            height: calc(100vh - 23rem);
        }
    }
`