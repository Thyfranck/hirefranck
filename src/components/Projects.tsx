import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsProps {
  isDark: boolean;
}

function ProjectCard({
  project,
  isDark,
  index,
}: {
  project: (typeof projects)[0];
  isDark: boolean;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        isDark
          ? 'glass-card hover:shadow-xl hover:shadow-accent-500/10'
          : 'glass-card-light hover:shadow-xl'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p
              className={`text-sm font-medium mb-1 ${
                isDark ? 'text-accent-400' : 'text-accent-600'
              }`}
            >
              {project.company}
            </p>
            <h3
              className={`text-xl md:text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
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
            className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Key Impact
          </h4>
          <ul className="space-y-2">
            {project.impacts.map((impact, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isDark ? 'bg-accent-400' : 'bg-accent-500'
                  }`}
                />
                <span
                  className={`font-medium ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {impact}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {project.note && (
          <div
            className={`mb-6 p-4 rounded-xl ${
              isDark ? 'bg-accent-500/10 border border-accent-500/20' : 'bg-accent-50 border border-accent-200'
            }`}
          >
            <p
              className={`text-sm font-medium ${
                isDark ? 'text-accent-300' : 'text-accent-700'
              }`}
            >
              {project.note}
            </p>
          </div>
        )}

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`pt-6 border-t ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <h4
              className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={isDark ? 'tech-badge' : 'tech-badge-light'}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark
                ? 'text-accent-400 hover:text-accent-300'
                : 'text-accent-600 hover:text-accent-500'
            }`}
          >
            {isExpanded ? 'Show Less' : 'View Details'}
            <ExternalLink size={14} />
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? 'text-accent-400 hover:text-accent-300'
                  : 'text-accent-600 hover:text-accent-500'
              }`}
            >
              Visit Live Site
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects({ isDark }: ProjectsProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="projects"
      className={`py-20 md:py-32 ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`section-heading ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Real-world solutions with measurable business impact
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
