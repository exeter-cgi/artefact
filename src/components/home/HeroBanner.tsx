import React from "react";
import { ChevronRight, Zap, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroBanner: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white z-0"></div>

      <div className="container mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-28 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
            <Zap size={16} className="mr-1" />
            <span>Environmental Research Project</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The hidden environmental costs of:{" "}
            <span className="text-green-500">ELECTRIC</span> cars
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            While electric vehicles are often promoted as a sustainable solution
            to environmental challenges, it is worth questioning whether they
            are truly as eco-friendly as claimed, or if this image is a
            carefully constructed myth that overlooks hidden environmental
            costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("perception")}
              className="inline-flex items-center justify-center px-6 py-3 text-lg bg-green-500 text-white font-semibold rounded hover:bg-green-600"
            >
              Explore Research
              <ChevronRight size={20} className="ml-1" />
            </button>

            <button
              onClick={() => scrollToSection("quiz")}
              className="inline-flex items-center justify-center px-6 py-3 text-lg border border-green-500 text-green-500 font-semibold rounded hover:bg-green-50"
            >
              Test Your Knowledge
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 opacity-10 z-0">
        <Car size={480} className="text-green-900" />
      </div>
    </div>
  );
};

export default HeroBanner;
