export default function Hamburger({
  setHamburger,
  hamburger,
}: IhamburgerProps): JSX.Element {
  return (
    <div
      onClick={() => setHamburger(!hamburger)}
      className="md:hidden absolute top-[26px] -right-[5px] flex-col items-center h-12 w-12 space-y-2"
    >
      <span className="block w-5 h-[1px] bg-black"></span>
      <span className="block w-5 h-[1px] bg-black"></span>
      <span className="block w-5 h-[1px] bg-black"></span>
    </div>
  );
}
