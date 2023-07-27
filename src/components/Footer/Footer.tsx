import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between p-7 shadow-md dark:shadow-slate-900 shadow-slate-100 text-gray-600">
      <div className="flex gap-3 opacity-80 cursor-pointer">
        <Image
          priority
          src="/icons/github.svg"
          alt="Logo"
          width={25}
          height={25}
          className="dark:hidden"
        />
        <Image
          priority
          src="/icons/github-dark.svg"
          alt="Logo"
          width={25}
          height={25}
          className="hidden dark:block"
        />
        <Image
          priority
          src="/icons/instagram.svg"
          alt="Logo"
          width={25}
          height={25}
          className="dark:hidden"
        />
        <Image
          priority
          src="/icons/instagram-dark.svg"
          alt="Logo"
          width={25}
          height={25}
          className="hidden dark:block"
        />
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
