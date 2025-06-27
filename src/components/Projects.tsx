import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Code, Database, Wifi } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Finisso ERP App',
      description: 'A comprehensive ERP solution with modules for Vouchers, Masters, and Reports. Features inventory tracking, sales management, and purchase tracking for business operations.',
      image: 'https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Database,
      technologies: ['Flutter', 'GetX', 'REST API', 'Git', 'Postman', 'MVC Pattern'],
      features: [
        'Inventory management system',
        'Sales and purchase tracking',
        'Report generation and analytics',
        'Multi-user access control',
        'Real-time data synchronization',
        'Role-based permissions',
        'Advanced search and filtering',
        'Export functionality for reports'
      ],
      category: 'ERP System'
    },
    {
      title: 'KOT (Kitchen Order Ticket) App',
      description: 'Prints formatted tickets to kitchen printers via Wi-Fi using ESC/POS protocol. Integrated with POS & ERP systems for seamless restaurant operations.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Wifi,
      technologies: ['Flutter', 'GetX', 'REST API', 'esc_pos_printer', 'Wi-Fi Printing'],
      features: [
        'ESC/POS thermal printing',
        'Wi-Fi printer connectivity',
        'Order management integration',
        'Real-time kitchen updates',
        'Custom receipt formatting',
        'Printer status monitoring',
        'Queue management system',
        'Multi-printer support'
      ],
      category: 'Restaurant Tech'
    },
    {
      title: 'Marketing App',
      description: 'Field assistants collect and analyze customer feedback efficiently. Simplifies data tracking, team reporting, and customer relationship management.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Smartphone,
      technologies: ['Flutter', 'GetX', 'Postman', 'Firebase', 'Analytics'],
      features: [
        'Customer feedback collection',
        'Data analytics dashboard',
        'Team performance tracking',
        'Offline data collection',
        'Report generation',
        'GPS location tracking',
        'Photo and document upload',
        'Real-time notifications'
      ],
      category: 'Field Marketing'
    },
    {
      title: 'Van Sale App',
      description: 'Supports sales operations from mobile vans with inventory management, customer handling, and billing. Works offline and syncs data when connected.',
      image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Code,
      technologies: ['Flutter', 'GetX', 'REST API', 'Git', 'Offline Storage', 'Sync'],
      features: [
        'Mobile inventory management',
        'Customer billing system',
        'Offline functionality',
        'Data synchronization',
        'Route optimization',
        'Payment processing',
        'Customer credit management',
        'Sales analytics and reporting'
      ],
      category: 'Mobile Sales'
    }
  ];

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of mobile applications I've built, from ERP systems to restaurant management tools, 
            demonstrating my expertise in Flutter development and problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <project.icon size={24} className="text-blue-600" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features Preview */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-blue-600 text-sm font-medium">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={() => handleViewDetails(project)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Impact & Achievements</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-gray-700 font-medium">Apps Published</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Users Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
                <div className="text-gray-700 font-medium">Avg. Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;