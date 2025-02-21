import { actionLinks, hrefLinks } from "../lib/links";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6"; // Importing icons
import { IoIosCloseCircle } from "react-icons/io"

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerShrink, setHeaderShrink] = useState(false);
  const [isOpened, setIsOpened] = useState(false); // For dropdown menu state

  const headerFunc = () => {
    setHeaderShrink(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetAttr = e.currentTarget.getAttribute("href");

    if (targetAttr && targetAttr.startsWith("#")) {
      e.preventDefault();
      const location = document.querySelector(targetAttr) as HTMLElement;
      if (location) {
        window.scrollTo({
          left: 0,
          top: location.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`w-full h-20 leading-[80px] relative transition-all duration-200 ${
        headerShrink ? "bg-[#0c123d] sticky top-0 z-[9999]" : ""
      }`}
      ref={headerRef}
    >
      <div className="max-w-[1140px] px-4 mx-auto">
        <div className="flex items-center justify-between px-5">
          <div>
            <h2>
              <a
                href="#"
                className="text-primary font-bold no-underline text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap"
              >
                Tresor Uni
                <span className="ml-1 px-2 py-0.5 text-xs font-medium text-white bg-blue-500 rounded">
                  Beta
                </span>
              </a>
            </h2>
          </div>

          {/* Dropdown for smaller screens */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpened(!isOpened)}
              className="text-white text-2xl"
            >
              {isOpened ? <IoIosCloseCircle /> : <FaBars />}
            </button>

            {/* Dropdown with smooth animation */}
            <ul
              className={`absolute right-0 top-[60px] w-[250px] bg-[#0c123d] text-center shadow-lg z-50 transition-all duration-300 transform ${
                isOpened
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-90 opacity-0 translate-y-[-100%]"
              }`}
            >
              {hrefLinks.map((item, index) => (
                <li
                  key={index}
                  className="py-2 text-white border-b border-gray-700 last:border-none hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <a
                    href={item.path}
                    className="font-normal text-base cursor-pointer"
                    onClick={(e) => {
                      handleClick(e);
                      setIsOpened(false);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              {/* actionLinks inside the dropdown */}
              {actionLinks.map((item, index) => (
                <li
                  key={index}
                  className="py-2 text-white border-b border-gray-700 last:border-none hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <a
                    href={item.link}
                    className="font-normal text-base cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Centered items for larger screens */}
          <div className="hidden md:flex flex-1 items-center justify-center mx-auto">
            <ul className="list-none flex flex-wrap justify-center items-center space-x-[2.7rem]">
              {hrefLinks.map((item, index) => (
                <li
                  className="transform hover:scale-110 transition-all duration-300"
                  key={index}
                >
                  <a
                    href={item.path}
                    className="font-normal text-base cursor-pointer hover:text-blue-500"
                    onClick={handleClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* actionLinks for larger screens */}
          <span className="hidden items-center space-x-4 md:flex">
            {actionLinks.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="transition-all duration-300 transform hover:scale-110 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </span>
        </div>
      </div>
    </header>
  );
}
