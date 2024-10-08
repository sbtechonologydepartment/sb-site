import { Container } from "./header-styles";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook  } from "react-icons/fa";
import sbLogo from '../../assets/logos/Marca 01.png'

export function Header() {
    return(
        <Container>
            <div id="logo-header">
                <img src={sbLogo} alt="Logo da empresa" />
            </div>

            <div id="nav">
                <a href="#">Início</a>
                <a href="#">Sobre nós</a>
                <a href="#">Contato</a>
                <a href="#">Programas</a>
            </div>

            <div id="nav-social-media">
                <a href="#">
                    <FaInstagram size={16} />
                </a>
                <a href="#">
                    <FaWhatsapp size={16} />
                </a>
                <a href="#">
                    <FaLinkedin size={16} />
                </a>
                <a href="#">
                    <FaFacebook size={16} />
                </a>
            </div>
        </Container>
    )
}