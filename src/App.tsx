import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { RapidPrototyping } from './components/RapidPrototyping';
import { Capabilities } from './components/Capabilities';
import { Timeline } from './components/Timeline';
import { Recognition } from './components/Recognition';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-dark-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero isDark={isDark} />
        <WhatIDo isDark={isDark} />
        <Projects isDark={isDark} />
        <RapidPrototyping isDark={isDark} />
        <Capabilities isDark={isDark} />
        <Timeline isDark={isDark} />
        <Recognition isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
