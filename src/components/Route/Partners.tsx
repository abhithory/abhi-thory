'use client'
import { styles } from "@/styles/styles";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Reviews = (props: Props) => {

  const renderReviews = () => {
    const reviews = [];

    for (let i = 1; i <= 14; i++) {
      reviews.push(
        <Image
          key={i}
          src={`/abhi/reviews/${i}.png`}
          alt=""
          width={600}
          height={200}
          className="mx-4 w-[600px] object-contain  cursor-pointer border-secondary border-4 rounded-2xl  transition-transform hover:scale-105"
        />
      );
    }

    return reviews;
  };

  return (
    <div className="py-10">
      <h1 className={`${styles.heading} font-Monserrat text-center`}>
        Reviews
      </h1>
      <div className="w-full flex justify-center pt-3">
        <div className="w-[50px] h-[2px] bg-primary" />
      </div>
      <Marquee className="w-full my-10" speed={120}>
        {renderReviews()}
      </Marquee>
    </div>
  );
};

export default Reviews;
