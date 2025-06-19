
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { User, MapPin, Calendar, Trophy, Target, Zap, Heart, Star, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Built', value: '5+', icon: <Trophy className="w-6 h-6" />, color: 'text-yellow-400', bgColor: 'from-yellow-500/20 to-orange-500/20' },
    { label: 'Years Learning', value: '3+', icon: <Calendar className="w-6 h-6" />, color: 'text-emerald-400', bgColor: 'from-emerald-500/20 to-green-500/20' },
    { label: 'Technologies', value: '10+', icon: <Zap className="w-6 h-6" />, color: 'text-violet-400', bgColor: 'from-violet-500/20 to-purple-500/20' },
    { label: 'Problems Solved', value: '100+', icon: <Target className="w-6 h-6" />, color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-blue-500/20' },
  ];

  const interests = [
    'Full-Stack Development', 'Data Structures & Algorithms',
    'Competitive Programming', 'UI/UX Design', 'Web Development', 'Problem Solving'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-rose-900/5 to-cyan-900/10"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-violet-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 glass-strong px-6 py-3 rounded-full mb-8 border border-rose-500/20">
            <Heart className="w-5 h-5 text-rose-400" />
            <span className="text-rose-400 font-semibold text-lg">Get to Know Me</span>
            <Star className="w-5 h-5 text-yellow-400 animate-sparkle" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            About <span className="bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A passionate journey of learning, creativity, and growth in the world of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-strong border-slate-700/50 hover-lift hover:border-violet-500/30 transition-all duration-500 bg-gradient-to-br from-white/5 to-white/10">
              <CardContent className="p-10">
                <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-violet-600 rounded-2xl flex items-center justify-center glow-rose shadow-2xl">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <Coffee className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rose-400 font-display mb-2">Yash Duggal</h3>
                    <p className="text-slate-300 flex items-center gap-3 text-lg">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      Ambala City, Haryana, India
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6 text-slate-200 leading-relaxed text-lg">
                  <p>
                    I'm a passionate Computer Science Engineering student at <strong className="text-rose-400 font-semibold">Chitkara University</strong>, currently in my 3rd year with a love for technology and programming.
                  </p>
                  <p>
                    With hands-on experience in <strong className="text-violet-400 font-semibold">full-stack development</strong>, I've built several projects using technologies like React, Node.js, Python, and Java. I enjoy solving coding problems and building applications that are both functional and user-friendly.
                  </p>
                  <p>
                    My goal is to work at top tech companies like <strong className="text-cyan-400 font-semibold">Google, Microsoft, or Amazon</strong>, where I can contribute to innovative projects and continue learning from the best minds in technology.
                  </p>
                </motion.div>

                {/* Interests */}
                <motion.div variants={itemVariants} className="mt-10">
                  <h4 className="text-2xl font-semibold text-emerald-400 mb-6 font-display flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    Areas of Interest
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 text-slate-200 border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300 px-4 py-2 text-sm font-medium shadow-lg hover:shadow-emerald-500/20"
                        >
                          {interest}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-strong border-slate-700/50 hover-lift group transition-all duration-500 hover:border-violet-500/30 bg-gradient-to-br from-white/5 to-white/10">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm mb-2 font-medium">{stat.label}</p>
                        <p className={`text-3xl font-bold ${stat.color} font-display`}>{stat.value}</p>
                      </div>
                      <div className={`${stat.color} group-hover:scale-125 transition-transform duration-500 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center shadow-lg`}>
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Info Card */}
            <motion.div variants={itemVariants}>
              <Card className="glass-strong border-slate-700/50 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-violet-500/20 hover-lift transition-all duration-500 hover:border-emerald-500/30">
                <CardContent className="p-8">
                  <div className="text-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center glow-emerald shadow-2xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Zap className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-emerald-400 mb-3 text-xl font-display">Ready for Opportunities</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Excited about internships and collaborative projects that help me grow and learn
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
