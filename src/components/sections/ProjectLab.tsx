import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import NeonButton from '../ui/NeonButton';
import TechTag from '../ui/TechTag';

interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 'studynotion',
    title: 'StudyNotion Platform',
    description: 'A full-stack e-learning platform with Razorpay integration and course management.',
    features: [
      'User authentication and authorization',
      'Course creation and management',
      'Payment gateway integration',
      'Progress tracking and analytics',
      'Video content streaming'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Cloudinary'],
    githubUrl: 'https://github.com/TanayP04/Study-Notion',
    liveUrl: 'https://studynotion-frontend.vercel.app/',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'medichat',
    title: 'Medi Chat Bot',
    description: 'An AI-powered healthcare chatbot for preliminary medical consultations.',
    features: [
      'Symptom analysis',
      'Medical recommendation system',
      'User-friendly chat interface',
      'Integration with medical databases',
      'Responsive design'
    ],
    technologies: ['Next.js','Tailwind CSS', 'API'],
    githubUrl: 'https://github.com/TanayP04/Aarogya',
    liveUrl: 'https://aarogya-lake.vercel.app/',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  
];

const ProjectLab: React.FC = () => {
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleProjectHover = (id: string) => {
    setActiveProject(id);
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Diagonal lines background */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `linear-gradient(45deg, ${theme === 'cyber' ? '#00f0ff' : '#00ff41'} 1px, transparent 1px)`,
          backgroundSize: '30px 30px' 
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-orbitron font-bold mb-2 ${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}`}>
              Simulation Pods
            </h2>
            <p className="text-gray-400">Project Deployment Records</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => handleProjectHover(project.id)}
                onMouseLeave={handleProjectLeave}
              >
                <div 
                  className={`
                    h-full cyber-card rounded-lg overflow-hidden transition-all duration-500
                    ${theme === 'cyber' ? 'border-neon-blue' : 'border-matrix-green'}
                    ${activeProject === project.id ? theme === 'cyber' ? 'shadow-neon-blue' : 'shadow-neon-green' : ''}
                  `}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-orbitron font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="mb-4 flex flex-wrap">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <TechTag 
                          key={tech} 
                          name={tech} 
                          color={
                            i % 4 === 0 ? 'blue' : 
                            i % 4 === 1 ? 'purple' : 
                            i % 4 === 2 ? 'green' : 'pink'
                          }
                        />
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="inline-block px-2 py-1 text-xs text-gray-400 mt-1">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {activeProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <h4 className="text-white font-bold mb-2 flex items-center">
                            <Code size={16} className="mr-2" /> Features
                          </h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className={`mr-2 ${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}`}>→</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="flex space-x-2 mt-4">
                      <NeonButton
                        href={project.githubUrl}
                        target="_blank"
                        icon={<Github size={16} />}
                        size="sm"
                        color="blue"
                      >
                        Code
                      </NeonButton>
                      
                      {project.liveUrl && (
                        <NeonButton
                          href={project.liveUrl}
                          target="_blank"
                          icon={<ExternalLink size={16} />}
                          size="sm"
                          color="purple"
                        >
                          Demo
                        </NeonButton>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectLab;