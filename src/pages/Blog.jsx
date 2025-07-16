import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Top 5 AI Tools in 2025", summary: "A roundup of the best AI tools." },
  { id: 2, title: "How AI is Changing Business", summary: "Insights on AI adoption." },
];

const Blog = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4">AI Tools Blog</h1>
    <div>
      {articles.map(article => (
        <div key={article.id} className="mb-6">
          <Link to={`/blog/${article.id}`}>
            <h2 className="font-semibold text-xl">{article.title}</h2>
          </Link>
          <p>{article.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;