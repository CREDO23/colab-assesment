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

interface InewProps {
  source: {
    name: string;
    id?: string | NULL;
  };
  author?: string;
  title?: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

interface IapiResponse {
  status: string;
  totalResults: number;
  articles: InewProps[];
}
