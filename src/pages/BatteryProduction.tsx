import React from "react";
import PageLayout from "../components/layout/PageLayout";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import {
  Factory,
  TrendingUp,
  Pickaxe,
  CloudCog,
  Wind,
  Leaf,
} from "lucide-react";

const ResearchSummary: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Battery Production and its Impact
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Assessing the Environmental and Social Impacts of Lithium-Ion
            Battery Production.
          </p>
        </div>
      </div>

      {/* For large screens: grid with sidebar summary and visible photos */}
      <div className="hidden lg:block">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionTitle title="Overview of the Problem" />
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6">
                  <p>
                    Battery production plays a pivotal role in advancing
                    sustainable technologies, particularly electric vehicles
                    (EVs) and renewable energy storage systems. However, the
                    environmental and social consequences of battery
                    manufacturing, especially lithium-ion batteries, are
                    significant and require closer examination.
                  </p>
                  <h3 className="text-xl font-semibold mt-4">
                    Rising Demand and Resource Extraction
                  </h3>
                  <p>
                    The production of lithium-ion batteries has seen a
                    substantial rise due to the increasing demand for electric
                    vehicles. In 2023, global battery production was valued at
                    approximately $120 billion, and it is projected to reach
                    $370 billion by 2030. A major concern lies in the extraction
                    of materials such as lithium, cobalt, and nickel. The global
                    demand for lithium, for example, is expected to increase by
                    500% by 2030. These minerals are primarily sourced from
                    regions such as the Democratic Republic of Congo, where
                    mining has been linked to environmental degradation, water
                    pollution, and human rights abuses, including child labour.
                  </p>
                </div>
                <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">
                    Key Insight: Carbon Cost of Battery Production
                  </h4>
                  <p className="text-gray-700 mb-0">
                    Producing a single EV battery can emit 150–200 kg of CO₂ per
                    kilowatt-hour. While EVs reduce tailpipe emissions, the high
                    carbon footprint of battery manufacturing —mainly due to
                    energy use and material extraction —must be addressed to
                    ensure a truly sustainable transition.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mt-4">
                    Environmental Footprint of Manufacturing
                  </h3>
                  <p>
                    The environmental footprint of battery production is
                    therefore a significant issue. Emissions from manufacturing
                    contribute a considerable share of the total carbon output
                    associated with electric vehicles, challenging the narrative
                    of their environmental neutrality.
                  </p>
                  <h3 className="text-xl font-semibold mt-4">Conclusion</h3>
                  <p>
                    In conclusion, while battery technology is essential for a
                    greener future, it must be produced sustainably. Addressing
                    the environmental and social impacts of battery production
                    is critical to ensure that the benefits of clean energy
                    technologies outweigh the associated costs.
                  </p>
                </div>

                {/* Photos for large screens */}
                <div className="mt-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl mx-auto">
                    {["p1.jpeg", "p2.jpg", "p4.jpeg", "p3.jpg"].map(
                      (src, index) => (
                        <div
                          key={index}
                          className="aspect-video overflow-hidden rounded-lg shadow-sm"
                        >
                          <img
                            src={`${import.meta.env.BASE_URL}photos/${src}`}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary sidebar for large screens */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">
                  Production Impact Summary
                </h3>
                <div className="space-y-4 mb-8">
                  {/* Summary items */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Factory size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Overview</h4>
                      <p className="text-sm text-gray-600">
                        Battery production powers clean tech but brings serious
                        environmental tradeoffs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Demand Surge</h4>
                      <p className="text-sm text-gray-600">
                        Battery market to triple by 2030, with lithium demand
                        rising 500%.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Pickaxe size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">
                        Extraction Risks
                      </h4>
                      <p className="text-sm text-gray-600">
                        Mining causes water pollution, ecosystem loss, and human
                        rights issues.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <CloudCog size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Carbon Cost</h4>
                      <p className="text-sm text-gray-600">
                        Producing one EV battery emits up to 200 kg CO₂ per kWh.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Wind size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">
                        Hidden Emissions
                      </h4>
                      <p className="text-sm text-gray-600">
                        Battery factories shift emissions from the tailpipe to
                        production.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Leaf size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">
                        Sustainable Shift
                      </h4>
                      <p className="text-sm text-gray-600">
                        Greener production and ethical sourcing are key to
                        long-term benefits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <h4 className="text-base font-medium mb-2">Reference List</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <a
                        href="https://www.amnesty.org/en/documents/afr62/3183/2016/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-600"
                      >
                        Amnesty International (2016)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://doi.org/10.1016/B978-0-444-59513-3.00021-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-600"
                      >
                        Dunn et al. (2015)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-600"
                      >
                        International Energy Agency (2023)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.statista.com/topics/12963/battery-industry-worldwide/#editorsPicks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-600"
                      >
                        Statista (2023)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* For small devices: text, photos, then summary */}
      <div className="block lg:hidden">
        <Section>
          <SectionTitle title="Overview of the Problem" />
          <div className="space-y-6">
            <p>
              Battery production plays a pivotal role in advancing sustainable
              technologies, particularly electric vehicles (EVs) and renewable
              energy storage systems. However, the environmental and social
              consequences of battery manufacturing, especially lithium-ion
              batteries, are significant and require closer examination.
            </p>
            <h3 className="text-xl font-semibold mt-4">
              Rising Demand and Resource Extraction
            </h3>
            <p>
              The production of lithium-ion batteries has seen a substantial
              rise due to the increasing demand for electric vehicles. In 2023,
              global battery production was valued at approximately $120
              billion, and it is projected to reach $370 billion by 2030. A
              major concern lies in the extraction of materials such as lithium,
              cobalt, and nickel. The global demand for lithium, for example, is
              expected to increase by 500% by 2030. These minerals are primarily
              sourced from regions such as the Democratic Republic of Congo,
              where mining has been linked to environmental degradation, water
              pollution, and human rights abuses, including child labour.
            </p>
          </div>
          <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
            <h4 className="text-xl font-semibold text-green-800 mb-2">
              Key Insight: Carbon Cost of Battery Production
            </h4>
            <p className="text-gray-700 mb-0">
              Producing a single EV battery can emit 150–200 kg of CO₂ per
              kilowatt-hour. While EVs reduce tailpipe emissions, the high
              carbon footprint of battery manufacturing —mainly due to energy
              use and material extraction —must be addressed to ensure a truly
              sustainable transition.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mt-4">
              Environmental Footprint of Manufacturing
            </h3>
            <p>
              The environmental footprint of battery production is therefore a
              significant issue. Emissions from manufacturing contribute a
              considerable share of the total carbon output associated with
              electric vehicles, challenging the narrative of their
              environmental neutrality.
            </p>
            <h3 className="text-xl font-semibold mt-4">Conclusion</h3>
            <p>
              In conclusion, while battery technology is essential for a greener
              future, it must be produced sustainably. Addressing the
              environmental and social impacts of battery production is critical
              to ensure that the benefits of clean energy technologies outweigh
              the associated costs.
            </p>
          </div>
        </Section>

        <div className="bg-white px-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {["p1.jpeg", "p2.jpg", "p4.jpeg", "p3.jpg"].map((src, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-lg shadow-sm"
              >
                <img
                  src={`${import.meta.env.BASE_URL}photos/${src}`}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pb-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Production Impact Summary
            </h3>
            <div className="space-y-4 mb-8">
              {/* Summary items */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <Factory size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Overview</h4>
                  <p className="text-sm text-gray-600">
                    Battery production powers clean tech but brings serious
                    environmental tradeoffs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Demand Surge</h4>
                  <p className="text-sm text-gray-600">
                    Battery market to triple by 2030, with lithium demand rising
                    500%.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <Pickaxe size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Extraction Risks</h4>
                  <p className="text-sm text-gray-600">
                    Mining causes water pollution, ecosystem loss, and human
                    rights issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <CloudCog size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Carbon Cost</h4>
                  <p className="text-sm text-gray-600">
                    Producing one EV battery emits up to 200 kg CO₂ per kWh.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <Wind size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Hidden Emissions</h4>
                  <p className="text-sm text-gray-600">
                    Battery factories shift emissions from the tailpipe to
                    production.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Sustainable Shift</h4>
                  <p className="text-sm text-gray-600">
                    Greener production and ethical sourcing are key to long-term
                    benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 my-4 pt-4">
              <h4 className="text-base font-medium mb-2">Reference List</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="https://www.amnesty.org/en/documents/afr62/3183/2016/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600"
                  >
                    Amnesty International (2016)
                  </a>
                </li>
                <li>
                  <a
                    href="https://doi.org/10.1016/B978-0-444-59513-3.00021-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600"
                  >
                    Dunn et al. (2015)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600"
                  >
                    International Energy Agency (2023)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.statista.com/topics/12963/battery-industry-worldwide/#editorsPicks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600"
                  >
                    Statista (2023)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResearchSummary;
