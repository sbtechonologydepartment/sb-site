import { Container, SideBar } from "./header-styles";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook  } from "react-icons/fa";
import sbLogo from '../../assets/logos/Marca 01.png'
import { dragDown } from "../../utils/dragDownFunction";
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

export interface ITargets {
    title: string | null
    targetReference: HTMLElement
}

interface IPropsHeader {
    targetingSessions: ITargets[]
}

export function Header({targetingSessions}: IPropsHeader) {
    const [ isMobile, setIsMobile ] = useState<boolean>(window.innerWidth < 1050)
    const [ sideBarIsOpen, setSideBarIsOpen ] = useState<boolean>(false)
    const [ exitingAnimation, setExitingAnimation ] = useState<boolean>()

    const handleSideBarButton = () => {
        if (sideBarIsOpen) {
            setExitingAnimation(true); // Inicie animação de saída
            setTimeout(() => {
                setSideBarIsOpen(false); // Desmonte o componente após a animação
                setExitingAnimation(false); // Resete o estado de saída
            }, 700); // Tempo da animação (700ms)
            return;
        }
        setSideBarIsOpen(true);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1050);
        };
      
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return(
        <Container>
            <div id="logo-header">
                <img src={sbLogo} alt="Logo da empresa" />
            </div>

            {
                isMobile ? 
                (
                    <button 
                     id="open-side-bar"
                     onClick={handleSideBarButton}
                    >
                        <AiOutlineBars />
                    </button>
                )
                :
                (
                    <div>
                        <div 
                         className="nav"
                        >
                            {
                                targetingSessions.map((target, index) => (
                                    <button 
                                     className="nav-button"
                                     onClick={(event) => dragDown(event, target.targetReference)}
                                     key={index}
                                    >
                                        {target.title}
                                    </button>
                                ))
                            }
                        </div>

                        <div className="nav-social-media">
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
                    </div>
                )
            }

            {
                sideBarIsOpen ?
                (
                    <SideBar 
                     className={exitingAnimation ? 'close' : 'open'}
                    >
                        <button
                        id="close-side-bar"
                        onClick={handleSideBarButton}
                        >
                            <IoClose />
                        </button>

                        <div 
                        className="nav"
                        id="nav-side-bar"
                        >
                            {
                                targetingSessions.map((target, index) => (
                                    <button 
                                    className="nav-button"
                                    onClick={(event) => {

                                        const currentScrollPosition = window.scrollY || window.pageYOffset;
                                        const tolerance = 5

                                        if(Math.abs(currentScrollPosition - target.targetReference.offsetTop) <= tolerance) {
                                            return
                                        }
                                        
                                        handleSideBarButton()
                                        dragDown(event, target.targetReference)
                                    }}
                                    key={index}
                                    >
                                        {target.title}
                                    </button>
                                ))
                            }
                        </div>

                        <div 
                        id="nav-social-media-side-bar"
                        className="nav-social-media"
                        >
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
                    </SideBar>
                )
                : null
            }
        </Container>
    )
}