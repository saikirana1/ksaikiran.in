import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import heroImg from '../assets/sai.png';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Hi there! 👋</h2>

                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[1.1]">
                                I'm <span className="text-primary">Kiran</span>
                            </h1>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                                A Software Engineer
                            </h2>
                        </div>


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <a href="#contact" className="btn-primary group px-8 py-4 rounded-full text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                                <span>Get in touch</span>
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Premium dynamic background elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-primary/10 via-transparent to-blue-50/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10 animate-pulse" />

                        <div className="relative z-10 w-full max-w-[600px] mx-auto group">
                            {/* Decorative border frame */}
                            <div className="absolute -inset-4 border border-gray-100 rounded-[2.5rem] -z-10 group-hover:border-primary/20 transition-colors duration-500" />

                            <div className="relative overflow-hidden rounded-[2rem] bg-white aspect-[4/3] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
                                <img
                                    src={heroImg}
                                    alt="Sai Kiran"
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
