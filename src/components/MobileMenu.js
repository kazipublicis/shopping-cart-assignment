import { useState } from "react";

const MobileMenu = ({ options, onClick, value }) => {
  const [show, setShow] = useState(false);
  const label =
    options.filter((e) => e.id === value)[0]?.name ?? "All Products";
  return (
    <div className="relative inline-block text-left w-full productSelect">
      <div>
        <button
          type="button"
          className="inline-flex w-full shadow-sm px-4 py-2 bg-rose-800 text-sm font-medium text-white focus:outline-none focus:ring-offset-2 justify-between"
          id="menu-button"
          aria-haspopup="true"
          onClick={() => setShow(!show)}
        >
          {label}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
          show ? "block" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {options.map((e) => (
            <button
              className="text-gray-700 block px-4 py-2 text-sm cursor-pointer w-full text-left"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={() => {
                setShow(!show);
                onClick(e);
              }}
              key={e.key}
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
