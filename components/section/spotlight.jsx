import Wrapp from "@/components/ui/wrapper"
import join from "../data/join"
import spotlight from "../data/spotlight"

export default function Spotlight(){
  const Spotlight = spotlight;
  const Join = join;
  return(
    <>
      <section className="bg-blackless pb-20 pt-12">
        <Wrapp style='lg:w-10/12 w-11/12 mx-auto'>
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold text-2xl">Spotlight</h1>
            <button className="border rounded-3xl px-4 lg:block hidden hover:bg-blue-700 py-1">See all Aalto University news</button>
          </div>
          <p className="mb-4">Finds more current news and interesting events on the <span className="inline-block underline"><a href="#">News and events page</a></span>.</p>
          <div className="lg:flex lg:flex-row flex-col lg:justify-center gap-4 ">
            {
              Spotlight.map((item, idx)=><a href="#">
              <div key={idx} className="border  pb-4 lg:mb-0 mb-4">
                <img className="" src={item.image} alt="" />
                <h2 className="text-xl pl-4 mt-2 font-semibold">{item.title}</h2>
                <p className="pl-4 my-4">{item.describe}</p>
                <p className="pl-4 mt-2">{item.time + " "}<span className="inline-block border-l pl-1">{item.new}</span></p>
              </div>
            </a>)
            }
          </div>
          <button className="border rounded-3xl px-4 block lg:hidden py-1">See all Aalto University news</button>
        </Wrapp>
      </section>
      <section className="bg-blackish pb-12 pt-12">
        <Wrapp style='lg:w-10/12 w-11/12 mx-auto'>
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold text-2xl">Join our many events </h1>
            <button className="border rounded-3xl px-4 lg:block hidden hover:bg-blue-700 py-1">See all Aalto University news</button>
          </div>
          <p className="mb-4">Finds more current news and interesting events on the <span className="inline-block underline"><a href="#">News and events page</a></span>.</p>
          <div className="lg:flex lg:flex-row flex-col lg:justify-center gap-4 ">
            {
              Join.map((item, idx)=><a href="#">
              <div key={idx} className="border  pb-4 lg:mb-0 mb-4">
                <img className="" src={item.image} alt="" />
                <h2 className="text-xl pl-4 mt-2 font-semibold">{item.title}</h2>
                <p className="pl-4 my-4">{item.describe}</p>
                <p className="pl-4 mt-2">{item.time + " "}<span className="inline-block border-l pl-1">{item.new}</span></p>
              </div>
            </a>)
            }
          </div>
          <button className="border rounded-3xl px-4 block lg:hidden py-1">See all Aalto University news</button>
        </Wrapp>
      </section>
    </>
  )
} 