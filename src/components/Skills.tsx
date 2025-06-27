import React from 'react';
import { Smartphone, Database, Code, Globe, Wrench, Palette, TestTube, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['Flutter', 'Dart Programming', 'Cross-platform Apps', 'Mobile UI/UX']
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Firebase', 'REST API Integration', 'Hive Local DB', 'Firestore']
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Dart', 'HTML/CSS', 'C Programming', 'MVC Architecture']
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'PWA']
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['Git & Version Control', 'Postman', 'Google Play Store', 'App Store']
    },
    {
      icon: Palette,
      title: 'State Management',
      skills: ['GetX', 'Provider', 'Bloc Pattern', 'State Management']
    },
    {
      icon: TestTube,
      title: 'Testing & Debug',
      skills: ['Flutter Testing', 'API Testing', 'Debugging', 'Performance Optimization']
    },
    {
      icon: GitBranch,
      title: 'Development Practices',
      skills: ['Clean Code', 'Code Reviews', 'Team Leadership', 'Agile Methodology']
    }
  ];

  const coreSkills = [
    { name: 'Flutter', level: 95 },
    { name: 'Dart', level: 90 },
    { name: 'Firebase', level: 85 },
    { name: 'REST APIs', level: 88 },
    { name: 'GetX', level: 82 },
    { name: 'Git', level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set developed through hands-on experience in mobile app development 
            and team leadership.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg mb-4">
                <category.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Skills Progress Bars */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coreSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;