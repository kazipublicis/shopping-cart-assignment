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
          boxShadow: "0 3px 5px -3px rgba(0, 0, 0, 0.5)",
        }}
        className="items-center flex justify-around p-5 shadow-current"
      >
        {alter ? (
          <>
            <div className="w-3/5 items-center justify-center flex flex-col text-center">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-xl font-medium	mt-2">{desc}</p>
              <button className="px-4 py-2 bg-[#d01755] text-white font-semibold mt-6">
                {buttonText}
              </button>
            </div>
            <div className="w-2/5">
              <img className="" src={image} alt={imageAlt} />
            </div>
          </>
        ) : (
          <>
            <div className="w-2/5">
              <img className="" src={image} alt={imageAlt} />
            </div>
            <div className="w-3/5 items-center justify-center flex flex-col text-center">
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
