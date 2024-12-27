import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import landing_img from '../assets/landing_img.png';
import ITSA_logo from '../assets/ITSA_logo.jpeg';
import { ArrowRight, Code2, Users, Calendar, BookOpen, Rocket } from 'lucide-react';

export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <div className="mx-auto mb-5 grid max-w-7xl px-4 sm:px-6 md:mt-12 lg:grid-cols-2 lg:px-4 2xl:grid-cols-5 ">
      <div
        className="mx-auto max-w-md px-8 py-12 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2"
        data-aos="fade-right"
      >
        <div className="xl:max-w-xl">
          <img
            className="mt-3 rounded-lg object-center sm:mt-8 sm:h-64 sm:w-auto sm:object-cover lg:hidden"
            src={ITSA_logo}
            alt="ITSA logo"
            data-aos="fade-in"
          />
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="h-6 w-6 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">Welcome to ITSA Club</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Innovate, Create, and <span className="text-indigo-600">Transform</span> Together
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of tech enthusiasts and innovators. Learn, build, and grow with like-minded individuals.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/join"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors">
              Join Now
            </a>
            <a
              href="/events"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-x-1"
            >
              View Events <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block 2xl:col-span-3" data-aos="fade-left">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Team collaboration"
          className="rounded-2xl my-16 shadow-2xl"
        />
      </div>
    </div>
  );
}
