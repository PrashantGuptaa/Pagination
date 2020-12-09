import React from "react";
import Post from "./post";
import Pages from "./pages";

export default () => {
  let [posts, setposts] = React.useState([]);
  let [allow, setAllow] = React.useState(false);
  let [postPerPage] = React.useState(5);
  let [totalPost, setTotalPost] = React.useState(0);
  let [currentPosts, setCurrentPosts] = React.useState(0);

  React.useEffect(() => {
    console.log("Used Effect");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setposts(data); // all the post got from api
        let indexofLastPost = postPerPage;
        let indexofFirstPost = indexofLastPost - postPerPage;
        let temp = data.slice(indexofFirstPost, indexofLastPost);
        setCurrentPosts(temp); // seetting the posts to display for the first time.
        setTotalPost(data.length);
        setAllow(true); // Setting loading to false
      });
  }, []);

  const handlePageShow = (pageNum) => {
    let indexofLastPost = pageNum * postPerPage;
    let indexofFirstPost = indexofLastPost - postPerPage;
    let temp = posts.slice(indexofFirstPost, indexofLastPost);
    setCurrentPosts(temp);
  };

  return (
    <>
      <h1 className="heading">Pagination</h1>

      <Post posts={currentPosts} allow={allow} />
      <Pages
        totalPosts={totalPost}
        postPerPage={postPerPage}
        handlePage={handlePageShow}
      />
    </>
  );
};
