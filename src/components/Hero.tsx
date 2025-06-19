
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail, FileText, Code2, Zap, Target, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Developer', 'Problem Solver', 'Student', 'Programmer', 'Creator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1-25ZX9DgFJpVbcMVLw636KMBdBMv0s5N/view?usp=sharing', '_blank');
  };

  const openGmail = () => {
    const subject = encodeURIComponent('Hello Yash - Portfolio Contact');
    const body = encodeURIComponent('Hi Yash,\n\nI found your portfolio and would like to connect with you.\n\nBest regards,');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yash01duggal@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-rose-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="glass-strong px-6 py-3 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-semibold text-lg">Open to Opportunities</span>
                <Heart className="w-4 h-4 text-rose-400 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div 
                className="text-5xl"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.div>
              <span className="text-2xl text-slate-300 font-medium font-display">Hello, I'm</span>
            </div>
            
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight font-display"
            >
              <span className="bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient text-glow">
                Yash Duggal
              </span>
            </motion.h1>
            
            <div className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-semibold h-20">
              <span className="text-slate-200 font-display">I'm a</span>
              <motion.span
                key={currentWord}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-violet-400 via-rose-400 to-cyan-400 bg-clip-text text-transparent font-display font-bold"
              >
                {words[currentWord]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">
              Computer Science student creating{' '}
              <span className="text-rose-400 font-bold bg-rose-400/10 px-2 py-1 rounded-lg">digital experiences</span> with{' '}
              <span className="text-violet-400 font-bold bg-violet-400/10 px-2 py-1 rounded-lg">modern technology</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300 glass-strong p-6 rounded-2xl">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <span className="text-sm">yash01duggal@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 text-lg">📱</span>
                <span className="text-sm">+91 7027763174</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-400 text-lg">📍</span>
                <span className="text-sm">Ambala City, Haryana</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 glass-strong p-8 rounded-3xl bg-gradient-to-r from-violet-500/10 via-rose-500/10 to-cyan-500/10 border border-violet-500/20">
              {[
                { label: 'Years Learning', value: '3+', icon: Target, color: 'text-rose-400', bgColor: 'from-rose-500/20 to-pink-500/20' },
                {
                  label: 'Projects Built',
                  value: '5+',
                  icon: Code2,
                  color: 'text-violet-400',
                  bgColor: 'from-violet-500/20 to-purple-500/20'
                },
                { label: 'Problems Solved', value: '100+', icon: Zap, color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-blue-500/20' },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2 font-display`}>{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="glass-strong hover:glass text-white border-rose-500/20 hover:border-rose-400/40 shadow-2xl shadow-rose-500/20 hover:shadow-rose-500/40 transition-all duration-500 rounded-2xl px-10 py-8 text-lg glow-rose group bg-gradient-to-r from-rose-500/20 to-violet-500/20"
            >
              <Mail className="w-6 h-6 mr-3" />
              Let's Connect
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={downloadResume}
              className="glass hover:glass-strong text-slate-200 hover:text-white border-violet-500/30 hover:border-violet-400/50 transition-all duration-500 rounded-2xl px-10 py-8 text-lg group bg-gradient-to-r from-violet-500/10 to-cyan-500/10"
            >
              <FileText className="w-6 h-6 mr-3" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/yashduggal01', color: 'hover:text-slate-200', bgColor: 'hover:bg-slate-500/20' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/yash-duggal-157080289/', color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-500/20' },
              { icon: Mail, href: '#', onClick: openGmail, color: 'hover:text-emerald-400', bgColor: 'hover:bg-emerald-500/20' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                onClick={social.onClick}
                target={social.href !== '#' ? "_blank" : undefined}
                rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                className={`p-6 glass hover:glass-strong transition-all duration-500 rounded-3xl text-slate-400 ${social.color} ${social.bgColor} group shadow-lg hover:shadow-2xl cursor-pointer`}
              >
                <social.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-12"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-3 text-slate-400 hover:text-rose-400 transition-colors duration-300 group"
            >
              <span className="text-lg font-medium font-display">Discover My Journey</span>
              <div className="w-8 h-12 border-2 border-slate-600 rounded-full flex justify-center group-hover:border-rose-400 transition-colors duration-300 relative overflow-hidden">
                <motion.div 
                  className="w-2 h-4 bg-gradient-to-b from-rose-400 to-violet-400 rounded-full mt-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
