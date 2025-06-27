import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Book, Languages } from 'lucide-react';

const Education = () => {
  const languages = [
    { name: 'English', level: 'Fluent', proficiency: 90 },
    { name: 'Malayalam', level: 'Native', proficiency: 100 },
    { name: 'Hindi', level: 'Conversational', proficiency: 70 },
    { name: 'Tamil', level: 'Basic', proficiency: 40 }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Languages</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My educational background and multilingual capabilities that enhance my professional versatility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-gray-900">Bachelor of Computer Science</h4>
                  <Award size={24} className="text-blue-600" />
                </div>
                
                <div className="text-lg font-semibold text-blue-600">
                  Thunchathezhuthachan College, Nemmara
                </div>
                
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Jun 2018 – Sep 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Kerala, India</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    Key Coursework
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Object-Oriented Programming',
                      'Database Management Systems',
                      'Software Engineering',
                      'Computer Networks',
                      'Web Technologies'
                    ].map((course, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Computer Science
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      Programming
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Software Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Languages size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>

            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{language.name}</h4>
                      <span className="text-sm text-gray-600">{language.level}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-700">{language.proficiency}%</div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${
                        language.proficiency === 100 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                        language.proficiency >= 80 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                        language.proficiency >= 60 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                        'bg-gradient-to-r from-orange-400 to-orange-600'
                      }`}
                      style={{ width: `${language.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Language Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Communication Advantages</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Effective client communication across regions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Cultural understanding for diverse teams</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Enhanced documentation and presentation skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;