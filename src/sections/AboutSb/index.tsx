import { forwardRef } from "react";
import { Container } from "./aboutSb-styles";
import { useInView } from "react-intersection-observer";

export const AboutSb = forwardRef<HTMLDivElement>((_, reference) => {
    const { ref: refAboutSb, inView } = useInView({triggerOnce: true})

    return (
        <Container 
         $alreadyseen={inView ? 'true' : 'false'}
         ref={refAboutSb}
        >
           <div 
             data-name='Sobre nós'
             id="title"
             ref={reference}
            >
               <span>Quem</span>
               <strong>Somos</strong>
           </div>

           <div id="content">
               <p>
                    Transformando Pessoas e Multiplicadores de Negócios para um Futuro Sustentável.
                    A SB Consultoria e Treinamentos é uma empresa focada no desenvolvimento humano, capacitação de profissionais e criação de negócios autossustentáveis. Nossa missão é potencializar talentos e transformar habilidades em resultados concretos, oferecendo soluções estratégicas e personalizadas para empreendedores e empresas que desejam crescer com propósito.
               </p>
           </div>
       </Container>
    )
})