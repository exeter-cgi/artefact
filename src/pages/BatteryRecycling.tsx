import React from "react";
import PageLayout from "../components/layout/PageLayout";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import {
  Recycle,
  Battery,
  Flame,
  FlaskRound as Flask,
  ShieldAlert,
  Sparkles,
  AlertTriangle,
  BarChart2,
  FlaskRound,
  UserRound,
} from "lucide-react";

const BatteryRecycling: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Battery Recycling and Disposal
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Investigating eco-friendly methods to manage EV batteries after
            their lifecycle through practical research.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle title="Overview of the Problem" />

            <div className="prose prose-lg max-w-none">
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  Recycling and disposing of lithium-ion batteries has become a
                  pressing global challenge. As these batteries now power a wide
                  range of devices — from smartphones to electric vehicles —
                  managing their end-of-life responsibly is critical to
                  minimizing environmental and industrial risks.
                </p>
                <p>
                  Improper disposal of lithium-ion batteries poses major
                  environmental and safety hazards. If dumped in landfills, they
                  can leak toxic chemicals like cobalt, nickel, and lithium into
                  the soil and groundwater. Their high energy density also
                  increases the risk of fires and explosions if they are damaged
                  or mishandled, raising serious concerns for both public health
                  and the environment.
                </p>
                <p>
                  Recycling provides a sustainable solution. Through recycling,
                  valuable metals such as cobalt, lithium, nickel, and manganese
                  can be recovered and reused, reducing the demand for new
                  mining. Since mining for these materials often causes
                  environmental destruction and human rights violations,
                  effective recycling not only conserves natural resources but
                  also reduces social and ecological harm.
                </p>
                <p>
                  Most current recycling methods fall into two categories:
                  pyrometallurgical and hydrometallurgical processes.
                  Pyrometallurgy uses extremely high temperatures to melt and
                  recover metals, but it can be energy-intensive and often fails
                  to recover lithium efficiently. Hydrometallurgy, by contrast,
                  uses chemical solutions to selectively leach valuable metals,
                  offering higher recovery rates and lower energy consumption.
                </p>
                <p>
                  Exciting technological advancements are improving recycling
                  outcomes. Closed-loop recycling — where recovered materials
                  are reused to create new batteries — is gaining traction.
                  Direct recycling approaches, which preserve the structure of
                  battery components, are also emerging, potentially reducing
                  both environmental impacts and costs.
                </p>
                <p>
                  Nevertheless, significant challenges remain. The lack of
                  standardized battery designs complicates recycling processes,
                  and collecting and transporting used batteries safely remains
                  a logistical hurdle. Public awareness around proper battery
                  disposal is still limited, resulting in many batteries ending
                  up in general waste streams rather than specialized recycling
                  facilities.
                </p>
                <p>
                  To tackle these challenges, stronger government regulations,
                  economic incentives, and public education efforts are urgently
                  needed. Many countries are now introducing recycling mandates
                  and extended producer responsibility laws, requiring
                  manufacturers to take accountability for the full lifecycle of
                  their batteries and products.
                </p>
              </div>

              <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  Key Note
                </h4>
                <p className="text-gray-700 mb-0">
                  Today, the vast majority of lithium-ion batteries are not
                  recycled, posing a serious environmental challenge. Estimates
                  show that only 5–10% of used batteries are properly recycled
                  worldwide. A key obstacle to broader recycling efforts remains
                  the low economic viability compared to sourcing new raw
                  materials.
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  Our team, inspired by the work of Yang, Y., Walton, A.,
                  Sheridan, R., & Greenwood, R. (2021), conducted an experiment
                  focused on recovering valuable metals from spent lithium-ion
                  batteries through multi-step directional precipitation. The
                  results are demonstrated in the video below.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              {/* Sources */}
              <h3 className="text-xl font-semibold mb-4">Global Issue</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Flame size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Overview</h4>
                    <p className="text-sm text-gray-600">
                      Battery waste is a growing global issue
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Risks</h4>
                    <p className="text-sm text-gray-600">
                      Toxic leaks and fire hazards from improper disposal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Recycle size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Why Recycle</h4>
                    <p className="text-sm text-gray-600">
                      Saves metals, cuts mining, protects the planet
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <FlaskRound size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Methods</h4>
                    <p className="text-sm text-gray-600">
                      Pyrometallurgy and hydrometallurgy methods
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">New Tech</h4>
                    <p className="text-sm text-gray-600">
                      Closed-loop & direct recycling improve efficiency
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Challenges</h4>
                    <p className="text-sm text-gray-600">
                      Poor design, weak systems, low awareness
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <BarChart2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Key Note</h4>
                    <p className="text-sm text-gray-600">
                      Only 5–10% of batteries are recycled today
                    </p>
                  </div>
                </div>
              </div>

              {/* Experiment 1: Chemical Stability */}
              <h3 className="text-xl font-semibold mb-4">Experiment Details</h3>
              <div className="space-y-4">
                {/* Duration */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Flask size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Duration</h4>
                    <p className="text-sm text-gray-600">
                      4-day experimental period including material processing
                      and pH analysis
                    </p>
                  </div>
                </div>

                {/* Sample Size */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Battery size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Sample Size</h4>
                    <p className="text-sm text-gray-600">
                      10 lithium-ion battery cells
                    </p>
                  </div>
                </div>

                {/* Primary Contact */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <UserRound size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Primary Contact</h4>
                    <p className="text-sm text-gray-600">Anastas Argutin</p>
                  </div>
                </div>

                {/* Team */}
                <div className="border-t border-gray-200 my-4 pt-4">
                  <h4 className="text-base font-medium mb-2">Reference List</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <a
                        href="https://crsreports.congress.gov"
                        className="hover:underline hover:text-blue-600 text-gray-600"
                      >
                        Congressional Research Service (2020)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://doi.org/10.1039/C4EE03029J"
                        className="hover:underline hover:text-blue-600 text-gray-600"
                      >
                        Dunn et al. (2015)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://doi.org/10.1039/D1RA00017F"
                        className="hover:underline hover:text-blue-600 text-gray-600"
                      >
                        Yang et al. (2021)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionTitle
          title="Experiment Photo Gallery"
          subtitle="Visual documentation of our battery recycling experimental process."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[
            "e1.jpeg",
            "e2.jpeg",
            "e3.jpeg",
            "e4.jpeg",
            "e5.jpeg",
            "e6.jpeg",
          ].map((src, index) => (
            <div
              key={index}
              className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src={`public/photos/${src}`}
                alt={`Experiment Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Recycle size={24} />
            </div>
            <SectionTitle title="Explanation of the video" />
            <p className="text-gray-600 mb-6">
              The experiment began with neutralizing lithium-ion batteries using
              a 10% potassium carbonate (K₂CO₃) solution to stabilize reactive
              components. After neutralization, the batteries were disassembled
              into four main parts, one of which contained rare metal oxides
              such as cobalt (Co), manganese (Mn), lithium (Li), and nickel
              (Ni). To extract these metals, the aluminum base was first
              dissolved in a 12% sodium hydroxide (NaOH) solution. Then, the
              remaining metal oxides were dissolved using a 20% sulfuric acid
              (H₂SO₄) solution.
            </p>
            <p className="text-gray-600 mb-6">
              After dissolution, the resulting metal sulfates were chemically
              reduced and separated by filtration. In the final stage, lithium
              was recovered by precipitating lithium carbonate (Li₂CO₃) using
              sodium carbonate (Na₂CO₃), commonly known as washing soda.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/EraUX06GdZo"
              title="Environmental Impact Chart"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default BatteryRecycling;
