"use client";

import WhatsappMessageTab from "@/components/Whatsapp";

const PartnerPortal = () => {
  return (
    <div className=" w-full bg-[#37445a] h-[96px]  text-center  justify-center items-center text-white text-sm sm:text-base md:text-xl lg:text-2xl gap-2 md:gap-5 flex flex-col md:flex-row  px-10">
      Want to become an Own Branding Portal Partner?
      <WhatsappMessageTab className="px-6 bg-green-600 rounded-full py-1 md:py-2 text-base hover:scale-110 shadow-2xl transform duration-150 ">
        {" "}
        <div>Contact Us</div>
      </WhatsappMessageTab>
      {/* <div className="px-6 bg-green-600 rounded-full py-1 md:py-2 text-base hover:scale-110 shadow-2xl transform duration-150 hidden lg:block">
          Register
        </div> */}
    </div>
  );
};

export default PartnerPortal;
