import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: "/SocialMedia/Facebook.svg", alt: "Facebook" },
    { icon: "/SocialMedia/Instagram.svg", alt: "Instagram" },
    { icon: "/SocialMedia/LinkedIn.svg", alt: "LinkedIn" },
    { icon: "/SocialMedia/Twitter.svg", alt: "Twitter" },
    { icon: "/SocialMedia/YouTube.svg", alt: "YouTube" }
  ];

  const contactInfo = [
  {
    icon: "/Contacts/Email.svg",
    text: "support@ratna.in",
    alt: "Email",
    link: "mailto:support@ratna.in", // Mailto link for email
  },
  {
    icon: "/Contacts/Phone.svg",
    text: "1-800-9625-45274",
    alt: "Phone",
    link: "tel:1800962545274", // Tel link for phone number
  },
];

  return (
    <footer className="bg-gray-50 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Social Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <img 
              src="/logo.svg" 
              className="h-16 md:h-20 w-auto"
              alt="Company Logo"
            />
            
            <p className="text-gray-600 font-medium text-center md:text-left">
              Connoisseurs in the aloo-pyaj industry
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.alt}
                  className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300 group"
                >
                  <img 
                    src={social.icon}
                    className="h-5 w-5 group-hover:scale-110 transition-transform"
                    alt={social.alt}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="hidden md:flex flex-col space-y-6">
            <h3 className="text-green-600 font-bold text-lg">Contact Us</h3>
            
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.alt} className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <img 
                    src={contact.icon}
                    className="h-5 w-5"
                    alt={contact.alt}
                  />
                </div>
                <a
                  href={contact.link}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {contact.text}
                </a>
              </div>              
              ))}
              
              {/* Location Map */}
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <img 
                      src="/Contacts/Mark.svg"
                      className="h-5 w-5"
                      alt="Location"
                    />
                  </div>
                  <span className="text-gray-600">Our Location</span>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    title="Embedded Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5962359850614!2d72.94319517611865!3d19.169143449040085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b858889942c7%3A0x2cb3f6dc0b5bb3cc!2sRatna%20Supermarket!5e0!3m2!1sen!2sin!4v1711740147095!5m2!1sen!2sin"
                    className="w-full h-48"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; Copyright 2024 - Brutally Productions.
            </p>
            <p className="text-sm text-gray-500 hidden md:block">
              All rights reserved. 
              <button className="text-green-600 hover:text-green-700 ml-1 underline">
                Click Here
              </button> for Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;