import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import DarkMode from "../mode/DarkMode";
import Logo from "./../../public/images/logo.png";
import WhiteLogo from "./../../public/images/logo_white.png";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import {
  isChildrenPageActive,
  isParentPageActive,
} from "../../utils/daynamicNavigation";
import { useEffect, useState } from "react";
import WalletButton from "../wallet-btn/WalletButton";
import { profileModalShow } from "../../redux/counterSlice";

export default function Header01() {
  const dispath = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [isCollapse, setCollapse] = useState(null);

  // window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });

  const route = useRouter();
  /* -------------------------------------------------------------------------- */
  /*                            dynamic navigations                            */
  /* -------------------------------------------------------------------------- */
  const home = {
    id: 1,
    name: "Home",
  };

  const page = {
    id: 2,
    name: "Pages",
    pages: [],
  };

  const support = {
    id: 3,
    name: "Support",
    pages: [
      { id: uuidv4(), name: "Welcome Toolkit", path: "https://tinyurl.com/eth2ada", external: true },
      { id: uuidv4(), name: "Research Paper", path: "https://tinyurl.com/eth2adarp", external: true },
      { id: uuidv4(), name: "GitHub", path: "https://github.com/TangentADA/eth2ada-rc", external: true },
      { id: uuidv4(), name: "YouTube", path: "https://youtube.com", external: true },
    ],
  };

  const dexhunterSwap = {
    id: 4,
    name: "Swap",
    path: "https://swap.eth2ada.com",
    external: true,
  };

  const mobileCollapse = (id) => {
    if (isCollapse === id) {
      return setCollapse(null);
    }
    setCollapse(id);
  };

  return (
    <>
      {/* main desktop menu start */}
      <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Link className="shrink-0" href="/#top">
            <a>
              <div className="dark:hidden">
                <Image
                  src={Logo}
                  height={80}
                  width={120}
                  alt="ETH2ADA"
                  className="max-h-7 h-auto "
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src={WhiteLogo}
                  height={80}
                  width={120}
                  alt="ETH2ADA"
                />
              </div>
            </a>
          </Link>
          {/* End logo */}

          <div className="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent w-full">
            <nav className="navbar w-full mt-24 lg:mt-0">
              <ul className="flex flex-col justify-center lg:flex-row">
                {/* Home */}
                <li className="group">
                  <Link href="/#top">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          HOME
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>

                {/* Dictionary */}
                <li className="js-nav-dropdown nav-item dropdown group relative">
                  <Link href="/dictionary">
                    <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                      <span
                        className={
                          isChildrenPageActive(route.asPath, "/dictionary")
                            ? "text-accent dark:text-accent"
                            : ""
                        }
                      >
                        Dictionary
                      </span>
                      <i className="lg:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="h-4 w-4 dark:fill-white"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                      </i>
                    </button>
                  </Link>
                </li>

                {/* Term of the Day */}
                <li className="group">
                  <Link href="/#termofday">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/#termofday")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          Term Of The Day
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>

                {/* Add Term */}
                <li className="group">
                  <Link href="/addterm">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/addterm")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          Add Term
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>

                {/* Ask AI */}
                <li className="group">
                  <Link href="/terminal">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/terminal")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          Ask AI
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>

                {/* Support */}
                <li className="js-nav-dropdown nav-item dropdown group relative">
                  <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                    <span
                      className={
                        isParentPageActive(support.pages, route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Support
                    </span>
                    <i className="lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-4 w-4 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </i>
                  </button>
                  <ul className="dropdown-menu dark:bg-jacarta-800 group-hover:visible lg:invisible lg:absolute lg:block lg:translate-y-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform lg:py-4 lg:px-2 lg:shadow-2xl hidden">
                    {support.pages.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                        >
                          <span className="font-display text-jacarta-700 text-sm dark:text-white">
                            {item.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Dexhunter Swap */}
                <li className="group">
                  <a
                    href={dexhunterSwap.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                  >
                    <span>{dexhunterSwap.name}</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* End menu for desktop */}

            <div className="ml-auto hidden items-center lg:flex xl:ml-12">
              {/* <WalletButton /> */}
              {/* End metamask Wallet */}

              <button
                onClick={() => dispath(profileModalShow())}
                className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                </svg>
              </button>

              <div className="js-nav-dropdown group-dropdown relative" style={{ display: "none" }}>
                <button className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                  </svg>
                </button>
                <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0">
                  <Link href="#">
                    <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                        My Profile
                      </span>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                        Edit Profile
                      </span>
                    </a>
                  </Link>
                  <Link href="/login">
                    <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                        Sign out
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <DarkMode />
            </div>
            {/* End header right content (metamask and other) for desktop */}
          </div>
          {/* header menu content end for desktop */}

          <div className="ml-auto flex lg:hidden">
            <DarkMode />
            <button
              className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              aria-label="open mobile menu"
              onClick={() => setToggle(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
          {/* End header right content for mobile */}
        </div>
        {/* End flex item */}
      </header>
      {/* main desktop menu end */}

      {/* start mobile menu and its other materials */}
      <div
        className={`lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${
          toggle ? "nav-menu--is-open" : "hidden"
        }`}
      >
        <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
          <div className="dark:hidden">
            <Image
              src={Logo}
              height={50}
              width={80}
              alt="Eth2Ada"
              className="max-h-2 h-auto "
            />
          </div>

          <div className="hidden dark:block">
            <Image
              src={WhiteLogo}
              height={50}
              width={80}
              alt="Eth2Ada"
            />
          </div>

          <button
            className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          </button>
        </div>
        {/* mobile menu top header content */}

        <nav className="navbar w-full">
          <ul className="flex flex-col lg:flex-row">
            <li className="js-nav-dropdown group relative">
              <button
                onClick={() => mobileCollapse(home.id)}
                className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
              >
                <span
                  className={
                    isParentPageActive(home.pages, route.asPath)
                      ? "text-accent dark:text-accent"
                      : ""
                  }
                >
                  {home.name}
                </span>
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </i>
              </button>

              <ul
                className={`dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                  isCollapse === home.id ? "block" : "hidden"
                }`}
              >
                {home?.pages?.map((page) => (
                  <li key={page.id} onClick={() => setToggle(false)}>
                    <Link href={page.path}>
                      <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between">
                        <span
                          className={`font-display ${
                            isChildrenPageActive(route.asPath, page.path)
                              ? "text-accent dark:text-accent"
                              : "text-jacarta-700"
                          } text-sm dark:text-white`}
                        >
                          {page.name}
                        </span>
                        {page.condition ? (
                          <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                            new
                          </span>
                        ) : undefined}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="js-nav-dropdown group relative">
              <button
                onClick={() => mobileCollapse(page.id)}
                className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
              >
                <span
                  className={
                    isParentPageActive(page.pages, route.asPath)
                      ? "text-accent dark:text-accent"
                      : ""
                  }
                >
                  {page.name}
                </span>
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </i>
              </button>
              <ul
                className={`dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                  isCollapse === page.id ? "block" : "hidden"
                }`}
              >
                {page?.pages?.map((page) => (
                  <li key={page.id} onClick={() => setToggle(false)}>
                    <Link href={page.path}>
                      <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between">
                        <span
                          className={
                            isChildrenPageActive(page.path, route.asPath)
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          {page.name}
                        </span>
                        {page.condition ? (
                          <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                            new
                          </span>
                        ) : undefined}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/#top">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/#top", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Home
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/dictionary">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/dictionary", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Dictionary
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="#termofday">
                <a href="#termofday">
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("#termofday", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Term Of The Day
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/addterm">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/addterm", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Add Term
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/terminal">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/terminal", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Ask AI
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="js-nav-dropdown group relative">
              <button
                onClick={() => mobileCollapse(support.id)}
                className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
              >
                <span
                  className={
                    isParentPageActive(support.pages, route.asPath)
                      ? "text-accent dark:text-accent"
                      : ""
                  }
                >
                  {support.name}
                </span>
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </i>
              </button>
              <ul
                className={`dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                  isCollapse === support.id ? "block" : "hidden"
                }`}
              >
                {support.pages.map((item) => (
                  <li key={item.id} onClick={() => setToggle(false)}>
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                    >
                      <span className="font-display text-jacarta-700 text-sm dark:text-white">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <a
                href={dexhunterSwap.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
              >
                <span>{dexhunterSwap.name}</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* End navbar mobile menu */}
      </div>
      {/* End mobile menu and its other materials */}
    </>
  );
}
