import Wrapp from "../interface/wrapper"

export default function Research(){
  return(
    <section className="bg-blackish pb-12 pt-12">
        <Wrapp>
          <div className="flex mb-2">
            <h1 className="font-semibold text-2xl">Read about our research and donate</h1>
          </div>
          <p className="mb-4">
          At Aalto University, we create the conditions for innovation, economic growth, employment and wellbeing. A gift to the university is an investment in a better future.
          </p>
          <div className="lg:flex lg:flex-row flex-col lg:justify-center gap-4 ">
              <a href="#">
                <div className="bg-blackless  pb-4 lg:mb-0 mb-4 w-[95%]">
                  <img className="" src="/assets/search1.jpeg" alt="" />
                  <h2 className="text-xl pl-4 mt-2 font-semibold">Lifewide Learning</h2>
                  <p className="pl-4 my-4">
                    Select a solution that suits you, ranging from individual courses to programmes that are open for all.
                  </p>
                </div>
              </a>
              <a href="#">
                <div className="bg-blackless  pb-4 lg:mb-0 mb-4 w-[95%]">
                  <img className="" src="/assets/search2.jpeg" alt="" />
                  <h2 className="text-xl pl-4 mt-2 font-semibold">Lifewide Learning</h2>
                  <p className="pl-4 my-4">
                    Select a solution that suits you, ranging from individual courses to programmes that are open for all.
                  </p>
                </div>
              </a>
          </div>
        </Wrapp>
      </section>
  )
}