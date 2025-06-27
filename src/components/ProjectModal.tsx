import React from 'react';
import { X, ExternalLink, Github, Calendar, Users, Star, CheckCircle } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    category: string;
    detailedDescription?: string;
    challenges?: string[];
    solutions?: string[];
    impact?: string[];
    duration?: string;
    teamSize?: string;
    role?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const projectDetails = {
    'Finisso ERP App': {
      detailedDescription: 'A comprehensive Enterprise Resource Planning (ERP) solution designed to streamline business operations across multiple departments. The application features modules for Vouchers, Masters, and Reports, providing a complete business management ecosystem.',
      challenges: [
        'Complex data relationships between different business modules',
        'Real-time synchronization across multiple user sessions',
        'Handling large datasets efficiently on mobile devices',
        'Implementing role-based access control for different user types',
        'Ensuring data consistency across offline and online modes'
      ],
      solutions: [
        'Implemented efficient state management using GetX for reactive programming',
        'Used local caching with Hive database for offline functionality',
        'Created modular architecture with clean separation of concerns',
        'Implemented JWT-based authentication with role management',
        'Used pagination and lazy loading for large data sets'
      ],
      impact: [
        'Reduced manual paperwork by 80% for client businesses',
        'Improved data accuracy and reduced human errors',
        'Enabled real-time business insights through comprehensive reporting',
        'Streamlined inventory management processes',
        'Increased operational efficiency by 40%'
      ],
      duration: '6 months',
      teamSize: '4 developers',
      role: 'Lead Flutter Developer & Team Lead'
    },
    'KOT (Kitchen Order Ticket) App': {
      detailedDescription: 'A specialized restaurant management application that prints formatted tickets to kitchen printers via Wi-Fi using ESC/POS protocol. Seamlessly integrated with existing POS and ERP systems to automate kitchen operations.',
      challenges: [
        'Implementing ESC/POS thermal printing protocol in Flutter',
        'Ensuring reliable Wi-Fi connectivity with kitchen printers',
        'Real-time order synchronization between front-end and kitchen',
        'Handling printer errors and connection failures gracefully',
        'Custom receipt formatting for different printer models'
      ],
      solutions: [
        'Developed custom ESC/POS command implementation',
        'Created robust error handling and retry mechanisms',
        'Implemented real-time WebSocket connections for order updates',
        'Built printer discovery and auto-configuration features',
        'Created flexible template system for receipt customization'
      ],
      impact: [
        'Reduced order processing time by 60%',
        'Eliminated manual order transcription errors',
        'Improved kitchen workflow efficiency',
        'Enhanced customer satisfaction through faster service',
        'Reduced paper waste through optimized printing'
      ],
      duration: '3 months',
      teamSize: '2 developers',
      role: 'Senior Flutter Developer'
    },
    'Marketing App': {
      detailedDescription: 'A field marketing application designed for sales representatives to collect and analyze customer feedback efficiently. Features comprehensive data tracking, team reporting, and customer relationship management tools.',
      challenges: [
        'Offline data collection in areas with poor connectivity',
        'Complex form validations and data integrity checks',
        'Real-time analytics and reporting dashboard',
        'GPS tracking for field representative locations',
        'Bulk data synchronization when connectivity is restored'
      ],
      solutions: [
        'Implemented robust offline-first architecture',
        'Created intelligent data sync with conflict resolution',
        'Built interactive charts and analytics using custom widgets',
        'Integrated GPS tracking with location-based insights',
        'Developed efficient batch processing for data uploads'
      ],
      impact: [
        'Increased field productivity by 50%',
        'Improved data collection accuracy by 90%',
        'Reduced reporting time from days to hours',
        'Enhanced customer insights through better data analysis',
        'Streamlined field operations management'
      ],
      duration: '4 months',
      teamSize: '3 developers',
      role: 'Flutter Developer & UI/UX Designer'
    },
    'Van Sale App': {
      detailedDescription: 'A comprehensive mobile sales solution for van-based retail operations. Supports complete sales cycle from inventory management to customer billing, with robust offline capabilities and data synchronization.',
      challenges: [
        'Complex inventory tracking across multiple van routes',
        'Offline billing and payment processing',
        'Route optimization and GPS navigation integration',
        'Multi-currency and tax calculation support',
        'Real-time inventory updates across multiple devices'
      ],
      solutions: [
        'Built sophisticated offline database with SQLite',
        'Implemented intelligent sync algorithms for inventory updates',
        'Created dynamic pricing and discount calculation engine',
        'Integrated maps and route optimization features',
        'Developed comprehensive reporting and analytics module'
      ],
      impact: [
        'Increased sales efficiency by 45%',
        'Reduced inventory discrepancies by 85%',
        'Improved route planning and fuel efficiency',
        'Enhanced customer service through faster billing',
        'Provided real-time business insights to management'
      ],
      duration: '5 months',
      teamSize: '3 developers',
      role: 'Lead Flutter Developer'
    }
  };

  const details = projectDetails[project.title as keyof typeof projectDetails] || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mt-2">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  {details.detailedDescription || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">Duration: {details.duration || '3-6 months'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-green-600" />
                    <span className="text-sm text-gray-600">Team: {details.teamSize || '2-4 developers'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-purple-600" />
                    <span className="text-sm text-gray-600">Role: {details.role || 'Flutter Developer'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  <ExternalLink size={16} />
                  View Live Demo
                </button>
                <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  <Github size={16} />
                  View Source Code
                </button>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          {details.challenges && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenges</h3>
                <div className="space-y-2">
                  {details.challenges.map((challenge, index) => (
                    <div key={index} className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                      <p className="text-red-800 text-sm">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Solutions</h3>
                <div className="space-y-2">
                  {details.solutions?.map((solution, index) => (
                    <div key={index} className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                      <p className="text-green-800 text-sm">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Impact */}
          {details.impact && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Impact</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {details.impact.map((impact, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <Star size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;