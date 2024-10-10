"use client";

import Link from "next/link";
import { Hero } from "../Hero";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Header = () => {
  return (
    <>
      <header className="absolute top-0 left-0 px-24 h-[100px] w-full bg-[#00000020] glass shadow-[0_0_2px#ffffff] text-black">
        <nav className="h-full flex justify-between ">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[34px]">Art & Soul</div>
            <div className="text-3xl">
              Photography
            </div>
          </div>
          <div className="flex gap-10 h-full items-center text-xl">
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
              href="https://instagram.com"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              <FacebookIcon /> 
            </Link>
            <Link
              href="https://instagram.com"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              <XIcon /> 
            </Link>
          </div>
        </nav>
      </header>
      <Hero
        img={
          "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1623453283834-GT9UR8BV9W7WXYQ4EPR6/V_KL9752.jpg?format=2500w"
        }
      />
    </>
  );
};

export default Header;
