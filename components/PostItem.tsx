import Link from "next/link";
import { Post } from "@/types/post";

export default function PostItem({
  post,
  locale,
}: {
  post: Post;
  locale: string;
}) {
  return (
    <li>
      {post.title} — <Link href={`/${locale}/posts/${post.id}`}>Read more</Link>
    </li>
  );
}
