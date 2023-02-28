import Header from "@/components/interface/header"
import Footer from "@/components/interface/footer"
import Hero from "@/components/section/hero"
import Spotlight from "@/components/section/spotlight"
import Explore from "@/components/section/explore"
import School from "@/components/section/school"
import Campus from "@/components/section/campus"
import Visit from "@/components/section/visit"



import Wrapp from "@/components/interface/wrapper"

export default function Home() {
  
  return (
    <section className="text-white text-xl">
      <Header/>
      <Hero/>
      <Spotlight/>
      <Explore/>
      <School/>
      <Campus/>
      <Visit/>
      <section className="bg-blackless pb-12 pt-12">
        <Wrapp>
          
        </Wrapp>
      </section>
      <Footer/>
    </section>
  )
}
