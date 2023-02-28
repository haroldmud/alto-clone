import { RxArrowRight } from "react-icons/rx";
import Wrapp from "@/components/interface/wrapper"


export default function Campus(){
  return(
    <section className="bg-blackless pb-12 pt-12">
        <Wrapp>
          <div className="flex   justify-center">
            <div className="flex lg:flex-row flex-col gap-12">
              <img className="lg:w-[33rem]" src="/assets/campus1.jpeg" alt="" />
              <div className="lg:my-auto lg:mt-auto mt-4">
                <h2 className="text-2xl mb-4">Campus - lively and thriving</h2>
                <p>Aalto University's campus in Otaniemi is a renewable and living environment 
                  for research, art, learning, entrepreneurship and housing. The campus area inspires
                   people to collaborate, try out new ideas and innovate together.</p>
                <div>
                  <p className="flex gap-2 mt-8"><span className="my-auto"><RxArrowRight/></span>Explore our vibrant innovation ecosystem</p>
                  <p className="flex gap-2 my-4"><span className="my-auto"><RxArrowRight/></span>Explore our vibrant innovation ecosystem</p>
                  <p className="flex gap-2"><span className="my-auto"><RxArrowRight/></span>Explore our vibrant innovation ecosystem</p>      
                </div>
              </div>  
            </div>
            </div>

            <div className="mt-12">
            <div className="flex lg:flex-row-reverse flex-col gap-12">
              <img className="lg:w-[33rem]" src="/assets/campus2.jpeg" alt="" />
              <div className="lg:my-auto lg:mt-auto mt-4">
                <h2 className="text-2xl mb-4">Campus - lively and thriving</h2>
                <p>Aalto University's campus in Otaniemi is a renewable and living environment 
                  for research, art, learning, entrepreneurship and housing. The campus area inspires
                   people to collaborate, try out new ideas and innovate together.</p>
                <div>
                  <p className="flex gap-2 mt-8 underline"><span className="my-auto"><RxArrowRight/></span>Visit the tour</p>     
                </div>
              </div>  
            </div>
          </div>
        </Wrapp>
      </section>
  )
}
