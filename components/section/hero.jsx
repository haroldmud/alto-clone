import Wrapp from "../interface/wrapper";
import { RxArrowRight } from "react-icons/rx";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

export default function Hero() {
  return (
    <section className="bg-blackless">
      <Wrapp>
        <div className="bg-black lg:w-[53%] lg:pt-10 pt-6 lg:px-10 px-6 pb-2 lg:absolute top-28 left-10 text-xl">
          <div className="">
            <h3 className="text-3xl font-semibold">
              How tech is transforming diagnostics and care
            </h3>
            <p className="font-semibold my-4">
              Read three inspiring stories of how Aaltonians are bringing new
              hope to people who suffer from
            </p>
          </div>
          <a
            href="#"
            className="gap-2 flex hover:text-black hover:bg-white w-fit"
          >
            <span className="my-auto ">
              <RxArrowRight />
            </span>
            <p className="underline">Alzheimer's disease</p>
          </a>
          <a
            href="#"
            className="gap-2 flex hover:text-black hover:bg-white w-fit"
          >
            <span className="my-auto ">
              <RxArrowRight />
            </span>
            <p className="underline">Alzheimer's disease</p>
          </a>
          <a
            href="#"
            className="gap-2 flex hover:text-black hover:bg-white w-fit"
          >
            <span className="my-auto ">
              <RxArrowRight />
            </span>
            <p className="underline">Alzheimer's disease</p>
          </a>
          <div className="flex justify-between mt-4">
            <div className="border rounded-full p-1 h-fit w-fit">
              <BsChevronLeft />
            </div>
            <div className="flex">
              <div className="text-4xl">
                <GoPrimitiveDot />
              </div>
              <div className="my-auto">
                <GoPrimitiveDot />
              </div>
              <div className="my-auto">
                <GoPrimitiveDot />
              </div>
              <div className="my-auto">
                <GoPrimitiveDot />
              </div>
            </div>
            <div className="border rounded-full p-1 h-fit w-fit">
              <BsChevronRight />
            </div>
          </div>
        </div>
        <img src="/assets/hero.png" alt="hero section image" />
      </Wrapp>
      <div className="py-6 bg-blackless lg:block hidden"></div>
    </section>
  );
}
