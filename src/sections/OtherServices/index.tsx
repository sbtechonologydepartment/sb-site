import { Container, Service } from "./otherServices-styles";

interface IServices {
    title: string
    text: string
    imageSrc: string
}

interface IProps {
    list: IServices []
}

export function OtherServices({list}: IProps) {
    return(
        <Container>

            <div>
                <span>Conheça nossos</span>
                <strong>Programas</strong>
            </div>

            <div id="listOfServices">
                {
                    list.map((service) => (
                        <Service>
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

        </Container>
    )
}