import Header from "@/components/interface/header"
import Footer from "@/components/interface/footer"
import Hero from "@/components/section/hero"
import Spotlight from "@/components/section/spotlight"
import Explore from "@/components/section/explore"
import School from "@/components/section/school"
import Campus from "@/components/section/campus"
import Visit from "@/components/section/visit"
import Course from "@/components/section/course"
import Research from "@/components/section/Research"
import Info from "@/components/section/info"


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
      <Course/>
      <Info/>
      <Research/>
      <section className="bg-blackless py-16">
        <div className="h-[25rem] relative">
          <img className="w-full h-[25rem] object-cover" src="/assets/follow.png" alt="" />
          <div className="h-[25rem] absolute top-0 w-full flex flex-col justify-center">
              <h1 className="lg:text-7xl text-3xl text-center">Follow us</h1>
              <p className="flex text-2xl mt-4 lg:flex-row flex-col justify-center"><span className="underline ml-1 hover:text-black hover:bg-white text-center">facebook,</span><span className="underline ml-1 hover:text-black hover:bg-white text-center">twitter,</span><span className="underline ml-1 hover:text-black hover:bg-white text-center">instagram</span><span className="underline ml-1 hover:text-black hover:bg-white text-center">& linkedin</span></p>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
  )
}
