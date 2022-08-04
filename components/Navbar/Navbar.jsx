import React, { useState } from "react";

// @nextjs
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ logoImage }) => {
  const router = useRouter();

  const [openMenuVertical, setOpenMenuVertical] = useState(false);

  const handleMenuVertical = () => {
    if (!openMenuVertical) {
      setOpenMenuVertical(true);
    } else {
      setOpenMenuVertical(false);
    }
  };


  return (
    <>
      <nav className="z-40 px-6 bg-slate-50 drop-shadow-lg font-nunito">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-16">
            {/* ---logo--- */}
            <div className="bg-red-300 flex-shrink-0 flex items-center">
              <img
                className="h-14 w-full"
                src={`${process.env.NEXT_PUBLIC_API_URL}${logoImage}`}
                alt="logo"
              />
            </div>
            {/* ---End logo--- */}
            {/* -----------------------------Begin Menu horizontal--------------------------------- */}
            <div className="flex-1 flex justify-between sm:justify-center">
              <div className="sm:block">
                <div className="flex space-x-4 hidden sm:block">
                  <a
                    className={
                      router.pathname == "/"
                        ? "p-3 text-white bg-red-500 rounded drop-shadow-md"
                        : "p-3 text-black hover:bg-red-500 hover:text-white rounded drop-shadow-md"
                    }
                  >
                    <Link href="/">INICIO</Link>
                  </a>

                  <a
                    className={
                      router.pathname == "/categories"
                        ? "p-3 text-white bg-red-500 rounded drop-shadow-md"
                        : "p-3 text-black hover:bg-red-500 hover:text-white rounded drop-shadow-md"
                    }
                  >
                    <Link href="/categories">MENU</Link>
                  </a>

                  <a
                    className={
                      router.pathname == "/contact"
                        ? "p-3 text-white bg-red-500 rounded drop-shadow-md"
                        : "p-3 text-black hover:bg-red-500 hover:text-white rounded drop-shadow-md"
                    }
                  >
                    <Link href="/contact">CONTACTO</Link>
                  </a>
                </div>
              </div>
              <button
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="w-10 h-10 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
                onClick={handleMenuVertical}
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <a
              to="/shopping-car"
              className="hidden cursor-pointer sm:block"
            ></a>
          </div>
          {/* ------------------------------Ended Menu horizontal---------------------------------- */}
        </div>

        {/* <---menu vertical ----> */}
        <div
          className={
            openMenuVertical
              ? "w-10/12 float-right opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "w-10/12 float-right opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-slate-50 divide-y-2 divide-gray-50">
            <div className="pt-2 pb-6 px-5">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    passHref
                    // onClick={handleMenuVertical}
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <div className="cursor-pointer hover:bg-red-400 p-4 rounded-xl">
                      <i className="fas fa-home"></i>

                      <span className="ml-3 text-base font-medium text-gray-900">
                        INICIO
                      </span>
                    </div>
                  </Link>

                  <Link
                    passHref
                    onClick={handleMenuVertical}
                    href="/categories"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <div className="cursor-pointer hover:bg-red-400 p-4 rounded-xl">
                      <i className="fa-solid fa-utensils"></i>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        MENU
                      </span>
                    </div>
                  </Link>

                  <Link
                    passHref
                    onClick={handleMenuVertical}
                    href="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <div className="cursor-pointer hover:bg-red-400 p-4 rounded-xl">
                      <i className="fa-solid fa-address-card"></i>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        CONTACT
                      </span>
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <---end menu vertical ----> */}
      </nav>
    </>
  );
};

export default Navbar;
