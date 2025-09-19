import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your actual public key
emailjs.init("-M0s8sN0V_Eze0791");

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "service_smdu7mr", // <-- Your actual EmailJS service ID
                "template_eghdpgs", // <-- Your actual EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    from_phone: formData.phone,
                    message: formData.message,
                    reply_to: formData.email,
                    to_email: "gokhanguckiran@hotmail.com", // This will be used as the recipient in your EmailJS template
                }
            );

            toast({
                title: "Message Sent Successfully!",
                description: "Thank you for your enquiry. I'll respond within 24 hours.",
            });

            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast({
                title: "Error Sending Message",
                description: "Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            description: "+44 7799210141",
            detail: "Call for immediate enquiries",
        },
        {
            icon: Mail,
            title: "Email",
            description: "info@gokhandrive.co.uk",
            detail: "Response within 24 hours",
        },
        {
            icon: MapPin,
            title: "Coverage Area",
            description: "Enfield / Wood Green / Tottenham",
            detail: "Flexible location options",
        },
        {
            icon: Clock,
            title: "Availability",
            description: "Flexible scheduling",
            detail: "Lessons to fit your timetable",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Contact GokhanDrive</title>
                <meta
                    name="description"
                    content="Get in touch to start driving lessons or enquire about rates and availability."
                />
                <meta
                    name="keywords"
                    content="contact driving instructor, driving lessons enquire, Gokhan contact"
                />
            </Helmet>

            {/* Hero Section */}
            <section className="gradient-bg text-white section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-shadow"
                        >
                            Get In Touch
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                        >
                            Ready when you are — let's start your driving journey.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <a href="#contact-form" className="btn-primary text-lg px-8 py-4">
                                Send Message
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-6 mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            How to Reach Me
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            I'm here to answer your questions and help you get started with
                            professional driving lessons.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover-lift text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <info.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {info.title}
                                </h3>
                                <p className="text-gray-600 mb-1">{info.description}</p>
                                <p className="text-sm text-gray-500">{info.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Contact Form
                            </h2>
                            <p className="text-lg text-gray-600">
                                Fill out the form and I will respond within 24 hours.
                            </p>

                            <div className="relative">
                                <img
                                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                                    alt="hands writing email on laptop, clean desk"
                                    src="https://images.unsplash.com/photo-1586314265219-192da32be7eb"
                                />
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    What to Include
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Your current driving experience level</li>
                                    <li>• Preferred lesson times and frequency</li>
                                    <li>• Any specific areas you'd like to focus on</li>
                                    <li>• Questions about rates or availability</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-xl"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone (optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Your phone number"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                                        placeholder="Tell me about your driving experience and what you're looking for..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-800 to-indigo-600 text-white hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 py-3 h-auto text-base"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
