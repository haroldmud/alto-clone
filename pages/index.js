import Header from "@/components/section/header"
import Hero from "@/components/section/hero"
import Wrapp from "@/components/ui/wrapper"


export default function Home() {
  return (
    <section className="text-white">
      <Header/>
      <Hero/>
      <section className="bg-blackless">
        <Wrapp style='lg:w-10/12 w-11/12 mx-auto'>
          <div className="flex justify-between mb-2">
            <h1 className="text-xl">Spotlight</h1>
            <button className="border rounded-xl px-4 lg:block hidden">See all Aalto University news</button>
          </div>
          <p>Finds more current news and interesting events on the <span className="inline-block underline"><a href="#">News and events page</a></span>.</p>
          <div>
            <div className="border">

            </div>
          </div>
        </Wrapp>
      </section>
    </section>
  )
}
