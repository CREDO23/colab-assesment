interface IprojectCard {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

interface Itheme {
  index: number;
  label: string;
  icon: ReactNode;
}

interface IhamburgerProps {
  setHamburger?: Dispatch<SetStateAction<boolean>>;
  hamburger: boolean;
}

interface InavigationMenu {
  index: number;
  label: string;
  link: string;
}

interface IsocialmediaProps {
  icon: IconType;
  label: string;
  link: string;
}
