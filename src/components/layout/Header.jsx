"use client";
import { useState } from "react";

import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";

import Logo from "@/assets/Logo.png";

const Header = () => {
  const [showMobDropdown, setShowMobDropdown] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 px-4 md:px-24 h-[100px] w-full bg-[#00000020] glass shadow-[0_0_2px#ffffff] text-black">
        <nav className="h-full flex justify-between ">
          <div className="flex flex-col justify-center items-center">
            <Link href={"/"}>
              <Image src={Logo} alt="" height={120} width={120} />
            </Link>
          </div>
          <div className="hidden md:flex gap-10 h-full items-center text-lg">
            <Link
              href="/photography"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              Photography
            </Link>
            <Link
              href="/films"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              Films
            </Link>
            <Link
              href="/about-us"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              Contact
            </Link>
            <Link
              href="https://instagram.com"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://facebook.com"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://youtube.com"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              <YouTubeIcon />
            </Link>
          </div>
          <div className="lg:hidden flex flex-col justify-center">
            <div
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-white rounded-lg"
              onClick={() => setShowMobDropdown(!showMobDropdown)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <div
              className={`${
                showMobDropdown ? "" : "hidden"
              } absolute top-[102%] right-0 w-[300px] max-w-[300px] max-h-[500px] overflow-y-auto !bg-[#00000080] flex flex-col shadow-[0_2px_2px#121212]`}
            >
              <div>
                <Link
                  href={"/"}
                  className="w-full flex justify-end hover:bg-gradient-to-r font-semibold hover:from-[#ebdf3abb] hover:to-[#9c9312bb] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[200px] text-right">Home</span>
                </Link>
                <Link
                  href={"/photography"}
                  className="w-full flex justify-end hover:bg-gradient-to-r font-semibold hover:from-[#ebdf3abb] hover:to-[#9c9312bb] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[200px] text-right">Photography</span>
                </Link>
                <Link
                  href={"/films"}
                  className="w-full flex justify-end hover:bg-gradient-to-r font-semibold hover:from-[#ebdf3abb] hover:to-[#9c9312bb] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[200px] text-right">Films</span>
                </Link>
                <Link
                  href={"/about-us"}
                  className="w-full flex justify-end hover:bg-gradient-to-r font-semibold hover:from-[#ebdf3abb] hover:to-[#9c9312bb] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[200px] text-right">About</span>
                </Link>
                

                <Link
                  href={"/contact-us"}
                  className="w-full flex justify-end hover:bg-gradient-to-r font-semibold hover:from-[#ebdf3abb] hover:to-[#9c9312bb] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[200px] text-right">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
