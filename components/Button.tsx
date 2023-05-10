import { ReactNode } from "react";

interface Iprops {
  link?: string;
  label: string;
  icon?: ReactNode;
}

export default function Button({ label, link, icon }: Iprops): JSX.Element {
  return (
    <button className=" transition-all text-white bg-pink hover:bg-pink-20 w-28 h-8 px-4 rounded-full text-sm ">
      {link ? <a href={link}>{label}</a> : <span>{label}</span>}
      {icon && icon}
    </button>
  );
}
