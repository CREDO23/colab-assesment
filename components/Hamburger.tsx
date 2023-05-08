import { Dispatch, SetStateAction } from "react";

interface Iprops {
  setToggle : Dispatch<SetStateAction<boolean>>
  toggle : boolean
}
export default function Hamburger({setToggle , toggle}: Iprops): JSX.Element {
  return (
    <div onClick={() => setToggle(!toggle)} className="md:hidden absolute top-[26px] -right-[5px] flex-col items-center h-12 w-12 space-y-2">
      <span className="block w-5 h-[1px] bg-black"></span>
      <span className="block w-5 h-[1px] bg-black"></span>
      <span className="block w-5 h-[1px] bg-black"></span>
    </div>
  );
}
