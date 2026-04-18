// src/components/News.jsx
import { motion } from "framer-motion";

const newsItems = [
    {
      title: "Bizarcs Expands into Europe",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
      summary:
        "Bizarcs has opened a new office in Berlin, continuing our global expansion strategy.",
      link: "https://www.bbc.com/news/business",
    },
    {
      title: "EOR Trends in 2025",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
      summary:
        "Discover the top Employer of Record trends and predictions shaping the HR world this year.",
      link: "https://edition.cnn.com/business",
    },
    {
      title: "Bizarcs Wins Best HR Tech Award",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
      summary:
        "We’re thrilled to announce Bizarcs was awarded the Best HR Tech Innovation award for 2025.",
      link: "https://www.reuters.com/business/",
    },
  ];
  

export default function News() {
  return (
    <section className="py-20 px-4 bg-white" id="news">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">Latest News 📰</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
