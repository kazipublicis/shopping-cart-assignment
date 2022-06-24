import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Header, Carousel, Section, Footer } from "../components";
import { Api } from "../helper/service";

export default function Home() {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);

  function compare(a, b) {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    const getBanner = async () => {
      try {
        const data = await Api.get("banners");
        setBanners(data.data);
        console.log("data", data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getCategories = async () => {
      try {
        const data = await Api.get("categories");
        setCategories(data.data.sort(compare).filter((e) => e.order > 1));
        console.log(
          "category",
          data.data.sort(compare).filter((e) => e.order > 1)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    getBanner();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto sm:px-0 md:px-8 lg:px-10 w-full flex flex-wrap items-center justify-between">
        <Carousel banners={banners} />
        {categories.map((e, key) => {
          return (
            <Section
              key={key}
              image={e.imageUrl}
              imageAlt={"cat-" + e.name}
              title={e.name}
              desc={e.description}
              buttonText={"Explore " + e.name}
              alter={key % 2 === 0 ? false : true}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
