"use client";

import Link from "next/link";
import GlobeLogo from "@/components/Globe-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import {
  DocumentTextIcon,
  HomeIcon,
  ForwardIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Magnetic Materials",
    href: "/magnetic-materials",
    icon: DocumentTextIcon,
  },
  {
    name: "Shapes",
    href: "/shapes",
    icon: Square2StackIcon,
  },
  {
    name: "Coatings",
    href: "/coatings",
    icon: ForwardIcon,
  },
];

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export default function Nav() {
  return (
    <div className="flex h-15 flex-row px-10 py-4 bg-gray-50 md:px-10 md:flex-col">
      <div className="flex grow flex-col justify-between space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <Link
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-200 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
          href="/"
        >
          <div className="w-32 md:w-32">
            <GlobeLogo />
          </div>
        </Link>
        <NavLinks />
        <div className="hidden h-[48px] w-full grow rounded-md bg-gray-100 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:w-auto md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
