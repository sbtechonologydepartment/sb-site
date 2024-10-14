import { Container } from "./contactUs-styles";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export function ContactUs() {
    return(
        <Container>
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

                        <span>contato@pstudio.com</span>
                    </div>

                    <div className="contact-way">
                        <div>
                            <FiPhone />
                        </div>

                        <span>(35) 3456 - 7890</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}