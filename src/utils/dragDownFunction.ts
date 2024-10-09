
export function dragDown<T extends HTMLElement>(ref: React.RefObject<T>) {
    event?.preventDefault()

    if(ref.current !== null) {
        const {top: distance} = ref.current.getBoundingClientRect()

        window.scroll({
        top: distance,
        behavior: 'smooth'
        })
    }
}