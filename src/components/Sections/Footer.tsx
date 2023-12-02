import useSocialMediaLinks from '@/hooks/useSocialMediaLinks';
import { styles } from '@/styles/styles';
import React from 'react';

const Footer = () => {
  const { renderSocialMediaLinks } = useSocialMediaLinks();

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-6 px-12 py-8 md:flex-row">
      <p className={`${styles.paragraph}`}>
        {new Date().getFullYear()} @Abhithory
      </p>
      <div className="flex items-center justify-center gap-5 text-xl sm:text-xl xl:text-2xl 2xl:text-3xl">
        {renderSocialMediaLinks()}
      </div>
    </div>
  );
};

export default Footer;
