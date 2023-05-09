import { Dispatch, SetStateAction, useState } from "react";
import Hamburger from "../header/Hamburger";
import Logo from "../header/Logo";
import Navigation from "../header/Navigation";
import ToggleTheme from "../header/ToggleTheme";

interface Iprops {
  setHamburger: Dispatch<SetStateAction<boolean>>;
  hamburger: boolean;
}

export default function Header({
  setHamburger,
  hamburger,
}: Iprops): JSX.Element {
  return (
    <header
      className={`py-4 ${
        hamburger ? "h-[100vh] z-30" : "h-20 sticky"
      } overflow-hidden transition-all duration-500 glass-header  top-0 z-50 max-[770px]:flex-col px-3 md:px-6 flex items-center justify-between w-full`}
    >
      <Hamburger toggle={hamburger} setToggle={setHamburger} />
      <div className="glass-logo max-[770px]:self-start  flex px-5 items-center justify-center py-2  p-4 rounded-full z-20">
        <Logo />
      </div>
      <div
        className={`${
          hamburger ? " max-[770px]:block" : "max-[770px]:hidden "
        } `}
      >
        <Navigation />
      </div>
      <div
        className={` ${
          hamburger
            ? " max-[770px]:flex max-[770px]:items-center max-[770px]:justify-center"
            : "max-[770px]:hidden "
        }  flex items-center justify-center rounded-3xl  max-[770px]:my-10 w-24`}
      >
        <ToggleTheme />
      </div>
    </header>
  );
}
