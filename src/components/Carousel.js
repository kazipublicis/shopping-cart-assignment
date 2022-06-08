/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from "react";
import { Carousel } from "react-responsive-carousel";

const indicatorStyles = {
  background: "#a29b9b",
  width: 8,
  height: 8,
  borderRadius: 4,
  display: "inline-block",
  margin: "0 8px",
};

export default function Carousl({ banners }) {
  return (
    <div
      className="mt-6"
      style={{
        boxShadow: "0 3px 5px -3px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Carousel
        interval={2000}
        showThumbs={false}
        statusFormatter={() => ""}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: "#000" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {banners.map((e, key) => {
          return (
            <div key={key}>
              <img
                src={`${e.bannerImageUrl}`}
                className="block w-full"
                alt="Motorbike Smoke"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
