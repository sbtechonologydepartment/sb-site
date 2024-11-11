import { Header, ITargets } from "../../components/Header";
import { Container } from "./home-styles";
import orangeArrow from '../../assets/background-arrow/blueBackground-orangeArrow.png'
import logoSb from '../../assets/logos/Marca 05.png'
import { AboutSandra } from "../../sections/AboutSandra";
import { OtherServices } from "../../sections/OtherServices";
import { ContactUs } from "../../sections/ContactUs";
import { listOfServices } from "../../data/listOfService";
import { useEffect, useRef, useState } from "react";
import { addToListOfRefs } from "../../utils/addToRefs";
import { AboutSb } from "../../sections/AboutSb";

export function Home() {

  const elementRefs = useRef<HTMLElement[]>([])
  
  const [ headerList, setHeaderList ] = useState<ITargets[]>([])

  
  useEffect(() => {
    if(elementRefs.current.length > 0) {
      const newHeaderList = elementRefs.current.map((element) => ({
        title: element.getAttribute('data-name'),
        targetReference: element
      }))
      
      setHeaderList(newHeaderList)
    }

  }, [])

  return (
    <Container>
      <Header
       targetingSessions={headerList}
      />

      <div 
       id="start-home"
       data-name='Home'
       ref={(element) => addToListOfRefs(element, elementRefs)}
      >

        <img 
         src={logoSb}
         id="logo-home"
        />

        <img
         src={orangeArrow}
         id="arrow-home"
        />

      </div>

      <AboutSb />

      <AboutSandra 
        ref={(element: HTMLDivElement) => addToListOfRefs(element, elementRefs)}
      />

      <OtherServices 
        list={listOfServices}
        ref={(element: HTMLDivElement) => addToListOfRefs(element, elementRefs)}
      />

      <ContactUs 
       ref={(element: HTMLDivElement) => addToListOfRefs(element, elementRefs)}
      />
    </Container>
  )
}
