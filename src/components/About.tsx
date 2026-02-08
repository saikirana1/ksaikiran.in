import { motion } from 'framer-motion';
import { Briefcase, Code2, Globe } from 'lucide-react';

export const About = () => {
    const experiences = [
        {
            company: 'Teclusion.ai',
            role: 'Software Engineer',
            period: 'Present',
            description: 'Developing AI-driven solutions and high-performance web applications.',
            link: 'https://teclusion.ai/'
        },
        // Add more experiences as needed
    ];

    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <div className="space-y-4 text-gray-400">
                        <p>
                            I am a passionate Software Engineer currently working at <strong>Teclusion.ai</strong>.
                            My journey in tech is driven by a desire to solve complex problems through innovative code.
                        </p>
                        <p>
                            I love working across the stack, focusing on creating seamless integrations between
                            robust backends and intuitive, beautiful frontends.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 glass rounded-2xl">
                            <Code2 className="text-primary mb-2" size={24} />
                            <h3 className="font-semibold">Full Stack</h3>
                            <p className="text-xs text-gray-500">React, Node.js, TypeScript</p>
                        </div>
                        <div className="p-4 glass rounded-2xl">
                            <Globe className="text-secondary mb-2" size={24} />
                            <h3 className="font-semibold">Scalable</h3>
                            <p className="text-xs text-gray-500">Cloud Infrastructure</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-xl font-bold flex items-center">
                        <Briefcase className="mr-2 text-primary" size={20} />
                        Experience
                    </h3>
                    <div className="space-y-4">
                        {experiences.map((exp, index) => (
                            <div key={index} className="p-6 glass rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                        <Globe size={18} className="text-gray-400 hover:text-white" />
                                    </a>
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-bold">{exp.role}</h4>
                                        <p className="text-primary text-sm">{exp.company}</p>
                                    </div>
                                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{exp.period}</span>
                                </div>
                                <p className="text-sm text-gray-400">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
