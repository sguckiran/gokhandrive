import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Removed EmailJS and form handling imports

const Contact = () => {
    const { toast } = useToast();

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            description: (
                <a href="tel:+447799210141" className="text-blue-600 hover:underline">
                    +44 7799210141
                </a>
            ),
            detail: "Call for immediate enquiries",
        },
        {
            icon: Mail,
            title: "Email",
            description: (
                <a href="mailto:info@gokhandrive.co.uk" className="text-blue-600 hover:underline">
                    info@gokhandrive.co.uk
                </a>
            ),
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
                            {/* Removed contact form link */}
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
            {/* Removed Contact Form Section */}
        </>
    );
};

export default Contact;
