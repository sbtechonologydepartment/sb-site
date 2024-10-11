import { Header } from "../../components/Header";
import { Container } from "./home-styles";
import orangeArrow from '../../assets/background-arrow/blueBackground-orangeArrow.png'
import logoSb from '../../assets/logos/Marca 05.png'
import { AboutSandra } from "../../sections/AboutSandra";
import { OtherServices } from "../../sections/OtherServices";
import imageCodeService from '../../assets/services/code-service.jpg'
import imageSociaMediaService from '../../assets/services/social-media-manager.webp'



export function Home() {

  const listOfServices = [
    {
      title: 'Desenvolvimento de site',
      text: 'texto exemploa',
      imageSrc: imageCodeService
    },
    {
      title: 'Social media',
      text: 'texto exemploa',
      imageSrc: imageSociaMediaService
    }
  ]

  return (
    <Container>
      <Header />

      <div id="start-home">

        <img 
         src={logoSb}
         id="logo-home"
        />

        <img
         src={orangeArrow}
         id="arrow-home"
        />

      </div>

      <AboutSandra 
      />

      <OtherServices 
        list={listOfServices}
      />
    </Container>
  )
}
