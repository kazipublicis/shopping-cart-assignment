import React from "react";
import PropTypes from "prop-types";

export default function Section({
  image,
  title,
  desc,
  buttonText,
  imageAlt,
  alter,
}) {
  return (
    <section className="mt-4 w-full">
      <div
        style={{
          height: "370px",
          boxShadow: "0 3px 5px -3px rgba(0, 0, 0, 0.5)",
        }}
        className="h-20 items-center flex justify-around "
      >
        {alter ? (
          <>
            <div className="items-center justify-center flex flex-col">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-xl font-medium	mt-2">{desc}</p>
              <button className="px-4 py-2 bg-[#d01755] text-white font-semibold mt-6">
                {buttonText}
              </button>
            </div>
            <img
              className=""
              style={{ height: "300px" }}
              src={image}
              alt={imageAlt}
            />
          </>
        ) : (
          <>
            <img
              className=""
              style={{ height: "300px" }}
              src={image}
              alt={imageAlt}
            />
            <div className="items-center justify-center flex flex-col">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-xl font-medium	mt-2">{desc}</p>
              <button className="px-4 py-2 bg-[#d01755] text-white font-semibold mt-6">
                {buttonText}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

Section.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  buttonText: PropTypes.string,
};
