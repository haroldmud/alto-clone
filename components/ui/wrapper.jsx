
export default function Wrapp(props){
  return(
    <section className={`max-w-[1280px] mx-auto relative lg:w-10/12 w-11/12 ${props.style}`}>
        {props.children}
    </section>
  )
}