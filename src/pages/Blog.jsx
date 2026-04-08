import "../App.css";
import { motion } from "framer-motion";
import posts from "../data/Blog";

const Blog = () => {
  return (
    <section
      className="space-y-10 px-4 py-10 min-h-screen
      bg-gradient-to-br 
      from-gray-50 via-white to-gray-50 
      dark:from-slate-900 dark:via-gray-900 dark:to-black 
      text-gray-900 dark:text-white"
    >

      {/* Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <h2
          className="text-3xl font-bold 
          bg-gradient-to-r 
          from-blue-500 to-purple-500 
          dark:from-blue-400 dark:to-purple-500 
          text-transparent bg-clip-text"
        >
          Blog
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          💡 Learning, building, and sharing my journey into coding 🚀  
          From beginner projects to growing as a web developer,  
          documenting notes, tutorials, and real-world learnings.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-6 transition-all duration-300
              
              /* Light Mode */
              bg-gradient-to-b from-gray-50/90 to-white/90
              border border-gray-200 shadow-md hover:shadow-xl

              /* Dark Mode */
              dark:bg-white/5 dark:backdrop-blur-lg
              dark:border dark:border-white/10
              dark:hover:shadow-blue-500/20

              hover:-translate-y-2"
          >

            {/* Glow Effect (Only visible in dark) */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-r from-blue-500/10 to-purple-500/10 
              opacity-0 dark:hover:opacity-100 transition">
            </div>

            <time className="text-sm text-gray-500 dark:text-gray-400">
              {post.date}
            </time>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              {post.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full
                  
                  /* Light */
                  bg-gray-100 text-gray-700

                  /* Dark */
                  dark:bg-gradient-to-r 
                  dark:from-blue-500/20 
                  dark:to-purple-500/20
                  dark:border dark:border-white/10
                  dark:text-blue-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;