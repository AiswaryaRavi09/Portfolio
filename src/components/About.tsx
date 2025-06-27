import React from 'react';
import { Code, Users, Briefcase, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '1+' },
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Users, label: 'Team Members Led', value: '5' },
    { icon: Award, label: 'Apps Published', value: '4' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate and detail-oriented <strong>Flutter Developer</strong> with over 
              <strong> 1 year of professional experience</strong> and a 6-month internship. 
              I specialize in building cross-platform mobile apps using Flutter, Firebase, and REST APIs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I've worked on ERP systems, KOT (Kitchen Order Ticket) apps, marketing tools, 
              and field sales automation solutions. I enjoy building user-friendly UIs, 
              writing clean code, and mentoring other developers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently open to Flutter development roles where I can grow and contribute meaningfully 
              to innovative projects that make a difference.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Flutter Expert
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Team Leader
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Mentor
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Clean Code Advocate
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;