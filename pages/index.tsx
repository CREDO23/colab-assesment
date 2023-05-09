import { Poppins } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useState } from "react";
import Home1 from "@/components/main/Home";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [hamburger, setHamburger] = useState<boolean>(false);

  return (
    <div className=" relative w-screen overflow-auto no-scrollbar h-screen bgmain">
      <div className="bgcircle1 max-[500px]:-left-[20rem] absolute -top-[10rem] -left-[10rem] w-[40rem] h-[40rem] rounded-full"></div>
      <Header hamburger={hamburger} setHamburger={setHamburger} />
      <main
        className={`z-30  ${
          hamburger ? "h-0" : "h-auto"
        } transition-all duration-500 w-full px-5  flex items-center flex-col overflow-auto no-scrollbar ${
          poppins.style
        }`}
      >
        <Home1 />
      </main>
      <Footer hamburger={hamburger} />
    </div>
  );
}
