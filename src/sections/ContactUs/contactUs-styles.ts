import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    padding: 0% 8% 8%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0% 8% 25%;
    }
    

    #contact-options {
            display: flex;
            flex-direction: column;
            gap: 5rem;

            width: fit-content;
            color: ${(props) => props.theme.COLORS.GRAY};

            > :first-child {
                display: flex;
                flex-direction: column;
                gap: .5rem;
                align-items: flex-start;

                width: fit-content;

                > p {
                    font-size: ${({theme}) => theme.FONT_SIZE.M};
                    text-align: left;
                }

                > strong {
                    align-self: flex-start;
    
                    font-size: ${({theme}) => theme.FONT_SIZE.XG};
                    text-align: center;
                    color: ${({theme}) => theme.COLORS.ORANGE_PRIMARY};
                }
            }


            > div {
                display: flex;
                flex-direction: row;
                gap: 6rem;

                @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                    flex-direction: column;
                    gap: 4rem;
                }

                .contact-way {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    align-items: center;

                    font-size: ${({theme}) => theme.FONT_SIZE.M};

                    > :first-child {
                        font-size: 2rem;

                        padding: .9rem;

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        border-radius: 100%;
                        border: 2px solid ${(props) => props.theme.COLORS.STRONG_GRAY};
                        
                    }
                }
            }

            > div#copyright {
                margin-top: 10rem;
                margin-bottom: -2rem;

                width: fit-content;
                align-self: center;

                p {

                    font-size: 1.3rem;
                    color: ${({theme}) => theme.COLORS.GRAY};
                    text-align: center;
                    line-height: 2.2;

                    strong {
                        color: #fff;
                    }
                }
            }
        }
`