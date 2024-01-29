import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

const socialData = [
  {
    link: "https://github.com/rahulgajbhiye201",
    icon: <FaGithub />,
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/rahulgajbhiye201",
    icon: <FaLinkedin />,
    name: "LinkedIn",
  },

  {
    link: "https://twitter.com/rahulgajbhiye01",
    icon: <FaSquareXTwitter />,
    name: "Twitter",
  },
  {
    link: "/Resume.pdf",
    icon: <GoDownload />,
    name: "Resume",
  },
];

export default socialData;
