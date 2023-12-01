'use client'
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

export const Abhi = (props: Props) => {

  const renderReviews = () => {
    const reviews = [];

    for (let i = 1; i <= 12; i++) {
      reviews.push(
        <Image
          key={i}
          src={`/abhi/images/${i}.jpg`}
          alt=""
          width={300}
          height={300}
          className=" mx-2 grayscale  h-[300px] md:h-[360px] xl:h-[400px] object-contain cursor-pointer border-secondary border-4 rounded-2xl  transition-transform hover:scale-105 hover:grayscale-0"
        />
      );
    }

    return reviews;
  };

  return (
    <div className="py-4 md:py-10" id="reviews">
      <h1 className={`font-Monserrat text-center text_sub_heading_size`}>
        abhishek thory
      </h1>
      <div className="w-full flex justify-center pt-3">
        <div className="w-[50px] h-[2px] bg-primary" />
      </div>
      <Marquee className="w-full my-10" speed={80} pauseOnHover>
        {renderReviews()}
      </Marquee>
    </div>
  );
};
