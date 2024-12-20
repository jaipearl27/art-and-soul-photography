"use client";

import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="glass !bg-[#04091a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link href={"/"}>
              <Image src={Logo} alt="" height={200} width={200} />
            </Link>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>

            <Link href="/photography" className="hover:text-gray-300 transition-colors">
              Photography
            </Link>

            <Link href="/films" className="hover:text-gray-300 transition-colors">
              Films
            </Link>

            <Link href="/about-us" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            
            <Link href="/contact-us" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/artandsoulphotography.in/"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              <InstagramIcon />
            </a>
            <a
              href="https://youtube.com/@artandsoulphotographyfilms?si=Cxa3mZH5t84mt4Wd"
              className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
            >
              <YouTubeIcon />
            </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-6">
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} Art & Soul Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
