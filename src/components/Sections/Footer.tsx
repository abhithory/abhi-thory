import useSocialMediaLinks from "@/hooks/useSocialMediaLinks";
import { styles } from "@/styles/styles";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const { renderSocialMediaLinks } = useSocialMediaLinks();

  return (
    <div className="flex justify-between items-center px-12 py-8 flex-col-reverse md:flex-row gap-6">
      <p className={`${styles.paragraph}`}>
        {new Date().getFullYear()} @Abhithory
      </p>
      <div className="flex gap-5 justify-center items-center text-xl sm:text-xl xl:text-2xl 2xl:text-3xl">
        {renderSocialMediaLinks()}
      </div>
    </div>
  );
};

export default Footer;
