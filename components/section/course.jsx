import Wrapp from "../interface/wrapper"

export default function Course(){
  return(
    <section className="bg-blackish pb-12 pt-12"> 
        <Wrapp>
          <div className="flex mb-8">
            <h1 className="font-semibold text-2xl">Studies and courses open to all</h1>
          </div>
          <div className="lg:flex lg:flex-row flex-col lg:justify-center gap-4 ">
              <a href="#">
                <div className="bg-blackless  pb-4 lg:mb-0 mb-4 w-[95%]">
                  <img className="" src="/assets/stud1.jpeg" alt="" />
                  <h2 className="text-xl pl-4 mt-2 font-semibold">Lifewide Learning</h2>
                  <p className="pl-4 my-4">
                    Select a solution that suits you, ranging from individual courses to programmes that are open for all.
                  </p>
                </div>
              </a>
              <a href="#">
                <div className="bg-blackless  pb-4 lg:mb-0 mb-4 w-[95%]">
                  <img className="" src="/assets/stud2.jpeg" alt="" />
                  <h2 className="text-xl pl-4 mt-2 font-semibold">Lifewide Learning</h2>
                  <p className="pl-4 my-4">
                    Select a solution that suits you, ranging from individual courses to programmes that are open for all.
                  </p>
                </div>
              </a>
              <a href="#">
                <div className="bg-blackless  pb-4 lg:mb-0 mb-4 w-[95%]">
                  <img className="" src="/assets/stud3.png" alt="" />
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