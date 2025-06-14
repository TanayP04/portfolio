import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { Award, Medal, Users, DollarSign } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'pink';
}

const SideQuests: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements: Achievement[] = [
    {
      id: 'hockey',
      title: '3× State-level Hockey Player',
      icon: <Award size={24} />,
      description: 'Represented district in state-level hockey championships for three consecutive years.',
      color: 'blue',
    },
    {
      id: 'basketball',
      title: 'University-level Basketball Player',
      icon: <Medal size={24} />,
      description: 'Member of university basketball team, participated in inter-college tournaments.',
      color: 'purple',
    },
    {
      id: 'web-lead',
      title: 'Web Lead of Zenith Tech Team',
      icon: <Users size={24} />,
      description: 'Led the web development team for college technical festival, managing a team of 8 developers.',
      color: 'green',
    },
    {
      id: 'finance',
      title: 'Zenith Finance Committee Head',
      icon: <DollarSign size={24} />,
      description: 'Managed financial planning and budget allocation for college technical festival.',
      color: 'pink',
    },
  ];

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

  return (
    <section className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Dotted grid background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(${theme === 'cyber' ? '#00f0ff' : '#00ff41'} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
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
              Side Quests
            </h2>
            <p className="text-gray-400">Extra-Curricular Achievements</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className={`
                  relative overflow-hidden cyber-card 
                  ${
                    theme === 'cyber'
                      ? achievement.color === 'blue' ? 'border-neon-blue shadow-neon-blue' 
                      : achievement.color === 'purple' ? 'border-neon-purple shadow-neon-purple' 
                      : achievement.color === 'green' ? 'border-neon-green shadow-neon-green' 
                      : 'border-neon-pink shadow-neon-pink'
                      : 'border-matrix-green shadow-neon-green'
                  }
                `}
              >
                {/* Achievement badge */}
                <div className={`
                  absolute -right-8 -top-8 w-16 h-16 transform rotate-45
                  ${
                    theme === 'cyber'
                      ? achievement.color === 'blue' ? 'bg-neon-blue/20' 
                      : achievement.color === 'purple' ? 'bg-neon-purple/20' 
                      : achievement.color === 'green' ? 'bg-neon-green/20' 
                      : 'bg-neon-pink/20'
                      : 'bg-matrix-green/20'
                  }
                `}></div>

                <div className="flex items-start gap-4">
                  <div className={`
                    p-3 rounded-md flex-shrink-0
                    ${
                      theme === 'cyber'
                        ? achievement.color === 'blue' ? 'bg-neon-blue/10 text-neon-blue' 
                        : achievement.color === 'purple' ? 'bg-neon-purple/10 text-neon-purple' 
                        : achievement.color === 'green' ? 'bg-neon-green/10 text-neon-green' 
                        : 'bg-neon-pink/10 text-neon-pink'
                        : 'bg-matrix-green/10 text-matrix-green'
                    }
                  `}>
                    {achievement.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-orbitron font-bold mb-2 text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 italic">
              "Balancing technical skills with extracurricular activities has shaped me into a well-rounded individual with strong leadership and teamwork abilities."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SideQuests;