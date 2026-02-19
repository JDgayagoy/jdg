import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const maxChars = 500;

    const GITHUB_URL = "https://github.com/JDgayagoy";
    const LINKEDIN_URL = "www.linkedin.com/in/johndavidgayagoy";
    const GMAIL_URL = "mailto:gayagoyjohndavid@gmail.com";

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > maxChars) return;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', message: '' });
        setStatus('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://jdg-backend.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    const socials = [
        { label: "Github", icon: "devicon-github-original", url: GITHUB_URL },
        { label: "LinkedIn", icon: "bx bxl-linkedin", url: LINKEDIN_URL },
        { label: "Gmail", icon: "bx bx-envelope", url: GMAIL_URL },
    ];

    return (
        <motion.div
            className="w-full max-w-xl mx-auto p-2 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-lg p-6 sm:p-6 shadow-xl">
                <h1 className="text-3xl font-bold text-white mt-3 mb-4">Let's Connect</h1>
                <p className="text-[#888888] mb-6 text-sm leading-relaxed">
                    Have a project in mind or just want to chat? Feel free to reach out! I'm always open to discussing new opportunities, collaborations, or answering questions.
                </p>

                {/* Social Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.url}
                            target={social.url.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#161616] border border-[#262626] rounded-md text-[#aaaaaa] text-xs font-semibold hover:bg-[#262626] hover:text-white transition-all shadow-sm"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <i className={`${social.icon} text-sm`}></i>
                            <span>{social.label}</span>
                        </motion.a>
                    ))}
                </div>

                <div className="w-full h-px bg-[#1e1e1e] mb-8" />

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[10px] uppercase tracking-wider font-semibold text-[#888888]">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="bg-[#161616] border border-[#262626] rounded px-3 py-2 text-white text-xs focus:outline-none focus:border-[#444444] placeholder-[#333333]"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-semibold text-[#888888]">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="bg-[#161616] border border-[#262626] rounded px-3 py-2 text-white text-xs focus:outline-none focus:border-[#444444] placeholder-[#333333]"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-semibold text-[#888888]">Message</label>
                        <div className="relative flex flex-col">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help?"
                                rows="4"
                                className="bg-[#161616] border border-[#262626] rounded px-3 py-2 text-white text-xs focus:outline-none focus:border-[#444444] placeholder-[#333333] resize-none"
                                required
                            ></textarea>
                            <span className="absolute bottom-2 right-3 text-[9px] text-[#444444] pointer-events-none">
                                {formData.message.length}/{maxChars}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-1">
                        <button
                            type="button"
                            className="px-3 py-2 bg-transparent border border-[#262626] rounded text-[#666666] text-[10px] font-bold uppercase tracking-wider hover:bg-[#161616] hover:text-white transition-all disabled:opacity-50"
                            onClick={handleReset}
                            disabled={status === 'sending'}
                        >
                            Reset
                        </button>
                        <div className="flex-1 flex flex-col gap-2">
                            <button
                                type="submit"
                                className={`w-full py-1.5 rounded font-bold text-[10px] uppercase tracking-wider transition-all ${status === 'sending' ? 'bg-[#333] text-[#666] cursor-wait' :
                                    status === 'success' ? 'bg-[#10b981] text-white' :
                                        status === 'error' ? 'bg-red-500 text-white' :
                                            'bg-[#eeeeee] text-black hover:bg-white'
                                    }`}
                                disabled={status === 'sending' || status === 'success'}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent' : status === 'error' ? 'Error' : 'Submit'}
                            </button>
                            {status === 'error' && (
                                <span className="text-[9px] text-red-500 text-center animate-pulse">Failed to send. Please try again.</span>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactForm;
