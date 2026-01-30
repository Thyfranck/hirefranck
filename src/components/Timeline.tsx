import { Briefcase } from 'lucide-react';
import { timeline } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TimelineProps {
  isDark: boolean;
}

export function Timeline({ isDark }: TimelineProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="timeline"
      className={`py-20 md:py-32 ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`section-heading ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Career Timeline
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A decade of building products and leading technical initiatives
          </p>
        </div>

        <div
          ref={ref}
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px ${
              isDark ? 'bg-white/20' : 'bg-gray-300'
            }`}
          />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`hidden md:block flex-1 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-6 rounded-2xl ${
                      isDark ? 'glass-card' : 'glass-card-light'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {item.current && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                      <span
                        className={`text-sm font-mono ${
                          isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.role}
                    </h3>
                    <p
                      className={`font-medium mb-4 ${
                        isDark ? 'text-accent-400' : 'text-accent-600'
                      }`}
                    >
                      {item.company}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      item.current
                        ? 'bg-accent-500 border-accent-500/30'
                        : isDark
                        ? 'bg-dark-700 border-white/30'
                        : 'bg-white border-gray-300'
                    }`}
                  />
                </div>

                <div className="flex-1 md:hidden pl-12">
                  <div
                    className={`p-6 rounded-2xl ${
                      isDark ? 'glass-card' : 'glass-card-light'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      {item.current && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                      <span
                        className={`text-sm font-mono ${
                          isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.role}
                    </h3>
                    <p
                      className={`font-medium mb-4 ${
                        isDark ? 'text-accent-400' : 'text-accent-600'
                      }`}
                    >
                      {item.company}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
