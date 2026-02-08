import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium glass text-primary mb-6">
                        <Code size={14} className="mr-2" />
                        Software Engineer @ Teclusion.ai
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Building digital <span className="text-gradient">experiences</span> <br />
                        that matter.
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
                        Hi, I'm Sai Kiran. I specialize in building high-performance
                        web applications with a focus on clean code and exceptional user experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center group">
                            View Projects
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex items-center gap-4 px-4 py-2 glass rounded-full">
                            <a href="https://github.com/saikirana1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <div className="w-px h-4 bg-white/10" />
                            <a href="https://www.linkedin.com/in/saikiran-kasukurthi-130748235/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
