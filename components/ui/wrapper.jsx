
export default function Wrapp(props){
  return(
    <section className={`max-w-[1280px] mx-auto relative ${props.style}`}>
        {props.children}
    </section>
  )
}