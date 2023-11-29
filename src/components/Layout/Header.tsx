"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navigation from "./Navigation";

type Props = {
  activeItem: number;
};

const Header = ({ activeItem }: Props) => {
  const [active, setactive] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  return (
    <div
      // className={`w-full px-5 py-8 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && "fixed top-0 left-0  z-[9999]"
      //   }`}
      className={`w-full px-5 py-8 border-b min-h-[60px] border-b-lineColor }`}
    // className={`w-full px-5 py-8 border-b min-h-[60px] border-b-lineColor ${active ? "fixed top-0 left-0 z-[9999] transition-opacity duration-500 ease-in-out bg-black bg-opacity-20 backdrop-blur-md border-b-0" : ""}`}

    >
      <div className="flex items-center justify-between ">
        <Navigation activeItem={activeItem} />
        <div>
          <Link href={"/"}>
            <h1 className="text-2xl cursor-pointer font-semibold">
              <span className="text-primary">@Abhi</span>Thory
            </h1>
          </Link>
        </div>
        {/* <div className="flex items-center ml-10">
          <div>
            <DropDown
              setOpen={setOpen}
              handleProfile={handleProfile}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
