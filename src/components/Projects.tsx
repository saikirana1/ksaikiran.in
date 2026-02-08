import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: 'Teclusion.ai Platform',
            category: 'Work',
            description: 'Core platform development for AI integration and data visualization.',
            link: 'https://teclusion.ai/',
            tags: ['React', 'Next.js', 'Pyhton', 'AI']
        },
        // Placeholder projects - user can update these
        {
            title: 'Portfolio Website',
            category: 'Open Source',
            description: 'A professional, modern portfolio template built with React and Tailwind CSS.',
            link: 'https://github.com/saikirana1',
            tags: ['TypeScript', 'Tailwind', 'Framer']
        }
    ];

    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
                    <p className="text-gray-400">A selection of projects I've worked on recently.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group glass rounded-3xl overflow-hidden"
                    >
                        <div className="aspect-video relative overflow-hidden bg-white/5">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background-dark/80 backdrop-blur-sm">
                                <div className="flex gap-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4 flex gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold glass rounded text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-xs text-primary font-bold uppercase tracking-widest">{project.category}</span>
                                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 line-clamp-2">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
