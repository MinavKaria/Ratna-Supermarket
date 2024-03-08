
function Footer() {
  return (
    <>
      <div className="w-full bg-slate-200 p-4 shadow-md mt-10 px-10">
      <div className="flex flex-row gap-[5vw] container justify-start items-center mx-auto ">
        <div className="flex flex-col gap-2 items-start justify-items-start w-full">
            <p className="text-1xl">Download GMart ready for Mobile App Now!!</p>
    
            <div className="flex gap-4">
                <img className="h-16 flex -m-2" src="./gpp.png" alt="Google Play Logo"/>
                <img className="h-11 my-auto" src="./gpp4.png" alt="App Store Logo"/>
            </div>
    
            <div className="flex space-x-4">
                <img src="visa_gpp.png" className="h-4"/>
                <img src="rupay_gpp.png" className="h-5"/>
                <img src="mastercard1_gpp.png" className="h-6"/>
                <img src="rupee_gpp.png" className="h-5"/>
            </div>
        </div>
        <div className=" flex w-full justify-end gap-3">
          <div className="flex flex-col gap-[0vh] w-48">
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Pricing, Delivery, Return </p>
              <p>Refund Policy</p>
              <p>Terms and Conditions</p>
          </div>

          <div className="flex flex-col gap-[0vh]">
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Pickup Points</p>
              <p>Disclaimer</p>
          </div>
        </div>
    </div>

    <hr className="w-full border-[0.03vh] border-[#000000] mx-auto my-[2vh]"/>
    <div className="text-center">&copy; 2024 Avenue E-Commerce Limited(AEL) All Rights Reserved.</div>
  </div>
    </>
  )
}

export default Footer