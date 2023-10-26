import { Post } from "@components";
import { useState } from "react";

const BlogsHero = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleScope = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <>
      <menu className="flex flex-row gap-4">
        <li>
          <button onClick={() => handleScope("")}>All Topic</button>
        </li>
        <li>
          <button onClick={() => handleScope("Web Development")}>
            Web Development
          </button>
        </li>
        <li>
          <button onClick={() => handleScope("App Development")}>
            App Development
          </button>
        </li>
      </menu>
      <Post topic={selectedTopic} />
    </>
  );
};

export default BlogsHero;
