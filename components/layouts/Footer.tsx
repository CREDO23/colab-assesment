import Logo from "../header/Logo";
import menus from "../../data/menus";
import SocialMediaItem from "../footer/socialMedia/Item";
import socialmedias from "@/data/socialmedias";

export default function Footer({ hamburger }: IhamburgerProps): JSX.Element {
  return (
    <footer
      className={` ${
        hamburger ? "hidden" : ""
      } bg-white z-20 max-[770px]:p-4 w-full p-8`}
    >
      <div className="flex items-center flex-col">
        <div className="flex w-full  items-center max-[770px]:flex-col max-[770px]:gap-10 justify-between">
          <span className="max-[770px]:self-start">
            <Logo />
          </span>
          <ul className="flex items-center justify-center flex-col md:flex-row max-[770px]:gap-4 gap-8 ">
            {menus.map((item: InavigationMenu, key) => (
              <li key={key} className="nav-item">
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ul className="flex  items-center justify-center flex-col md:flex-row max-[770px]:gap-4 gap-8 ">
            {socialmedias.map((item, key) => {
              return (
                <li key={key}>
                  <SocialMediaItem
                    link={item.link}
                    icon={item.icon({ size: "1x" })}
                    label={item.label}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-8 w-11/12" />
        <span className="block font-light text-sm text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Thierry
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
