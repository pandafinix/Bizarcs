import { motion } from "framer-motion";
import { Briefcase, Users, Wallet } from "lucide-react";

const services = [
  {
    title: "EOR Services",
    icon: <Briefcase size={36} />,
    description: "Global hiring, onboarding, and compliance made easy with our Employer of Record solutions.",
  },
  {
    title: "HR Consultancy",
    icon: <Users size={36} />,
    description: "Personalized HR strategies, employee support, and organizational development for any team size.",
  },
  {
    title: "Payroll Solutions",
    icon: <Wallet size={36} />,
    description: "Accurate, timely, and fully compliant international payroll services.",
  },
];

export default function Services() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-200 hover:shadow-blue-100 transition"
            >
              <div className="mb-4 text-blue-600 mx-auto">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
