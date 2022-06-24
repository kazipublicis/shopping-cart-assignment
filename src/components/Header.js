import React from "react";
import { useNavigate } from "react-router-dom";

export default function header({ cartClick, cart }) {
  let navigate = useNavigate();

  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 lg:px-10 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <img
              src={require("../assets/logo.png")}
              alt="main logo"
              className=" w-24 mt-11 md:w-48 md:mt-0"
            />
          </div>
          <div
            className=" collapse grow items-center sm:mx-auto lg:ml-20 mt-10"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto flex justify-center lg:justify-start lg:flex-row">
              <li className="nav-item">
                <button
                  className="nav-link block pr-2 lg:px-2 py-2 text-black-600 hover:text-black-800 font-medium cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link block pr-2 lg:px-2 py-2 text-black-600 hover:text-black-800 font-medium cursor-pointer"
                  onClick={() => navigate("/products")}
                >
                  Products
                </button>
              </li>
            </ul>
          </div>
          <div className="items-center">
            <ul className="flex flex-row mr-auto justify-end">
              <li className="text-sm font-medium text-black-600 hover:text-black-800 cursor-pointer">
                <button onClick={() => navigate("/login")}>Sign in</button>
              </li>
              <li className="ml-2 text-sm font-medium text-black-600 hover:text-black-800 cursor-pointer">
                <button onClick={() => navigate("/signup")}>Register</button>
              </li>
            </ul>
            <ul className="bg-zinc-300 mb-0 mt-4">
              <button
                className="flex flex-row items-center px-8 py-4"
                onClick={cartClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#d01755"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <li className="text-sm font-medium text-black-600 pl-2">
                  {cart?.length ?? 0} items
                </li>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
