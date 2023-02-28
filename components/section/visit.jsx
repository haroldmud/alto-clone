import visit from "@/components/data/visit"
import Wrapp from "../interface/wrapper"
export default function Visit(){
  const Data = visit  
  return(
    <section className="bg-blackless pb-12 pt-12">
        <Wrapp>  
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-12 gap-4">
          {Data.map(item =><div>
            <div className="lg:w-[16.5rem] lg:-mt-5">
              <img src={item.image} alt="" />
              <div className="text-[0.85rem] leading-5">
                <p>{item.p}</p>
                <p>{item.b}</p>
              </div>
            </div>
          </div>)}
          </div>
          <div className="lg:pt-32 pt-20">
            <h2 className="text-center text-3xl font-bold">Community voices</h2>
            <div className="flex lg:flex-row flex-col justify-center lg:gap-32 gap-4 mt-12">
              <div className="flex gap-4">
                <img className="rounded-full object-cover w-[5rem]" src="/assets/voice1.jpeg" alt="" />
                <p className="my-auto font-semibold">Watch our video</p>
              </div>
              <div className="flex gap-4">
                <img className="rounded-full object-cover w-[5rem]" src="/assets/voice2.jpeg" alt="" />
                <p className="my-auto font-semibold">Watch our video</p>
              </div>
              <div className="flex gap-4">
                <img className="rounded-full object-cover w-[5rem]" src="/assets/voice3.jpeg" alt="" />
                <p className="my-auto font-semibold">Watch our video</p>
              </div>
            </div>
          </div>
        </Wrapp>
      </section>
  )
}