import Social from "@/components/ui/Social";
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaShareAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="bg-[#000000e6] p-7 w-full max-w-lg sm:max-w-lg lg:max-w-2xl">
      <p className="text-2xl sm:text-4xl text-white capitalize font-extrabold border-b-2 border-accent w-fit">
        CONTACT ME
      </p>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6">
          <div className="flex items-center gap-2 p-4 bg-[#302e2e85] rounded-md">
            <div className="rounded-full bg-[#7dd3fc33] p-4">
              <FaMapMarkerAlt size={24} color="#7dd3fc" title="Location" />
            </div>
            <div>
              <h2 className="text-white font-semibold">My Address</h2>
              <p className="text-gray-300 text-sm">
                Saeedabad Baldia Town Karachi, Pakistan
              </p>
            </div>
          </div>
  
          <div className="flex items-center gap-2 p-4 bg-[#302e2e85] rounded-md">
            <div className="rounded-full bg-[#7dd3fc33] p-4">
              <FaPhone size={24} color="#7dd3fc" title="Call" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Call Me</h2>
              <p className="text-gray-300 text-sm">+923222545319</p>
            </div>
          </div>
  
          <div className="flex items-center gap-2 p-4 bg-[#302e2e85] rounded-md">
            <div className="rounded-full bg-[#7dd3fc33] p-4">
              <FaEnvelope size={24} color="#7dd3fc" title="Email" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Email Me</h2>
              <p className="text-gray-300 text-sm">sumairadev12@gmail.com</p>
            </div>
          </div>
  
          <div className="flex items-center gap-2 p-4 bg-[#302e2e85] rounded-md">
            <div className="rounded-full bg-[#7dd3fc33] p-4">
              <FaShareAlt size={26} color="#7dd3fc" title="Share this content" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Social Profiles</h2>
              <Social
                containerStyle="flex gap-4"
                iconStyles="w-7 h-7 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Contact;
