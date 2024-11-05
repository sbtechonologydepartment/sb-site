import { Container } from "./header-styles";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook  } from "react-icons/fa";
import sbLogo from '../../assets/logos/Marca 01.png'
import { dragDown } from "../../utils/dragDownFunction";

export interface ITargets {
    title: string | null
    targetReference: HTMLElement
}

interface IPropsHeader {
    targetingSessions: ITargets[]
}

export function Header({targetingSessions}: IPropsHeader) {
    return(
        <Container>
            <div id="logo-header">
                <img src={sbLogo} alt="Logo da empresa" />
            </div>

            <div id="nav">
                {
                    targetingSessions.map((target, index) => (
                        <button 
                         onClick={(event) => dragDown(event, target.targetReference)}
                         key={index}
                        >
                            {target.title}
                         </button>
                    ))
                }
            </div>

            <div id="nav-social-media">
                <a 
                 target="_blank"
                 href="https://www.instagram.com/sbconsultoriaetreinamentos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
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