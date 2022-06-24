import React, { useState } from "react";
import { Header, Footer } from "../components";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!validateEmail(email)) {
      alert("Enter Valid Email");
      return false;
    }
    if (password.length < 8) {
      alert("Enter password of minimum 8 character");
      return false;
    }
    navigate("/");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
      <Header />
      <section>
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="md:w-full lg:w-4/5 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-full md:w-1/2 lg:w-1/3 sm:pr-2 sm:py-8">
                <h3 className="text-black text-4xl font-bold mb-6">Login</h3>
                <p className="text-black text-lg font-medium">
                  Get access to your orders. Wishlist and Recommendations{" "}
                </p>
              </div>
              <div className="sm:w-full md:w-1/2 lg:w-2/5 sm:pl-8 sm:py-8  border-gray-200  mt-4 pt-4 sm:mt-0 text-left md:ml-0 lg:ml-4">
                <div className="relative z-0 mb-6">
                  <input
                    type="email"
                    id=""
                    className="block pb-2 pt-7 font-semibold px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
                    placeholder=" "
                    aria-required="true"
                    aria-label="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute font-semibold text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="password"
                    id=""
                    className="block pb-2 pt-7 font-semibold px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
                    placeholder=" "
                    aria-required="true"
                    aria-label="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute font-semibold text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="relative mt-10">
                  <button
                    type="button"
                    className="bg-rose-800 text-white w-full border-0 p-2 text-lg"
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
