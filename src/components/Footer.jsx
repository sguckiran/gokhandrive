import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
    return <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center justify-center" style={{marginBottom: 0, paddingBottom: 0}}>
                        <img src={logo} alt="GokhanDrive Logo" className="h-[120px] md:h-[140px] w-auto object-contain" style={{maxWidth: '200px', marginBottom: 0, paddingBottom: 0}} />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
            <span className="text-lg font-semibold" style={{
                fontFamily: 'Montserrat'
            }}>
              Quick Links
            </span>
                    <nav className="flex flex-col space-y-2">
                        <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors duration-200">
                            About Us
                        </Link>
                        <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
            <span className="text-lg font-semibold" style={{
                fontFamily: 'Montserrat'
            }}>
              Get In Touch
            </span>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-blue-400" />
                            <a href="tel:+447799210141" className="text-gray-300 hover:underline">+44 7799210141</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-blue-400" />
                            <a href="mailto:info@gokhandrive.co.uk" className="text-gray-300 hover:underline">info@gokhandrive.co.uk</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-blue-400" />
                            <span className="text-gray-300">Enfield / Wood Green / Tottenham</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400">© 2025 <a href='https://www.sudolondon.com'>Sudo London</a>. All rights reserved.</p>
            </div>
        </div>
    </footer>;
};
export default Footer;