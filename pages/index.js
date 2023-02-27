import Header from "@/components/section/header"
import Hero from "@/components/section/hero"
import Wrapp from "@/components/ui/wrapper"


export default function Home() {
  return (
    <section className="text-white text-xl">
      <Header/>
      <Hero/>
      <section className="bg-blackless">
        <Wrapp style='lg:w-10/12 w-11/12 mx-auto'>
          <div className="flex justify-between mb-2">
            <h1 className="text-xl">Spotlight</h1>
            <button className="border rounded-xl px-4 lg:block hidden">See all Aalto University news</button>
          </div>
          <p className="mb-4">Finds more current news and interesting events on the <span className="inline-block underline"><a href="#">News and events page</a></span>.</p>
          <div className="flex justify-center gap-4">
          <a href="#">
            <div className="border  pb-4">
              <img className="" src="/assets/spotlight1.jpeg" alt="" />
              <h2 className="text-xl pl-4 mt-2 font-semibold">Shrinking from the heat</h2>
              <p className="pl-4 my-4">Reactive fabrics respond to changes in temperature</p>
              <p className="pl-4 mt-2">21.2.23 <span className="inline-block border-l pl-1">News</span></p>
            </div>
          </a>
          <a href="#">
            <div className="border  pb-4">
              <img className="" src="/assets/spotlight1.jpeg" alt="" />
              <h2 className="text-xl pl-4 mt-2 font-semibold">Shrinking from the heat</h2>
              <p className="pl-4 my-4">Reactive fabrics respond to changes in temperature</p>
              <p className="pl-4 mt-2">21.2.23 <span className="inline-block border-l pl-1">News</span></p>
            </div>
          </a>
          <a href="#">
            <div className="border  pb-4">
              <img className="" src="/assets/spotlight1.jpeg" alt="" />
              <h2 className="text-xl pl-4 mt-2 font-semibold">Shrinking from the heat</h2>
              <p className="pl-4 my-4">Reactive fabrics respond to changes in temperature</p>
              <p className="pl-4 mt-2">21.2.23 <span className="inline-block border-l pl-1">News</span></p>
            </div>
          </a>
          </div>
        </Wrapp>
      </section>
    </section>
  )
}
