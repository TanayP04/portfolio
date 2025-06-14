import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Wrench, Globe, Workflow, FileCode2, Laptop } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: 'blue' | 'purple' | 'green' | 'pink';
}

interface Skill {
  name: string;
  level: number; // 1-5
  description: string;
}

const SkillMatrix: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <Globe size={20} />,
      color: 'blue',
      skills: [
        { name: 'HTML & CSS', level: 5, description: 'Expert in semantic HTML and modern CSS techniques including animations, flexbox and grid.' },
        { name: 'JavaScript', level: 5, description: 'Deep understanding of JavaScript fundamentals, ES6+, DOM manipulation, and asynchronous programming.' },
        { name: 'React', level: 4, description: 'Advanced knowledge of React including hooks, context API, and state management patterns.' },
        { name: 'Tailwind CSS', level: 4, description: 'Strong experience building responsive and custom UIs using Tailwind CSS utility-first approach.' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <Server size={20} />,
      color: 'purple',
      skills: [
        { name: 'Node.js', level: 4, description: 'Proficient in building server-side applications with Node.js runtime.' },
        { name: 'Express', level: 4, description: 'Experience creating RESTful APIs and middleware using Express framework.' },
        { name: 'Authentication', level: 3, description: 'Implementation of secure auth flows including JWT, OAuth, and session management.' },
        { name: 'API Design', level: 4, description: 'Skilled in designing robust and scalable API architectures.' },
      ]
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={20} />,
      color: 'green',
      skills: [
        { name: 'MongoDB', level: 4, description: 'Proficient with MongoDB database design, querying, and Mongoose ODM.' },
        { name: 'Firebase', level: 3, description: 'Experience with Firebase Realtime Database and Firestore.' },
        { name: 'SQL', level: 3, description: 'Working knowledge of relational database concepts and SQL queries.' },
        { name: 'Redis', level: 2, description: 'Basic implementation of caching strategies with Redis.' },
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: <Wrench size={20} />,
      color: 'pink',
      skills: [
        { name: 'Git & GitHub', level: 4, description: 'Version control, branching strategies, and collaborative development workflows.' },
        { name: 'Postman', level: 4, description: 'API testing and documentation using Postman.' },
        { name: 'Webpack', level: 3, description: 'Module bundling and build process optimization.' },
        { name: 'Docker', level: 2, description: 'Basic containerization of applications.' },
      ]
    },
    {
      id: 'dsa',
      title: 'DSA',
      icon: <Code size={20} />,
      color: 'blue',
      skills: [
        { name: 'Problem Solving', level: 5, description: 'Strong analytical skills and algorithmic thinking.' },
        { name: 'Data Structures', level: 4, description: 'Deep understanding of arrays, linked lists, trees, graphs, etc.' },
        { name: 'Algorithms', level: 4, description: 'Knowledge of searching, sorting, dynamic programming, and graph algorithms.' },
        { name: 'LeetCode', level: 4, description: '500+ problems solved across various difficulty levels.' },
      ]
    },
    {
      id: 'concepts',
      title: 'Concepts',
      icon: <Workflow size={20} />,
      color: 'purple',
      skills: [
        { name: 'OOP', level: 4, description: 'Object-oriented programming principles and design patterns.' },
        { name: 'REST Architecture', level: 4, description: 'RESTful API design principles and best practices.' },
        { name: 'Testing', level: 3, description: 'Unit testing, integration testing, and testing frameworks.' },
        { name: 'CI/CD', level: 2, description: 'Basic understanding of continuous integration and deployment pipelines.' },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const getSkillColor = (level: number) => {
    if (theme === 'cyber') {
      switch (level) {
        case 5: return 'bg-neon-blue';
        case 4: return 'bg-neon-purple';
        case 3: return 'bg-neon-green';
        case 2: return 'bg-neon-pink';
        default: return 'bg-gray-600';
      }
    } else {
      return level >= 3 ? 'bg-matrix-green' : 'bg-matrix-green/50';
    }
  };

  const selectedCategoryData = skillCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Circuit board background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${theme === 'cyber' ? '00f0ff' : '00ff41'}' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Tech Armory
            </h2>
            <p className="text-gray-400">Skill Matrix Visualization</p>
          </motion.div>

          <div className="grid md:grid-cols-7 gap-6">
            {/* Skill categories sidebar */}
            <div className="md:col-span-2">
              <motion.div variants={itemVariants} className="space-y-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      w-full text-left p-3 rounded-md flex items-center transition-all duration-300
                      ${selectedCategory === category.id 
                        ? theme === 'cyber'
                          ? category.color === 'blue' ? 'bg-neon-blue/20 border border-neon-blue' 
                          : category.color === 'purple' ? 'bg-neon-purple/20 border border-neon-purple' 
                          : category.color === 'green' ? 'bg-neon-green/20 border border-neon-green' 
                          : 'bg-neon-pink/20 border border-neon-pink'
                          : 'bg-matrix-green/20 border border-matrix-green'
                        : 'bg-cyber-gray hover:bg-cyber-light'
                      }
                    `}
                  >
                    <span 
                      className={`mr-3 ${
                        theme === 'cyber'
                          ? selectedCategory === category.id
                            ? category.color === 'blue' ? 'text-neon-blue' 
                            : category.color === 'purple' ? 'text-neon-purple' 
                            : category.color === 'green' ? 'text-neon-green' 
                            : 'text-neon-pink'
                            : 'text-gray-400'
                          : 'text-matrix-green'
                      }`}
                    >
                      {category.icon}
                    </span>
                    <span className={`font-orbitron ${selectedCategory === category.id ? 'text-white' : 'text-gray-400'}`}>
                      {category.title}
                    </span>
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Skill details */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-5 bg-cyber-gray/50 backdrop-blur-sm p-6 rounded-lg border border-cyber-light"
            >
              {selectedCategoryData && (
                <>
                  <div className="mb-6 flex items-center">
                    <span className={`p-2 rounded-md mr-3 ${
                      theme === 'cyber'
                        ? selectedCategoryData.color === 'blue' ? 'bg-neon-blue/20 text-neon-blue' 
                        : selectedCategoryData.color === 'purple' ? 'bg-neon-purple/20 text-neon-purple' 
                        : selectedCategoryData.color === 'green' ? 'bg-neon-green/20 text-neon-green' 
                        : 'bg-neon-pink/20 text-neon-pink'
                        : 'bg-matrix-green/20 text-matrix-green'
                    }`}>
                      {selectedCategoryData.icon}
                    </span>
                    <h3 className="text-xl font-orbitron font-bold">
                      {selectedCategoryData.title} Skills
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {selectedCategoryData.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-mono font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">Level {skill.level}/5</span>
                        </div>
                        <div className="h-2 w-full bg-cyber-black rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level * 20}%` }}
                            transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                            className={`h-full ${getSkillColor(skill.level)}`}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-400">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillMatrix;