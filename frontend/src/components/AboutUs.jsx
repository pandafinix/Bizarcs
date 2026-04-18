import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="About Bizarcs"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-blue-700 mb-4">About Bizarcs</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Bizarcs, we specialize in helping businesses scale globally by simplifying HR, payroll,
            and legal compliance. With a passion for empowering talent across borders,
            we partner with companies to manage everything from employment to regulations,
            so you can focus on growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
