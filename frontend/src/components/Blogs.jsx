import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How EOR Services Simplify Global Expansion",
    description: "Discover how Employer of Record services can ease hiring and compliance for your international teams.",
    image: "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Top 5 HR Challenges and How to Solve Them",
    description: "Explore the common HR challenges businesses face and strategies to overcome them effectively.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Payroll Compliance Tips for Startups",
    description: "Stay ahead of legal troubles with our essential payroll compliance tips for growing startups.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Blogs() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-4xl font-bold text-blue-700 mb-4">From Our Blog</h3>
        <p className="text-gray-600 text-lg">Insights and updates on HR, EOR, and payroll best practices.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link
                to={`/blog-details/${post.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
