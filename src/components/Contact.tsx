import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Contact = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            link: 'https://linkedin.com/in/ksaikiranin',
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            link: 'https://github.com/saikirana1',
            color: 'text-gray-900',
            bg: 'bg-gray-100'
        },
        {
            name: 'Instagram',
            icon: <Instagram size={24} />,
            link: 'https://instagram.com/saikiran_a1',
            color: 'text-pink-600',
            bg: 'bg-pink-50'
        }
    ];

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        I'm always open to new opportunities, collaborations, or just a friendly chat.
                        Feel free to reach out through any of the platforms below!
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-bold">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center gap-3 p-8 ${social.bg} rounded-3xl border border-transparent hover:border-current transition-all group`}
                                >
                                    <div className={`${social.color} transition-transform group-hover:scale-110`}>
                                        {social.icon}
                                    </div>
                                    <span className="text-sm tracking-widest uppercase">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
