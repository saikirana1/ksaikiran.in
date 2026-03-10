import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-900">Hi there! 👋</h2>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 leading-[1.1]">
                                I'm <span className="text-primary">Kira</span>
                            </h1>
                            <p className="text-xl font-medium text-gray-500 uppercase tracking-widest">
                                Software Engineer
                            </p>
                        </div>


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mt-12"
                        >
                            <Link to="/contact" className="btn-primary group inline-flex items-center justify-center">
                                <span>Contact Me</span>
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Background light gradient */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10" />

                        <div className="relative z-10 w-full max-w-[550px] mx-auto group">
                            <div className="relative overflow-hidden rounded-3xl bg-white aspect-[4/5] shadow-2xl border border-gray-100">
                                <img
                                    src={heroImg}
                                    alt="Sai Kiran"
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                />
                            </div>


                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
