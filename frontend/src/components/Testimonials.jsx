// src/components/Testimonials.jsx
import Slider from "react-slick";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Acme Inc.",
    text: "Bizarcs transformed our global hiring process. Reliable, quick, and professional!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sarah Lee",
    role: "HR Manager, ZenCorp",
    text: "Their EOR services saved us weeks of hassle. Highly recommend working with them!",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Amit Patel",
    role: "Founder, StartX",
    text: "Fantastic experience from start to finish. Great communication and service.",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-3xl px-6 py-10 mx-4"
            >
              <Quote className="mx-auto text-indigo-400 mb-4" size={40} />
              <p className="text-lg italic text-gray-600 mb-6">{t.text}</p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-400"
                />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
