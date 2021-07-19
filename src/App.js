import { useState, useEffect } from "react";
import Header from "./components/Header";
import OrderButtons from "./components/OrderButtons";
import Posts from "./components/Posts";
import { ascVotes, descVotes } from "./helpers/filteringVotes";
import { Container } from "semantic-ui-react";
import data from "./data";

function App() {
  const [filterBtn, setFilterBtn] = useState(true);
  const [posts, setPosts] = useState(data);

  const sortAscPosts = () => {
    setPosts(data.slice(0).sort(ascVotes));
    setFilterBtn(false);
  };

  const sortDescPosts = () => {
    setPosts(data.slice(0).sort(descVotes));
    setFilterBtn(true);
  };

  const onIncrement = (id) => {
    const vote = data.map((post) => {
      if (id === post.id) {
        post.votes = post.votes + 1;
      }
      return post.votes;
    });
    setPosts(...data, vote);
    filterBtn ? sortDescPosts() : sortAscPosts();
  };

  const onDecrement = (id) => {
    const vote = data.map((post) => {
      if (id === post.id) {
        post.votes = post.votes - 1;
      }
      return post.votes;
    });
    setPosts(...data, vote);
    filterBtn ? sortDescPosts() : sortAscPosts();
  };

  useEffect(() => {
    filterBtn ? sortDescPosts() : sortAscPosts();
  }, [filterBtn]);

  return (
    <Container>
      <Header />
      <OrderButtons sortAscPosts={sortAscPosts} sortDescPosts={sortDescPosts} />
      <Posts
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        posts={posts}
      />
    </Container>
  );
}

export default App;
