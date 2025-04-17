import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

const HomeFooter = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="dark flex justify-center bg-background text-foreground shadow-sm drop-shadow">
      <div className="flex w-11/12 flex-col items-center  justify-center gap-4 py-4 md:w-7/12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex w-min flex-row gap-4 text-right">
            <a
              href="https://github.com/rahulgajbhiye201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-6" />
            </a>
            <a
              href="https://www.youtube.com/@rcodedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulgajbhiye201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-6" />
            </a>
            <a
              href="https://twitter.com/rahulgajbhiye01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="size-6" />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1T-q9VJ1BGdrIAGL_RvyIlxnKKfI0JzDb?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoDownload className="size-6" />
            </a>
          </div>
        </div>
        <div className="text-sm font-light">
          <span>©{date} Rahul Gajbhiye</span>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
