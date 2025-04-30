import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { LineChart, BarChart, Database, Table } from 'lucide-react';

const DataCollection: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Collection</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Exploring our methodology for gathering and analyzing environmental impact data on EVs and ICEs.
          </p>
        </div>
      </div>
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle 
              title="Our Methodology"
              subtitle="A comprehensive approach to gathering reliable data on environmental impacts."
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                Our data collection process was designed to gather accurate, comprehensive information about the environmental impact of both electric vehicles (EVs) and internal combustion engine (ICE) vehicles across their entire lifecycles.
              </p>
              
              <h3>Primary Data Collection</h3>
              <p>
                We collected primary data through several methods:
              </p>
              <ul>
                <li>Vehicle emissions testing in controlled environments</li>
                <li>Energy consumption measurements during various driving conditions</li>
                <li>Student surveys on transportation preferences and environmental awareness</li>
                <li>Manufacturer interviews regarding production processes and materials</li>
              </ul>
              
              <h3>Secondary Research</h3>
              <p>
                Our research also incorporated data from reliable secondary sources:
              </p>
              <ul>
                <li>Peer-reviewed academic studies on vehicle lifecycle analysis</li>
                <li>Government environmental impact reports</li>
                <li>Industry white papers on manufacturing processes</li>
                <li>Energy grid composition data from utility companies</li>
              </ul>
              
              <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
                <h4 className="text-xl font-semibold text-green-800 mb-2">Data Validation Process</h4>
                <p className="text-gray-700 mb-0">
                  All collected data underwent rigorous validation, including cross-referencing with multiple sources, statistical analysis for outliers, and expert review to ensure accuracy and reliability.
                </p>
              </div>
              
              <h3>Analysis Framework</h3>
              <p>
                Our analysis framework considered multiple environmental factors:
              </p>
              <ul>
                <li>Carbon emissions (production, operation, end-of-life)</li>
                <li>Resource consumption (materials, energy, water)</li>
                <li>Pollution (air, water, soil)</li>
                <li>Waste generation and management</li>
              </ul>
              
              <p>
                By analyzing these factors across different vehicle types, driving patterns, and energy sources, we were able to develop a comprehensive understanding of the comparative environmental impacts of EVs and ICEs.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Data Highlights</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Sample Size</h4>
                    <p className="text-sm text-gray-600">200+ vehicles tested, 500+ student surveys collected</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Table size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Data Points</h4>
                    <p className="text-sm text-gray-600">Over 10,000 individual measurements across all metrics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <LineChart size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Time Period</h4>
                    <p className="text-sm text-gray-600">Data collected over 18 months (2023-2025)</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-4 pt-4">
                  <h4 className="text-base font-medium mb-2">Data Collection Tools</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Portable emissions analyzers</li>
                    <li>Energy consumption monitors</li>
                    <li>Digital survey platform</li>
                    <li>Laboratory testing equipment</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" size="sm" className="w-full">
                  Download Methodology Document
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="light">
        <SectionTitle 
          title="Key Data Visualizations"
          subtitle="Visual representation of our findings comparing EVs and ICEs."
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <BarChart size={24} className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Emissions Comparison</h3>
            </div>
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Emissions Chart</span>
            </div>
            <p className="mt-4 text-gray-600">
              Comparison of CO₂ emissions per mile for EVs (with different grid mixes) and ICE vehicles.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <LineChart size={24} className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Energy Efficiency</h3>
            </div>
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Efficiency Chart</span>
            </div>
            <p className="mt-4 text-gray-600">
              Energy efficiency comparison showing how much of the input energy is converted to useful work.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Database size={24} className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Resource Consumption</h3>
            </div>
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Resources Chart</span>
            </div>
            <p className="mt-4 text-gray-600">
              Visualization of raw materials required for EV and ICE vehicle production.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Table size={24} className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Student Survey Results</h3>
            </div>
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Survey Results Chart</span>
            </div>
            <p className="mt-4 text-gray-600">
              Student awareness and opinions on environmental impacts of different vehicle types.
            </p>
          </div>
        </div>
      </Section>
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle 
              title="Our Findings vs. Published Research"
              subtitle="How our data compares with existing scientific literature."
            />
            <p className="text-gray-600 mb-6">
              Our research largely confirmed the findings of previous academic studies, with some notable differences in specific areas. We found that the emissions advantage of EVs was greater than previously reported when using renewable energy sources, while the manufacturing emissions gap was slightly smaller due to recent improvements in battery production efficiency.
            </p>
            <Button variant="outline">
              View Full Comparative Analysis
            </Button>
          </div>
          <div className="order-1 md:order-2 bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-gray-500">Comparison Chart</span>
          </div>
        </div>
      </Section>
      
      <Section background="green">
        <div className="text-center">
          <SectionTitle 
            title="Next Steps in Our Research"
            subtitle="Our ongoing data collection efforts to further our understanding."
            center
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-8">
              We are continuing to collect data on newer vehicle models and expanding our analysis to include additional environmental factors such as water consumption, land use changes, and biodiversity impacts associated with resource extraction.
            </p>
            <Button>
              Participate in Our Research
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default DataCollection;