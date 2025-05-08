import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface ComingSoonProps {
  title: string;
}

export const ComingSoon = ({ title }: ComingSoonProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-5">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md py-11">
            <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between">
              <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                <div className="w-[60px] h-[60px] bg-[#188bf6] rounded-full flex items-center justify-center">
                  <div className="relative w-6 h-7">
                    <img className="absolute w-6 h-[27px]" alt="R" src="/r.svg" />
                    <div className="absolute w-0.5 h-[25px] top-0 left-1.5 bg-[#188bf6]" />
                  </div>
                </div>
                <img className="ml-5 h-6" alt="Riviere group" src="/riviere-group.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-8 mt-[200px]">
          <h1 className="font-['Montserrat'] font-bold text-black text-[64px] leading-[72px]">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#188bf6]"></div>
          <p className="font-['Poppins'] text-[#2f2f2f] text-xl max-w-[600px]">
            We're working on something amazing for this page. Check back soon to see our progress!
          </p>
          <div className="mt-8">
            <Button 
              className="bg-[#188bf6] text-white rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
