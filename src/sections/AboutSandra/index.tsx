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
                        Filha de Eloi e Maria, sou a caçula de 9 irmãos, tenho 3 filhos: Irla, Nick e João Miguel. Esposa/socia de João Paulo. Onde somos sócios de 2 empresas:Js Concultoria e Representações e a Vital Vibe. Sou fundadora da SB Consultoria e Treinamentos, onde faço atendimentos de consultoria e mentorias individuais e em grupos. Formada em administração de empresas, especialista em gestão estratégica de vendas, vendedora há 25 anos, sendo 10 como representante comercial, há dois anos venho estudando e aplicando em mim e nos clientes técnicas de desenvolvimento humano, vendas e gestão de pessoas.
                    </p>
                </div>
            </div>

            <div id="sandra-photo">
                <img src={sandraPhoto} />
            </div>
        </Container>
    )
})