import Wrapp from "../interface/wrapper"

export default function Info(){
  return(
    <section className="bg-blackless pb-12 pt-12">
        <Wrapp>
          <h2 className="text-2xl mb-2">Information on Ukraine and coronavirus</h2>
          <div>
            <div className="mt-8 grid lg:grid-cols-2   gap-6">
                  <div className="flex border w-[95%]">
                    <div className="pl-6 flex flex-col justify-end pb-4">
                      <h2 className="font-semibold">Ukraine war</h2>
                      <p className="text-[1rem] lg:flex hidden">On this page, we will gather information o...</p>
                    </div>
                    <img className="lg:w-auto w-[25%]" src="/assets/info1.png" alt="" />
                  </div>
                  <div className="flex border w-[94%]">
                    <div className="pl-6 flex flex-col justify-end pb-4">
                      <h2 className="font-semibold">Information on Corona Virus</h2>
                      <p className="text-[1rem] lg:flex hidden">Information on the effects of coronavirus...</p>
                    </div>
                    <img className="lg:w-auto w-[25%]" src="/assets/info2.jpeg" alt="" />
                  </div>
            </div>
          </div>
        </Wrapp>
      </section>
  )
}