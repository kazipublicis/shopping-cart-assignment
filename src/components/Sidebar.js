import React from "react";

const Sidebar = ({ categories, selectedCategory, filter }) => {
  return (
    <aside
      id="sidebar"
      className="bg-zinc-300 w-60"
      style={{
        top: "0px",
        bottom: "0",
        position: "absolute",
        marginTop: "105px",
        height: "100%",
        paddingBottom: "101%",
      }}
      aria-label="Sidebar"
    >
      <ul>
        {categories.map((c, key) => {
          return (
            <li
              key={key}
              className={`sidebar_elements ${
                selectedCategory == c.id ? "selected" : ""
              } `}
            >
              <button
                className={`hover:text-rose-800 focus:text-rose-800 ${
                  selectedCategory == c.id ? "text-white" : ""
                }`}
                onClick={() => filter(c.id)}
                aria-label={c.name}
              >
                {c.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
