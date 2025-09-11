import "../App.css";
import { motion } from "framer-motion"
import posts from '../data/Blog'
import NavigationButtons from "../components/NavigationButtons";
// import FireflyBackground from "../layout/Animation";

const Blog = () => {
  return (
    <section className="space-y-8 ">
      {/* <FireflyBackground /> */}
      <div className="space-y-3 ">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="text-black-400">💡
          “Learning, building, and sharing my journey into coding 🚀
          From beginner projects to growing as a web developer,
          documenting notes, tutorials, and real-world learnings.”</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-2 border-blue-400 rounded-3xl p-6 bg-gradient-to-b from-gray-50/90 to-white/90 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <time className="text-sm text-gray-500">{post.date}</time>
            <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
       {/* ✅ Fixed Navigation Buttons */}
        <div className="fixed bottom-14 left-0 right-0 flex justify-between px-6">
          <NavigationButtons />
        </div>
    </section>  
  )
}

export default Blog
