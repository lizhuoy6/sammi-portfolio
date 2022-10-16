import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  { title: "Home", link: "/" },
  {
    title: "Projects",
    link: "/projects",
  },
  { title: "Resume", link: "/files/Sammi Resume.pdf" },
  { title: "About", link: "/about" },
];

const Header: React.FC = () => {
  const [mobileNavShown, setMobileNavShown] = useState(false);

  return (
    <div className="py-4">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex place-content-between items-center">
          <div className="text-5xl font-medium signature">
            <Link href="/">Sammi</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-10">
              {NAVIGATION_ITEMS.map((item) => (
                <NavItem key={item.title} navItem={item} />
              ))}
            </ul>
          </div>
          <div
            className="block md:hidden text-3xl"
            onClick={() => setMobileNavShown(!mobileNavShown)}
          >
            <HiMenu />
          </div>
          <div
            className={`md:hidden ${
              mobileNavShown ? "left-0 opacity-50" : "-left-full opacity-0"
            } fixed w-full h-full top-0 bg-black z-9 duration-300 transition-opacity`}
            onClick={() => setMobileNavShown(false)}
          ></div>
          <div
            className={`md:hidden ${
              mobileNavShown ? "left-0" : "-left-full"
            } fixed w-9/12 h-full top-0 bg-white z-10 transition-all duration-300`}
          >
            <ul className={"pt-20 text-2xl"}>
              {NAVIGATION_ITEMS.map((item) => (
                <NavItem key={item.title} navItem={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemModel {
  title: string;
  link?: string;
  children?: {
    title: string;
    link: string;
  }[];
}

const NavItem: React.FC<{ navItem: NavItemModel }> = ({ navItem }) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <li
      key={navItem.title}
      onMouseOver={() => setShowChildren(true)}
      onMouseLeave={() => setShowChildren(false)}
      className="pl-4 relative"
    >
      <div className="flex flex-row space-x-2 items-center pt-10 md:pt-0">
        {navItem.link ? (
          <Link href={navItem.link}>{navItem.title}</Link>
        ) : (
          <span className="cursor-default">{navItem.title}</span>
        )}
        {navItem.children ? <BsChevronDown className="text-gray-500" /> : null}
      </div>
      {navItem.children && showChildren ? (
        <div className="md:absolute bg-white px-6 -left-2 pt-2 w-auto whitespace-nowrap">
          <ul>
            {navItem.children.map((child) => (
              <li key={child.title} className="md:pt-2 pt-5">
                <Link href={child.link}>{child.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
};

export default Header;
