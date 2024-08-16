import { useState } from "react";
import { Logo } from "./Logo";
import { Link } from "@remix-run/react";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
];

const ctaLink = {
  title: "Learn More",
  link: "https://www.codingafterthirty.com",
};

export function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <nav className="relative py-6 bg-white z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold leading-none">
            <Logo />
          </Link>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-green-600 p-3"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  key={index}
                  className="text-sm text-gray-600 hover:text-gray-900"
                  to={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            to={ctaLink.link}
            target="_blank"
            rel="noreferrer"
          >
            {ctaLink.title}
          </Link>
        </div>
      </nav>
      <div
        className={`${
          open ? "block" : "hidden"
        } navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="mr-auto text-3xl font-bold leading-none">
              <Logo />
            </Link>
            <button className="navbar-close" onClick={() => setOpen(false)}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {menuItems.map((item, index) => (
                <li className="mb-1" key={index}>
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    to={item.link}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                to={ctaLink.link}
                target="_blank"
                rel="noreferrer"
              >
                {ctaLink.title}
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© {new Date().getFullYear()} All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}
