import React from 'react';
import { Calendar, MapPin, Briefcase, Users, Rocket, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'Finisso Technologies',
      location: 'Kochi, India',
      period: 'Aug 2023 – Present',
      type: 'Full-time',
      description: 'Leading Flutter development projects and mentoring junior developers while building scalable mobile applications.',
      achievements: [
        'Built scalable apps in ERP, Van Sale, and Marketing domains',
        'Led a team of Flutter interns and conducted code reviews',
        'Managed project timelines and improved team productivity by 30%',
        'Integrated REST APIs, Firebase Auth & Push Notifications',
        'Successfully deployed 4+ apps to Google Play Store and Apple App Store',
        'Implemented clean architecture patterns and best practices'
      ],
      skills: ['Flutter', 'Firebase', 'Team Leadership', 'REST APIs', 'GetX', 'App Store Deployment']
    },
    {
      title: 'Flutter Developer Intern',
      company: 'Finisso Technologies',
      location: 'Bangalore, India',
      period: 'Nov 2022 – Jul 2023',
      type: 'Internship',
      description: 'Gained hands-on experience in Flutter development, Firebase integration, and mobile app deployment.',
      achievements: [
        'Integrated Firebase features into live production apps',
        'Implemented phone authentication and user management',
        'Worked on push notifications and real-time data sync',
        'Connected mobile apps with backend APIs',
        'Collaborated with senior developers on code optimization',
        'Participated in app testing and bug fixing processes'
      ],
      skills: ['Flutter', 'Firebase Auth', 'Push Notifications', 'API Integration', 'Debugging']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey in Flutter development, from intern to team leader, 
            building production-ready mobile applications.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 z-0"></div>
              )}
              
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-white" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Job Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-700">{exp.description}</p>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Rocket size={18} className="text-blue-600" />
                      Key Achievements
                    </h4>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">1.5+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-700 font-medium">Team Members Led</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">4+</div>
            <div className="text-gray-700 font-medium">Apps Published</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;