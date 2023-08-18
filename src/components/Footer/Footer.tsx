import Image from "next/image";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col gap-5 justify-between py-5 2xl:px-56 xl:px-36 lg:px-12 px-8  shadow-md dark:shadow-slate-900 shadow-slate-100 text-gray-600">
      <div className="flex gap-3 opacity-80 cursor-pointer">
        <div className="flex items-center justify-between gap-5">
          <BsGithub className="text-black dark:text-white w-[27px] h-[27px]" />
          <BsInstagram className="text-black dark:text-white w-[27px] h-[27px]" />
          <BsFacebook className="text-black dark:text-white w-[27px] h-[27px]" />
        </div>
      </div>
      <p> ©2023 All rights reserved. Created by An Huong</p>
      <div className="flex gap-5 cursor-pointer">
        <span className="hover:text-black dark:hover:text-slate-500">
          Vietnamese
        </span>
        <span className="hover:text-black dark:hover:text-slate-500">
          English
        </span>
      </div>
    </footer>
  );
}
