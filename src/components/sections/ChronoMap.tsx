import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: 'education' | 'work' | 'achievement';
}

const ChronoMap: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems: TimelineItem[] = [
    {
      id: 'btech',
      title: 'B.Tech in Computer Science',
      subtitle: 'SGGSIE&T',
      date: '2020 - 2024',
      description: 'Graduated with a 7.7 CGPA. Focused on core computer science subjects and participated in various technical events.',
      icon: 'education',
    },
    {
      id: 'hsc',
      title: 'Higher Secondary Certificate (HSC)',
      subtitle: 'Maharashtra State Board',
      date: '2018 - 2020',
      description: 'Completed with 85.5%. Participated in science exhibitions and coding competitions.',
      icon: 'education',
    },
    {
      id: 'ssc',
      title: 'Secondary School Certificate (SSC)',
      subtitle: 'Maharashtra State Board',
      date: '2018',
      description: 'Achieved 81% marks. Active participant in mathematics olympiad and science fairs.',
      icon: 'education',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
  };

  const renderIcon = (iconType: string) => {
    const iconColor = theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green';
    
    switch (iconType) {
      case 'education':
        return <GraduationCap className={iconColor} />;
      case 'work':
        return <Briefcase className={iconColor} />;
      case 'achievement':
        return <Award className={iconColor} />;
      default:
        return <GraduationCap className={iconColor} />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Hexagon pattern background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23${theme === 'cyber' ? '00f0ff' : '00ff41'}' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-orbitron font-bold mb-2 ${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}`}>
              ChronoMap
            </h2>
            <p className="text-gray-400">Learning Journey Timeline</p>
          </motion.div>

          <div className="relative">
            {/* Timeline center line */}
            <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${theme === 'cyber' ? 'bg-neon-blue/30' : 'bg-matrix-green/30'} md:transform md:-translate-x-1/2`}></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-cyber-black border-2 md:transform md:-translate-x-1/2 md:translate-y-4 z-10 flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${theme === 'cyber' ? 'bg-neon-blue' : 'bg-matrix-green'}`}></div>
                  </div>

                  {/* Content box */}
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12'} md:w-1/2`}>
                    <div className={`
                      cyber-card 
                      ${theme === 'cyber' ? 'border-neon-blue shadow-neon-blue' : 'border-matrix-green shadow-neon-green'}
                    `}>
                      <div className="flex items-center mb-3 gap-3">
                        <div className={`p-2 rounded-md ${theme === 'cyber' ? 'bg-neon-blue/10' : 'bg-matrix-green/10'}`}>
                          {renderIcon(item.icon)}
                        </div>
                        <div>
                          <h3 className="font-orbitron font-bold text-white text-lg">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-3 ${theme === 'cyber' ? 'bg-neon-blue/10 text-neon-blue' : 'bg-matrix-green/10 text-matrix-green'}`}>
                        {item.date}
                      </div>
                      
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChronoMap;