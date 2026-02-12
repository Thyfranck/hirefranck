import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ExecutiveSummaryProps {
  isDark: boolean;
}

export function ExecutiveSummary({ isDark }: ExecutiveSummaryProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="executive-summary"
      className={`py-20 md:py-32 ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto p-8 md:p-10 rounded-2xl ${
            isDark
              ? 'bg-gradient-to-br from-accent-500/10 to-accent-600/5 border border-accent-500/20'
              : 'bg-gradient-to-br from-accent-50 to-accent-100/50 border border-accent-200'
          } transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-6">
            <h2
              className={`section-heading mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Executive Summary
            </h2>
            <p
              className={`text-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              AI builder shipping practical tools for real-world problems
            </p>
          </div>

          <div>
            <p
              className={`text-lg leading-relaxed mb-5 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I'm a technical product manager who bridges the gap between customer needs and scalable solutions. A creative problem solver with 8+ years of product management experience, I design and ship AI-powered products that drive measurable business outcomes.
            </p>

            <p
              className={`text-lg leading-relaxed mb-5 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              At FrontlineGig, I built conversational AI chatbots that became the primary user acquisition channel, created synthetic data pipelines for ML model training, and led partnerships with organizations like AWS and Dream.org. Previously at Trader Interactive, I transformed mobile apps from 1.5 to 4+ star ratings and grew monthly active users from 110K to 150K+ through data-driven redesigns and technical problem-solving.
            </p>

            <p
              className={`text-lg leading-relaxed mb-5 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I specialize in rapid prototyping using AI-assisted development tools (Claude, Cursor, Lovable), no-code automation (Make.com, Voiceflow), and system integration. Whether architecting solutions, conducting customer discovery, or shipping functional demos in days, I combine technical depth with business pragmatism.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              My approach: validate fast, solve real problems, and deliver measurable impact. I thrive at the intersection of product strategy, technical implementation, and customer success—making me equally suited for Solutions Architect, Product Management, Sales Engineering, or Technical Account Management roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
