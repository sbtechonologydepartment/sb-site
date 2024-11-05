import { Container, Service, ServiceTrack} from "./otherServices-styles";
import { IServices } from "../../data/listOfService";
import React, { forwardRef, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface IPropsOtherServices {
    list: IServices[][]
    [key: string]: unknown
}

export const OtherServices = forwardRef<HTMLDivElement, IPropsOtherServices>((props, reference) => {
    const { ref: otherServicesRef, inView } = useInView({triggerOnce: true})

    const listOfServicesRef = useRef<Array<HTMLDivElement | null>>([])

    function btnPressPrevious(index: number) {
        if (listOfServicesRef.current) {
            const currentRef = listOfServicesRef.current[index]

            if(currentRef) {
                const width = currentRef.clientWidth;
                currentRef.scrollLeft = currentRef.scrollLeft - (width + 90);
            }
        }
    }

    function btnPressNext(index: number) {
        if (listOfServicesRef.current) {
            const currentRef = listOfServicesRef.current[index]

            if(currentRef) {
                const width = currentRef.clientWidth;
                currentRef.scrollLeft = currentRef.scrollLeft + (width + 90);
            }
        }
    }
    return (
        <Container 
         data-name='Serviços'
         ref={reference}
        >
           <div>
               <span>Conheça nossos</span>
               <strong>Programas</strong>
           </div>

           <div id="listOfServices" ref={otherServicesRef}>
               {
                   (props.list as IServices[][]).map((serviceTrack, trackIndex) => (
                       <ServiceTrack 
                        key={trackIndex}
                       >
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
                                           <Service 
                                            key={serviceIndex}
                                            $otherServicesAlreadyseen={inView ? 'true' : 'false'}
                                            style={
                                               {
                                                   '--delay-emerge': `${(serviceIndex * 0.5)}s`
                                               } as React.CSSProperties
                                            }
                                           >
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
})

// export function OtherServices({list, ...rest}: IProps) {
//     const { ref: otherServicesRef, inView } = useInView({triggerOnce: true})

//     const listOfServicesRef = useRef<Array<HTMLDivElement | null>>([])

//     function btnPressPrevious(index: number) {
//         if (listOfServicesRef.current) {
//             const currentRef = listOfServicesRef.current[index]

//             if(currentRef) {
//                 const width = currentRef.clientWidth;
//                 currentRef.scrollLeft = currentRef.scrollLeft - (width + 90);
//             }
//         }
//     }

//     function btnPressNext(index: number) {
//         if (listOfServicesRef.current) {
//             const currentRef = listOfServicesRef.current[index]

//             if(currentRef) {
//                 const width = currentRef.clientWidth;
//                 currentRef.scrollLeft = currentRef.scrollLeft + (width + 90);
//             }
//         }
//     }

//     return(
//         <Container 
//          data-name='Serviços'
//          {...rest}
//         >

//             <div>
//                 <span>Conheça nossos</span>
//                 <strong>Programas</strong>
//             </div>

//             <div id="listOfServices" ref={otherServicesRef}>
//                 {
//                     list.map((serviceTrack, trackIndex) => (
//                         <ServiceTrack 
//                          key={trackIndex}
//                         >
//                             <strong>{serviceTrack[0].track}</strong>

//                             <div>
//                                 {
//                                     serviceTrack.length >= 3 ? (
//                                         <button 
//                                          className="buttonCarousel"
//                                          onClick={() => btnPressPrevious(trackIndex)}
//                                         >
//                                             <FaArrowAltCircleLeft />
//                                         </button>
//                                     ) : null
//                                 }

//                                 <div id="carouselServices" ref={(element) => listOfServicesRef.current[trackIndex] = element}>
//                                     {
//                                         serviceTrack.map((service, serviceIndex) => (
//                                             <Service 
//                                              key={serviceIndex}
//                                              $otherServicesAlreadyseen={inView ? 'true' : 'false'}
//                                              style={
//                                                 {
//                                                     '--delay-emerge': `${(serviceIndex * 0.5)}s`
//                                                 } as React.CSSProperties
//                                              }
//                                             >
//                                                 <div>
//                                                     <img src={service.imageSrc} />
//                                                 </div>
                
//                                                 <div>
//                                                     <strong>{service.title}</strong>
//                                                     <p>
//                                                         {service.text}
//                                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio perferendis numquam vero dolor, quam, eveniet mollitia cumque cupiditate inventore soluta eaque, consequuntur illo voluptas. Ducimus natus dolorum unde laborum!
//                                                     </p>
//                                                 </div>
//                                             </Service>
//                                         ))
//                                     }
//                                 </div>

//                                 {
//                                     serviceTrack.length >= 3 ? (
//                                         <button 
//                                          className="buttonCarousel"
//                                          onClick={() => btnPressNext(trackIndex)}
//                                         >
//                                             <FaArrowAltCircleRight />
//                                         </button>
//                                     ) : null
//                                 }
//                             </div>
//                         </ServiceTrack>
//                     ))
//                 }
//             </div>

//         </Container>
//     )
// }