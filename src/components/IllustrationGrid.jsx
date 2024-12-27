import React from "react";
import { Code2, Cpu, Globe, Network } from "lucide-react";

export function IllustrationGrid({ className = "" }) {
  const illustrations = [
    {
      icon: Code2,
      bg: "from-blue-500/10 to-blue-500/5",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      bg: "from-purple-500/10 to-purple-500/5",
      color: "text-purple-500",
    },
    {
      icon: Network,
      bg: "from-green-500/10 to-green-500/5",
      color: "text-green-500",
    },
    {
      icon: Cpu,
      bg: "from-orange-500/10 to-orange-500/5",
      color: "text-orange-500",
    },
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {illustrations.map((item, index) => (
        <div
          key={index}
          className={`aspect-square rounded-2xl bg-gradient-to-br ${item.bg} p-6 flex items-center justify-center`}
        >
          <item.icon className={`w-12 h-12 ${item.color}`} />
        </div>
      ))}
    </div>
  );
}
