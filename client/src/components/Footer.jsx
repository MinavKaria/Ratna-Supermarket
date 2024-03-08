
function Footer() {
  return (
    <>
      <div className="w-full bg-slate-200 p-4 shadow-md mt-10">
      <div class="flex flex-row gap-[5vw] container justify-start items-center mx-auto ">
        <div class="flex flex-col gap-2">
            <p class="text-1xl">Download GMart ready for Mobile App Now!!</p>
    
            <div class="flex gap-4">
                <img class="h-16" src="./gpp.png" alt="Google Play Logo"/>
                <img class="h-11 my-auto" src="./gpp4.png" alt="App Store Logo"/>
            </div>
    
            <div class="flex space-x-4">
                <img src="visa_gpp.png" class="h-4"/>
                <img src="rupay_gpp.png" class="h-5"/>
                <img src="mastercard1_gpp.png" class="h-6"/>
                <img src="rupee_gpp.png" class="h-5"/>
            </div>
        </div>
        <div class="flex flex-col gap-[0vh]">
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Pricing, Delivery, Return and Refund Policy</p>
            <p>Terms and Conditions</p>
        </div>

        <div class="flex flex-col gap-[0vh]">
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Pickup Points</p>
            <p>Disclaimer</p>
        </div>
    </div>

    <hr class="w-[90%] border-[0.03vh] border-[#000000] mx-auto my-[2vh]"/>
    <div class="text-center">&copy; 2024 Avenue E-Commerce Limited(AEL) All Rights Reserved.</div>
  </div>
    </>
  )
}

export default Footer