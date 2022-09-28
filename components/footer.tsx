import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div className="border-t py-12 mt-12">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <div className="text-gray-400 text-xl">Let&lsquo;s get connected!</div>
        <ul className="flex space-x-4 text-3xl text-gray-400 justify-center pt-6">
          <li className="hover:text-gray-500">
            <AiFillInstagram />
          </li>
          <li className="hover:text-gray-500">
            <a href="mailto:lizhuoy6@gmail.com">
              <AiFillMail />
            </a>
          </li>
          <li className="hover:text-gray-500">
            <a
              href="https://linkedin.com/in/zhuoying-l-117399152/"
              target="__blank"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
        <div className="pt-6 text-gray-400">
          Copyright &copy; 2022 Sammi Li, All Rights Reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
