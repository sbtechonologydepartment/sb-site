import { forwardRef } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Container } from "./contactUs-styles";

export const ContactUs = forwardRef<HTMLDivElement>((props, reference) => {
    return (
        <Container
         data-name='Contatos'
         ref={reference}
         {...props}
        >
            <div id="contact-options">
                <div>
                    <p>Contatos</p>
                    <strong>Fale conosco</strong>
                </div>

                <div>
                    <div className="contact-way">
                        <div>
                            <FiMapPin />
                        </div>

                        <span>Av. Brg. Faria Lima, 3477 - BA</span>
                    </div>

                    <div className="contact-way">
                        <div>
                            <MdOutlineMailOutline />
                        </div>

                        <span>sbtreinamentoseconsultoria@gmail.com</span>
                    </div>

                    <div className="contact-way">
                        <div>
                            <FiPhone />
                        </div>

                        <span>(71) 9 8450 - 6215</span>
                    </div>
                </div>
            </div>
        </Container>
    )
})