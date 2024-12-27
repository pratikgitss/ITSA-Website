// Resources.jsx

import React from "react";
import ResourcesCard from "./components/ResourcesCard";
import resourcesData from "./data/resourcesData";

export default function Resources() {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h1 className="title-font mb-4 text-center text-5xl font-bold text-teal-600 sm:text-3xl">IT Resources</h1>
      <div className="flex flex-wrap justify-center">
        {resourcesData.map((resource) => (
          <ResourcesCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}
