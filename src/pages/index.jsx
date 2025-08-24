import React, { useEffect, useState } from "react";

function Index() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []); // Only run once on mount

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="p-4">
      {/* Count Example */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <p className="text-2xl font-bold capitalize">Count: {count}</p>
        <button
          onClick={handleClick}
          className="w-28 h-12 text-sm font-semibold capitalize rounded-md shadow-sm bg-red-500 text-white hover:bg-red-800"
        >
          Click
        </button>
      </div>

      {/* Posts List */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Posts</h2>
        <ul className="flex flex-col gap-4">
          {posts.map((item) => (
            <li key={item.id} className="p-4 border rounded-md shadow-sm">
              <p className="font-bold">#{item.id} - {item.title}</p>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Index;
