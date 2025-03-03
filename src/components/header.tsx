import { hrefLinks } from "../lib/utils";
import { useEffect, useRef, useState, useCallback } from "react";

interface Link {
  path: string;
  name: string;
}

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerShrink, setHeaderShrink] = useState(false);

  // Optimize event listener with useCallback
  const handleScroll = useCallback(() => {
    setHeaderShrink(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Smooth scrolling with improved safety
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetAttr = e.currentTarget.getAttribute("href");
    if (targetAttr?.startsWith("#")) {
      e.preventDefault();
      const location = document.querySelector(targetAttr) as HTMLElement | null;
      if (location) {
        const targetPosition = location.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: targetPosition - 80, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className={`w-full h-20 leading-[80px] transition-all duration-300 ${
        headerShrink
          ? "backdrop-blur-md bg-white/30 sticky top-0 z-[9999] shadow-md"
          : ""
      }`}
    >
      <div className="max-w-[1140px] px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <h2 className="flex items-center">
          <a
            href="#"
            className="text-black font-bold no-underline text-lg whitespace-nowrap"
          >
            Urgentcare
          </a>
        </h2>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-[3rem]">
            {hrefLinks.map(({ path, name }: Link, index: number) => (
              <li
                key={index}
                className="transition-transform duration-300 hover:scale-110"
              >
                <a
                  href={path}
                  className="font-bold cursor-pointer text-lg text-black hover:text-gray-700"
                  onClick={handleClick}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
