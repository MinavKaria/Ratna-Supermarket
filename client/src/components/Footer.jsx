function Footer() {
  return (
    <>
      <div className='bg-[#f7f7f7] rounded-t-[3rem] px-[4vw] py-[4vh] mt-[5vh]'>
        <div className='flex flex-row justify-center md:justify-between container mx-auto'>

          <div className='flex flex-col gap-[1.5vh]'>
            <img src='/logo.svg' className="h-[8vh] md:w-[12vw] md:h-auto"></img>
            <p className="font-medium text-center md:text-left">Connoisseurs in the aloo-pyaj industry</p>
            <ul className="flex flex-row gap-3.5 mx-auto md:mx-0">
              <li>
                <svg
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer text-blue-600"
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                >
                  <path d="M7.27274 19.026V10.861H10.1513L10.5823 7.67887H7.27265V5.64725C7.27265 4.72596 7.54133 4.09816 8.92902 4.09816L10.6988 4.09737V1.25135C10.3927 1.21264 9.34208 1.12598 8.11992 1.12598C5.56816 1.12598 3.82117 2.60887 3.82117 5.3322V7.67887H0.935181V10.861H3.82117V19.0259H7.27274V19.026Z" fill="currentColor" />
                </svg>
              </li>

              <li>
                <svg
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer text-pink-600"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.43335 10.076C1.43335 6.50081 1.43335 4.71323 2.28528 3.42568C2.66571 2.85073 3.1581 2.35834 3.73305 1.97791C5.0206 1.12598 6.80818 1.12598 10.3834 1.12598C13.9585 1.12598 15.7461 1.12598 17.0336 1.97791C17.6086 2.35834 18.101 2.85073 18.4814 3.42568C19.3334 4.71323 19.3334 6.50081 19.3334 10.076C19.3334 13.6511 19.3334 15.4387 18.4814 16.7263C18.101 17.3012 17.6086 17.7936 17.0336 18.174C15.7461 19.026 13.9585 19.026 10.3834 19.026C6.80818 19.026 5.0206 19.026 3.73305 18.174C3.1581 17.7936 2.66571 17.3012 2.28528 16.7263C1.43335 15.4387 1.43335 13.6511 1.43335 10.076ZM15.0166 10.076C15.0166 12.635 12.9421 14.7095 10.383 14.7095C7.82401 14.7095 5.74951 12.635 5.74951 10.076C5.74951 7.517 7.82401 5.4425 10.383 5.4425C12.9421 5.4425 15.0166 7.517 15.0166 10.076ZM10.383 13.1419C12.0763 13.1419 13.4489 11.7693 13.4489 10.076C13.4489 8.38279 12.0763 7.01015 10.383 7.01015C8.6898 7.01015 7.31716 8.38279 7.31716 10.076C7.31716 11.7693 8.6898 13.1419 10.383 13.1419ZM15.1996 6.2988C15.8009 6.2988 16.2883 5.81135 16.2883 5.21005C16.2883 4.60876 15.8009 4.12131 15.1996 4.12131C14.5983 4.12131 14.1109 4.60876 14.1109 5.21005C14.1109 5.81135 14.5983 6.2988 15.1996 6.2988Z" fill="currentColor" />
                </svg>
              </li>
              <li>
                <svg
                  className="h-[3vh] hover:scale-125 hover:brightness-100 transition-transform duration-500 ease-in-out cursor-pointer text-blue-400"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="currentColor"
                >
                  <path d="M1.20569 3.02862C1.20569 2.45461 1.40727 1.98107 1.81042 1.60798C2.21357 1.23488 2.73768 1.04834 3.38272 1.04834C4.01625 1.04834 4.52882 1.23201 4.92046 1.59937C5.3236 1.97821 5.52519 2.47183 5.52519 3.08028C5.52519 3.63131 5.32938 4.0905 4.93773 4.45786C4.53459 4.8367 4.00472 5.02612 3.34816 5.02612H3.33088C2.69735 5.02612 2.18478 4.8367 1.79314 4.45786C1.4015 4.07903 1.20569 3.60261 1.20569 3.02862ZM1.4303 18.096V6.59312H5.26602V18.096H1.4303ZM7.39121 18.096H11.2269V11.673C11.2269 11.2712 11.273 10.9612 11.3651 10.7431C11.5264 10.3528 11.7712 10.0227 12.0995 9.75295C12.4277 9.48317 12.8395 9.34829 13.3348 9.34829C14.6249 9.34829 15.27 10.215 15.27 11.9485V18.096H19.1057V11.5008C19.1057 9.80174 18.7025 8.51313 17.8962 7.63492C17.0899 6.75671 16.0245 6.3176 14.6998 6.3176C13.2139 6.3176 12.0563 6.95474 11.2269 8.229V8.26344H11.2096L11.2269 8.229V6.59312H7.39121C7.41424 6.96047 7.42577 8.10271 7.42577 10.0199C7.42577 11.937 7.41424 14.629 7.39121 18.096Z" fill="currentColor" />
                </svg>
              </li>

              <li>
                <svg
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer text-black"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.3 5.71L12 12 5.71 5.71 4.29 7.12 11.59 12 4.29 18.3 5.71 19.71 12 13.41l6.3 6.3 1.41-1.41L13.41 12l6.3-6.3z" />
                </svg>
              </li>


              <li>
                <svg
                  className="h-[3vh] hover:scale-125 hover:brightness-150 transition-transform duration-500 ease-in-out cursor-pointer text-red-600"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 15V9l6 3-6 3zm6-10H8C4.69 5 2 7.69 2 11v2c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6v-2c0-3.31-2.69-6-6-6z" />
                </svg>
              </li>

            </ul>

          </div>

          <div className="hidden md:flex md:flex-row align-center items-start gap-5 my-auto">
            <p className="font-bold text-[#54b22c]">Contact Us</p>
            <span className="flex flex-row gap-2">
              <span>
                <img
                  src="/Contacts/Email.svg"
                  className="hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Email"
                />
              </span>
              <span>support@ratna.in</span>
            </span>
            <span className="flex flex-row gap-2">
              <span>
                <img
                  src="/Contacts/Phone.svg"
                  className="hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Phone"
                />
              </span>
              <span>1-800-9625-45274</span>
            </span>
            <span className="flex flex-row gap-2">
              <span>
                <img
                  src="/Contacts/Mark.svg"
                  className="hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  alt="Location"
                />
              </span>
              <iframe
                title="Embedded Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5962359850614!2d72.94319517611865!3d19.169143449040085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b858889942c7%3A0x2cb3f6dc0b5bb3cc!2sRatna%20Supermarket!5e0!3m2!1sen!2sin!4v1711740147095!5m2!1sen!2sin"
                width="200"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </span>
          </div>
        </div>

        <div>
          <hr className="border-[0.25vh] border-[#888888] w-[90%] mx-auto my-[4vh]"></hr>
          <p className='copyrightContainer'>
            <div className="flex flex-row justify-between container mx-auto">
              <span>&copy; Copyright 2024 - Brutally Productions.</span>
              <span className="hidden md:block">All rights reserved. For more information on our Terms and Conditions Click Here</span>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
