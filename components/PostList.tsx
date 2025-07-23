import { Post } from "@/types/post";
import PostItem from "./PostItem";

export default function PostList({
  posts,
  locale,
}: {
  posts: Post[];
  locale: string;
}) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} locale={locale} />
      ))}
    </ul>
  );
}
