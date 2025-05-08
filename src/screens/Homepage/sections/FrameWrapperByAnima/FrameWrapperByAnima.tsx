import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      title: "Project name here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet viverra nec feugiat viverra. Montes fringilla mi euismod lobortis mauris.",
      category: "Website Design",
      imageSrc: "/img/original-040026fc01b4cf8e4388e447f3f7bf5b.webp",
    },
    {
      id: 2,
      title: "Project name here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet viverra nec feugiat viverra. Montes fringilla mi euismod lobortis mauris.",
      category: "Website Development",
      imageSrc: "/img/original-040026fc01b4cf8e4388e447f3f7bf5b.webp",
    },
    {
      id: 3,
      title: "Project name here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet viverra nec feugiat viverra. Montes fringilla mi euismod lobortis mauris.",
      category: "Branding",
      imageSrc: "/img/original-a08573af4efe10c3bc9d5787c4391657.webp",
    },
    {
      id: 4,
      title: "Project name here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet viverra nec feugiat viverra. Montes fringilla mi euismod lobortis mauris.",
      category: "Music Production",
      imageSrc: "/img/original-8be08a71893a2a34cfacbc5d934f7312.webp",
    },
  ];

  return (
    <section className="w-full py-28 bg-neutral-50">
      <div className="flex flex-col max-w-[1280px] mx-auto items-center gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-bold text-5xl text-center leading-[56px] font-['Montserrat',Helvetica] text-black">
            See how we&apos;ve helped brands grow
          </h2>
          <p className="text-lg text-center leading-[26px] font-['Poppins',Helvetica] text-[#2f2f2f] font-normal">
            Real results from real partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="w-full h-[692px] rounded-[32px] overflow-hidden bg-white"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-8 p-8">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <div className="flex flex-col items-start gap-4 w-full">
                      <h3 className="font-bold text-[32px] leading-10 font-['Montserrat',Helvetica] text-black">
                        {project.title}
                      </h3>
                      <p className="font-normal text-lg leading-[26px] font-['Poppins',Helvetica] text-[#2f2f2f]">
                        {project.description}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="px-6 py-2.5 bg-neutral-50 rounded-xl border border-[#dddddd] font-normal text-base leading-6 font-['Poppins',Helvetica] text-[#2f2f2f]"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="w-full h-[420px] bg-neutral-50 rounded-3xl overflow-hidden">
                    <img
                      src={project.imageSrc}
                      className="w-full h-full object-cover"
                      alt="Project image"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <Button
          variant="outline"
          className="px-8 py-4 rounded-xl border border-[#188bf6] text-[#188bf6] font-semibold text-lg leading-[26px] font-['Poppins',Helvetica]"
        >
          View all projects
        </Button>
      </div>
    </section>
  );
};
