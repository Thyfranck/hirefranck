import {
  Award,
  Smartphone,
  Bot,
  DollarSign,
  TrendingUp,
  Zap,
  Users,
  Target,
  Handshake,
  MessageCircle,
} from 'lucide-react';
import { credentials } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RecognitionProps {
  isDark: boolean;
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Award,
  Smartphone,
  Bot,
  DollarSign,
  TrendingUp,
  Zap,
  Users,
  Target,
  Handshake,
  MessageCircle,
};

export function Recognition({ isDark }: RecognitionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={`py-20 md:py-32 ${isDark ? 'bg-dark-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`section-heading ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Recognition & Credentials
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Measurable achievements that demonstrate impact
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {credentials.map((credential, index) => {
            const IconComponent = iconMap[credential.icon];
            return (
              <div
                key={credential.id}
                className={`group p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'glass-card hover:bg-white/10'
                    : 'glass-card-light hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isDark
                      ? 'bg-accent-500/20 text-accent-400 group-hover:bg-accent-500/30'
                      : 'bg-accent-500/10 text-accent-600 group-hover:bg-accent-500/20'
                  }`}
                >
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3
                  className={`font-bold mb-1 text-sm md:text-base ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {credential.title}
                </h3>
                <p
                  className={`text-xs md:text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {credential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
