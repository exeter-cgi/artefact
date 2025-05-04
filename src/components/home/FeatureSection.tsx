import React from "react";
import { FileText, Database, Recycle, Video, BrainCircuit } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const features = [
  {
    icon: <FileText size={32} />,
    title: "Why People Assume E-Cars Are Automatically Eco-Friendly",
    description:
      "Many people believe that switching to electric cars guarantees a cleaner planet. However, the reality is more complex and nuanced.",
    to: "/research",
  },
  {
    icon: <Database size={32} />,
    title: "Data Collection",
    description:
      "Explore our methodology for collecting and analyzing data on environmental impacts.",
    to: "/data",
  },
  {
    icon: <Recycle size={32} />,
    title: "Battery Recycling Experiment",
    description:
      "Learn about our lithium battery recycling experiments and their environmental implications.",
    to: "/battery",
  },
  {
    icon: <Video size={32} />,
    title: "Student Data Collection",
    description:
      "Watch our video documenting the process of collecting data from students.",
    to: "/video",
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "Interactive Quiz",
    description:
      "Test your knowledge about EVs, ICEs, and their environmental impact.",
    to: "/quiz",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Explore Our Research"
          subtitle="Dive into our comprehensive study on the environmental impact of Electric Vehicles versus Internal Combustion Engines."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              to={feature.to}
              className="flex flex-col h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
