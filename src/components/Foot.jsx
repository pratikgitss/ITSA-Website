import React from "react";
import ITSA_logo_1 from '../assets/ITSA_logo-1.png';
import { Code2, Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

// Reusable Social Icon Component
const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    aria-label={label}
    className="text-gray-400 hover:text-white transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

// Reusable Quick Link Component
const QuickLink = ({ href, text }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {text}
    </a>
  </li>
);

export default function Foot() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo and About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                className="h-14 w-14"
                src={ITSA_logo_1}
                alt="ITSA logo"
              />
              <h1 className=" font-bold text-xl">
                Information Technology Student Association
              </h1>
            </div>
            <p className="text-gray-400">
              Empowering students through technology and innovation.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" label="Facebook" Icon={Facebook} />
              <SocialIcon href="#" label="Twitter" Icon={Twitter} />
              <SocialIcon href="#" label="Instagram" Icon={Instagram} />
              <SocialIcon href="#" label="LinkedIn" Icon={Linkedin} />
              <SocialIcon href="#" label="GitHub" Icon={Github} />
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <QuickLink href="/events" text="Events" />
              <QuickLink href="/resources" text="Resources" />
              <QuickLink href="/team" text="Our Team" />
              <QuickLink href="/join" text="Join ITSA" />
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tech Building, Room 301</li>
              <li>University Campus</li>
              <li><a href="mailto:contact@itsa.edu" className="hover:text-white">contact@itsa.edu</a></li>
              <li><a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Team</h3>
            <p className="text-gray-400 mb-4">
              Passionate about making a difference? Become a part of our dynamic team!
            </p>
            <button
              className="w-full px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} ITSA. All rights reserved.
            <span className="ml-2">Made with <span className="text-red-500">❤️</span> by ITSA Club.</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
