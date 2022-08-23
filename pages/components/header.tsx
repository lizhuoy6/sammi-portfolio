import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const NAVIGATION_ITEMS = [
  { title: "Home", link: "/" },
  {
    title: "Work",
    children: [
      { title: "Projects", link: "/projects" },
      { title: "Resume", link: "/resume" },
    ],
  },
  {
    title: "Study",
    children: [
      { title: "UofT", link: "/uoft" },
      { title: "Google UX Certificate", link: "/google-ux-certificate" },
    ],
  },
  { title: "About", link: "/about" },
];

const Header: React.FC = () => {
  return (
    <div className="border-b py-4">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex place-content-between items-center">
          <div className="text-5xl font-medium signature">Sammi</div>
          <div>
            <ul className="flex space-x-10">
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
      <div className="flex flex-row space-x-2 items-center">
        {navItem.link ? (
          <Link href={navItem.link}>{navItem.title}</Link>
        ) : (
          <span className="cursor-default">{navItem.title}</span>
        )}
        {navItem.children ? <BsChevronDown className="text-gray-500" /> : null}
      </div>
      {navItem.children && showChildren ? (
        <div className="absolute bg-white px-6 -left-2 pt-2 w-auto whitespace-nowrap">
          <ul>
            {navItem.children.map((child) => (
              <li key={child.title} className="pt-2">
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
