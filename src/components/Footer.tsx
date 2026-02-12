interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 border-t ${
        isDark
          ? 'bg-dark-900 border-white/10'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className={`text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            {currentYear} Franck Loic. Vibe coded with Cursor, Claude, and Gemini.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className={`text-sm transition-colors hover:text-accent-500 ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
