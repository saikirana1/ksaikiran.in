import { type ReactNode } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

interface LayoutProps {
    children: ReactNode;
}

const Footer = () => (
    <footer className="bg-gray-50 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <div>
                    © 2026 Sai Kiran. Based in India.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://github.com/saikirana1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/ksaikiranin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://instagram.com/saikiran_a1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-primary/10">
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
