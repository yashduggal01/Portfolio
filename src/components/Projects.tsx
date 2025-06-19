
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Allergy-Guard',
      description: 'A smart tool that analyzes food ingredients to detect allergens, helping users make safer food choices. Built with JavaScript and integrates with food databases to provide real-time allergen warnings.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'HTML', 'CSS', 'API Integration', 'JSON'],
      github: 'https://github.com/yashduggal01/allergy-guard',
      live: '#',
      features: [
        'Ingredient analysis system',
        'Allergen detection alerts',
        'User-friendly interface',
        'Health risk warnings'
      ]
    },
    {
      title: 'Saarthi',
      description: 'A comprehensive career guidance platform featuring resume analyzer, real-time job trends dashboard, and AI-powered career assistant. Helps students and professionals make informed career decisions.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Node.js', 'JavaScript', 'CSS', 'Chart.js'],
      github: 'https://github.com/yashduggal01/saarthi',
      live: '#',
      features: [
        'Resume analysis & scoring',
        'Real-time job trends',
        'AI career recommendations',
        'Career path guidance'
      ]
    },
    {
      title: 'Job-Pro',
      description: 'A job portal designed for students and job-seekers to explore opportunities. Features job search functionality, application tracking, and career resources tailored for students.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'JavaScript', 'CSS', 'Web APIs', 'Local Storage'],
      github: 'https://github.com/yashduggal01/job-pro',
      live: '#',
      features: [
        'Job search & filtering',
        'Application tracking',
        'Student-focused listings',
        'Career resources'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Here are some projects I've built that showcase my skills and problem-solving approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 h-full overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
                    <Code className="w-16 h-16 text-slate-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-cyan-400">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 px-8 py-6 text-lg"
            onClick={() => window.open('https://github.com/yashduggal01', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
