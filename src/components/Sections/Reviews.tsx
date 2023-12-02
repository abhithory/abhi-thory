import { styles } from '@/styles/styles';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Reviews = () => {
  const renderReviews = () => {
    const reviews = [];

    for (let i = 1; i <= 16; i++) {
      reviews.push(
        <Image
          key={i}
          src={`/abhi/reviews/${i}.png`}
          alt=""
          width={400}
          height={100}
          className=" mx-2  w-[360px] cursor-pointer rounded-2xl border-4 border-secondary object-contain transition-transform hover:scale-105  md:w-[400px] xl:w-[600px]"
        />,
      );
    }

    return reviews;
  };

  return (
    <div className="py-4 md:py-10" id="reviews">
      <h1 className={`${styles.heading} text-center font-Monserrat`}>
        Reviews
      </h1>
      <div className="flex w-full justify-center pt-3">
        <div className="h-[2px] w-[50px] bg-primary" />
      </div>
      <Marquee className="my-10 w-full" speed={80}>
        {renderReviews()}
      </Marquee>
    </div>
  );
};

export default Reviews;
