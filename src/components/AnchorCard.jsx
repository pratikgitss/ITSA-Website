import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import exe from '../assets/exe.png'


export default function Anchor({ anchor }) {
  return (
    <div className="">
      {/* Techical */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" my-10 h-56 w-72 rounded-lg bg-white p-10 shadow-xl  "
      >
        <div className=" flex justify-center">
          <div className=" -mt-28 h-32 w-32 rounded-full   border-3 border-red-600 ">
            <LazyLoadImage
              src={anchor.imageUrl ? anchor.imageUrl : exe}
              alt={anchor.name}
              placeholderSrc="img/Teams/exe.png"
              effect="blur"
              className=" rounded-full  object-cover "
            />
          </div>
        </div>
        <div className=" p-2 ">
          <h1 className="mb-1 text-center text-2xl font-bold">{anchor.name}</h1>
          <p className="text-center text-sm text-gray-800">
            {anchor.designation}
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
          <a
            href={anchor.instagram}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            href={anchor.linkedin}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            href={anchor.twitter}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a href={anchor.github} className="hover:text-red-600" target="_blank">
            {" "}
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
