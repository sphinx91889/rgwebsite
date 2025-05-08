import { Button } from "../../../../components/ui/button";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";

export const HeroSectionByAnima = (): JSX.Element => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Static images for display
  const rightColumnImages = [
    {
      src: "/img/handshaking-2025-02-21-05-22-49-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/happy-man-holding-champagne-flute-at-restaurant-ta-2024-10-18-05-07-32-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/smiling-biracial-businesswoman-sitting-at-desk-mak-2025-04-05-03-12-25-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/portrait-of-young-man-having-drink-in-restaurant-2024-10-11-11-55-54-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/handshaking-2025-02-21-05-22-49-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/happy-man-holding-champagne-flute-at-restaurant-ta-2024-10-18-05-07-32-utc.jpg",
      height: "340px",
    },
  ];

  const middleColumnImages = [
    {
      src: "/img/they-make-a-great-team-cropped-portrait-of-two-de-2025-04-06-11-32-45-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/startup-business-team-brainstorming-2025-02-11-01-37-04-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/teamwork-of-programmers-at-table-at-meeting-2025-03-06-03-26-48-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/multi-ethnic-team-collaborating-on-laptop-in-moder-2025-03-13-17-38-33-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/they-make-a-great-team-cropped-portrait-of-two-de-2025-04-06-11-32-45-utc.jpg",
      height: "340px",
    },
    {
      src: "/img/startup-business-team-brainstorming-2025-02-11-01-37-04-utc.jpg",
      height: "340px",
    },
  ];

  const avatars = [0, 8, 16, 24];

  const middleColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (middleColumnRef.current) {
        // For middle column (scrolling down)
        middleColumnRef.current.style.animation =
          "scrollDown 30s linear infinite";
      }
      if (rightColumnRef.current) {
        // For right column (scrolling up)
        rightColumnRef.current.style.animation = "scrollUp 30s linear infinite";
      }
    };

    // Start animation after component mounts
    setTimeout(animate, 100);

    // Cleanup function
    return () => {
      if (middleColumnRef.current) {
        middleColumnRef.current.style.animation = "";
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.animation = "";
      }
    };
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="relative w-full max-w-[1280px] mx-auto px-5 h-full">
          {/* Right Column - Scrolling up */}
          {/* Top blur effect */}
          <div className="absolute top-[100px] left-0 right-0 h-[120px] bg-gradient-to-b from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full overflow-hidden w-[270px]">
            <div
              ref={rightColumnRef}
              className="flex flex-col gap-4 relative"
              style={{ paddingTop: "120px" }}
            >
              {/* Triple the images for smoother looping */}
              {[
                ...rightColumnImages,
                ...rightColumnImages,
                ...rightColumnImages,
              ].map((image, index) => (
                <div
                  key={`right-img-${index}`}
                  className="w-full overflow-hidden rounded-2xl"
                  style={{ height: image.height }}
                >
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Scrolling down */}
          <div className="absolute right-[290px] top-0 h-full overflow-hidden w-[270px]">
            <div
              ref={middleColumnRef}
              className="flex flex-col gap-4 pt-[120px] relative"
            >
              {/* Triple the images for smoother looping */}
              {[
                ...middleColumnImages,
                ...middleColumnImages,
                ...middleColumnImages,
              ].map((image, index) => (
                <div
                  key={`middle-img-${index}`}
                  className="w-full overflow-hidden rounded-2xl"
                  style={{ height: image.height }}
                >
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Bottom blur effect */}
          <div className="absolute bottom-[-10px] left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white to-transparent z-10"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-66.666%);
          }
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(-66.666%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative w-full max-w-[1280px] mx-auto px-5">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <div className="bg-white py-11">
            <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div className="w-[60px] h-[60px] bg-[#188bf6] rounded-full flex items-center justify-center">
                  <div className="relative w-6 h-7">
                    <img
                      className="absolute w-6 h-[27px]"
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

              <div className="flex items-center gap-8">
                <nav className="flex items-center gap-8">
                  {menuItems.map((item, index) => (
                    <a
                      key={`menu-${index}`}
                      onClick={() => navigate(item.path)}
                      className="font-['Poppins'] font-normal text-black text-lg leading-[26px] cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <Button
                  className="bg-[#188bf6] text-white rounded-xl px-[26px] py-2.5 font-['Poppins'] font-semibold text-lg"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[565px] gap-10 mt-[208px] mb-20">
          <div className="flex flex-col gap-6">
            <h1 className="font-['Montserrat'] font-bold text-black text-[64px] leading-[72px]">
              Powerful digital experiences for brands ready to scale
            </h1>
            <p className="font-['Poppins'] font-normal text-[#2f2f2f] text-lg leading-[26px]">
              We combine creativity, strategy, and tech to help you grow fast
              and stand out.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <Button
                className="bg-[#188bf6] text-white rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
                onClick={() => navigate("/contact")}
              >
                Book a consultation
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#188bf6] border-[#188bf6] rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
                onClick={() => navigate("/portfolio")}
              >
                See our work
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-[140px] h-11">
                {avatars.map((left, index) => (
                  <Avatar
                    key={`avatar-${index}`}
                    className="absolute w-11 h-11 border-2 border-[#188bf6]"
                    style={{ left: `${left * 4.2}px` }}
                  >
                    <AvatarImage
                      src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                      alt={`User ${index + 1}`}
                    />
                  </Avatar>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex h-5 items-center">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={`star-${index}`}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-['Poppins'] font-normal text-black text-sm leading-[16px]">
                  7.2k+ satisfied customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
