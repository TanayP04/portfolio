import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';
import TerminalText from '../ui/TerminalText';
import NeonButton from '../ui/NeonButton';
import emailjs from '@emailjs/browser';
const ContactTerminal: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showForm, setShowForm] = useState(false);

  // ✅ Initialize emailjs 
  useEffect(() => {
    emailjs.init('r05NKXaIkuuQIMKYX');
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) return;

    setFormStatus('sending');

    try {
    const response = await emailjs.send(
      'service_n65pnxp',              // your service ID
      'template_krp0y36',             // your template ID
      {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
      'r05NKXaIkuuQIMKYX'             // your public key
    );

    console.log('Email sent:', response.status, response.text);
    setFormStatus('success');
    setFormState({ name: '', email: '', message: '' });

    setTimeout(() => {
      setFormStatus('idle');
    }, 3000);
  } catch (error) {
    console.error('Email sending error:', error);
    setFormStatus('error');
  }
  };

  const handleTypingComplete = () => {
    setShowForm(true);
  };

  return (
    <section id="contact" className="py-20 bg-cyber-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme === 'cyber' ? '#00f0ff' : '#00ff41'} 1px, transparent 1px), linear-gradient(to bottom, ${theme === 'cyber' ? '#00f0ff' : '#00ff41'} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-orbitron font-bold mb-2 ${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}`}>
              CommLink Console
            </h2>
            <p className="text-gray-400">Establish Communication</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={`cyber-card h-full ${theme === 'cyber' ? 'border-neon-purple shadow-neon-purple' : 'border-matrix-green shadow-neon-green'}`}>
                <h3 className="text-xl font-orbitron font-bold mb-6 text-white">Connection Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-md ${theme === 'cyber' ? 'bg-neon-purple/10 text-neon-purple' : 'bg-matrix-green/10 text-matrix-green'}`}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-mono">EMAIL</h4>
                      <a href="mailto:tanaypalkandwar@gmail.com" className="text-white hover:underline">
                        tanaypalkandwar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-md ${theme === 'cyber' ? 'bg-neon-blue/10 text-neon-blue' : 'bg-matrix-green/10 text-matrix-green'}`}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-mono">LOCATION</h4>
                      <p className="text-white"> Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-md ${theme === 'cyber' ? 'bg-neon-green/10 text-neon-green' : 'bg-matrix-green/10 text-matrix-green'}`}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-mono">PHONE</h4>
                      <p className="text-white">+91 9766394234</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm text-gray-400 font-mono mb-4">SOCIAL PROFILES</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/TanayP04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${theme === 'cyber' ? 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20' : 'bg-matrix-green/10 text-matrix-green hover:bg-matrix-green/20'} transition-colors duration-300`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tanay-palkandwar-334a26355/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${theme === 'cyber' ? 'bg-neon-purple/10 text-neon-purple hover:bg-neon-purple/20' : 'bg-matrix-green/10 text-matrix-green hover:bg-matrix-green/20'} transition-colors duration-300`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://leetcode.com/u/Tanay_Palkandwar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${theme === 'cyber' ? 'bg-neon-green/10 text-neon-green hover:bg-neon-green/20' : 'bg-matrix-green/10 text-matrix-green hover:bg-matrix-green/20'} transition-colors duration-300`}
                    >
                      <SiLeetcode size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={`cyber-card ${theme === 'cyber' ? 'border-neon-blue shadow-neon-blue' : 'border-matrix-green shadow-neon-green'}`}>
                <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400 text-sm font-mono">contact@terminal:~</span>
                </div>

                <div className="space-y-4">
                  <div className="flex">
                    <span className={`${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} mr-2 font-mono`}>$</span>
                    <TerminalText
                      text={showForm ? "connect Tanay --send-message" : "connect Tanay"}
                      className="text-white"
                      speed={70}
                      onComplete={handleTypingComplete}
                    />
                  </div>

                  {showForm && (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      onSubmit={handleSubmit}
                      className="mt-4 pl-6 space-y-4"
                    >
                      <div className="flex">
                        <span className="text-gray-400 mr-2 font-mono">name:</span>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="flex-1 bg-transparent border-b border-gray-700 focus:border-neon-blue outline-none text-white"
                          disabled={formStatus !== 'idle'}
                          required
                        />
                      </div>

                      <div className="flex">
                        <span className="text-gray-400 mr-2 font-mono">email:</span>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="flex-1 bg-transparent border-b border-gray-700 focus:border-neon-blue outline-none text-white"
                          disabled={formStatus !== 'idle'}
                          required
                        />
                      </div>

                      <div className="flex">
                        <span className="text-gray-400 mr-2 font-mono">message:</span>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="flex-1 bg-transparent border-b border-gray-700 focus:border-neon-blue outline-none text-white resize-none"
                          disabled={formStatus !== 'idle'}
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <NeonButton
                          type="submit"
                          color="blue"
                          icon={<Send size={16} />}
                          className="w-full"
                          disabled={formStatus !== 'idle'}
                        >
                          {formStatus === 'sending' ? 'Transmitting...' : 'Initiate Transmission'}
                        </NeonButton>
                      </div>

                      {formStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`p-3 rounded-md ${theme === 'cyber' ? 'bg-neon-green/10 text-neon-green' : 'bg-matrix-green/10 text-matrix-green'} text-center`}
                        >
                          Transmission successful! Message received.
                        </motion.div>
                      )}

                      {formStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="p-3 rounded-md bg-red-500/10 text-red-400 text-center"
                        >
                          Transmission failed. Please try again.
                        </motion.div>
                      )}
                    </motion.form>
                  )}

                  <div className="flex mt-4">
                    <span className={`${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} mr-2 font-mono`}>$</span>
                    <span className="h-5 w-2 bg-white animate-terminal"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTerminal;
