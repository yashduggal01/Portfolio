import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'yash01duggal@gmail.com',
      link: 'mailto:yash01duggal@gmail.com',
      color: 'text-cyan-400'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7027763174',
      link: 'tel:+917027763174',
      color: 'text-green-400'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Ambala City, Haryana, India',
      link: '#',
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      username: 'yashduggal01',
      link: 'https://github.com/yashduggal01',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      username: 'yash-duggal-157080289',
      link: 'https://www.linkedin.com/in/yash-duggal-157080289/',
      color: 'hover:text-blue-400'
    }
  ];

  // Email format validation helper
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Field validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!isValidEmail(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Missing or Invalid Information",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Updated EmailJS credentials
      const serviceId = 'service_b6op8w2';
      const templateId = 'template_cw5sfid';
      const publicKey = 'QCSVbUHjjUCb0famf';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        to_name: 'Yash Duggal',
        reply_to: formData.email
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      toast({
        title: "Message Sent Successfully! ✅",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error: any) {
      let errorMsg = "Please try again or contact me directly at yash01duggal@gmail.com";
      if (error?.text) errorMsg += `\n\nError: ${error.text}`;
      toast({
        title: "Failed to Send Message ❌",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Let's discuss opportunities, projects, or just have a conversation about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
                collaborating on projects, or simply having a 
                conversation about technology and development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className={`${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">{info.label}</div>
                    <div className="text-slate-300 font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group ${social.color}`}
                  >
                    <div className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-4 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg border border-green-500/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-green-400 font-medium">Available for Opportunities</div>
                  <div className="text-slate-400 text-sm">
                    Open to internships and collaborative projects
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-slate-300 text-sm font-medium mb-2 block">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="bg-slate-700/50 border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                      {errors.name && (
                        <div className="text-red-400 text-xs mt-1">{errors.name}</div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-slate-300 text-sm font-medium mb-2 block">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="bg-slate-700/50 border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                      {errors.email && (
                        <div className="text-red-400 text-xs mt-1">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-slate-300 text-sm font-medium mb-2 block">
                      Subject (Optional)
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration"
                      className="bg-slate-700/50 border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-slate-300 text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can work together..."
                      rows={5}
                      required
                      className="bg-slate-700/50 border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                    {errors.message && (
                      <div className="text-red-400 text-xs mt-1">{errors.message}</div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 shadow-lg shadow-cyan-500/25"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
