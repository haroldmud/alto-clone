import Wrapp from "../interface/wrapper";
import { HiOutlinePencil } from "react-icons/hi";
import { AiOutlineFolder } from "react-icons/ai";
// import {IoCallOutline} from 'react-icons/io'

export default function Explore() {
  return (
    <section className="bg-blackless pb-12 pt-12 relative">
      <img
        className="w-[100%] h-[25rem] object-cover"
        src="/assets/exp1.jpeg"
        alt=""
      />
      <Wrapp style="absolute -top-[12.5rem] flex justify-center">
        <div className="w-11/12 bg-blue">
          <h2 className="lg:text-7xl text-4xl p-12 pb-20">Explore Aalto University</h2>
          <div className="border-t flex lg:flex-row flex-col justify-center">
            <button className="text-3xl lg:py-auto py-6 mx-auto">Study at Aalto</button>
            <button className="text-3xl lg:py-auto py-6  lg:p-8 px-12 lg:border-l lg:border-r lg:border-t-0 lg:border-b-0 border-t border-b">
              Open positions
            </button>
            <button className="text-3xl lg:py-auto py-6 mx-auto ">Contact us</button>
          </div>
        </div>
      </Wrapp>
      <Wrapp style="flex justify-center -mt-32">
        <div className="w-10/12">
          <h2 className="text-3xl text-center">Important quicklinks</h2>
          <div className="text-2xl flex lg:flex-row  flex-col justify-center gap-12 pt-12">
            <div className="flex  gap-4">
              <span class="bg-yellow text-5xl text-blackish w-fit p-6 rounded-full">
                <HiOutlinePencil />
              </span>
              <p className="my-auto">For personnel</p>
            </div>
            <div className="flex gap-4 ">
              <span class="bg-yellow text-5xl text-blackish w-fit p-6 rounded-full">
                <AiOutlineFolder />
              </span>
              <p className="my-auto">Aalto Handbook</p>
            </div>
            <div className="flex">
              {/* <span class='bg-yellow w-fit p-6 rounded-full'><IoCallOutline/></span> */}
              <p className="my-auto">Safety</p>
            </div>
          </div>
        </div>
      </Wrapp>
    </section>
  );
}
