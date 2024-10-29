import { Container, Service, ServiceTrack} from "./otherServices-styles";
import { IServices } from "../../data/listOfService";
import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

interface IProps {
    list: IServices[][]
}

export function OtherServices({list}: IProps) {

    const listOfServicesRef = useRef<Array<HTMLDivElement | null>>([])

    function btnPressPrevious(index: number) {
        if (listOfServicesRef.current) {
            const currentRef = listOfServicesRef.current[index]

            if(currentRef) {
                const width = currentRef.clientWidth;
                currentRef.scrollLeft = currentRef.scrollLeft - (width + 100);
            }
        }
    }

    function btnPressNext(index: number) {
        if (listOfServicesRef.current) {
            const currentRef = listOfServicesRef.current[index]

            if(currentRef) {
                const width = currentRef.clientWidth;
                currentRef.scrollLeft = currentRef.scrollLeft + (width + 100);
            }
        }
    }

    return(
        <Container>

            <div>
                <span>Conheça nossos</span>
                <strong>Programas</strong>
            </div>

            <div id="listOfServices">
                {
                    list.map((serviceTrack, trackIndex) => (
                        <ServiceTrack key={trackIndex}>
                            <strong>{serviceTrack[0].track}</strong>

                            <div>
                                {
                                    serviceTrack.length >= 3 ? (
                                        <button 
                                         className="buttonCarousel"
                                         onClick={() => btnPressPrevious(trackIndex)}
                                        >
                                            <FaArrowAltCircleLeft />
                                        </button>
                                    ) : null
                                }

                                <div id="carouselServices" ref={(element) => listOfServicesRef.current[trackIndex] = element}>
                                    {
                                        serviceTrack.map((service, serviceIndex) => (
                                            <Service key={serviceIndex}>
                                                <div>
                                                    <img src={service.imageSrc} />
                                                </div>
                
                                                <div>
                                                    <strong>{service.title}</strong>
                                                    <p>
                                                        {service.text}
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio perferendis numquam vero dolor, quam, eveniet mollitia cumque cupiditate inventore soluta eaque, consequuntur illo voluptas. Ducimus natus dolorum unde laborum!
                                                    </p>
                                                </div>
                                            </Service>
                                        ))
                                    }
                                </div>

                                {
                                    serviceTrack.length >= 3 ? (
                                        <button 
                                         className="buttonCarousel"
                                         onClick={() => btnPressNext(trackIndex)}
                                        >
                                            <FaArrowAltCircleRight />
                                        </button>
                                    ) : null
                                }
                            </div>
                        </ServiceTrack>
                    ))
                }
            </div>

        </Container>
    )
}