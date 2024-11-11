import { Container } from "./aboutSb-styles";
import { useInView } from "react-intersection-observer";

export function AboutSb() {
    const { ref: refAboutSb, inView } = useInView({triggerOnce: true})

    return(
        <Container 
         $alreadyseen={inView ? 'true' : 'false'}
         ref={refAboutSb}
        >
            <div id="title">
                <span>Quem</span>
                <strong>Somos</strong>
            </div>

            <div id="content">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias labore facere, nesciunt aliquid mollitia est rerum dolor debitis ut expedita natus deserunt, voluptates beatae, incidunt neque et tempora repellat consequatur?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias labore facere, nesciunt aliquid mollitia est rerum dolor debitis ut expedita natus deserunt, voluptates beatae, incidunt neque et tempora repellat consequatur?
                    Lorem ipsum, onsequatur?
                </p>
            </div>
        </Container>
    )
}