import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="px-4 sm:px-20 xl:p-32 relative flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
            Transform your ideas into reality with <br />
            <span className="text-primary">AI tools</span>
          </h1>

          <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
            AI at the core of innovation, driving progress beyond imagination.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
          <button
            onClick={() => navigate("/ai")}
            className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition"
          >
            Start creating now
          </button>

          <button
            onClick={() => setOpen(true)}
            className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition"
          >
            Watch demo
          </button>
        </div>

        {/* Trusted */}
        <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
          <img src={assets.user_group} alt="users" className="h-8" />
          Trusted by 10k+ people
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div
            className="relative z-50 w-[95%] max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-[60] w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center hover:scale-110 transition"
            >
              ✕
            </button>

            {/* Video */}
            <video
              src="/demo.mp4"
              autoPlay
              controls
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;


