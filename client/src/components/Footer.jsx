function Footer() {
  return (
    <>
      <div className='bg-[#f7f7f7] rounded-t-[3rem] px-[4vw] py-[4vh] mt-[5vh]'>
        <div className='flex flex-row justify-center md:justify-between'>

          <div className='flex flex-col gap-[1.5vh]'>
            <img src='/logo.svg' className="h-[8vh] md:w-[12vw] md:h-auto"></img>
            <p className="font-medium text-center md:text-left">Connoisseurs in the aloo-pyaj industry</p>
            <ul className="flex flex-row  gap-2 mx-auto md:mx-0">
              <li><img src="/SocialMedia/Facebook.svg" className="h-[3vh]"></img></li>
              <li><img src="/SocialMedia/Instagram.svg" className="h-[3vh]"></img></li>
              <li><img src="/SocialMedia/LinkedIn.svg" className="h-[3vh]"></img></li>
              <li><img src="/SocialMedia/Twitter.svg" className="h-[3vh]"></img></li>
              <li><img src="/SocialMedia/YouTube.svg" className="h-[3vh]"></img></li>
            </ul>
          </div>

          <div className="hidden md:flex md:flex-row align-center items-start gap-5 my-auto">
            <p className="font-bold text-[#54b22c]">Contact Us</p>
            <span className="flex flex-row gap-2">
              <span>
                <img src="/Contacts/Email.svg"></img>
              </span>
              <span>rhythm.juneja@somaiya.com</span>
            </span>
            <span className="flex flex-row gap-2">
              <span>
                <img src="/Contacts/Phone.svg"></img>
              </span>
              <span>1-800-9625-45274</span>
            </span>
            <span className="flex flex-row gap-2">
              <span>
                <img src="/Contacts/Mark.svg"></img>
              </span>
              <span>KJSCE, Somaiya Vidyavihaar University,<br></br>Mumbai, 400067</span>
            </span>
          </div>
        </div>
         
          <div>
            <hr className="border-[0.25vh] border-[#888888] w-[90%] mx-auto my-[4vh]"></hr>
          <p className='copyrightContainer'>
          <div className="flex flex-row justify-between">
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
