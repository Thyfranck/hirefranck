import { Compass, Puzzle, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface WhatIDoProps {
  isDark: boolean;
}

const services = [
  {
    icon: Compass,
    title: 'Product Strategy',
    description:
      'Define product vision and roadmap aligned with business goals. Led products from 0 to 1 and scaled existing platforms to 150K+ users.',
  },
  {
    icon: Puzzle,
    title: 'Technical Solutions & Customer Success',
    description:
      'Design and implement technical architectures that solve customer problems. AWS Solutions Architect with hands-on experience building AI chatbots, automation pipelines, and system integrations. Led 100+ customer conversations and partnerships.',
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    description:
      'Leverage emerging AI tools for practical business impact. Built production chatbots (Voiceflow), generated synthetic training data (Claude), created no-code automation flows (Make.com).',
  },
];

export function WhatIDo({ isDark }: WhatIDoProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="about"
      className={`py-20 md:py-32 ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`section-heading ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            What I Do
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Bridging the gap between business needs and technical implementation
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'glass-card hover:bg-white/10'
                  : 'glass-card-light hover:shadow-xl'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  isDark
                    ? 'bg-accent-500/20 text-accent-400 group-hover:bg-accent-500/30'
                    : 'bg-accent-500/10 text-accent-600 group-hover:bg-accent-500/20'
                }`}
              >
                <service.icon size={28} />
              </div>
              <h3
                className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
