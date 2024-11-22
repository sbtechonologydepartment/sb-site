export function dragDown(event: React.MouseEvent<HTMLButtonElement>, reference: HTMLElement) {
    event.preventDefault()
  
    if(reference && reference !== null) {
      const distance = reference.offsetTop

      window.scroll({
        top: distance - 60,
        behavior: "smooth"
      })
    }
}