import Wrapp from "../interface/wrapper"
import school from "../../components/data/school"

export default function School(){
  const Data = school;
  return(
    <section className="bg-blackless pb-12 pt-12">
        <Wrapp>
          <h2 className="text-2xl mb-2">Explore our six schools</h2>
          <p className="mt-2">Scientific research and artistic activities are carried out at six schools and their departments and units.</p>
          <div>
            <div className="mt-8 grid lg:grid-cols-2   gap-6">
                {
                  Data.map((item)=>
                  <div className="flex border w-[97%]">
                    <div className="pl-6 flex flex-col justify-end pb-4">
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-[1rem] lg:flex hidden">{item.desc}</p>
                    </div>
                    <img className="lg:w-auto w-[25%]" src={item.image} alt="" />
                  </div>
                  )
                }
            </div>
          </div>
        </Wrapp>
      </section>
  )
}