import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, BookOpen, Users } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: Award,
            title: 'Proven Pass Rate',
            description: 'A history of multiple students passing their test.',
        },
        {
            icon: BookOpen,
            title: 'By-the-Book Method',
            description: 'Structured lessons using proven teaching aids.',
        },
        {
            icon: Users,
            title: 'Student Recommended',
            description: 'Unique teaching style students vouch for.',
        },
    ];

    const services = [
        'Manual & refresher lessons',
        'Motorway tuition',
        'Mock driving tests',
        'Structured lesson plans',
        'Pass Plus courses',
        'Intensive courses available',
    ];

    return (
        <>
            <Helmet>
                <title>GokhanDrive — Expert Driving Instructor</title>
                <meta
                    name="description"
                    content="Qualified ADI instructor offering by-the-book driving lessons to help you pass with confidence."
                />
                <meta
                    name="keywords"
                    content="driving instructor, ADI instructor, learner driver UK, by the book driving lessons"
                />
            </Helmet>

            {/* Hero Section */}
            <section className="gradient-bg text-white section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shadow">
                                Expert ADI Driving Instructor
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100">
                                Pass first time with GokhanDrive today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="btn-primary text-center">
                                    Contact Me
                                </Link>
                                <Link
                                    to="/about-us"
                                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-center"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <img
                                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                                    alt="driving instructor and learner driving, inside car, modern lighting, professional feel"
                                    src="https://images.unsplash.com/photo-1570867613871-b3cc92b94065"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-full h-full bg-white/20 rounded-2xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                className="rounded-2xl shadow-xl w-full h-96 object-cover object-top"
                                alt="professional portrait of instructor, clean background, car nearby"
                                src="https://horizons-cdn.hostinger.com/16a889be-b95e-4aa9-ab10-6540bb69ca08/548744017_10163239812194116_1095121729930392809_n-qODhE.jpg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Why Choose GokhanDrive?
                            </h2>
                            <p className="text-lg text-gray-600">
                                As a qualified ADI with a proven record of student success, I offer a unique, 'by-the-book' teaching style that builds confidence and ensures you are test-ready.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Structured, by-the-book teaching',
                                    'Unique visual aids for complex junctions',
                                    'Proven track record of first-time passes',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                        <h3 className="font-semibold text-gray-800 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                What I Offer
                            </h2>
                            <p className="text-lg text-gray-600">
                                From your first lesson to passing your test, I provide a full range of services to make you a safe and confident driver for life.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                        <span className="text-gray-700">{service}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Link to="/contact" className="btn-primary inline-block">
                                Get Started Today
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                                alt="learner driver on motorway, instructor guiding, clean environment"
                                src="https://images.unsplash.com/photo-1650926888011-124cd4b28519"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="gradient-bg text-white section-padding">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Start Your Driving Journey?
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            My structured, by-the-book approach is designed to help you become a confident, safe driver and pass your test.
                        </p>
                        <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                            Contact Me Today
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};
export default Home;