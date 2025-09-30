import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Users, Award } from 'lucide-react';
import passImage from '../assets/pass-image.png';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About GokhanDrive — Driving Lessons by Gokhan</title>
                <meta
                    name="description"
                    content="Meet Gokhan, a qualified ADI who teaches by the book to help students pass with confidence."
                />
                <meta
                    name="keywords"
                    content="about driving instructor, ADI profile, GokhanDrive, by the book driving"
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
                            Driven by Method, Guided by Experience
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                        >
                            My passion is helping learners succeed with clear, structured, and effective instruction.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section id="story" className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                                style={{ minHeight: '450px' }}
                                alt="GokhanDrive instructor portrait"
                                src={passImage}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                My Journey & Teaching Philosophy
                            </h2>
                            <p className="text-lg text-gray-600">
                                As a fully qualified ADI, my goal has always been to make driving lessons an empowering, stress-free experience. I teach 'by the book' because it's the most effective way to build a strong foundation for safe driving and ensure my students pass their test with confidence.
                            </p>
                            <p className="text-lg text-gray-600">
                                My unique approach involves using a folder of detailed diagrams for complex situations like T-junctions and roundabouts. This visual method, which my students can vouch for, clarifies difficult concepts like no other instructor and is key to our shared success.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-start space-x-3">
                                    <BookOpen className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">By-the-Book Method</h3>
                                        <p className="text-gray-600">Following DVSA standards for a complete and thorough learning experience.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Users className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Student-Vouched Success</h3>
                                        <p className="text-gray-600">My unique visual aids are proven to help students learn faster and more effectively.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Award className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Fully Qualified ADI</h3>
                                        <p className="text-gray-600">Committed to the highest standards of instruction and student safety.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding gradient-bg text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 p-8 rounded-2xl shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #4F46E5 100%)' }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Ready to Pass with Confidence?
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            My structured teaching method is designed for your success. Let's get you on the road.
                        </p>
                        <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                            Book Your First Lesson
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;