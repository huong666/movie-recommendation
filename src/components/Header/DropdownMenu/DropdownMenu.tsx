import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DropdownMeny() {
  return (
    <div className="lg:hidden h-full">
      <Sheet>
        <SheetTrigger className="h-full">
          <GiHamburgerMenu
            width={50}
            height={50}
            className="text-[1.5rem] my-auto"
          />
        </SheetTrigger>
        <SheetContent className="w-full h-1/3" side={"top"}>
          <ul className="flex font-medium text-xl gap-5 flex-col mt-20 w-full">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/actor">
              <li>News</li>
            </Link>
            <Link href="/info">
              <li>Info Movie</li>
            </Link>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
