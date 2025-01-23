import React from "react";
import PropTypes from 'prop-types';
import icon from "../assets/images/promote/icon.png";
import woodTexture from "../assets/images/promote/wood-texture.png";

function Background() {
  return (
    <div className="absolute inset-0 opacity-10 overflow-hidden">
      <img src={woodTexture} alt="Wood Texture" className="rotate-90" />
    </div>
  );
}

function Section({ children, className }) {
  return (
    <div className={`relative bg-[#AB6029] ${className}`}>
      {/* <Background /> */}
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function Promote() {
  return (
    <div className="grid place-items-center h-full w-full px-4 my-10">
      <div className="hidden md:grid relative w-full grid-cols-5">
        <Section className="rounded-l-xl" />
        <Section className="col-span-3 flex items-center justify-center text-center">
          <div className="space-y-4 py-6">
            <h1 className="text-2xl md:text-3xl text-white font-medium">
              Tunggu apalagi, Yuk hubungi kami sekarang!
            </h1>
            <button className="bg-[#FD9F59] text-white font-medium rounded-full px-6 py-2">
              Hubungi Kami
            </button>
          </div>
        </Section>
        <Section className="rounded-r-xl">
          <div className="flex items-center justify-center relative">
            <img
              src={icon}
              alt="Box icon"
              className="absolute md:-bottom-48 md:-left-6 lg:-bottom-40 lg:-left-10 w-64 h-64 object-cover"
            />
          </div>
        </Section>
      </div>

      <div className="block md:hidden relative w-full">
        <Section className="rounded-xl flex flex-col items-center text-center py-6">
          <h1 className="text-xl text-white font-medium">
            Tunggu apalagi, Yuk hubungi kami sekarang!
          </h1>
          <button className="bg-[#FD9F59] text-white font-medium rounded-full px-6 py-2 mt-4">
            Hubungi Kami
          </button>
        </Section>
      </div>
    </div>
  );
}

export default Promote;
