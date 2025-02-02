'use client';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export const Abhi = () => {
  const renderReviews = () => {
    const reviews = [];

    for (let i = 1; i <= 17; i++) {
      reviews.push(
        <Image
          key={i}
          src={`/abhi/images/${i}.jpg`}
          alt=""
          width={300}
          height={300}
          className=" mx-2 h-[400px] w-auto cursor-pointer rounded-2xl object-contain grayscale transition-transform hover:scale-105 hover:grayscale-0"
        />,
      );
    }

    return reviews;
  };

  return (
    <div className="py-4 md:py-10" id="reviews">
      <h1 className={`text_sub_heading_size text-center font-Monserrat`}>
        abhishek thory
      </h1>
      <div className="flex w-full justify-center pt-3">
        <div className="h-[2px] w-[50px] bg-primary" />
      </div>
      <Marquee className="my-10 w-full" speed={1000} pauseOnHover>
        {renderReviews()}
      </Marquee>
    </div>
  );
};
