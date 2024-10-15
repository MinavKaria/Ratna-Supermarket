import React from 'react';

// Define the social media and contact details dynamically
const socialMediaLinks = [
  { name: 'Facebook', src: '/SocialMedia/Facebook.svg', url: 'https://www.facebook.com' },
  { name: 'Instagram', src: '/SocialMedia/Instagram.svg', url: 'https://www.instagram.com' },
  { name: 'LinkedIn', src: '/SocialMedia/LinkedIn.svg', url: 'https://www.linkedin.com' },
  { name: 'Twitter', src: '/SocialMedia/Twitter.svg', url: 'https://www.twitter.com' },
  { name: 'YouTube', src: '/SocialMedia/YouTube.svg', url: 'https://www.youtube.com' }
];

const contactDetails = [
  { iconSrc: '/Contacts/Email.svg', value: 'support@ratna.in', type: 'email' },
  { iconSrc: '/Contacts/Phone.svg', value: '1-800-9625-45274', type: 'phone' },
  { iconSrc: '/Contacts/Mark.svg', value: 'Ratna Supermarket, Mumbai, India', type: 'location', mapUrl: 'https://www.google.com/maps/embed?...' }
];

function Footer() {
  return (
    <>
      <div className='bg-[#f7f7f7] rounded-t-[3rem] px-[4vw] py-[4vh] mt-[5vh]'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between container mx-auto'>
          {/* Left section */}
          <div className='flex flex-col gap-[1.5vh]'>
            <img src='/logo.svg' className="h-[8vh] md:w-[12vw] md:h-auto" alt="Logo" />
            <p className="font-medium text-center md:text-left">Connoisseurs in the aloo-pyaj industry</p>

            {/* Dynamic Social Media Links */}
            <ul className="flex flex-row gap-2 mx-auto md:mx-0">
              {socialMediaLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => window.open(link.url, '_blank')}>
                    <img
                      src={link.src}
                      className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                      alt={link.name}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section (Contact) */}
          <div className="hidden md:flex md:flex-row items-start gap-5 my-auto">
            <p className="font-bold text-[#54b22c]">Contact Us</p>

            {/* Dynamic Contact Details */}
            {contactDetails.map((contact, index) => (
              <span className="flex flex-row gap-2" key={index}>
                <img
                  src={contact.iconSrc}
                  className="hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt={contact.type}
                />
                {contact.type === 'location' ? (
                  <iframe
                    title="Embedded Google Map"
                    src={contact.mapUrl}
                    width="200"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <span>{contact.value}</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <hr className="border-[0.25vh] border-[#888888] w-[90%] mx-auto my-[4vh]" />
          <div className="flex flex-col md:flex-row justify-between container mx-auto">
            <span>&copy; Copyright 2024 - Brutally Productions.</span>
            <span className="hidden md:block">All rights reserved. For more information on our Terms and Conditions <a href="/terms" className="text-[#54b22c]">Click Here</a></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
