import { useState } from "react";
import data from "./data";
import "./app.css";

function App() {
  const [votedPosts, setVotedPosts] = useState(0);

  return (
    <div className="container">
      <h1>Blog Posts Populares</h1>

      <ul>
        {data.map((post) => (
          <>
            <img src={post.post_image_url} />

            <p>{post.title}</p>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
