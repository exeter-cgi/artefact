import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import HeroBanner from "../components/home/HeroBanner";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import {
  ArrowRight,
  Leaf,
  BarChart2,
  ThumbsUp,
  FileText,
  Database,
  Recycle,
  Video,
  BrainCircuit,
  Battery,
  Download,
  Clock,
  Users,
  X,
  UserRoundSearch,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <PageLayout>
      {/* Landing Section */}
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
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
              1
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Growing Awareness</h3>
              <p className="text-gray-600">
                People are increasingly concerned about the environment due to
                issues like pollution, climate change, and resource depletion.
              </p>
            </div>
          </div>

          {/* Step 2 */}
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

          {/* Step 3 */}
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
          {/* LEFT COLUMN — Text content + button + mobile-only Key Findings */}
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <UserRoundSearch size={24} />
            </div>
            <SectionTitle
              title="Public Perception vs Reality"
              subtitle="Why many assume electric cars are automatically eco-friendly"
            />
            <p className="text-gray-600 mb-6">
              Many people automatically believe electric cars are better for the
              environment because they have no tailpipe emissions. However,
              deeper analysis shows hidden environmental impacts from mining,
              manufacturing, and battery disposal.
            </p>

            {/* ✅ Key Findings inserted HERE for mobile only */}
            <div className="block md:hidden mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <ThumbsUp size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Public Belief</h4>
                      <p className="text-sm text-gray-600">
                        EV = Zero emissions = Fully green.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <BarChart2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Hidden Reality</h4>
                      <p className="text-sm text-gray-600">
                        High emissions during battery production.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Recycle size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">End-of-Life Challenges</h4>
                      <p className="text-sm text-gray-600">
                        Disposal of EV batteries remains a serious environmental
                        issue.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Button stays last */}
            <Button to="/assumptions">
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* RIGHT COLUMN — Key Findings visible only on desktop */}
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
              <ul className="space-y-4">
                {/* same list as above */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <ThumbsUp size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Public Belief</h4>
                    <p className="text-sm text-gray-600">
                      EV = Zero emissions = Fully green.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <BarChart2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Hidden Reality</h4>
                    <p className="text-sm text-gray-600">
                      High emissions during battery production.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Recycle size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">End-of-Life Challenges</h4>
                    <p className="text-sm text-gray-600">
                      Disposal of EV batteries remains a serious environmental
                      issue.
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
            subtitle="Our research is divided into three key areas to better understand the true environmental footprint of electric cars compared to traditional vehicles."
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Battery Production */}
          <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-6 h-40 w-full rounded-lg overflow-hidden">
              <img
src={`${import.meta.env.BASE_URL}photos/p0.jpg`}
alt="Battery Recycling Process"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                Battery Production Impact
              </h3>
              <p className="text-gray-600 mb-6">
                We investigate the environmental costs of mining lithium,
                cobalt, and nickel compared to building combustion engines.
              </p>
            </div>
            <Button to="/research">
              Explore Details
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Life-Cycle Comparison */}
          <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-6 h-40 w-full rounded-lg overflow-hidden">
              <img
src={`${import.meta.env.BASE_URL}photos/l0.jpg`}
alt="Battery Recycling Process"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                Life-Cycle Environmental Impact
              </h3>
              <p className="text-gray-600 mb-6">
                A full comparison from production to disposal for EVs and ICEs,
                highlighting when EVs become environmentally beneficial.
              </p>
            </div>
            <Button to="/data">
              Explore Details
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Battery Recycling */}
          <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-6 h-40 w-full rounded-lg overflow-hidden">
              <img
src={`${import.meta.env.BASE_URL}photos/e0.jpeg`}
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
  onClick={() => navigate('/battery')}
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
                src="https://www.youtube.com/embed/0oj1LYr9HAk"
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
              subtitle="Assessing the true environmental impact of electric vehicles based on research and real-world perspectives."
            />
            <p className="text-gray-600 mb-6">
              While EVs offer important benefits during the operational phase,
              our findings highlight significant hidden costs associated with
              battery manufacturing and end-of-life disposal. Understanding the
              full life cycle is essential to making truly sustainable
              transportation choices.
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
                      <Database size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Positive Aspects</h4>
                      <p className="text-sm text-gray-600">
                        Electric vehicles generate significantly fewer emissions
                        during use and demonstrate superior energy efficiency
                        compared to traditional combustion engine vehicles.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Clock size={16} />
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
                </ul>
              </div>
            </div>

            {/* Button always at the bottom */}
            <Button to="/video">
              View Full Analysis
              <ArrowRight size={16} className="ml-2" />
            </Button>
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
                    <Database size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Positive Aspects</h4>
                    <p className="text-sm text-gray-600">
                      Electric vehicles generate significantly fewer emissions
                      during use and demonstrate superior energy efficiency
                      compared to traditional combustion engine vehicles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Hidden Environmental Costs</h4>
                    <p className="text-sm text-gray-600">
                      The production and disposal of EV batteries lead to
                      substantial emissions, extensive resource extraction, and
                      complex recycling challenges that are often overlooked.
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
            <Button to="/quiz" size="lg">
              Start Quiz
              <ArrowRight size={16} className="ml-2" />
            </Button>
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
      src: "p0.jpg",
      caption: "Planning our research approach",
    },
    {
      src: "p0.jpg",
      caption: "Interviewing participants about EV perceptions",
    },
    {
      src: "p0.jpg",
      caption: "Experimenting with battery recycling methods",
    },
    {
      src: "p0.jpg",
      caption: "Building and designing the website",
    },
    {
      src: "p0.jpg",
      caption: "Working together to review data",
    },
    {
      src: "p0.jpg",
      caption: "Filming vertical interviews for our website",
    },
  ].map((photo, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={`${import.meta.env.BASE_URL}photos/${photo.src}`}
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
        src: "p0.jpg",
        caption: "Analyzing survey results",
      },
      {
        src: "p0.jpg",
        caption: "Recording experiment results",
      },
      {
        src: "p0.jpg",
        caption: "Finalizing presentation materials",
      },
      {
        src: "p0.jpg",
        caption: "Celebrating project completion",
      },
    ].map((photo, index) => (
      <div key={index + 6} className="flex flex-col items-center">
        <img
          src={`${import.meta.env.BASE_URL}photos/${photo.src}`}
          alt={photo.caption}
          className="rounded-lg shadow-md object-cover w-full h-64"
        />
        <p className="text-gray-600 mt-2 text-sm">{photo.caption}</p>
      </div>
    ))}
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
            <p className="text-gray-500 text-sm">Research & Data Collection</p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <img
src={`${import.meta.env.BASE_URL}team/p2.png`}
alt="Member 2"
              className="rounded-lg w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Laksh Lalwani</h3>
            <p className="text-gray-500 text-sm">Video Production & Editing</p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
  <img
    src={`${import.meta.env.BASE_URL}team/p3.png`}
    alt="Member 3"
    className="rounded-lg w-full h-64 object-cover mb-4"
  />
  <h3 className="text-lg font-semibold">Anastas Argutin</h3>
  <p className="text-gray-500 text-sm">Website Design & Layout</p>
</div>


          {/* Member 4 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
  <img
    src={`${import.meta.env.BASE_URL}team/p4.png`}
    alt="Member 4"
    className="rounded-lg w-full h-64 object-cover mb-4"
  />
  <h3 className="text-lg font-semibold">Hazem Bail</h3>
  <p className="text-gray-500 text-sm">Research Analysis & Writing</p>
</div>

        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;
