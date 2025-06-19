
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science Engineering',
      institution: 'Chitkara University',
      location: 'Rajpura, Punjab, India',
      duration: '2023 - 2027',
      cgpa: '9.0',
      status: 'Pursuing',
      description: 'Focused on software engineering principles, data structures, algorithms, and modern development practices.',
      highlights: [
        'Advanced Data Structures & Algorithms',
        'Software Engineering Principles',
        'Database Management Systems',
        'Web Development Technologies',
        'Object-Oriented Programming'
      ]
    },
    {
      degree: '12th Grade',
      institution: 'S.A. Jain Senior Model School',
      location: 'Ambala City, India',
      duration: '2022 - 2023',
      cgpa: '92.2%',
      status: 'Completed',
      description: 'Completed senior secondary education with excellence in mathematics and science subjects.',
      highlights: [
        'Mathematics Excellence',
        'Physics & Chemistry',
        'Computer Science Fundamentals',
        'Analytical Thinking Development'
      ]
    },
    {
      degree: '10th Grade',
      institution: 'S.A. Jain Senior Model School',
      location: 'Ambala City, India',
      duration: '2020 - 2021',
      cgpa: '93.8%',
      status: 'Completed',
      description: 'Strong foundation in core subjects with exceptional performance in mathematics and science.',
      highlights: [
        'Strong Academic Foundation',
        'Mathematics & Science Excellence',
        'Leadership Skills Development',
        'Extracurricular Participation'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently maintained high CGPA throughout academic journey',
      icon: '🏆',
      color: 'text-yellow-400'
    },
    {
      title: 'Problem Solving',
      description: 'Strong foundation in algorithmic thinking and competitive programming',
      icon: '🧠',
      color: 'text-purple-400'
    },
    {
      title: 'Technical Skills',
      description: 'Proficient in multiple programming languages and frameworks',
      icon: '💻',
      color: 'text-cyan-400'
    },
    {
      title: 'Innovation',
      description: 'Passionate about creating solutions that make a real-world impact',
      icon: '🚀',
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My academic journey and the milestones that shaped my technical expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-16'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full hidden md:block shadow-lg shadow-cyan-500/50"></div>

                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-cyan-400 mb-2">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-slate-300 mb-1">
                          <GraduationCap className="w-4 h-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="text-slate-400 text-sm">
                          📍 {edu.location}
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <Badge
                          variant="outline"
                          className={`border-slate-600 ${
                            edu.status === 'Pursuing' 
                              ? 'text-green-400 border-green-500' 
                              : 'text-blue-400 border-blue-500'
                          }`}
                        >
                          {edu.status}
                        </Badge>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-slate-300 font-medium">
                          {edu.degree.includes('B.E.') ? 'CGPA:' : 'Score:'} 
                        </span>
                        <span className="text-xl font-bold text-yellow-400">
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Highlights:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                            <span className="text-slate-400 text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className={`font-bold mb-2 ${achievement.color}`}>
                  {achievement.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
