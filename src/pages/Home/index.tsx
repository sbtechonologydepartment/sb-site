import { Header } from "../../components/Header";
import { Container } from "./home-styles";
import orangeArrow from '../../assets/background-arrow/blueBackground-orangeArrow.png'
import logoSb from '../../assets/logos/Marca 05.png'
import { AboutSandra } from "../../sections/AboutSandra";
import { OtherServices } from "../../sections/OtherServices";
import { ContactUs } from "../../sections/ContactUs";
import { listOfServices } from "../../data/listOfService";



export function Home() {

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

      <ContactUs />
    </Container>
  )
}
