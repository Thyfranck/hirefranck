import { ArrowDown, FileText, Linkedin, Cloud, Code, Brain, Figma, Database } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const techIcons = [
  { Icon: Cloud, label: 'AWS', delay: '0s' },
  { Icon: Code, label: 'Python', delay: '1s' },
  { Icon: Brain, label: 'AI', delay: '2s' },
  { Icon: Figma, label: 'Figma', delay: '0.5s' },
  { Icon: Database, label: 'Data', delay: '1.5s' },
];

export function Hero({ isDark }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow ${
            isDark ? 'bg-accent-500' : 'bg-accent-400'
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse-slow animation-delay-200 ${
            isDark ? 'bg-cyan-500' : 'bg-cyan-400'
          }`}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map(({ Icon, label, delay }, index) => (
          <div
            key={label}
            className={`absolute animate-float ${
              isDark ? 'text-white/10' : 'text-gray-900/10'
            }`}
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 18}%`,
              animationDelay: delay,
            }}
          >
            <Icon size={40} />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <p
            className={`text-sm md:text-base font-mono tracking-wider uppercase ${
              isDark ? 'text-accent-400' : 'text-accent-600'
            }`}
          >
            Franck Loic
          </p>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Product Manager{' '}
            <span className="gradient-text">x</span> Solutions Architect{' '}
            <span className="gradient-text">x</span> AI Implementer
          </h1>

          <p
            className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Bridging business problems and technical solutions. AWS certified.
            Building AI-powered products and guiding customers to success.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a href="#projects" className="btn-primary">
              View Work
              <ArrowDown size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className={isDark ? 'btn-secondary' : 'btn-secondary-light'}
            >
              <FileText size={18} />
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/franckloic"
              target="_blank"
              rel="noopener noreferrer"
              className={isDark ? 'btn-secondary' : 'btn-secondary-light'}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className={`flex flex-col items-center gap-2 transition-colors hover:text-accent-500 ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll
          </span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
