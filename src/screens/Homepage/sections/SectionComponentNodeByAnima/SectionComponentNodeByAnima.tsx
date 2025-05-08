import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  // Navigation links data
  const quickNavLinks = [
    "Home",
    "Services",
    "Portfolio",
    "Resources",
    "Contact",
    "Book a consultation",
  ];

  // Services links data
  const servicesLinks = [
    "Web Development",
    "Digital Strategy",
    "Branding & Design",
    "Media & Content",
    "Nexus CRM",
  ];

  // Social media icons data
  const socialIcons = [
    { src: "/frame-25.svg", active: true },
    { src: "/frame.svg", active: false },
    { src: "/frame-13.svg", active: false },
    { src: "/frame-7.svg", active: false },
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-12 py-16">
      <div className="flex items-start justify-center gap-[169px] relative self-stretch w-full flex-[0_0_auto]">
        {/* Company Info Column */}
        <div className="flex flex-col w-[353px] items-start gap-8 relative">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center h-[60px]">
              <div className="w-[60px] h-[60px] bg-[#188bf6] rounded-[30px] flex items-center justify-center">
                <div className="relative w-6 h-7">
                  <img
                    className="absolute w-6 h-[27px] top-px left-0"
                    alt="R"
                    src="/r.svg"
                  />
                  <div className="absolute w-0.5 h-[25px] top-0 left-1.5 bg-[#188bf6]" />
                </div>
              </div>
              <img
                className="ml-5 h-6"
                alt="Riviere group"
                src="/riviere-group.svg"
              />
            </div>

            <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Eget venenatis purus
              mauris pellentesque in. Metus pretium.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ${
                  icon.active
                    ? "bg-[#188bf6]"
                    : "bg-neutral-50 border border-solid border-[#efefef]"
                }`}
              >
                <img
                  className="w-6 h-6"
                  alt="Social media icon"
                  src={icon.src}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="flex w-[758px] items-start justify-between relative">
          {/* Quick Navigation Column */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px]">
              Quick Navigation
            </h3>

            {quickNavLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px]">
              Services
            </h3>

            {servicesLinks.map((service, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]"
              >
                {service}
              </a>
            ))}
          </div>

          {/* Company Information Column */}
          <div className="flex flex-col items-start gap-5">
            <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px]">
              Company Information
            </h3>

            <div className="flex items-center gap-2">
              <MailIcon className="w-6 h-6" />
              <span className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]">
                info@rivieregroup.com
              </span>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="w-6 h-6" />
              <span className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]">
                123-456-XXX
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPinIcon className="w-6 h-6" />
              <span className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]">
                123 Anywhere St., USA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
        <img
          className="w-full h-px object-cover"
          alt="Divider line"
          src="/line-1.svg"
        />

        <div className="flex items-center justify-between self-stretch w-full">
          <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]">
            Copyright © 2025 Riviere Group. All rights reserved.
          </p>

          <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px]">
            Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms &amp; Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};
