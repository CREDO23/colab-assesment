
import { Poppins } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {

  const [hamburger , setHamburger] = useState<boolean>(false)

  return (
    <div className=" relative w-screen overflow-auto no-scrollbar h-screen bgmain">
      <div className=" -z-20 absolute top-0 left-0 w-full h-full border border-[rgba(255,255,255,.2)] rounded-xl  bg-gray-400 backdrop-filter backdrop backdrop-blur-lg bg-clip-padding bg-opacity-10"></div>
      <div className="bgcircle1 max-[500px]:-left-[20rem] absolute -top-[10rem] -left-[10rem] w-[40rem] h-[40rem] rounded-full"></div>
      <Header hamburger={hamburger} setHamburger={setHamburger} />
      <main className={`z-30  ${hamburger ? 'h-0' : 'h-auto'} transition-all duration-500 w-full  flex items-center flex-col overflow-auto no-scrollbar ${poppins.style}`}>
        
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor alias, eligendi debitis nobis ad illum. Tempora ullam distinctio nisi explicabo nobis quis, maiores ipsam porro exercitationem ratione aliquid unde quaerat?
                  </p>
      </main>
      <Footer hamburger={hamburger} />
    </div>
  );
}
