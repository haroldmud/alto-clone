import Header from "@/components/section/header"
import Hero from "@/components/section/hero"
import Spotlight from "@/components/section/spotlight"
import Wrapp from "@/components/ui/wrapper"


export default function Home() {
  
  return (
    <section className="text-white text-xl">
      <Header/>
      <Hero/>
      <Spotlight/>
    </section>
  )
}
