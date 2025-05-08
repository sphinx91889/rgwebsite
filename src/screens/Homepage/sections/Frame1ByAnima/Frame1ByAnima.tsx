import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame1ByAnima = (): JSX.Element => {
  // Data for achievement cards
  const achievementCards = [
    {
      id: 1,
      image: {
        src: "/img/0_big.webp",
        alt: "RIAA Gold Certified",
        className: "w-[72px] h-[72px] rounded-md",
      },
      title: "🥇 RIAA Gold Certified",
      description:
        "Recognized for industry-leading music production and sound engineering.",
    },
    {
      id: 2,
      image: {
        src: "/img/unnamed.png",
        alt: "Award-Winning Graphic Design",
        className: "w-36 rounded-md",
      },
      title: "Award-Winning Graphic Design",
      description: "Creative recognized by design publications and peers.",
    },
    {
      id: 3,
      image: {
        src: "/img/billboard-01-logo-png-transparent.png",
        alt: "Billboard Top Charted",
        className: "w-[199px] h-[53px] rounded-md",
      },
      title: "6× Billboard Top #1 Charted",
      description:
        "Trusted by artists and producers behind chart-topping hits.",
    },
  ];

  return (
    <section className="flex w-full max-w-[1280px] items-start justify-between mx-auto py-12">
      {achievementCards.map((card) => (
        <Card
          key={card.id}
          className="flex flex-col w-full max-w-[413px] border-none"
        >
          <CardContent className="flex flex-col items-center gap-8 p-6">
            <img
              src={card.image.src}
              className={`object-cover ${card.image.className}`}
              alt={card.image.alt}
            />
            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-black text-[22px] text-center leading-[30px]">
                {card.title}
              </h3>
              <p className="w-full font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg text-center leading-[26px]">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
