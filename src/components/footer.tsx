import {
  linkedIn,
  telegram,
  report,
  instagram /* testBlog */,
} from "../lib/links";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillInfoCircle,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
/* import { FaBlog } from "react-icons/fa";
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 bg-gradient-to-r from-[#1b2352] to-[#0c123d]">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h2 className="text-primary md:text-2xl">
              Tresor Uni
              <span className="ml-1 px-2 py-0.5 text-xs font-medium text-white bg-blue-500 rounded">
                Beta
              </span>
            </h2>
          </div>

          {/* Links Section */}
          <div className="flex justify-center gap-6">
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
            >
              <AiFillLinkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
            >
              <AiFillInstagram className="w-6 h-6 text-primary" />
            </a>
            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
            >
              <FaTelegram className="w-6 h-6 text-primary" />
            </a>

            <a
              href={report}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
            >
              <AiFillInfoCircle className="w-6 h-6 text-primary" />
            </a>

            {/* <a href={testBlog} target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110">
              <FaBlog className="w-6 h-6 text-primary"/>
            </a> */}
          </div>

          {/* Copyright Section */}
          <p className="text-sm text-white opacity-80 md:text-base text-center">
            © {year} Tresor Uni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
