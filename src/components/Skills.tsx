
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Globe, Cpu, Zap, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-rose-400',
      bgGradient: 'from-rose-500/20 to-pink-500/20',
      skills: [
        { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'C++', level: 80, color: 'from-blue-500 to-indigo-600' },
        { name: 'Python', level: 75, color: 'from-green-500 to-emerald-600' },
        { name: 'JavaScript', level: 70, color: 'from-yellow-400 to-orange-500' },
        { name: 'C', level: 80, color: 'from-gray-500 to-slate-600' },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      skills: [
        { name: 'React', level: 75, color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML5', level: 85, color: 'from-orange-500 to-red-600' },
        { name: 'CSS3', level: 75, color: 'from-blue-400 to-purple-600' },
        { name: 'Node.js', level: 65, color: 'from-green-500 to-teal-600' },
        { name: 'Express.js', level: 65, color: 'from-gray-600 to-slate-800' },
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'text-violet-400',
      bgGradient: 'from-violet-500/20 to-purple-500/20',
      skills: [
        { name: 'MongoDB', level: 60, color: 'from-green-500 to-emerald-600' },
        { name: 'Git', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'MySQL', level: 70, color: 'from-blue-500 to-purple-600' },
        { name: 'VS Code', level: 85, color: 'from-blue-400 to-cyan-500' },
        { name: 'Postman', level: 65, color: 'from-orange-400 to-red-500' },
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Cpu, color: 'text-emerald-400' },
    { name: 'Quick Learning', icon: Zap, color: 'text-yellow-400' },
    { name: 'Team Work', icon: Users, color: 'text-blue-400' },
    { name: 'Communication', icon: Globe, color: 'text-purple-400' },
    { name: 'Adaptability', icon: Code, color: 'text-pink-400' },
    { name: 'Creativity', icon: Database, color: 'text-cyan-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-rose-900/10 to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full mb-6 border border-violet-500/20">
            <Code className="w-5 h-5 text-violet-400" />
            <span className="text-violet-400 font-semibold text-lg">Technical Skills</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and skills I've learned during my journey as a Computer Science student
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className={`glass-strong hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-700 h-full hover-lift border-slate-700/50 hover:border-violet-500/30 bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl`}>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl glass mb-6 ${category.color} bg-gradient-to-br from-white/10 to-white/5`}>
                      <category.icon className="w-10 h-10" />
                    </div>
                    <h3 className={`text-2xl font-bold ${category.color} mb-2`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-slate-200 font-semibold">{skill.name}</span>
                          <span className="text-slate-400 text-sm font-mono bg-slate-800/50 px-2 py-1 rounded">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden shadow-lg`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Personal Skills
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Skills that help me collaborate effectively and approach challenges with creativity
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -10 }}
                className="glass-strong p-8 rounded-3xl text-center hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 group border border-slate-700/50 hover:border-violet-500/30 bg-gradient-to-br from-white/5 to-white/10"
              >
                <skill.icon className={`w-10 h-10 ${skill.color} mx-auto mb-4 group-hover:scale-125 transition-transform duration-500`} />
                <span className="text-slate-200 font-semibold text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-strong p-10 rounded-3xl bg-gradient-to-br from-violet-500/10 via-rose-500/10 to-cyan-500/10 border border-violet-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Code, label: 'Languages', value: '5+', color: 'text-rose-400', bgColor: 'from-rose-500/20 to-pink-500/20' },
              { icon: Globe, label: 'Technologies', value: '10+', color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-blue-500/20' },
              { icon: Cpu, label: 'Problems Solved', value: '100+', color: 'text-emerald-400', bgColor: 'from-emerald-500/20 to-green-500/20' },
              { icon: Zap, label: 'Projects Built', value: '5+', color: 'text-violet-400', bgColor: 'from-violet-500/20 to-purple-500/20' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.value}</div>
                <div className="text-slate-300 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
