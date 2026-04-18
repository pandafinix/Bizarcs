import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            Bizarcs
          </Link>
          <div className="space-x-6 text-base font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="text-blue-600 underline">Careers</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-50 py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
        >
          Careers at Bizarcs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Shape the future of global work. Join a team that values growth, innovation, and impact.
        </motion.p>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2, 3].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                {job === 1 && "Frontend Developer"}
                {job === 2 && "HR Business Partner"}
                {job === 3 && "Global Payroll Specialist"}
              </h3>
              <p className="text-gray-600 mb-4">
                {job === 1 && "Build modern, interactive, and responsive web interfaces using React and Tailwind."}
                {job === 2 && "Act as a strategic HR advisor to clients managing remote teams across the globe."}
                {job === 3 && "Handle international payroll operations and ensure compliance with global regulations."}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Location: Remote | Type: Full-time
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Life at Bizarcs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We’re a passionate team working remotely from different parts of the world. At Bizarcs, your voice matters,
            your creativity thrives, and your growth is our priority. Join us and help shape the future of global work.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
