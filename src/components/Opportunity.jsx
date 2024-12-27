import React, { useEffect } from "react";
import { Lightbulb, Target, Users, BookOpen, Code2, Briefcase } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const opportunities = [
  {
    icon: Code2,
    title: 'Technical Workshops',
    description: 'Learn from industry experts and gain hands-on experience.',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with peers and professionals in the tech industry.',
  },
  {
    icon: Briefcase,
    title: 'Internship Access',
    description: 'Exclusive access to internship opportunities with our partners.',
  },
];

export default function Opportunity() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Opportunities</h2>
            <p className="text-xl text-indigo-200">Discover what ITSA can offer you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((item, index) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 200} // Staggered delay for each card
              >
                <item.icon className="h-10 w-10 text-indigo-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-indigo-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
