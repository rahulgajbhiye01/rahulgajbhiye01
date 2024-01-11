import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="z-999 fixed bottom-4 left-0 right-0 mx-auto my-4 flex items-center justify-center">
      <nav className="inline-block animate-border rounded-md bg-neutral-800 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-0.5">
        <ul className="flex flex-1 items-center justify-center gap-4 rounded-md bg-neutral-800 px-4 py-2 font-bold">
          <li className="max-h-6 border-solid hover:border-b-2 hover:border-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="max-h-6 border-solid hover:border-b-2 hover:border-orange-500">
            <Link to="work">Work</Link>
          </li>
          <li className="max-h-6 border-solid hover:border-b-2 hover:border-orange-500">
            <Link to="about">About</Link>
          </li>
          <li className="max-h-6 border-solid hover:border-b-2 hover:border-orange-500">
            <Link to="blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
