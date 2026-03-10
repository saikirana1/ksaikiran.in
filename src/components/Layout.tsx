import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
                        saikiran
                    </Link>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-primary'
                                        : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center">
                        <a
                            href="mailto:hi@saikiran.in"
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                            <Mail size={16} />
                            hi@saikiran.in
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white border-b border-gray-100"
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:hi@saikiran.in"
                            className="flex items-center gap-2 px-3 py-2 text-primary font-medium"
                        >
                            <Mail size={16} />
                            hi@saikiran.in
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-gray-50 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <div>
                    © 2026 Sai Kiran. Based in India.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://github.com/saikirana1" className="hover:text-primary transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/saikiran-kasukurthi-130748235/" className="hover:text-primary transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-primary/10">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};
