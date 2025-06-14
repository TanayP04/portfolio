import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Lightbulb, Rocket } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import TechTag from '../ui/TechTag';

const CoreMemory: React.FC = () => {
  const { theme } = useTheme();
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const techStack = [
    'C++', 'React', 'Node.js', 'Express', 'MongoDB', 
    'JavaScript', 'TypeScript', 'HTML', 'CSS',
    'Tailwind CSS','Postman', 'Cloudinary','Firebase', 'GitHub', 'RESTful API'
  ];

  return (
    <section id="about" className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZT0iIzAwZjBmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMGYwZmYiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2U9IiMwMGYwZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjMDBmMGZmIi8+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2U9IiMwMGYwZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjMDBmMGZmIi8+PHBhdGggZD0iTTMwIDBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZT0iIzAwZjBmZiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMGYwZmYiLz48L2c+PC9zdmc+')]" 
           style={{ opacity: theme === 'cyber' ? 0.15 : 0.08 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-orbitron font-bold mb-2 ${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}`}>
              Core Memory Module
            </h2>
            <p className="text-gray-400">Profile Data Segment</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className={`cyber-card ${theme === 'cyber' ? 'border-neon-blue shadow-neon-blue' : 'border-matrix-green shadow-neon-green'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-md ${theme === 'cyber' ? 'bg-neon-blue/10' : 'bg-matrix-green/10'}`}>
                  <Code className={theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-2">Problem Solver</h3>
                  <p className="text-gray-300">
                    500+ LeetCode problems solved with a strong grasp of Data Structures and Algorithms.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className={`cyber-card ${theme === 'cyber' ? 'border-neon-purple shadow-neon-purple' : 'border-matrix-green shadow-neon-green'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-md ${theme === 'cyber' ? 'bg-neon-purple/10' : 'bg-matrix-green/10'}`}>
                  <Database className={theme === 'cyber' ? 'text-neon-purple' : 'text-matrix-green'} />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-2">Full-Stack Developer</h3>
                  <p className="text-gray-300">
                    Experienced with MERN stack, building end-to-end web applications with modern technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className={`cyber-card ${theme === 'cyber' ? 'border-neon-green shadow-neon-green' : 'border-matrix-green shadow-neon-green'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-md ${theme === 'cyber' ? 'bg-neon-green/10' : 'bg-matrix-green/10'}`}>
                  <Lightbulb className={theme === 'cyber' ? 'text-neon-green' : 'text-matrix-green'} />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-2">Creative Thinker</h3>
                  <p className="text-gray-300">
                    Passionate about crafting intuitive user experiences and innovative solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className={`cyber-card ${theme === 'cyber' ? 'border-neon-pink shadow-neon-pink' : 'border-matrix-green shadow-neon-green'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-md ${theme === 'cyber' ? 'bg-neon-pink/10' : 'bg-matrix-green/10'}`}>
                  <Rocket className={theme === 'cyber' ? 'text-neon-pink' : 'text-matrix-green'} />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-2">Fast Learner</h3>
                  <p className="text-gray-300">
                    Quickly adapts to new technologies and constantly expanding knowledge base.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-xl font-orbitron font-bold mb-4 text-white">Tech Stack</h3>
            <div className="flex flex-wrap">
              {techStack.map((tech, index) => (
                <TechTag 
                  key={tech} 
                  name={tech} 
                  color={
                    index % 4 === 0 ? 'blue' : 
                    index % 4 === 1 ? 'purple' : 
                    index % 4 === 2 ? 'green' : 'pink'
                  } 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreMemory;