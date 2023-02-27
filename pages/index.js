import Header from "@/components/section/header"
import Hero from "@/components/section/hero"
import Spotlight from "@/components/section/spotlight"
import {ImFacebook} from 'react-icons/im'
import {ImLinkedin2} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {FaInstagram} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {SiSnapchat} from 'react-icons/si'
import {GrChatOption} from "react-icons/gr"
import Link from "next/link"

import Wrapp from "@/components/ui/wrapper"



export default function Home() {
  
  return (
    <section className="text-white text-xl">
      <Header/>
      <Hero/>
      <Spotlight/>
      <section className="bg-blackless pb-12 pt-12 border-t">
        <Wrapp>
          <section className="lg:flex lg:flex-row flex-col gap-12">
            <div>
              <Link href="/" className=" group w-fit h-fit lg:pb-2 pl-10">
                <h1 className="lg:text-7xl text-3xl font-bold flex">A <span className="group-hover:hidden">?</span> <span className="hidden group-hover:block">"</span></h1>
                <p className="font-bold text-[0.75rem] lg:block hidden">Aalto University</p>
              </Link>
              <div className="text-[1rem]">
                <p>Aalto University</p>
                <p>P.O. Box 11000 (Otakaari 1B)</p>
                <p>FI-00076 AALTO</p>
                <p>Switchboard: +358 9 47001</p>
              </div>
              <div>
                <h2>Follow us:</h2>
                <div className="flex">
                  <span>{ImFacebook}</span>
                  <span>{ImLinkedin2}</span>
                  <span>{ImTwitter}</span>
                  <span>{FaInstagram}</span>
                  <span>{BsYoutube}</span>
                  <span>{SiSnapchat}</span>
                  <span>{GrChatOption}</span>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:flex-row flex-col gap-12 mb-10 lg:w-[50%]">
                <div>
                  <h2 className="mb-2">Quicklinks</h2>
                  <p className="underline text-[1rem]">Research and artistic outputs</p>
                  <p className="underline text-[1rem]">Library – Learning Centre</p>
                  <p className="underline text-[1rem]">Admissions</p>
                  <p className="underline text-[1rem]">Alumni</p>
                  <p className="underline text-[1rem]">Media</p>
                  <p className="underline text-[1rem]">IT services</p>
                  <p className="underline text-[1rem]">Open University</p>
                  <p className="underline text-[1rem]">Aalto University Shop</p>
                  <h2 className="my-2">Latest</h2>
                  <p className="underline text-[1rem]">News</p>
                  <p className="underline text-[1rem]">Events</p>
                  <p className="underline text-[1rem]">Careers</p>
                </div>

                <div>
                  <h2 className="mb-2">Contact</h2>
                  <p className="underline text-[1rem]">Campus maps</p>
                  <p className="underline text-[1rem]">Contact information</p>

                  <h2 className="my-2">For students</h2>
                  <p className="underline text-[1rem]">Student Guide</p>
                  <p className="underline text-[1rem]">Webmail</p>
                  <p className="underline text-[1rem]">MyCourses</p>
                  <p className="underline text-[1rem]">MyStudies</p>
                  <p className="underline text-[1rem]">Sisu</p>
                </div>
            </div>
            <div className="lg:border-t-none lg:border-b-none border-t border-b lg:ml-20">
                <h2 className="text-4xl ">Together towards a better world.</h2>
                <p className="text-[1rem]">Support new ideas, research, work and leadership development towards a stronger Finland.</p>
                <button className="rounded-4xl text-blackless">Donate  to Alto University</button>
            </div>
          </section>
          <div className="border-t lg:flex-row flex-col flex justify-between">
            <div className="flex gap-4">
              <p className="underline text-[1rem]">Privacy notice</p>
              <p className="underline text-[1rem]">Cookie policy</p>
              <p className="underline text-[1rem]">Feedback</p>
              <p className="underline text-[1rem]">Accessibility statement</p>
              <p className="underline text-[1rem]">Cookie settings</p>
            </div>
            <div className="lg:mt-0 mt-12 flex gap-4">
              <p className="underline text-[1rem]">Suomeki</p>
              <p className="underline text-[1rem]">Svenska</p>
              <p className="text-[1rem]">English</p>
            </div>
          </div>
        </Wrapp>
      </section>
    </section>
  )
}
