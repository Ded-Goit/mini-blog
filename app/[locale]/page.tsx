import PostList from "@/components/PostList";
import { Post } from "@/types/post";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");

  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} locale={locale} />
    </div>
  );
}
