import React from "react";
import PageLayout from "../components/layout/PageLayout";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import {
  BatteryFull,
  Repeat,
  TrendingDown,
  Settings,
  Globe,
  Factory,
  Hammer,
  Leaf,
} from "lucide-react";

const ResearchSummary: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Battery Lifespan in Electric Vehicles:
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A Comparison with Internal Combustion Vehicles.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-full lg:col-span-2">
            <SectionTitle title="Overview of the Problem" />

            <div className="prose prose-lg max-w-none">
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  The automotive industry is undergoing a major transformation
                  as electric vehicles (EVs) gain popularity worldwide. One of
                  the key concerns for consumers and manufacturers alike is the
                  lifespan of EV batteries, which directly affects vehicle
                  performance, cost, and environmental sustainability. Unlike
                  internal combustion vehicles (ICVs), which rely on mechanical
                  engines powered by gasoline or diesel, EVs depend on
                  high-capacity rechargeable batteries, mainly lithium-ion
                  systems, to store and deliver energy.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Understanding EV Battery Lifespan
                </h3>
                <p>
                  The lifespan of an EV battery is typically measured in terms
                  of cycle life (how many full charge/discharge cycles it can
                  endure) and calendar life (how long it lasts over time
                  regardless of usage). Most modern EV lithium-ion batteries are
                  designed to last 12–15 years or about 150,000–300,000
                  kilometres before significant capacity loss occurs.
                </p>
                <img
                  src={`${import.meta.env.BASE_URL}photos/l/l1.jpg`}
                  alt="EV Battery Lifespan Chart"
                  className="w-full h-full object-cover mt-4 rounded-lg shadow"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Several factors influence EV battery longevity:
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Charging behaviour (e.g., fast vs. slow charging)</li>
                  <li>
                    Depth of discharge (how much of the battery’s energy is used
                    between charges)
                  </li>
                  <li>
                    Temperature management (how well the system handles heat)
                  </li>
                  <li>
                    Battery management systems that balance cell performance and
                    prevent overcharging
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">
                  ICV Lifespan and Maintenance
                </h3>
                <p>
                  By contrast, ICVs rely on engines that, while robust, require
                  regular mechanical maintenance such as oil changes, spark plug
                  replacements, fuel system servicing, and exhaust maintenance.
                  A well-maintained gasoline or diesel engine typically lasts
                  200,000–300,000 kilometres or about 10–15 years, similar to
                  modern EVs in terms of lifespan.
                </p>
                <p>
                  However, while ICV engines can be maintained and repaired
                  incrementally, battery degradation in EVs is more gradual and
                  cumulative; once the battery’s capacity declines, replacement
                  or repurposing is often the only option (Tarascon & Armand,
                  2001). On the other hand, EVs have fewer moving parts, which
                  reduces the need for regular maintenance compared to the more
                  complex ICV powertrains.
                </p>
                <img
                  src={`${import.meta.env.BASE_URL}photos/l/l2.jpg`}
                  alt="EV Battery Lifespan Chart"
                  className="w-full h-full object-cover mt-4 rounded-lg shadow"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Cost and Environmental Considerations
                </h3>
                <p>
                  Battery replacement is one of the most expensive maintenance
                  events for EV owners, often costing several thousand dollars.
                  In contrast, while individual repairs on ICVs may be cheaper,
                  the cumulative maintenance costs over time (fuel, oil, engine
                  repairs) can be substantial and environmentally damaging due
                  to ongoing emissions and resource use.
                </p>
                <h3 className="text-xl font-semibold mt-4">Analysis</h3>
                <p>
                  In summary, while the lifespan of EV batteries and ICV engines
                  is roughly comparable today, their maintenance profiles and
                  environmental impacts differ significantly. EV batteries
                  degrade gradually but require eventual replacement, while ICV
                  engines demand continuous upkeep but produce emissions
                  throughout their life. As battery technology advances, we can
                  expect longer-lasting, more resilient energy storage systems
                  that will close the gap between initial production costs and
                  long-term environmental benefits.
                </p>
              </div>

              <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  Key Challenge
                </h4>
                <p className="text-gray-700 mb-0">
                  The <strong>key challenge</strong> lies in aligning{" "}
                  <strong>technological progress</strong> with{" "}
                  <strong>consumer behaviour</strong>,{" "}
                  <strong>infrastructure development</strong>, and{" "}
                  <strong>recycling practices</strong> to ensure that EVs
                  deliver on their promise of{" "}
                  <strong>
                    sustainable, long-lasting transportation solutions
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              {/* Sources */}
              <h3 className="text-xl font-semibold mb-4">
                EV Battery Lifespan Summary
              </h3>
              <div className="space-y-4 mb-8">
                {/* 1. Overview */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <BatteryFull size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Overview</h4>
                    <p className="text-sm text-gray-600">
                      EV batteries last 12–15 years, depending on usage and
                      conditions.
                    </p>
                  </div>
                </div>

                {/* 2. Cycle Life */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Repeat size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Cycle Life</h4>
                    <p className="text-sm text-gray-600">
                      Typical batteries handle 1,500 full charge cycles.
                    </p>
                  </div>
                </div>

                {/* 3. Degradation */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <TrendingDown size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Degradation</h4>
                    <p className="text-sm text-gray-600">
                      Capacity fades 5–10% every 75,000 km.
                    </p>
                  </div>
                </div>

                {/* 4. Key Factors */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Settings size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Key Factors</h4>
                    <p className="text-sm text-gray-600">
                      Charging habits, heat, and depth of discharge matter.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Lifecycle Emissions Summary
              </h3>
              <div className="space-y-4 mb-8">
                {/* 1. Overview */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Overview</h4>
                    <p className="text-sm text-gray-600">
                      EVs emit less over their lifetime but more during
                      production.
                    </p>
                  </div>
                </div>

                {/* 2. Production Cost */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Factory size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Production Cost</h4>
                    <p className="text-sm text-gray-600">
                      Battery manufacturing raises upfront CO₂ emissions.
                    </p>
                  </div>
                </div>

                {/* 5. Maintenance */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Hammer size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Maintenance</h4>
                    <p className="text-sm text-gray-600">
                      Lower maintenance leads to smaller carbon footprint.
                    </p>
                  </div>
                </div>

                {/* 6. Green Potential */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Green Potential</h4>
                    <p className="text-sm text-gray-600">
                      Clean energy and recycling improve EV sustainability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="border-t border-gray-200 my-4 pt-4">
                <h4 className="text-base font-medium mb-2">Reference List</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://doi.org/10.1016/S0378-7753(01)00783-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Bloom et al. (2001)
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.inexess.com/files/ecar/Akkus/Handbook%20Of%20Batteries%203rd%20Edition.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Linden & Reddy (2002){" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nature.com/articles/35104644"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Tarascon & Armand (2001){" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://doi.org/10.1016/j.jpowsour.2005.01.006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Vetter et al. (2005){" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://doi.org/10.1016/j.jpowsour.2012.02.038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Wang et al. (2014){" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ResearchSummary;
