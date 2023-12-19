import { blogPosts } from "../../utils/posts.utils";

export default function BlogList() {
  const listOfPosts = blogPosts.map(({ id, title, content, author, date }) => (
    <div key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>
      <p>{date}</p>
    </div>
  ));

  return (
    <div>
      <h1>BlogList</h1>
      <p>{listOfPosts}</p>
    </div>
  );
}
