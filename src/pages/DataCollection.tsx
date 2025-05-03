import React from "react";
import PageLayout from "../components/layout/PageLayout";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import {
  Eye,
  Users,
  Heart,
  Leaf,
  Zap,
  BatteryCharging,
  Instagram,
  Brain,
  Globe,
  HandHeart,
  MessageCircleQuestion,
} from "lucide-react";

const DataCollection: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Green Illusion
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
          Why People Think EVs Are Automatically 
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle title="Secondary Research: Where the Assumption Comes From" />

            <div className="prose prose-lg max-w-none">
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  While electric vehicles (EVs) are widely celebrated as a
                  sustainable alternative to traditional cars, public perception
                  often overlooks the full environmental picture. Many consumers
                  believe EVs are inherently eco-friendly, but this belief is
                  shaped more by surface-level impressions and psychological
                  factors than by a comprehensive understanding of their
                  environmental impact. The following insights highlight the key
                  drivers behind this perception.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Perception of Eco-Friendliness Driven by Visual Cues
                </h3>
                <p>
                  Existing research shows that the widespread belief in the
                  eco-friendliness of electric vehicles (EVs) is driven by a
                  combination of visible characteristics, limited environmental
                  knowledge, and strong psychological and social influences.
                </p>
                <p>
                  One of the key drivers is the absence of tailpipe emissions,
                  which creates a visual and symbolic impression of “clean”
                  transport. People often associate zero visible emissions with
                  zero environmental impact, even though this perception
                  overlooks factors such as battery production and electricity
                  generation.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Influence of Messaging and Social Norms
                </h3>
                <p>
                  Another significant factor is how information is presented.
                  Consumers frequently form their views about EVs through social
                  influence, media messaging, and peer endorsement rather than
                  technical or scientific understanding. This contributes to a
                  “green halo” effect, where EVs are seen as environmentally
                  superior by default.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Emotional and Psychological Motivations
                </h3>
                <p>
                  Additionally, many consumers are motivated by internal
                  psychological needs, such as the desire to feel morally
                  responsible or socially accepted. This emotional connection to
                  environmentally symbolic actions, like driving an EV, can be
                  strong, even when the overall sustainability of the vehicle is
                  not fully considered.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Reinforcement Through Perceived Benefits
                </h3>
                <p>
                  At the same time, perceived green benefits, such as cost
                  savings and increased social status, further reinforce
                  consumer decisions. However, few individuals critically assess
                  the sources of electricity or the environmental impact of
                  battery mining, both of which complicate the assumption that
                  EVs are automatically eco-friendly.
                </p>
              </div>

              <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  Conclusion and Research Relevance
                </h4>
                <p className="text-gray-700 mb-0">
                  These insights provide a useful framework for evaluating
                  public perception, which we explored further through primary
                  research.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              {/* Sources */}
              <h3 className="text-xl font-semibold mb-4">
                Secondary Research Highlights
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Visual Impact</h4>
                    <p className="text-sm text-gray-600">
                      Lack of tailpipe emissions creates a false sense of total
                      cleanliness
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Social Influence</h4>
                    <p className="text-sm text-gray-600">
                      Media, peers, and trends shape perception more than facts
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Emotional Appeal</h4>
                    <p className="text-sm text-gray-600">
                      EVs offer moral comfort and social approval to users
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Green Halo Effect</h4>
                    <p className="text-sm text-gray-600">
                      EVs are often assumed to be eco-friendly without full
                      analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">
                      Energy Source Blindspot
                    </h4>
                    <p className="text-sm text-gray-600">
                      Few consider how electricity is generated or where it
                      comes from
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <BatteryCharging size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">
                      Battery Production Costs
                    </h4>
                    <p className="text-sm text-gray-600">
                      Environmental impact of mining and disposal often
                      overlooked
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
                      href="https://doi.org/10.1016/j.ecolecon.2013.08.007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Axsen et al. (2013)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://doi.org/10.22399/ijcesen.371"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Jha & Singh (2024)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://doi.org/10.1016/j.heliyon.2024.e30098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Wu et al. (2024)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://doi.org/10.1016/j.trd.2021.103157"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Zhang et al. (2022)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://doi.org/10.3390/wevj15080331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Zhao et al. (2024){" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionTitle
          title="Key Data Visualizations"
          subtitle="Visual representation of our findings"
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              src: "dp1.jpg",
              caption: "Analysis results (structural model)",
            },
            {
              src: "dp2.jpg",
              caption: "Theoretical framework",
            },
            {
              src: "dp3.jpg",
              caption:
                "Research framework",
            },
            {
              src: "dp4.png",
              caption:
                "Conceptual framework of social influence and BEV preferences",
            },
          ].map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}photos/${photo.src}`}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mt-2 text-sm text-center">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle title="Primary Research: What Real People Think" />

            <div className="prose prose-lg max-w-none">
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  To explore how these academic findings play out in practice,
                  we conducted a survey with over 180 participants. The aim was
                  to understand why people assume EVs are eco-friendly, where
                  that belief comes from, and whether it’s supported by full
                  awareness of environmental impacts.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Belief in Eco-Friendliness Based on Visible Traits
                </h3>
                <p>
                  The survey revealed that most participants (around 79%) do
                  believe that EVs are eco-friendly. Their reasons reflected
                  exactly what the literature described: the most commonly cited
                  factors were “no exhaust fumes,” “they run on electricity,”
                  and “they reduce CO₂ emissions.” In other words, visible
                  cleanliness equals environmental goodness in the eyes of most
                  respondents.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Sources of Information Shaped by Media and Social Influence
                </h3>
                <p>
                  When asked where they hear about EVs, the majority mentioned
                  social media, YouTube, and advertising, confirming that peer
                  and media influence are powerful in shaping green assumptions.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Limited Awareness of Environmental Complexity
                </h3>
                <p>
                  However, knowledge was more limited when it came to the full
                  environmental cost:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Many respondents said they did not know how electricity is
                    produced in their country
                  </li>
                  <li>
                    Only a small portion were aware of the ecological harm
                    caused by battery production
                  </li>
                  <li>
                    Yet, despite these gaps, 45% of participants said that
                    driving an EV would make them feel like they’re helping the
                    planet — showing how psychological identity is linked to the
                    green image of EVs
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mt-4">
                  Mixed Perceptions
                </h3>
                <p>
                  Open-ended responses revealed a split: while many defended EVs
                  as "the better of two bad options,” others expressed
                  skepticism, calling the green label “propaganda” or raising
                  concerns about lithium mining, waste, and corporate
                  greenwashing.
                </p>
                <h3 className="text-xl font-semibold mt-4">
                  Resistance to Changing Beliefs Despite New Information
                </h3>
                <p>
                  When asked if new information about EV environmental harm
                  would change their opinion, most said “maybe a bit” or “not
                  really.” This reflects the tendency of people to remain
                  committed to identity-based choices, even when presented with
                  contradictory facts.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              {/* Sources */}
              <h3 className="text-xl font-semibold mb-4">
                Secondary Research Highlights
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">
                      Visible Cleanliness
                    </h4>
                    <p className="text-sm text-gray-600">
                      EVs are perceived as clean because they lack visible
                      exhaust emissions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Media Influence</h4>
                    <p className="text-sm text-gray-600">
                      People rely on social media and ads to learn about EVs —
                      not science
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Cognitive Bias</h4>
                    <p className="text-sm text-gray-600">
                      Beliefs persist even when people are shown conflicting
                      information
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Knowledge Gaps</h4>
                    <p className="text-sm text-gray-600">
                      Many don't know how electricity is generated or how
                      batteries affect ecosystems
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <HandHeart size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Green Identity</h4>
                    <p className="text-sm text-gray-600">
                      People associate EV use with being a good, ethical person
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <MessageCircleQuestion size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">
                      Skepticism & Doubt
                    </h4>
                    <p className="text-sm text-gray-600">
                      Some challenge EV sustainability claims and raise concerns
                      about greenwashing
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
                      href="https://forms.gle/p6KLD3CQ6Nr8tdA5A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 text-gray-600"
                    >
                      Google Forms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionTitle
          title="Key Data Visualizations"
          subtitle="Visual representation of our findings"
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              src: "d1.jpg",
              caption: "Do you believe electric cars are environmentally friendly?",
            },
            {
              src: "d2.jpg",
              caption: "What makes you believe that electric cars are eco-friendly?",
            },
            {
              src: "d3.jpg",
              caption:
                "Where do you mostly hear or read about electric cars?",
            },
            {
              src: "d4.jpg",
              caption:
                "What sources most influenced your opinion about electric cars?",
            },
            {
              src: "d5.jpg",
              caption: "Do you agree with this statement: Driving an electric vehicle would make me feel like I'm helping the planet.",
            },
            {
              src: "d6.jpg",
              caption: "Have you ever felt like people expect you to make greener choices?",
            },
            {
              src: "d7.jpg",
              caption: "If you learned that charging an EV with fossil-fuel electricity still pollutes, would that change your opinion of how eco-friendly they are?",
            },
            {
              src: "d8.png",
              caption: "Mixed Perceptions",
            },
          ].map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}photos/${photo.src}`}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mt-2 text-sm text-center">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle title="Our Findings vs. Published Research" />
            <p>
              Together, the secondary and primary research reveal a strong
              alignment between what academic theory predicts and what people
              actually say and believe.
            </p>
            <h3 className="text-xl font-semibold mt-4">First</h3>
            <p>
              Both sets of data confirm that the idea of eco-friendliness
              is based more on perception than full environmental understanding.
              In both academic literature and the survey results, the absence of
              exhaust fumes and media messaging drive the belief that EVs are
              “green.” This demonstrates that visible and emotional cues are
              more influential than technical lifecycle data.
            </p>
            <h3 className="text-xl font-semibold mt-4">Second</h3>
            <p>
              Both show that social and psychological factors play a
              major role. The survey responses show that people feel good about
              owning or supporting EVs because it aligns with their identity,
              values, and sense of responsibility, even if they know little
              about emissions from electricity or battery disposal.
            </p>
            <h3 className="text-xl font-semibold mt-4">However</h3>
            <p>
              The survey also introduced some important nuance that
              goes beyond what the literature predicted. While most people still
              assume EVs are eco-friendly, some participants challenged this
              belief directly, using words like “propaganda,” “greenwashing,” or
              “lesser evil.” These responses show that a minority of the public
              is developing a more critical understanding, perhaps influenced by
              newer online discussions or environmental awareness campaigns.
            </p>
            <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
              <h4 className="text-xl font-semibold text-green-800 mb-2">
                Shift in public perception
              </h4>
              <p className="text-gray-700 mb-0">
                While the “EVs are automatically green” assumption still
                dominates, a growing number of people are starting to question
                the full picture.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}photos/d9.png`} // Update this path to your image
                  alt="Research Highlights Summary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default DataCollection;
