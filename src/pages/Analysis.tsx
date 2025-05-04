import React from "react";
import PageLayout from "../components/layout/PageLayout";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import { Eye, Tv2, HelpCircle, BookOpen, Scale, BarChart3 } from "lucide-react";

const ResearchSummary: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Analysis and Results:
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            What We Discovered Throughout the Project
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-full lg:col-span-2">
            <SectionTitle title="Identifying the Problem" />

            <div className="prose prose-lg max-w-none">
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  Our project began with a key question: to what extent are
                  electric vehicles (EVs) more environmentally friendly compared
                  to internal combustion engine (ICE) vehicles in terms of their
                  impact on ecosystems and contribution to pollution? Through a
                  combination of secondary and primary research, we discovered
                  that the common belief in EVs as environmentally superior is
                  often based more on perception than a comprehensive
                  understanding of their full ecological impact. This was
                  evident in our survey of over 180 participants, where around
                  79% viewed EVs as eco-friendly, largely due to their lack of
                  exhaust emissions, use of electricity, and reduced visible
                  pollution. These views matched academic findings that
                  highlight how visual factors, media narratives, and
                  psychological biases contribute to the “green halo” effect
                  surrounding EVs.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Understanding Public Perception
                </h3>
                <p>
                  Further survey data revealed that people mostly get
                  information about EVs from social media, YouTube, and
                  advertising, not from scientific or technical sources. A
                  significant number of respondents admitted that they did not
                  know how electricity is produced or were unaware of the
                  environmental impact of battery production. Despite this, 45%
                  still said that driving an EV made them feel like they were
                  helping the planet, confirming that emotional identity often
                  outweighs environmental facts.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Insights from Public Interviews{" "}
                </h3>
                <p>
                  To complement the survey, we also conducted short interviews
                  with members of the public. The responses were often vague or
                  based on incomplete knowledge. Most participants were unsure
                  about where EV batteries come from, how they are disposed of,
                  or the social issues tied to mining materials like cobalt and
                  lithium. These interviews confirmed that while there is a
                  general support for green technology, public awareness of EV
                  battery lifecycles remains limited.{" "}
                </p>
                <img
                  src={`${import.meta.env.BASE_URL}photos/a/a1.png`}
                  alt="EV Battery Lifespan Chart"
                  className="w-full h-full object-cover mt-4 rounded-lg shadow"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Website Structure and Educational Approach{" "}
                </h3>
                <p>
                  To address this knowledge gap, we created an educational
                  website structured around three key sections: Battery
                  Production, Battery Life, and Recycling and Disposal. Each
                  section presented facts and visuals to clarify misconceptions
                  — for example, highlighting the high carbon cost of battery
                  manufacturing, the limited lifespan of EV batteries compared
                  to ICVs, and the low global recycling rate of just 5–10%. Our
                  interactive experiment, based on the research by Yang et al.
                  (2021), demonstrated how lithium and other metals can be
                  chemically recovered, helping the public visualise recycling
                  possibilities in action.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Comparing EVs and Internal Combustion Vehicles{" "}
                </h3>
                <p>
                  In comparison with internal combustion engine (ICV) vehicles,
                  EVs eliminate tailpipe emissions but shift the environmental
                  burden to earlier and later stages of the lifecycle, such as
                  battery production, electricity generation, and disposal.
                  While ICVs are commonly criticised for ongoing emissions, EVs
                  have hidden costs that are often overlooked due to their
                  cleaner image.
                </p>
              </div>

              <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  Project Reach and Final Impact
                </h4>
                <p className="text-gray-700 mb-0">
                  Our <strong>impact metrics</strong> indicate a strong public
                  response: over <strong>180 individuals</strong> participated
                  in the survey, and our <strong>project video</strong> has been
                  viewed nearly <strong>3,000 times</strong>. These numbers
                  suggest that our campaign successfully reached a{" "}
                  <strong>broad audience</strong> and prompted viewers to{" "}
                  <strong>reconsider their assumptions</strong>. While we do not
                  claim to have transformed public opinion, we believe we made a{" "}
                  <strong>small but meaningful contribution</strong> to public
                  awareness, encouraging more{" "}
                  <strong>informed discussions about sustainability</strong> and
                  the <strong>environmental trade-offs</strong> of electric
                  vehicles.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              {/* Sources */}
              <h3 className="text-xl font-semibold mb-4">Key Points Summary</h3>
              <div className="space-y-4 mb-8">
                {/* Identifying the Problem */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">
                      Identifying the Problem
                    </h4>
                    <p className="text-sm text-gray-600">
                      EVs are seen as green mainly due to visible features, not
                      full environmental impact.
                    </p>
                  </div>
                </div>

                {/* Public Perception */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Tv2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Public Perception</h4>
                    <p className="text-sm text-gray-600">
                      Most people rely on media for EV info and overlook
                      technical details.
                    </p>
                  </div>
                </div>

                {/* Public Interviews */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-3">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Public Interviews</h4>
                    <p className="text-sm text-gray-600">
                      Few understand battery sourcing, disposal, or ethical
                      concerns.
                    </p>
                  </div>
                </div>

                {/* Educational Approach */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">
                      Educational Approach
                    </h4>
                    <p className="text-sm text-gray-600">
                      The site explains battery production, lifespan, and
                      recycling.
                    </p>
                  </div>
                </div>

                {/* EV vs. ICV Comparison */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                    <Scale size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">
                      EV vs. ICV Comparison
                    </h4>
                    <p className="text-sm text-gray-600">
                      EVs shift emissions to production and disposal stages.
                    </p>
                  </div>
                </div>

                {/* Project Impact */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Project Impact</h4>
                    <p className="text-sm text-gray-600">
                      Over 180 survey responses and 3,000 video views raised
                      awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ResearchSummary;
