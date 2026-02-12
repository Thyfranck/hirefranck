import { useState } from 'react';
import { Mail, Linkedin, MapPin, Copy, Check, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactProps {
  isDark: boolean;
}

const lookingFor = [
  'Positions that blend technical problem-solving with customer engagement',
  'Senior Product Manager roles at innovative tech companies',
  'Sales Engineering roles at technical SaaS companies',
  'Technical Account Manager / Customer Success Architect positions',
  'Solutions Architect roles (especially AI/Automation focused)',
];

export function Contact({ isDark }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const email = 'job@hirefranck.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email');
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-32 ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`section-heading ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Let's Build Something
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg mb-12 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Open to Solutions Architect, Technical Account Management, Sales
            Engineering, and Senior PM roles where technical depth meets customer
            success.
          </p>

          <div
            className={`p-8 md:p-12 rounded-2xl mb-8 ${
              isDark ? 'glass-card' : 'glass-card-light'
            }`}
          >
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Briefcase
                  size={20}
                  className={isDark ? 'text-accent-400' : 'text-accent-600'}
                />
                <h3
                  className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  What I'm Looking For
                </h3>
              </div>
              <ul className="space-y-2 text-left max-w-xl mx-auto">
                {lookingFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        isDark ? 'bg-accent-400' : 'bg-accent-500'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`w-full h-px my-8 ${
                isDark ? 'bg-white/10' : 'bg-gray-200'
              }`}
            />

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  isDark ? 'bg-white/5' : 'bg-gray-100'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDark
                      ? 'bg-accent-500/20 text-accent-400'
                      : 'bg-accent-500/10 text-accent-600'
                  }`}
                >
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={`font-medium ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {email}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  isDark ? 'bg-white/5' : 'bg-gray-100'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDark
                      ? 'bg-accent-500/20 text-accent-400'
                      : 'bg-accent-500/10 text-accent-600'
                  }`}
                >
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    Location
                  </p>
                  <p
                    className={`font-medium ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    U.S., Remote, Europe
                  </p>
                </div>
              </div>
            </div>

            <p
              className={`text-sm mb-8 ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              Available for: Remote, hybrid, or relocation
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${email}`} className="btn-primary">
                <Mail size={18} />
                Send Email
              </a>

              <button
                onClick={handleCopyEmail}
                className={`${isDark ? 'btn-secondary' : 'btn-secondary-light'} relative`}
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Email
                  </>
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/franckt/"
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
      </div>
    </section>
  );
}
