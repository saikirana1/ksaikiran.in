import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Email Me</h3>
                                    <p className="text-gray-500">I usually respond within 24 hours.</p>
                                </div>
                            </div>
                            <a
                                href="mailto:saikirankasukurthi55@gmail.com"
                                className="text-2xl font-bold text-primary hover:underline break-all"
                            >
                                saikirankasukurthi55@gmail.com
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center gap-3 p-6 ${social.bg} rounded-2xl border border-transparent hover:border-current transition-all group`}
                                >
                                    <div className={`${social.color} transition-transform group-hover:scale-110`}>
                                        {social.icon}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side: Simple CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center h-full min-h-[300px]"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6">
                            <Send size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Great</h3>
                        <p className="text-gray-500 mb-8 max-w-xs">
                            If you have a project in mind or just want to discuss some ideas,
                            I'm all ears!
                        </p>
                        <a
                            href="mailto:saikirankasukurthi55@gmail.com"
                            className="btn-primary w-full justify-center"
                        >
                            Say Hello
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
