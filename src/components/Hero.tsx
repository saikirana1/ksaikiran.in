import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import pointingImg from '../assets/pointing_sai.png';

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

                        <div className="relative z-10 w-full max-w-[550px] mx-auto">
                            <img
                                src={pointingImg}
                                alt="Sai Kiran pointing"
                                className="w-full h-auto object-contain"
                            />

                            {/* Floating Tech Icons - Simplified for now, can add more later */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[20%] right-[10%] p-3 bg-white rounded-xl shadow-lg border border-gray-100"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-8 h-8" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[30%] left-[-5%] p-3 bg-white rounded-xl shadow-lg border border-gray-100"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="w-8 h-8" />
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute top-[40%] left-[5%] p-2 bg-white rounded-lg shadow-md border border-gray-50"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vercel_logo_2024.svg" alt="Vercel" className="w-6 h-6" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
