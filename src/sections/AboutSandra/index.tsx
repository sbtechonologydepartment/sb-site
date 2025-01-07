import { Container } from "./aboutSandra-styles";
import sandraPhoto from '../../assets/photos/sandra.jpg'
import { useInView } from "react-intersection-observer";
import { forwardRef, useEffect, useState } from "react";

export const AboutSandra = forwardRef<HTMLDivElement>(( ) => {
    const { ref: aboutSbRef, inView } = useInView()
    const [aboutSbAlradySeen, setAboutSbAlreadySeen] = useState<boolean>(false)

    useEffect(() => {   
        if(inView && !aboutSbAlradySeen) {
            setAboutSbAlreadySeen(true)
        }
    }, [inView, aboutSbAlradySeen])

    return (
        <Container
         $alreadyseen={aboutSbAlradySeen ? 'true' : 'false'}
        >

            <div 
             id="texts" 
             ref={aboutSbRef}
            >
                <div 
                 id="title-section"
                >
                    <span>Sobre</span>
                    <strong>Sandra Barbosa</strong>
                </div>

                <div id="text-about-sandra">
                    <p>
                        Sandra Barbosa é mentora de negócios, empresária e palestrante, com mais de 26 anos de experiência em vendas e gestão estratégica. Fundadora da SB Consultoria e Treinamentos, Sandra dedica sua vida a ajudar pessoas comuns a descobrirem seu propósito e conquistarem resultados extraordinários. Sua abordagem única une propósito, mentalidade empreendedora e estratégias práticas, sempre com foco em transformar vidas e negócios.
                    </p>
                </div>
            </div>

            <div id="sandra-photo">
                <img src={sandraPhoto} />
            </div>
        </Container>
    )
})