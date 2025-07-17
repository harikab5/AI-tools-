import React from "react";
import { motion } from "framer-motion";
import catIndustry from "../assets/blog-cat-industry.png";
import catTools from "../assets/blog-cat-tools.png";
import catTrends from "../assets/blog-cat-trends.png";
import catCase from "../assets/blog-cat-case.png";
import catTutorial from "../assets/blog-cat-tutorial.png";
import catThought from "../assets/blog-cat-thought.png";
import agentImg from "../assets/agent.png";

const categories = [
  { title: "AI in Industry", image: catIndustry },
  { title: "AI Development & Tools", image: catTools },
  { title: "AI Trends & Insights", image: catTrends },
  { title: "Case Studies", image: catCase },
  { title: "Tutorials", image: catTutorial },
  { title: "Thought Leadership", image: catThought },
];

const posts = [
  {
    title: "How AI is Revolutionizing Retail",
    desc: "From personalized shopping to smarter logistics, discover how AI is transforming the retail industry.",
    author: "Jane Doe",
    date: "July 2025",
  },
  {
    title: "Building Scalable AI Systems",
    desc: "Key architectural patterns and tips for developing enterprise-scale AI applications.",
    author: "John Smith",
    date: "June 2025",
  },
  {
    title: "The Future of AI Ethics",
    desc: "Explore how AI ethics will shape future applications and what businesses should prepare for.",
    author: "Alex Chen",
    date: "May 2025",
  },
];

const authors = [
  { name: "Jane Doe", role: "Lead AI Writer", img: agentImg, quote: "I love making AI accessible to everyone!" },
  { name: "John Smith", role: "Tech Editor", img: agentImg, quote: "AI is changing the world, one model at a time." },
  { name: "Alex Chen", role: "Ethics Specialist", img: agentImg, quote: "Responsible AI is the future." },
];

export default function BlogPage() {
  return (
    <div className="bg-black text-[#E5E5E5] font-sans min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#0c0d0c] via-[#1a1a1a] to-[#222] overflow-hidden">
        <div className="absolute inset-0 gradient-to-r from-[#FFD700]/10 via-transparent to-[#FFD700]/10 animate-pulse"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent mb-8 drop-shadow z-10"
        >
          AI Blog & Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed relative z-10"
        >
          Explore the latest in AI, from industry breakthroughs to hands-on tutorials and expert opinions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-[0_0_30px_#FFD700] transition-all duration-300 relative z-10 border-2 border-[#FFD700]"
        >
          Read Latest Posts
        </motion.button>
      </section>

      {/* 2. FEATURED POST */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
        >
          Featured Post
        </motion.h2>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0c0d0c] rounded-3xl shadow-2xl p-10 border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#FFD700] mb-4 hover:text-[#FFA500] transition-colors duration-300">{posts[0].title}</h3>
            <p className="mb-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">{posts[0].desc}</p>
            <p className="text-[#FFD700] italic mb-6 text-lg">By {posts[0].author} — {posts[0].date}</p>
            <a href="#" className="inline-block text-[#FFD700] hover:text-[#FFA500] font-semibold text-lg border-b-2 hover:border-[#FFD700] hover:border-[#FFA500] transition-all duration-300">
              Read More →
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3. CATEGORIES */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
        >
          Categories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-[#111] to-[#0c0d0c] border border-[#FFD700]/30 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-[0_0_30px_#FFD700] transition-all duration-500 group cursor-pointer"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src={cat.image} alt={cat.title} className="h-24 w-24 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#FFD700] text-center group-hover:text-[#FFA500] transition-colors duration-300">{cat.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. RECENT POSTS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
        >
          Recent Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-gradient-to-br from-[#111] to-[#0c0d0c] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#FFD700] hover:shadow-[0_0_25px_#FFD700] transition-all duration-500 group cursor-pointer"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#FFD700] mb-4 group-hover:text-[#FFA500] transition-colors duration-300">{post.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.desc}</p>
                <p className="text-[#FFD700] italic mb-6">By {post.author} — {post.date}</p>
                <a href="#" className="inline-block text-[#FFD700] hover:text-[#FFA500] font-semibold border-b-2 hover:border-[#FFD700] hover:border-[#FFA500] transition-all duration-300">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER SIGNUP */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0c0d0c] rounded-3xl p-12 border border-[#FFD700]"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Subscribe for AI Insights</h2>
          <p className="mb-8 text-lg text-gray-300">Get the latest AI news, tutorials, and trends delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-[#222] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700/20] transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_20px_#FFD700] transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 6. AUTHOR/TEAM SPOTLIGHT */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
        >
          Meet the Authors
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {authors.map((author, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0c0d0c] border border-[#FFD700]/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_30px_#FFD700] transition-all duration-500 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src={author.img} alt={author.name} className="h-28 w-28 rounded-full border-4 border-[#FFD700]/40 object-cover group-hover:border-[#FFA500]/60 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-2 group-hover:text-[#FFA500] transition-colors duration-300">{author.name}</h3>
              <p className="text-gray-400 mb-4">{author.role}</p>
              <blockquote className="italic text-[#FFD700]/80 text-lg leading-relaxed">{author.quote}</blockquote>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-[#FFD700] text-center py-12 border-t border-gray-700 mt-16">
        <p>&copy; 2025 AI Tools Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
