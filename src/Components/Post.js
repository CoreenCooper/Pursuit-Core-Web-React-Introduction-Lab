import React from "react";
import '../Styles/Post.css'


// funtional component with use of object
const PostContent = {
  title: "Title",
  text: "Lorem Ipsem",
};

const Post = () => {
  return (
    <section id="Post">
      <h3>{PostContent.title}</h3>
      <p>{PostContent.text}</p>
    </section>
  );
};

// functional component
// const Post = () => {
//   return (
//     <section id="Post">
//       <h3>Title</h3>
//       <p>Lorem Ipsem</p>
//     </section>
//   );
// };

export default Post;
