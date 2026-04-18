import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, Award, Menu, X } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fullText = "Madavali Sneha";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [darkMode]);

  // Typing effect animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150); // Adjust typing speed here (milliseconds)
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { category: 'Languages', items: ['Java', 'Python', 'JavaScript'] },
    { category: 'Mobile Development', items: ['React Native', 'Expo'] },
    { category: 'Web & Database', items: ['HTML5', 'CSS3', 'SQL'] },
    { category: 'Core Concepts', items: ['OOP', 'Data Structures', 'CRUD Operations', 'REST API', 'Deep Learning (CNNs)'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] }
  ];

  const projects = [
    {
      title: 'Smart Task Mobile Application',
      description: 'Developed a full-featured task management app with CRUD functionality using AsyncStorage and React Hooks. Designed a user-friendly interface to enhance productivity and task organization.',
      technologies: ['React Native', 'AsyncStorage', 'React Hooks'],
      github: 'https://github.com/snehasneha1050-spec/Smart-Tasks-App'
    },
    {
      title: 'Real-Time Visual Object Recognition',
      description: 'Engineered a deep learning framework using CNNs for high-accuracy object detection in live video feeds. Implemented automated feature extraction to balance processing speed and detection precision for IoT applications.',
      technologies: ['Python', 'Deep Learning', 'CNNs', 'Computer Vision'],
      github: 'https://github.com/snehasneha1050-spec'
    },
    {
      title: 'Weather App',
      description: 'A weather application providing real-time weather information and forecasts.',
      technologies: ['JavaScript', 'API Integration'],
      github: 'https://github.com/snehasneha1050-spec/Weather-App'
    }
  ];

  const experience = [
    {
      company: 'Tekinspy Software Services',
      position: 'React-Native Developer Intern',
      duration: 'January - Ongoing',
      description: [
        'Leading the development of the "Smart Task" mobile application using React Native',
        'Integrating local storage for task persistence and optimizing application performance'
      ]
    },
    {
      company: 'InternsVeda',
      position: 'Web Development Intern',
      duration: 'May 2025 - June 2025',
      description: [
        'Developed responsive web pages using HTML5 and CSS3',
        'Ensuring accessibility and mobile responsiveness'
      ]
    },
    {
      company: 'TeknoSpire',
      position: 'Core Java Intern',
      duration: '1st June 2025 - 30th June 2025',
      description: [
        'Developed modular Java programs utilizing core OOP principles',
        'Implemented standard data structures'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech - Computer Science Engineering',
      institution: 'Chadalawada Ramanamma Engineering College, Tirupati',
      grade: '86%'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'School',
      grade: '80%'
    },
    {
      degree: 'SSC (10th Standard)',
      institution: 'School',
      grade: '100%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-800 dark:selection:text-blue-100 relative overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-[40rem] md:h-[40rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] right-[-10%] w-64 h-64 md:w-[35rem] md:h-[35rem] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 md:w-[45rem] md:h-[45rem] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide cursor-pointer hover:opacity-80 transition-opacity">Sneha.</h1>
          <div className="flex items-center space-x-4 md:space-x-8 text-sm md:text-base font-medium">
            <a href="#about" className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible py-4' : 'opacity-0 invisible h-0 py-0 overflow-hidden'}`}>
          <div className="flex flex-col items-center space-y-4 font-medium">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative w-40 h-40 mx-auto mb-10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/profile.jpg" 
              alt="Sneha Madavali" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500 bg-white dark:bg-gray-800"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Sneha+Madavali&background=3b82f6&color=fff&size=200&bold=true"; }}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight min-h-[5rem] sm:min-h-[4rem] md:min-h-[5.5rem]">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{typedText}</span>
            <span className="text-purple-600 animate-pulse ml-1">|</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Recent Computer Science Engineering Graduate with hands-on experience in mobile application development using React Native and Expo. Skilled in Java, Python, and SQL, with a focus on building scalable applications and implementing Deep Learning models for real-world computer vision solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://github.com/snehasneha1050-spec" target="_blank" rel="noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center px-7 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              <Github className="inline mr-2" size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/madavali-sneha-97563726a" target="_blank" rel="noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              <Linkedin className="inline mr-2" size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate software developer with a strong foundation in computer science and engineering. My journey in technology has been driven by curiosity and the desire to create solutions that make a difference.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Through my internships and projects, I've gained valuable experience in mobile app development, web technologies, and deep learning. I'm always eager to learn new technologies and tackle challenging problems.
            </p>
            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 font-medium">
              <MapPin size={22} className="text-blue-600 dark:text-blue-400" />
              <span>Punganur, Andhra Pradesh</span>
            </div>
          </div>
          <div className="space-y-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <span className="text-lg font-medium">Full-Stack Developer</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <span className="text-lg font-medium">3+ Internships Completed</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <span className="text-lg font-medium">B.Tech CSE Graduate</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                <Award className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <span className="text-lg font-medium">Problem Solver & Team Player</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border-y border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 group">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 hover:-translate-y-2 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800/50">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-all transform group-hover:translate-x-1">
                  <Github size={20} className="mr-2" />
                  View on GitHub
                  <ExternalLink size={16} className="ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border-y border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{exp.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="inline-block mt-3 md:mt-0 px-4 py-1.5 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-700">{exp.duration}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Education</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 text-center hover:-translate-y-2 group flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-md font-medium">{edu.institution}</p>
              <div className="mt-auto"><span className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 font-bold rounded-2xl border border-blue-100 dark:border-blue-800/30 shadow-inner group-hover:scale-105 transition-transform">{edu.grade}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Get In Touch</h2>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/40 dark:border-gray-700/50 max-w-2xl mx-auto text-center transform hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <p className="text-xl mb-10 text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={28} />
                <a href="mailto:snehasneha1050@gmail.com" className="text-base sm:text-lg md:text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                  snehasneha1050@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Phone className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={28} />
                <span className="text-base sm:text-lg md:text-xl font-medium">+91-9014045023</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={28} />
                <span className="text-base sm:text-lg md:text-xl font-medium">Punganur, Andhra Pradesh</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
              <a href="https://github.com/snehasneha1050-spec" target="_blank" rel="noreferrer" className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-100 dark:border-gray-800">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/madavali-sneha-97563726a" target="_blank" rel="noreferrer" className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-100 dark:border-gray-800">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md text-center border-t border-gray-200/50 dark:border-gray-800/50">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          © 2026 Sneha Madavali. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;