import React from "react";

export default function header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="container mx-auto px-10 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <img src={require("../assets/logo.png")} alt="main logo" />
          </div>
          <div
            className="navbar-collapse collapse grow items-center ml-20 mt-10"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-black-600 hover:text-black-800 font-medium cursor-pointer"
                  href="#!"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-black-600 hover:text-black-800 font-medium cursor-pointer"
                  href="#!"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center">
            <ul className="flex flex-row mr-auto justify-end">
              <li className="text-sm font-medium text-black-600 hover:text-black-800 cursor-pointer">
                Sign in
              </li>
              <li className="ml-2 text-sm font-medium text-black-600 hover:text-black-800 cursor-pointer">
                Register
              </li>
            </ul>
            <ul className="bg-zinc-300 px-8 py-4 mb-0 flex flex-row items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#d01755"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <li className="text-sm font-medium text-black-600 pl-2">
                0 items
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
