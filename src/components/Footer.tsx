import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/yashduggal01',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/yash-duggal-157080289/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:yash01duggal@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1-25ZX9DgFJpVbcMVLw636KMBdBMv0s5N/view?usp=sharing', '_blank');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Yash Duggal
              </h3>
              <p className="text-slate-400 mt-2">
                Aspiring Software Engineer
              </p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Passionate about creating innovative solutions through technology. 
              Specializing in full-stack development and algorithmic problem-solving.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:yash01duggal@gmail.com" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  yash01duggal@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">📱</span>
                <a 
                  href="tel:+917027763174" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  +91 7027763174
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">📍</span>
                <span className="text-slate-300">Ambala City, Haryana</span>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-pink-400 mb-4">Let's Work Together</h4>
            <p className="text-slate-400 text-sm mb-4">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="sm"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 text-sm"
                onClick={downloadResume}
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} Yash Duggal. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-slate-400 hover:text-cyan-400 p-2"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
