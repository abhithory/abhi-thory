import Link from 'next/link';
import React from 'react';

const navItems = [
  {
    title: 'Hello',
    href: '#hello',
  },
];

const Navigation = () => {
  // const [active, setactive] = useState(false);

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setactive(true);
  //     } else {
  //       setactive(false);
  //     }
  //   });
  // }

  return (
    <nav
      // className={`w-full px-5 py-8 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && "fixed top-0 left-0  z-[9999]"
      //   }`}
      className={`} min-h-[60px] w-full border-b border-b-divider px-5 py-8`}
    >
      <div className="flex items-center justify-between ">
        <div className="block md:flex">
          {navItems.map((item, index) => (
            <Link key={item.title} href={item.href}>
              <h5
                className={`inline-block py-5 font-Inter text-2xl font-[500] text-primary md:px-4 md:py-0 xl:px-8 `}
              >
                {item.title}
              </h5>
            </Link>
          ))}
        </div>
        <div>
          <Link href={'/'}>
            <h1 className="cursor-pointer text-2xl font-semibold">
              <span className="text-primary">@Abhi</span>
              Thory
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
    </nav>
  );
};

export default Navigation;
