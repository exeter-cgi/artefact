import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import HeroBanner from "../components/home/HeroBanner";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Footer from "../components/layout/Footer";
import {
  ArrowRight,
  Leaf,
  BarChart2,
  ThumbsUp,
  Database,
  Recycle,
  BrainCircuit,
  Users,
  UserRoundSearch,
  Factory,
  BookOpenCheck,
  AlertTriangle,
  BatteryCharging,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <PageLayout>
        <HeroBanner />

        {/* Environmental Concern Steps Section */}
        <Section background="light">
          <div className="text-center mb-12">
            <SectionTitle
              title="The Path to Eco-Friendly Choices"
              subtitle="Understanding actions and questioning assumptions"
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                1
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Growing Awareness
                </h3>
                <p className="text-gray-600">
                  People are increasingly concerned about the environment due to
                  issues like pollution, climate change, and resource depletion.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                2
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Changing Habits</h3>
                <p className="text-gray-600">
                  Many individuals try to reduce their environmental impact by
                  using reusable bags, supporting renewable energy sources, and
                  driving electric cars.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                3
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Questioning Assumptions
                </h3>
                <p className="text-gray-600">
                  But are electric cars truly eco-friendly? Let’s explore their
                  hidden environmental costs and discover the full story.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Public Perception vs Reality Section */}
        <Section id="perception" background="white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <UserRoundSearch size={24} />
              </div>
              <SectionTitle
                title="Public Perception vs Reality"
                subtitle="Why many assume electric cars are automatically eco-friendly"
              />
              <p className="text-gray-600 mb-6">
                Many people automatically believe electric cars are better for
                the environment because they have no tailpipe emissions.
                However, this belief is often based on visual impressions and
                media messaging, rather than a full understanding.
              </p>

              <div className="block md:hidden mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <ThumbsUp size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Green at First Glance</h4>
                        <p className="text-sm text-gray-600">
                          People assume EVs are fully eco-friendly because they
                          have no tailpipe emissions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <Users size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Influence of Media & Peers
                        </h4>
                        <p className="text-sm text-gray-600">
                          Social media and advertising shape perception more
                          than environmental facts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <BarChart2 size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Hidden Environmental Costs
                        </h4>
                        <p className="text-sm text-gray-600">
                          Battery production and energy sourcing carry
                          significant ecological impacts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <Recycle size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Battery Disposal Blindspot
                        </h4>
                        <p className="text-sm text-gray-600">
                          End-of-life battery management poses serious
                          sustainability challenges.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => navigate("/data")}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            <div className="hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <ThumbsUp size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Green at First Glance</h4>
                      <p className="text-sm text-gray-600">
                        People assume EVs are fully eco-friendly because they
                        have no tailpipe emissions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Users size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Influence of Media & Peers
                      </h4>
                      <p className="text-sm text-gray-600">
                        Social media and advertising shape perception more than
                        environmental facts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <BarChart2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Hidden Environmental Costs
                      </h4>
                      <p className="text-sm text-gray-600">
                        Battery production and energy sourcing carry significant
                        ecological impacts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Recycle size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Battery Disposal Blindspot
                      </h4>
                      <p className="text-sm text-gray-600">
                        End-of-life battery management poses serious
                        sustainability challenges.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Our Research Focus Section */}
        <Section id="research-focus" background="light">
          <div className="text-center mb-12">
            <SectionTitle
              title="Our Research Focus"
              subtitle="Our research is divided into three key areas to better understand the true environmental footprint of electric cars."
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Battery Production */}
            <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 h-40 w-full rounded-lg overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}photos/p/p0.jpg`}
                  alt="Battery Recycling Process"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Battery Production Impact
                </h3>
                <p className="text-gray-600 mb-6">
                  This section investigates the environmental impact of mining
                  lithium, cobalt, and nickel, along with the effects of battery
                  production.
                </p>
              </div>
              <button
                onClick={() => navigate("/production")}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Explore Details
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Life-Cycle Comparison */}
            <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 h-40 w-full rounded-lg overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}photos/l/l0.jpg`}
                  alt="Battery Recycling Process"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Battery Lifespan in EVs
                </h3>
                <p className="text-gray-600 mb-6">
                  This section explores and compares the lifespan and
                  environmental impact of electric vehicle batteries and
                  internal combustion engines.
                </p>
              </div>
              <button
                onClick={() => navigate("/lifespan")}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Explore Details
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Battery Recycling */}
            <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 h-40 w-full rounded-lg overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}photos/e/e0.jpeg`}
                  alt="Battery Recycling Process"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Battery Recycling and Disposal
                </h3>
                <p className="text-gray-600 mb-6">
                  This section will cover the issues related to the recycling of
                  lithium-ion batteries and present an experiment on battery
                  recycling.
                </p>
              </div>
              <button
                onClick={() => navigate("/recycling")}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Explore Details
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </Section>

        {/* Interviews Section */}
        <Section id="interviews" background="white">
          <div className="text-center mb-12">
            <SectionTitle
              title="Public Voices on Electric Cars"
              subtitle="We asked people about their views on electric vehicles. Watch these short interviews to see the range of perspectives!"
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="w-full aspect-[9/16]">
                <iframe
                  className="w-full h-full object-cover rounded-t-lg"
                  src="https://www.youtube.com/embed/UYAtv9JhUg0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-600">
                  Interview 1: Are EVs really green?
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="w-full aspect-[9/16]">
                <iframe
                  className="w-full h-full object-cover rounded-t-lg"
                  src="https://www.youtube.com/embed/ppRvvGJVujE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-600">
                  Interview 2: Thoughts on Battery Production
                </p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="w-full aspect-[9/16]">
                <iframe
                  className="w-full h-full object-cover rounded-t-lg"
                  src="https://www.youtube.com/embed/xNkW2qN_sNs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-600">
                  Interview 3: Life-Cycle Environmental Impact
                </p>
              </div>
            </div>

            {/* Video 4 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="w-full aspect-[9/16]">
                <iframe
                  className="w-full h-full object-cover rounded-t-lg"
                  src="https://www.youtube.com/embed/vCxClbru7sw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-600">
                  Interview 4: Battery Recycling and Disposal
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Analysis, Evaluation, and Results */}
        <Section id="analysis" background="light">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* LEFT COLUMN (text + button + findings box on mobile) */}
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Database size={24} />
              </div>
              <SectionTitle
                title="Analysis, Evaluation, and Results"
                subtitle="We analysed both assumptions and real opinions to evaluate public knowledge and measure the impact of our educational outreach."
              />
              <p className="text-gray-600 mb-6">
                This section examines how we identified the environmental
                misconceptions surrounding electric vehicles, how public
                perception was measured through surveys and interviews, and what
                our project achieved in terms of engagement and awareness. By
                combining academic research with real-world feedback, we
                evaluated the gap between what people assume about EVs and the
                actual environmental realities of battery production, use, and
                disposal.
              </p>

              {/* ✅ Mobile-only: Summary inserted HERE */}

              <div className="block md:hidden mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Summary of Findings
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <Leaf size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Positive Aspects</h4>
                        <p className="text-sm text-gray-600">
                          Electric vehicles generate significantly fewer
                          emissions during use and demonstrate superior energy
                          efficiency compared to traditional combustion engine
                          vehicles.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <Factory size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Hidden Environmental Costs
                        </h4>
                        <p className="text-sm text-gray-600">
                          The production and disposal of EV batteries lead to
                          substantial emissions, extensive resource extraction,
                          and complex recycling challenges that are often
                          overlooked.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <BookOpenCheck size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Knowledge Gaps</h4>
                        <p className="text-sm text-gray-600">
                          Many participants rely on social media and advertising
                          for EV information, with limited awareness of battery
                          sourcing, electricity generation, and recycling.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <AlertTriangle size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Public Misconceptions</h4>
                        <p className="text-sm text-gray-600">
                          The perception of EVs as entirely green persists, even
                          though significant lifecycle emissions are often
                          ignored.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <BatteryCharging size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Shift in Awareness</h4>
                        <p className="text-sm text-gray-600">
                          A smaller but growing number of people are starting to
                          question the sustainability of EVs as more information
                          becomes accessible.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button always at the bottom */}
              <button
                onClick={() => navigate("/analysis")}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                View Full Analysis
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* RIGHT COLUMN: Desktop-only Summary of Findings box */}
            <div className="order-2 md:order-1 hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Summary of Findings
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Leaf size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Positive Aspects</h4>
                      <p className="text-sm text-gray-600">
                        Electric vehicles generate significantly fewer emissions
                        during use and offer greater energy efficiency than
                        traditional internal combustion vehicles.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Factory size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Hidden Environmental Costs
                      </h4>
                      <p className="text-sm text-gray-600">
                        Battery production and disposal involve high emissions,
                        intensive material extraction, and difficult recycling
                        processes — often overlooked in public discussion.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <BookOpenCheck size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Knowledge Gaps</h4>
                      <p className="text-sm text-gray-600">
                        Most people get their information from social media and
                        ads, with limited understanding of electricity sources,
                        battery lifecycles, and environmental trade-offs.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <AlertTriangle size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Public Misconceptions</h4>
                      <p className="text-sm text-gray-600">
                        The belief that EVs are inherently “green” persists,
                        largely driven by emotional perception rather than
                        complete environmental data.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Quiz Section */}
        <Section id="quiz" background="green">
          <div className="text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-600">
              <BrainCircuit size={24} />
            </div>
            <SectionTitle
              title="Test Your Knowledge"
              subtitle="Challenge yourself with our interactive quiz covering emissions, energy, and recycling!"
              center
            />
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => navigate("/quiz")}
                className="inline-flex items-center justify-center px-6 py-3 text-lg bg-green-500 text-white font-semibold rounded hover:bg-green-600"
              >
                Start Quiz
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </Section>

        {/* Process Photos Section */}
        <Section id="additional-info" background="light">
          <div className="text-center mb-12">
            <SectionTitle
              title="Behind the Scenes"
              subtitle="Our team collaborated closely to gather data, conduct interviews, carry out experiments, and build this website. Here's a look behind the scenes!"
              center
            />
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First 6 photos always visible */}
            {[
              {
                src: "s0.jpg",
                caption: "Working on a group portfolio",
              },
              {
                src: "s1.jpg",
                caption: "Interviewing participants about EV perceptions",
              },
              {
                src: "s3.jpeg",
                caption: "Video Editing",
              },
              {
                src: "s4.jpg",
                caption: "Building and designing the website",
              },
              {
                src: "s5.jpeg",
                caption: "CGI Tutorial",
              },
              {
                src: "s6.jpeg",
                caption: "Designing a poster",
              },
            ].map((photo, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`${import.meta.env.BASE_URL}photos/s/${photo.src}`}
                  alt={photo.caption}
                  className="rounded-lg shadow-md object-cover w-full h-64"
                />
                <p className="text-gray-600 mt-2 text-sm">{photo.caption}</p>
              </div>
            ))}

            {/* Additional photos shown if showMore is true */}
            {showMore &&
              [
                {
                  src: "s7.jpeg",
                  caption: "Analysing survey results",
                },
                {
                  src: "s8.jpeg",
                  caption: "Working on a website",
                },
                {
                  src: "s9.jpg",
                  caption: "Interviewing participants about E-cars",
                },
                {
                  src: "s10.jpg",
                  caption: " Our Team is in the Fab Lab",
                },
              ].map((photo, index) => (
                <div key={index + 6} className="flex flex-col items-center">
                  <img
                    src={`${import.meta.env.BASE_URL}photos/s/${photo.src}`}
                    alt={photo.caption}
                    className="rounded-lg shadow-md object-cover w-full h-64"
                  />
                  <p className="text-gray-600 mt-2 text-sm">{photo.caption}</p>
                </div>
              ))}

            {showMore && (
              <div className="flex flex-col items-center">
                <div className="w-full h-64 rounded-lg shadow-md overflow-hidden">
                  <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/WtmTGVEqVCo"
                    title="Battery Recycling Experiment"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  3D Printing Process
                </p>
              </div>
            )}

            {/* ✅ Final 12th photo */}
            {showMore && (
              <div className="flex flex-col items-center">
                <img
                  src={`${import.meta.env.BASE_URL}photos/s/s11.jpg`}
                  alt="Celebrating project completion"
                  className="rounded-lg shadow-md object-cover w-full h-64"
                />
                <p className="text-gray-600 mt-2 text-sm">
                  Celebrating project completion
                </p>
              </div>
            )}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-8">
            {!showMore && (
              <Button onClick={() => setShowMore(true)}>
                Show More Photos
                <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
          </div>
        </Section>

        {/* Group Members Section */}
        <Section background="white">
          <div className="text-center mb-12">
            <SectionTitle
              title="Meet Our Team"
              subtitle="The people behind the research and the project. We worked together through every stage — from gathering data to designing the website — to bring this project to life."
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Member 1 */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}team/p1.png`}
                alt="Member 1"
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Kirill Tiukin</h3>
              <p className="text-gray-500 text-sm">
                Website Design & Development
              </p>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}team/p2.png`}
                alt="Member 2"
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Laksh Lalwani</h3>
              <p className="text-gray-500 text-sm">
                Video Production & Editing
              </p>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}team/p3.png`}
                alt="Member 3"
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Anastas Argutin</h3>
              <p className="text-gray-500 text-sm">Recycling Experiment</p>
            </div>

            {/* Member 4 */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}team/p4.png`}
                alt="Member 4"
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Hazem Bail</h3>
              <p className="text-gray-500 text-sm">
                Research Analysis & Writing
              </p>
            </div>
          </div>
        </Section>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Home;
