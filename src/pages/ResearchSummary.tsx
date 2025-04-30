import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { BarChart2, Leaf, ChevronDown, Download } from 'lucide-react';

const ResearchSummary: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Summary</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A comprehensive overview of the environmental impact comparison between Electric Vehicles and Internal Combustion Engine vehicles.
          </p>
        </div>
      </div>
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle 
              title="Key Findings"
              subtitle="Our research has led to several important discoveries about the environmental impact of EVs compared to ICEs."
            />
            
            <div className="prose prose-lg max-w-none">
              <p>
                Electric vehicles (EVs) and internal combustion engine (ICE) vehicles have distinctly different environmental impacts across their lifecycles. Our research has analyzed these differences across multiple dimensions, from manufacturing to disposal.
              </p>
              
              <h3>Carbon Emissions</h3>
              <p>
                While EVs produce zero tailpipe emissions during operation, their overall carbon footprint depends significantly on the electricity source used for charging. In regions with clean energy grids, EVs show a clear advantage, with up to 70% lower lifetime emissions compared to ICE vehicles.
              </p>
              
              <h3>Manufacturing Impact</h3>
              <p>
                EV production typically requires more energy and resources upfront, particularly for battery manufacturing. Our analysis shows that EV production generates approximately 1.5x the emissions of comparable ICE vehicle production, primarily due to battery manufacturing processes.
              </p>
              
              <h3>Operational Efficiency</h3>
              <p>
                EVs convert about 77-86% of electrical energy to power at the wheels, while ICE vehicles convert only 12-30% of the energy stored in gasoline. This efficiency gap translates to significant energy savings over a vehicle's lifetime.
              </p>
              
              <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-100">
                <h4 className="text-xl font-semibold text-green-800 mb-2">Emissions Breakeven Point</h4>
                <p className="text-gray-700 mb-0">
                  Our research indicates that EVs typically reach a "breakeven point" with ICE vehicles after 6,000 to 16,000 miles of driving, depending on the electricity grid mix and vehicle models compared.
                </p>
              </div>
              
              <h3>Resource Consumption</h3>
              <p>
                Both vehicle types consume different resources. ICE vehicles rely heavily on petroleum products, while EVs require lithium, cobalt, and other metals for battery production. The environmental impact of resource extraction varies significantly by region and mining practices.
              </p>
              
              <h3>End-of-Life Considerations</h3>
              <p>
                Battery recycling remains a challenge for the EV industry, though technological advances are improving recovery rates of valuable materials. ICE vehicles have well-established recycling infrastructure but generate more waste fluids throughout their lifecycle.
              </p>
            </div>
            
            <div className="mt-8">
              <Button>
                <Download size={16} className="mr-2" />
                Download Full Research Paper
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Research Highlights</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <BarChart2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">CO₂ Reduction</h4>
                    <p className="text-sm text-gray-600">Up to 70% lower lifetime emissions with clean grid electricity</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Energy Efficiency</h4>
                    <p className="text-sm text-gray-600">EVs are 3-4x more efficient in converting energy to motion</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-4 pt-4">
                  <h4 className="text-base font-medium mb-2">Additional Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-green-600 hover:text-green-700 text-sm flex items-center">
                        <ChevronDown size={14} className="mr-1 transform -rotate-90" />
                        Comparative Lifecycle Analysis
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-green-600 hover:text-green-700 text-sm flex items-center">
                        <ChevronDown size={14} className="mr-1 transform -rotate-90" />
                        Battery Manufacturing Study
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-green-600 hover:text-green-700 text-sm flex items-center">
                        <ChevronDown size={14} className="mr-1 transform -rotate-90" />
                        Grid Energy Mix Analysis
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
          title="Environmental Impact Comparison"
          subtitle="Visual representation of key metrics comparing EVs and ICEs across their lifecycle."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Carbon Emissions by Vehicle Type</h3>
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Emissions Chart</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Comparison of lifetime CO₂ emissions between EVs and ICEs under different electricity grid scenarios.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Resource Consumption Comparison</h3>
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Resources Chart</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Visualization of different resources required for production and operation of EVs vs ICEs.
            </p>
          </div>
        </div>
      </Section>
      
      <Section>
        <div className="bg-green-50 p-8 rounded-lg border border-green-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Continuing Our Research</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team is constantly updating our findings as technology evolves and new data becomes available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Next Research Focus</h3>
              <p className="text-gray-600">Solid-state batteries and their potential environmental benefits</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Updated Timeline</h3>
              <p className="text-gray-600">New comparative data expected Q3 2025</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Get Involved</h3>
              <p className="text-gray-600">Contribute to our research through survey participation</p>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ResearchSummary;