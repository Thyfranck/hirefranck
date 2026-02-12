import { ExternalLink, Zap, Clock, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RapidPrototypingProps {
  isDark: boolean;
}

interface Project {
  id: string;
  name: string;
  tagline: string;
  url: string;
  description: string;
  features: string[];
  buildTime: string;
  buildTool: string;
  techStack: string[];
  whyItMatters: string;
  githubUrl?: string;
}

const rapidProjects: Project[] = [
  {
    id: 'flexpandas',
    name: 'Flexpandas',
    tagline: 'Automation & Design Agency Landing Page',
    url: 'https://www.flexpandas.com',
    description:
      'Modern agency website built to showcase automation consulting services. Demonstrates ability to quickly ship professional marketing sites with contemporary design patterns and clear value propositions.',
    features: [
      'Clean, conversion-focused design',
      'Mobile-responsive layout',
      'Fast load times and modern UX',
    ],
    buildTime: '2-3 days',
    buildTool: 'Cursor AI / Lovable',
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    whyItMatters:
      'Shows ability to understand business needs and rapidly deliver production-ready solutions - key for customer-facing technical roles.',
  },
  {
    id: 'hairlinepreview',
    name: 'HairlinePreview',
    tagline: 'AI Hair Transplant Visualization Tool',
    url: 'https://www.hairlinepreview.com',
    description:
      'AI-powered web application that allows users to visualize potential hair transplant results before surgery. Demonstrates ability to build functional AI-integrated products that solve real customer problems in the healthcare/beauty tech space.',
    features: [
      'AI image processing and visualization',
      'User-friendly interface for sensitive use case',
      'Real-world application of computer vision',
    ],
    buildTime: '1 week',
    buildTool: 'Cursor AI / Lovable',
    techStack: ['React', 'AI API', 'Image Processing', 'TypeScript'],
    whyItMatters:
      'Demonstrates ability to integrate AI capabilities into customer-facing products - directly relevant for AI Solutions Architect roles.',
  },
];

function ProjectCard({
  project,
  isDark,
  index,
}: {
  project: Project;
  isDark: boolean;
  index: number;
}) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
        isDark
          ? 'glass-card hover:shadow-2xl hover:shadow-accent-500/20'
          : 'glass-card-light hover:shadow-2xl'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                  isDark
                    ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                    : 'bg-accent-100 text-accent-700 border border-accent-200'
                }`}
              >
                <Zap size={12} />
                AI-Powered
              </span>
            </div>
            <h3
              className={`text-xl md:text-2xl font-bold mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`text-sm font-medium ${
                isDark ? 'text-accent-400' : 'text-accent-600'
              }`}
            >
              {project.tagline}
            </p>
          </div>
        </div>

        <p
          className={`mb-6 leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {project.description}
        </p>

        <div className="mb-6">
          <h4
            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isDark ? 'bg-accent-400' : 'bg-accent-500'
                  }`}
                />
                <span
                  className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
              isDark ? 'bg-white/5' : 'bg-gray-100'
            }`}
          >
            <Clock size={14} className={isDark ? 'text-accent-400' : 'text-accent-600'} />
            <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.buildTime}
            </span>
          </div>
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
              isDark ? 'bg-white/5' : 'bg-gray-100'
            }`}
          >
            <Code size={14} className={isDark ? 'text-accent-400' : 'text-accent-600'} />
            <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.buildTool}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h4
            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className={isDark ? 'tech-badge' : 'tech-badge-light'}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`mb-6 p-4 rounded-xl ${
            isDark
              ? 'bg-accent-500/10 border border-accent-500/20'
              : 'bg-accent-50 border border-accent-200'
          }`}
        >
          <p
            className={`text-sm font-medium leading-relaxed ${
              isDark ? 'text-accent-200' : 'text-accent-800'
            }`}
          >
            <span className="font-bold">Why This Matters:</span> {project.whyItMatters}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
              isDark
                ? 'bg-accent-500 hover:bg-accent-600 text-white'
                : 'bg-accent-600 hover:bg-accent-700 text-white'
            }`}
          >
            Visit Live Site
            <ExternalLink size={16} />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              View Code
              <Code size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function RapidPrototyping({ isDark }: RapidPrototypingProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="rapid-prototyping"
      className={`py-20 md:py-32 ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`section-heading ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Built with AI: Shipping Real Products Fast
          </h2>
          <p
            className={`max-w-3xl mx-auto text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Using vibe coding tools (Cursor, Lovable, Replit, Bolt) to go from idea to live
            product in days, not months. These are functional products, not mockups.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {rapidProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} index={index} />
          ))}
        </div>

        <div
          className={`max-w-4xl mx-auto p-8 md:p-10 rounded-2xl ${
            isDark
              ? 'bg-gradient-to-br from-accent-500/10 to-accent-600/5 border border-accent-500/20'
              : 'bg-gradient-to-br from-accent-50 to-accent-100/50 border border-accent-200'
          } transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`p-3 rounded-xl ${
                isDark ? 'bg-accent-500/20' : 'bg-accent-200'
              }`}
            >
              <Zap size={24} className={isDark ? 'text-accent-300' : 'text-accent-700'} />
            </div>
            <div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                My Rapid Prototyping Approach
              </h3>
            </div>
          </div>
          <p
            className={`mb-6 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            I use AI-assisted development tools (Cursor, Lovable, Claude, ChatGPT) to
            dramatically accelerate the build-test-iterate cycle. This allows me to:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Validate product ideas in days, not months',
              'Create working demos for stakeholder buy-in',
              'Test market fit before significant investment',
              'Ship functional MVPs that customers can actually use',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className={`mt-1.5 text-lg ${
                    isDark ? 'text-accent-400' : 'text-accent-600'
                  }`}
                >
                  ✓
                </span>
                <span
                  className={`font-medium ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p
            className={`text-lg font-bold ${
              isDark ? 'text-accent-300' : 'text-accent-700'
            }`}
          >
            This is the future of product development - and I'm already doing it in
            production.
          </p>
        </div>
      </div>
    </section>
  );
}
