import { useEffect } from "react";
import { Lightbulb, Target, Rocket, Users, BookOpen, Code2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IllustrationGrid } from "./IllustrationGrid.jsx";

export default function VisionMission() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animation should happen only once
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-20">
        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-indigo-600" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600">
              To be the leading student organization that bridges the gap between academic learning
              and industry requirements, fostering innovation and technical excellence.
            </p>
            <IllustrationGrid className="mt-8" />
          </div>

          <div className="space-y-6 order-1 lg:order-2" data-aos="fade-left">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-8 w-8 text-indigo-600" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600">
              To empower students with practical skills, industry connections, and leadership
              opportunities through hands-on learning experiences and professional development.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: Rocket,
                  title: "Innovation",
                  description: "Foster creative thinking",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Build strong connections",
                },
                {
                  icon: BookOpen,
                  title: "Learning",
                  description: "Continuous growth",
                },
                {
                  icon: Code2,
                  title: "Practice",
                  description: "Hands-on experience",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100} // Stagger animations
                >
                  <item.icon className="h-6 w-6 text-indigo-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
