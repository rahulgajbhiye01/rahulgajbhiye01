import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout, Home, Blogs, About } from "@pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Blogs" element={<Blogs />} />
      </Route>,
    ),
  );

  return (
    <div className="bg-neutral-900 text-white ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
