interface Iprops {
  islink: boolean;
  link: string;
  label: string;
}

export default function Button({ islink, label, link }: Iprops): JSX.Element {
  return (
    <button className=" transition-all text-white bg-pink hover:bg-pink-20 w-28 h-8 px-4 rounded-full text-sm ">
      <a href={link}>{label}</a>
    </button>
  );
}
