import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useContext,
} from "react";
import CartContext from "../context/cart";
import { Header, Sidebar, MobileMenu } from "../components";
import { Api } from "../helper/service";

export default function product() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [fullProduct, setFullProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const divRef = useRef(null);

  const context = useContext(CartContext);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await Api.get("categories");
        setCategories(data.data);
        console.log("data", data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getProducts = async () => {
      try {
        const data = await Api.get("products");
        setProducts(data.data);
        setFullProduct(data.data);
        console.log("products", data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  const filter = (category) => {
    if (category == selectedCategory) {
      setSelectedCategory();
      setProducts(fullProduct);
    } else {
      setSelectedCategory(category);
      const filtertedProduct = fullProduct.filter(
        (p) => p.category == category
      );
      setProducts(filtertedProduct);
    }
  };

  const close = useCallback(() => {
    let checkout = document.getElementById("cartbox");
    let outerbox = document.getElementById("outerbox");
    checkout.classList.remove("max-w-full");
    checkout.classList.add("max-w-0");
    outerbox.classList.remove("bg-opacity-75");
    outerbox.classList.remove("fixed");
    outerbox.classList.remove("inset-0");
    outerbox.classList.add("bg-opacity-0");
  }, []);

  const open = useCallback(() => {
    let checkout = document.getElementById("cartbox");
    let outerbox = document.getElementById("outerbox");
    checkout.classList.remove("max-w-0");
    checkout.classList.add("max-w-full");

    outerbox.classList.remove("bg-opacity-0");
    outerbox.classList.add("fixed");
    outerbox.classList.add("inset-0");
    outerbox.classList.add("bg-opacity-75");
  }, []);

  const addtocart = (product) => {
    console.log("product", product);
    const { cart } = context;
    const index = cart.findIndex((i) => i.id == product.id);
    if (index != -1) {
      cart[index].qty = cart[index].qty + 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    context.setCart([...cart]);
    console.log(context.cart);
  };

  const decreseQty = (id) => {
    const { cart } = context;
    const index = cart.findIndex((i) => i.id == id);
    if (cart[index].qty == 1) {
      cart.splice(index, 1);
    } else {
      cart[index].qty = cart[index].qty - 1;
    }
    context.setCart([...cart]);
  };

  const increaseQty = (id) => {
    const { cart } = context;
    const index = cart.findIndex((i) => i.id == id);
    cart[index].qty = cart[index].qty + 1;
    context.setCart([...cart]);
  };

  const total = () => {
    const { cart } = context;
    const data = cart.map((i) => i.price * i.qty);
    return data.length > 0 ? data.reduce((prev, next) => prev + next) : 0;
  };

  return (
    <>
      <Header cartClick={open} cart={context.cart} />
      <MobileMenu
        onClick={(e) => filter(e.id)}
        options={categories}
        value={selectedCategory}
      />
      <section className="container mx-auto px-10 h-full">
        <Sidebar
          categories={categories}
          filter={filter}
          selectedCategory={selectedCategory}
        />
        <section
          id="products"
          className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-2 lg:-mx-2 xl:-mx-2 allproducts"
        >
          {products.map((p, key) => {
            return (
              <article
                key={key}
                className="my-6 px-2 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-6 lg:px-2 lg:w-1/4 xl:my-6 xl:px-2 xl:w-1/4"
                style={{ borderBottom: "2px dotted grey" }}
              >
                <h2 className="font-semibold h-12">{p.name}</h2>
                <img
                  className="h-52 w-5/6 center-align productImg"
                  src={p.imageURL}
                  alt={p.sku}
                />
                <p className="bg-neutral-200 p-3 text-xs h-24 overflow-hidden ">
                  {p.description}
                </p>
                <div className="flex flex-row justify-between my-4 items-center mx-3">
                  <p className="font-semibold">MRP: {p.price}</p>
                  <button
                    onClick={() => addtocart(p)}
                    className="bg-rose-800 text-white font-semibold text-sm px-4 py-2"
                  >
                    Buy One
                  </button>
                </div>
              </article>
            );
          })}
        </section>
        <div
          id="outerbox"
          className="bg-opacity-0 bg-gray-500 transition-opacity"
        ></div>

        <div
          ref={divRef}
          id="cartbox"
          className="pointer-events-none fixed inset-y-0 right-0 flex max-w-0 pl-10"
        >
          <div className="pointer-events-auto w-screen max-w-md">
            <div
              className="flex h-4/5 flex-col bg-white shadow-xl"
              style={{ marginTop: "105px" }}
            >
              <div className="flex-1 overflow-y-auto bg-neutral-200">
                <div className="flex items-start justify-between bg-black px-4 py-4">
                  <h2
                    className="text-lg font-bold text-white"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center ">
                    <button
                      type="button"
                      aria-label="Close"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => close()}
                    >
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-8 h-full">
                  {context.cart.length > 0 ? (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {context.cart.map((p, key) => (
                          <li key={key} className="flex py-3 bg-white px-3">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={p.imageURL}
                                alt={p.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3 className="font-semibold">{p.name}</h3>
                              </div>
                              <div className="flex flex-1 justify-between">
                                <div className="flex flex-row items-center">
                                  <button onClick={() => decreseQty(p.id)}>
                                    <p className="px-2 bg-[#d01755] rounded-full text-center text-white font-semibold">
                                      -
                                    </p>
                                  </button>
                                  <p className="ml-2">{p.qty}</p>
                                  <button onClick={() => increaseQty(p.id)}>
                                    <p className="px-2 bg-[#d01755] rounded-full text-center text-white ml-2 font-semibold">
                                      +
                                    </p>
                                  </button>
                                  <p className="ml-6"> * </p>
                                  <p className="ml-6">{p.price}</p>
                                  <p className="ml-7 sm:ml-24">
                                    Rs {p.price * p.qty}{" "}
                                  </p>
                                  <p></p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="h-full flex justify-center items-center flex-col">
                      <p className="font-semibold text-lg">
                        No Items in your cart
                      </p>
                      <p>Your favourite items are just a click away</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 py-2 px-2 sm:px-2 ">
                {context.cart.length > 0 ? (
                  <>
                    <p className="text-sm text-black text-center">
                      Promo code can be applied on Payment page
                    </p>
                    <div className="mt-2 w-full flex rounded-[4px] bg-[#d01755]">
                      <button className=" w-full px-4 py-3 text-white flex flex-row items-center justify-between">
                        <p className="font-semibold">Proceed to Checkout</p>
                        <p className="font-semibold">Rs {total()}</p>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-2 w-full flex rounded-[4px] bg-[#d01755]">
                      <button
                        onClick={close}
                        className=" w-full px-4 py-3 text-white flex items-center"
                      >
                        <p className="text-center font-semibold w-full">
                          Start Shopping
                        </p>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
