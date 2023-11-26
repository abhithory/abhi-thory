"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./DropDown";
import { GrGithub } from "react-icons/gr";

type Props = {
  activeItem: number;
};

const Header = ({ activeItem }: Props) => {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  const handleProfile = () => {
    setActiveProfile(!activeProfile);
  };

  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && "fixed top-0 left-0 bg-[#000] z-[9999]"
        }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className="text-[#64ff4c]">Abhi</span><span>Thory</span>
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-10">
          <div>
            <DropDown
              setOpen={setOpen}
              handleProfile={handleProfile}
            />
          </div>
        </div>
      </div>

      {/* for mobile screen */}
      <div className="w-full md:hidden flex items-center justify-between">
        <div>
          <Link href="/">
            <h1>
              <Link href={"/"}>
                <h1 className="font-Inter text-3xl cursor-pointer font-semibold">
                  <span className="text-[#64ff4c]">Abhi</span>{" "}Thory
                </h1>
              </Link>
            </h1>
          </Link>
        </div>

        <div>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {open && (
          <div
            className="fixed md:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed bg-black h-screen top-0 right-0 w-[60%] z-[9999]">
              <div className="mt-20 p-5">
                <Navigation activeItem={activeItem} />
                <DropDown
                  setOpen={setOpen}
                  handleProfile={handleProfile}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
