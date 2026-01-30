import { useState } from 'react';
import { capabilities } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CapabilitiesProps {
  isDark: boolean;
}

const tabs = [
  { id: 'product', label: 'Product Management' },
  { id: 'solutions', label: 'Solutions & Customer Success' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'technical', label: 'Technical Skills' },
  { id: 'domains', label: 'Domain Expertise' },
];

export function Capabilities({ isDark }: CapabilitiesProps) {
  const [activeTab, setActiveTab] = useState('product');
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const renderContent = () => {
    switch (activeTab) {
      case 'product':
        return (
          <ul className="space-y-3">
            {capabilities.productManagement.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-accent-400' : 'bg-accent-500'
                  }`}
                />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );
      case 'solutions':
        return (
          <ul className="space-y-3">
            {capabilities.solutionsCustomerSuccess.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-accent-400' : 'bg-accent-500'
                  }`}
                />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );
      case 'ai':
        return (
          <ul className="space-y-3">
            {capabilities.aiAutomation.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-accent-400' : 'bg-accent-500'
                  }`}
                />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );
      case 'technical':
        return (
          <div className="space-y-4">
            {capabilities.technical.map((item, i) => (
              <div key={i}>
                <span
                  className={`text-sm font-semibold ${
                    isDark ? 'text-accent-400' : 'text-accent-600'
                  }`}
                >
                  {item.category}:
                </span>
                <span
                  className={`ml-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item.items}
                </span>
              </div>
            ))}
          </div>
        );
      case 'domains':
        return (
          <ul className="space-y-3">
            {capabilities.domains.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-accent-400' : 'bg-accent-500'
                  }`}
                />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="capabilities"
      className={`py-20 md:py-32 ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`section-heading ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technical Capabilities
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A blend of product thinking and technical execution
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-accent-500 text-white'
                    : isDark
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className={`p-8 rounded-2xl ${
              isDark ? 'glass-card' : 'glass-card-light'
            }`}
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}
