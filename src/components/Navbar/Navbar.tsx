import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Link href="/">
        <Image src="/images/logo.svg" alt="MNTN" width={100} height={100} />
      </Link>
      <ul className="flex items-center gap-8">
        <li>
          <Link
            href="/"
            className="transition-all duration-300 ease-in-out hover:text-accent"
          >
            Equipement
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="transition-all duration-300 ease-in-out hover:text-accent"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="transition-all duration-300 ease-in-out hover:text-accent"
          >
            Blog
          </Link>
        </li>
      </ul>
      <Link
        href="/"
        className="flex items-center gap-2 text-base transition-all duration-300 ease-in-out hover:text-accent"
      >
        <span>
          <CircleUserRound size={18} />
        </span>
        <span>Account</span>
      </Link>
    </nav>
  );
};
