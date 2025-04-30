import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Video, Users, Download, Clock } from 'lucide-react';

const VideoPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Data Collection Video</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Watch how we gathered opinions and knowledge about EVs and ICEs from students.
          </p>
        </div>
      </div>
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="aspect-video bg-gray-900 rounded-lg shadow-lg flex items-center justify-center mb-6">
              <div className="text-center text-white">
                <Video size={48} className="mx-auto mb-2 opacity-50" />
                <p>Video: Student Data Collection Process</p>
                <p className="text-sm text-gray-400 mt-2">Click to play</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600 text-sm">
                <Clock size={16} className="mr-1.5" />
                <span>Duration: 8:24</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Users size={16} className="mr-1.5" />
                <span>Participants: 32 students</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Video size={16} className="mr-1.5" />
                <span>Published: May 15, 2025</span>
              </div>
            </div>
            
            <SectionTitle 
              title="Video Overview"
              subtitle="A documentary-style presentation of our data collection process with university students."
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                This video documents our process of collecting data from university students regarding their knowledge, perceptions, and opinions about electric vehicles (EVs) and internal combustion engine (ICE) vehicles. The goal was to understand how informed students are about the environmental impacts of different transportation options.
              </p>
              
              <h3>Video Contents</h3>
              <ul>
                <li><strong>Introduction (0:00-1:15)</strong>: Overview of the research project and goals</li>
                <li><strong>Survey Methodology (1:16-3:05)</strong>: Explanation of how we designed the survey and interview questions</li>
                <li><strong>On-Campus Interviews (3:06-5:42)</strong>: Recording of interviews with randomly selected students</li>
                <li><strong>Data Analysis (5:43-7:30)</strong>: Demonstration of how we processed and analyzed the collected data</li>
                <li><strong>Key Findings (7:31-8:24)</strong>: Summary of the most important insights from the student data collection</li>
              </ul>
              
              <h3>Key Findings</h3>
              <p>
                The video highlights several important findings from our student data collection:
              </p>
              <ul>
                <li>72% of students expressed concern about the environmental impact of transportation</li>
                <li>Only 43% could accurately describe the main environmental differences between EVs and ICE vehicles</li>
                <li>84% believed EVs were "better for the environment" but struggled to explain specifically why</li>
                <li>64% cited cost as the primary barrier to considering an EV purchase</li>
                <li>Students who had taken environmental science courses demonstrated significantly more accurate knowledge</li>
              </ul>
              
              <p>
                These findings underscore the need for better environmental education related to transportation choices, particularly as these students will be making vehicle purchasing decisions in the near future.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button>
                <Download size={16} className="mr-2" />
                Download Video
              </Button>
              <Button variant="outline">
                View Full Survey Data
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Related Content</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-md p-4 border border-gray-100 hover:border-green-200 transition-colors">
                  <h4 className="font-medium mb-1">Research Summary</h4>
                  <p className="text-sm text-gray-600 mb-3">Review our comprehensive analysis of EVs vs ICEs environmental impact.</p>
                  <Button variant="secondary" size="sm" to="/research">View Research</Button>
                </div>
                
                <div className="bg-white rounded-md p-4 border border-gray-100 hover:border-green-200 transition-colors">
                  <h4 className="font-medium mb-1">Data Collection Methodology</h4>
                  <p className="text-sm text-gray-600 mb-3">Learn more about our approach to gathering environmental impact data.</p>
                  <Button variant="secondary" size="sm" to="/data">View Methodology</Button>
                </div>
                
                <div className="bg-white rounded-md p-4 border border-gray-100 hover:border-green-200 transition-colors">
                  <h4 className="font-medium mb-1">Interactive Quiz</h4>
                  <p className="text-sm text-gray-600 mb-3">Test your knowledge about EVs and ICEs environmental impact.</p>
                  <Button variant="secondary" size="sm" to="/quiz">Take Quiz</Button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 my-6 pt-6">
                <h4 className="font-medium mb-3">Video Chapters</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex text-sm hover:text-green-600 transition-colors">
                      <span className="text-gray-500 mr-2">0:00</span>
                      <span className="text-gray-800">Introduction</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex text-sm hover:text-green-600 transition-colors">
                      <span className="text-gray-500 mr-2">1:16</span>
                      <span className="text-gray-800">Survey Methodology</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex text-sm hover:text-green-600 transition-colors">
                      <span className="text-gray-500 mr-2">3:06</span>
                      <span className="text-gray-800">On-Campus Interviews</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex text-sm hover:text-green-600 transition-colors">
                      <span className="text-gray-500 mr-2">5:43</span>
                      <span className="text-gray-800">Data Analysis</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex text-sm hover:text-green-600 transition-colors">
                      <span className="text-gray-500 mr-2">7:31</span>
                      <span className="text-gray-800">Key Findings</span>
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
          title="Additional Videos"
          subtitle="Explore more video content related to our EV vs ICE environmental research."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <Video size={32} className="text-white opacity-50" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Laboratory Testing Process</h3>
              <p className="text-gray-600 text-sm mb-4">Watch our team conduct emissions testing on different vehicle types.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Duration: 6:15</span>
                <Button variant="secondary" size="sm">Watch Video</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <Video size={32} className="text-white opacity-50" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Battery Recycling Demonstration</h3>
              <p className="text-gray-600 text-sm mb-4">See how lithium-ion batteries can be recycled to recover valuable materials.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Duration: 7:42</span>
                <Button variant="secondary" size="sm">Watch Video</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <Video size={32} className="text-white opacity-50" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Expert Interview Series</h3>
              <p className="text-gray-600 text-sm mb-4">Interviews with environmental scientists and automotive engineers.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Duration: 12:38</span>
                <Button variant="secondary" size="sm">Watch Video</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section>
        <div className="bg-green-50 p-8 rounded-lg border border-green-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get Involved in Our Research</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're always looking for participants to help with our ongoing research into environmental impacts of transportation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Participate in Our Surveys</h3>
              <p className="text-gray-600 mb-4">
                Share your knowledge and opinions about electric and conventional vehicles. Your input helps us understand public perception and knowledge gaps.
              </p>
              <Button variant="outline">
                Take Our Survey
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Volunteer for Research Projects</h3>
              <p className="text-gray-600 mb-4">
                Join our team as a volunteer research assistant. Help with data collection, analysis, and development of educational materials.
              </p>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default VideoPage;