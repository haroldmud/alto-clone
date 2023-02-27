import {BsBag} from "react-icons/bs"
import {FiHeart} from "react-icons/fi"
import {RxDividerVertical} from "react-icons/rx"
import {TbWorld} from "react-icons/tb"
import {BsChevronDown} from "react-icons/bs"
import {RiSearchLine} from "react-icons/ri"
import {HiOutlineMenu} from "react-icons/hi"
import Link from "next/link"


export default function Header(){
  return(
    <section className="bg-blackless border-b">
      <header className="flex  text-white justify-between w-11/12 mx-auto py-2">
        <Link href="/" className=" group w-fit h-fit lg:pb-2 pl-10">
          <h1 className="lg:text-7xl text-3xl font-bold flex">A <span className="group-hover:hidden">?</span> <span className="hidden group-hover:block">"</span></h1>
          <p className="font-bold text-[0.75rem] lg:block hidden">Aalto University</p>
        </Link>
        <div className="flex lg:w-8/12 w-3/12 justify-between">
        <Link href="/personnel" className="md:flex hidden my-auto gap-2">
          <span className="my-auto"><BsBag/></span>
          <span>For personnel</span>
        </Link>
        <Link href="/support" className="md:flex hidden my-auto gap-2">
          <span className="my-auto"><FiHeart/></span>
          <span>Support us</span>
        </Link>
        <div className="h-fit my-auto text-4xl lg:block hidden">
          <span className="my-auto"><RxDividerVertical/></span>
        </div>
        <Link href="/personnel" className="md:flex hidden my-auto gap-2">
          <span className="my-auto"><TbWorld/></span>
          <div className="flex">
            <p>EN</p><span className="my-auto pl-2"><BsChevronDown/></span>
          </div>
        </Link>
        <Link href="/personnel" className="my-auto gap-2 flex">
          <span className="my-auto"><RiSearchLine/></span>
          <p className="lg:block hidden">Search</p>
        </Link>
        <div className="h-fit my-auto text-4xl block lg:hidden">
          <span className="my-auto"><RxDividerVertical/></span>
        </div>
        <Link href="/personnel" className="flex my-auto gap-2">
          <span className="my-auto lg:block hidden"><HiOutlineMenu/></span>
          <span>Menu</span>
        </Link>
        <Link href="/personnel" className="bg-white py-2 px-6 h-fit my-auto rounded-3xl text-blackless lg:block hidden">
          Login
        </Link>
        </div>
      </header>
    </section>
  )
}
