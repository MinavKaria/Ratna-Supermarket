import { useState } from "react";
import { motion } from 'framer-motion';

function Footer() {
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation for security
    if (!mail || !subject || !message) {
      setError("All fields are required, including the rating.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, subject, message }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setMail("");
        setSubject("");
        setMessage("");
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setError("An error occurred while sending Mail...");
      console.error("Mail sending failed : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#f7f7f7] rounded-t-[3rem] px-[4vw] py-[4vh] mt-[5vh]">
        <div className="flex flex-row justify-center md:justify-between container mx-auto">
          <div className="flex flex-col gap-[1.5vh]">
            <img
              src="/logo.svg"
              className="h-[8vh] md:w-[12vw] md:h-auto"
            ></img>
            <p className="font-medium text-center md:text-left">
              Connoisseurs in the aloo-pyaj industry
            </p>
            <ul className="flex flex-row gap-2 mx-auto md:mx-0">
              <li>
                <img
                  src="/SocialMedia/Facebook.svg"
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Facebook"
                />
              </li>
              <li>
                <img
                  src="/SocialMedia/Instagram.svg"
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Instagram"
                />
              </li>
              <li>
                <img
                  src="/SocialMedia/LinkedIn.svg"
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="LinkedIn"
                />
              </li>
              <li>
                <img
                  src="/SocialMedia/Twitter.svg"
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Twitter"
                />
              </li>
              <li>
                <img
                  src="/SocialMedia/YouTube.svg"
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="YouTube"
                />
              </li>
            </ul>
          </div>

          <div className="w-8/12 hidden md:flex md:flex-row justify-between items-start gap-8 my-auto bg-slate-100 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div>
                {/* Contact Information */}
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-[#54b22c] text-lg">Contact Us</p>

                  {/* Phone Contact */}
                  <div className="flex justify-between items-center gap-3">
                    <img
                      src="/Contacts/Phone.svg"
                      className="h-6 w-6 hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                      alt="Phone"
                    />
                    <span className="text-gray-700">1-800-9625-45274</span>

                    {/* Location Marker */}
                    <img
                      src="/Contacts/Mark.svg"
                      className="h-6 w-6 ml-10 hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                      alt="Location"
                    />
                    <span className="text-gray-700">
                      Ratna Supermarket, Location
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center p-4 rounded-md shadow-md font-semibold w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="mail"
                      id="mail"
                      value={mail}
                      placeholder="you@gmail.com"
                      onChange={(e) => setMail(e.target.value)}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="text"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43]"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      placeholder="Write your message..."
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#004D43] focus:border-[#004D43] resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#54b22c] hover:bg-[#19a116] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D43]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Mail"}
                    </button>
                  </div>
                </form>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, display: "none", height: 0 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      display: "block",
                      height: "auto",
                    }}
                    className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded"
                  >
                    Thank you, We will reply you soon...
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded"
                  >
                    {error}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Google Map & Form */}
            <div className="relative w-80 mt-16 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Embedded Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5962359850614!2d72.94319517611865!3d19.169143449040085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b858889942c7%3A0x2cb3f6dc0b5bb3cc!2sRatna%20Supermarket!5e0!3m2!1sen!2sin!4v1711740147095!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <hr className="border-[0.25vh] border-[#888888] w-[90%] mx-auto my-[4vh]"></hr>
          <p className="copyrightContainer">
            <div className="flex flex-row justify-between container mx-auto">
              <span>&copy; Copyright 2024 - Brutally Productions.</span>
              <span className="hidden md:block">
                All rights reserved. For more information on our Terms and
                Conditions Click Here
              </span>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
