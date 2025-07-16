import React from "react";
import { useParams } from "react-router-dom";

const posts = {
  1: {
    title: "Top 5 AI Tools in 2025",
    content: "Here are the top AI tools you should know about...",
    sidebar: "Related: AI Trends, Productivity"
  },
  2: {
    title: "How AI is Changing Business",
    content: "AI is transforming industries by...",
    sidebar: "Related: Automation, Case Studies"
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <div>Post not found.</div>;

  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <aside className="md:w-1/3 md:pl-8 mt-8 md:mt-0">
        <h2 className="font-semibold">Sidebar</h2>
        <p>{post.sidebar}</p>
      </aside>
    </div>
  );
};

export default BlogDetails;